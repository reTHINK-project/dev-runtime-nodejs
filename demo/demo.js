import fs from 'fs';
import path from 'path';
let rethink = require('./RuntimeNode');
import express from 'express';
import minimist from'minimist';
import url from'url';
import https from 'https';
 // TODO: replace wswith Observer/Reporter communication model
import ws from 'ws';
import kurento from 'kurento-client';
import UserRegistry from './user-registry';
import UserSession from './user-session';
import peer from './peer';

/*
 * Definition of global variables.
 */
let participants = [];
//Table used to keep rooms
let rooms = {};
let candidatesQueue = {};
let kurentoClient = null;
let incomingMedia = {};
let userSession = null;
let userRegistry = new UserRegistry();
let argv = minimist(process.argv.slice(2),
{
  default:
  {
    // ws_uri: "ws://apizeekurentoKurentoLoadBalance-1906815936.eu-west-1.elb.amazonaws.com/kurento"
    ws_uri: "ws://hysmart.rethink.ptinovacao.pt:8888/kurento"
  }
});
let idCounter = 0;
let incomingcandidatesQueue = [];
let master = null;
let unicastDataObjects = {};
let pipeline = {};
let viewers = [];
let incomingEndpoint= new Array();
let PresenterMessage = 'No active Presenter. Try again later...';
let callHyperty;
let existingUserIds = {};
let newParticipantArrived = {};

/********************************************* room Registry *******************************************/




/*******************************************************************************************************/

let domain = 'localhost';
const hypertyURI = (domain, hyperty) => `https://catalogue.${domain}/.well-known/hyperty/${hyperty}`;

// Recover kurentoClient for the first time.
function getKurentoClient(callback) {
    if (kurentoClient !== null) {
        return callback(null, kurentoClient);
    }

    kurento(argv.ws_uri, function (error, _kurentoClient) {
        if (error) {
            console.log("Coult not find media server at address " + argv.ws_uri);
            return callback("Could not find media server at address" + argv.ws_uri
                    + ". Exiting with error " + error);
        }

        kurentoClient = _kurentoClient;
        callback(null, kurentoClient);
    });
}




let runtime = rethink.default.install({
  domain: domain,
  development: true
}).then((runtime) => {
  console.log('\n loading hyperty :'.green, hypertyURI(domain, 'ServerConference'));
  runtime.requireHyperty(hypertyURI(domain, 'ServerConference'))
    .then((ServerConference) => {

      console.log('NodeHyperty -->\n'.blue, ServerConference);
      callHyperty = ServerConference;

      init();
    }).catch((reason) => {
      console.log('Error:', reason);
    });
}).catch((e) => {
  console.error('aie !', e);
});

function init() {
  console.log('############################### start smart business app ###########################'.blue);
  if (callHyperty.instance !== null) {
    callHyperty.instance.onInvitation(function(controller, identity) {
      console.log(' ------------------------ On Invitation: -------------------------------'.green);
      onJoinRoom(controller, identity).then((user) => {
        changePeerInformation(controller.dataObjectObserver);
        console.log('------------------- onJoinRoom success! --------------- user :'.green, user.name);
        try {
          receiveVideoFrom(user, user, user.roomName, user.sdpOffer.sdp).then((sdpAnswer) => {
            let message = {
              id: 'receiveVideoAnswer',
              name: user.name,
              sdpAnswer: sdpAnswer
            };
          console.log('----------------- message sent Before-------------------------!'.red, unicastDataObjects);
            if(unicastDataObjects[user.name] !== null && unicastDataObjects[user.name] !== undefined) {
               console.log('----------------- message sent -------------------------!'.red, unicastDataObjects);
              unicastDataObjects[user.name].data.id = message;

              console.log('****************** sdpAnswer:'.yellow + sdpAnswer + '  from : '.yellow + message.name + '********* to : : '.yellow, message.name);
            } else {
              callHyperty.instance.sendMessage(user, data).then(function(unicastDataObject) {
                console.log('----------------- message sent -------------------------!'.red, unicastDataObject);
                unicastDataObjects[user.name] = unicastDataObject;
                console.log('----------------- unicastDataObjects-------------------------!'.red, unicastDataObjects);
              }).catch(function(reason) {
                console.error('Error has occured while sending sdpAnswer, reasonn : ', reason);
              });
            }
          });
        } catch(reason) {
          console.error('Error happened while getting sdp Offer from user :', reason);
        }

      }).catch((reason) => {
        console.error('Error has occured while sending sdpAnswer, reasonn : ', reason);
      });
    });
  } else {
    let msg = 'Error Occured while loading the hyperty, create a function called hypertyLoaded';
    console.log(msg);
    notification(msg, 'warn');
  }
}

function changePeerInformation(dataObjectObserver) {
  let _this = this;
  let data = dataObjectObserver.data;
  // let isOwner = data.hasOwnProperty('ownerPeer');
  //  console.log('isOwner:',isOwner);
  // let peerData = isOwner ? data.ownerPeer : data.Peer;
     // New model
    let peerData = dataObjectObserver.data;

  console.log('Peer Data:', JSON.stringify(peerData));

   if(peerData !== 'undefined') {
    if (peerData.hasOwnProperty('connectionDescription')) {
       processPeerInformation(peerData.connectionDescription);
     }

    if (peerData.hasOwnProperty('iceCandidates')) {
      console.log('Process Peer data iceCandidates: ', peerData);
      peerData.iceCandidates.forEach(function(ice) {
          processPeerInformation(ice);
       });
     }

     dataObjectObserver.onChange('*', function(event) {
       console.log('Observer on change message: '.green, event);
      processPeerInformation(event.data);
    });
  }
}

function processPeerInformation(data) {
  let _this = this;
  console.log('data is :'.red, data);

  if(data.id  === 'receiveVideoFrom') {
    console.log('User:' .yellow + data.userName + ' is Asking to recieve video from :'.yellow + data.senderName);
    console.log('receiveVideoFrom is :'.red, data)
    let receiver = userRegistry.getByName(data.userName);
    let sender = userRegistry.getByName(data.senderName);
    console.log('receiver is :'.red, receiver, 'sender is :'.yellow, sender);

    receiveVideoFrom(receiver, sender, receiver.roomName, data.sdpOffer).then((sdpAnswer) => {
      let message = {
        id: 'receiveVideoAnswer',
        name: sender.name,
        sdpAnswer: sdpAnswer
      };

      if(unicastDataObjects[receiver.name] !== null && unicastDataObjects[receiver.name] !== undefined) {
         unicastDataObjects[receiver.name].data.id = message;
         console.log('****************** sdpAnswer:'.yellow + sdpAnswer + '  from : '.yellow + message.name + '********* to : : '.yellow, receiver.name);

    } else {
          callHyperty.instance.sendMessage(receiver, data).then(function(unicastDataObject) {
            console.log('----------------- message sent -------------------------!'.red, unicastDataObject);
            unicastDataObjects[receiver.name] = unicastDataObject;
            console.log('----------------- unicastDataObjects-------------------------!'.red, unicastDataObjects);
          }).catch(function(reason) {
            console.error('Error has occured while sending sdpAnswer, reasonn : ', reason);
          });
      }
    });
  }
  if(data.id === 'existingParticipants') {
    console.debug('existingParticipants are :', data)
    if(data.data.length !== 0) {
      _this.onExistingParticipants(data);
    }
  }
  if (data.id === 'onIceCandidate') {
      console.log('Process Ice Candidate: '.green, data);
      onIceCandidate(data.userName, data.icecandidate, data.senderName)
      // _this.peerConnection.addIceCandidate(new RTCIceCandidate({candidate: data.candidate}), _this._remoteDescriptionSuccess, _this._remoteDescriptionError);
    }
}

function notification(msg, type) {
// TODO
}

function receiveVideoFrom(receiver, sender, roomName, sdp) {
  //  let sender = userRegistry.getById(existingUser);
  let senderName = sender.name;
   console.log('---------------------------- receiveVideoFrom----------------------- '.red,'sender:'.red, sender.name,'receiver:'.red,receiver.name )
   return new Promise(function(resolve, reject) {
     if (rooms[roomName] === undefined || (rooms[roomName] === null)) {
       // first participants that creates the Room
       getKurentoClient(function (error, kurentoClient) {
         kurentoClient.create('MediaPipeline', function (error, _pipeline) {
          if (error) {
            console.log("Error has occured :" , error);
            pipeline[roomName].release();
            return callback(error);
          }

          pipeline[roomName] = _pipeline;
          receiver.pipeline = pipeline;
          rooms[roomName] = _pipeline;

          rooms[roomName].create('WebRtcEndpoint', function (error, webRtcEndpoint) {
            if (error) {
              console.log("Error has occured :" , error);
              rooms[roomName].release();
              pipeline[roomName].release();
              return callback(error);
            }

            receiver.outgoingEndpoint[receiver.name] = webRtcEndpoint;
            incomingMedia[receiver.name] = webRtcEndpoint;
            console.log(" Pipeline & Endpoint Created");

            receiver.outgoingEndpoint[receiver.name].processOffer(sdp, function (error, sdpAnswer) {
              resolve(sdpAnswer);
            });

            if(!incomingcandidatesQueue[senderName])
              incomingcandidatesQueue[senderName] = {};

            if (incomingcandidatesQueue[senderName][receiver.name]) {
              while(incomingcandidatesQueue[senderName][receiver.name].length) {
                var candidate = incomingcandidatesQueue[senderName][receiver.name].shift();
                incomingMedia[senderName].addIceCandidate(candidate);
              }
            }

            incomingMedia[receiver.name].on('OnIceCandidate', function(event) {
              var candidate = kurento.register.complexTypes.IceCandidate(event.candidate);
              console.log(' ------------------------- Outgoing candidate : is: -----------------------'.yellow, candidate)

              let message = {
                id : 'IceCandidate',
                candidate : candidate,
                name : senderName
              }

              if(unicastDataObjects[receiver.name] !== null && unicastDataObjects[receiver.name] !== undefined) {
                 unicastDataObjects[receiver.name].data.id = message;
                }
            });

            incomingMedia[receiver.name].gatherCandidates(function(error) {
              if (error) {
                return callback(error);
              }
            });
          });
        });
    });
  } else {//room pipeline already exist
    if (incomingMedia[senderName]) {
      rooms[roomName].create('WebRtcEndpoint', function (error, webRtcEndpoint) {
        if (error) {
          console.log("Error has occured :" , error);
          rooms[roomName].release();
          pipeline[roomName].release();
          return callback(error);
        }

        if(!sender.outgoingEndpoint[senderName])
          sender.outgoingEndpoint[senderName]={};

        sender.outgoingEndpoint[senderName][receiver.name]= webRtcEndpoint;
        // sender.outgoingEndpoint[senderName] = webRtcEndpoint;
        //instead of connecting with

        sender.outgoingEndpoint[senderName][receiver.name].processOffer(sdp, function (error, sdpAnswer){
          //Connection of endpoints is done here
          incomingMedia[senderName].connect(webRtcEndpoint, function () {
            console.log('---------------------------------------------------------[Kurento_KMS] Endpoint sender '.yellow , sender.name,'is now connected with endpoint : '.yellow, receiver.name)
             resolve(sdpAnswer);
            });
          });

          if(!incomingcandidatesQueue[senderName])
            incomingcandidatesQueue[senderName] = {};

          if (incomingcandidatesQueue[senderName][receiver.name]) {
             while(incomingcandidatesQueue[senderName][receiver.name].length) {
              var candidate = incomingcandidatesQueue[senderName][receiver.name].shift();
              sender.outgoingEndpoint[senderName][receiver.name].addIceCandidate(candidate);
            }
          }

          sender.outgoingEndpoint[senderName][receiver.name].on('OnIceCandidate', function(event) {
            var candidate = kurento.register.complexTypes.IceCandidate(event.candidate);
            console.log(' ------------------------- Outgoing candidate : is: -----------------------'.yellow, candidate)


             let message = {
              id : 'IceCandidate',
              candidate : candidate,
              name : senderName
            }


            if(unicastDataObjects[receiver.name] !== null && unicastDataObjects[receiver.name] !== undefined) {
              unicastDataObjects[receiver.name].data.id = message;
            }
          });

          sender.outgoingEndpoint[senderName][receiver.name].gatherCandidates(function(error) {
            if (error){
              return callback(error);
            }
          });
        });
        //incomingMedia[senderName] == null, has been created yet
     } else {
       rooms[roomName].create('WebRtcEndpoint', function (error, webRtcEndpoint) {
        if (error) {
           console.log("Error has occured :" , error);
           rooms[roomName].release();
           pipeline[roomName].release();
           return callback(error);
        }
        // create endpoint to be connected to
        if(!sender.outgoingEndpoint[senderName])
              sender.outgoingEndpoint[senderName]= {};

        incomingMedia[senderName] = webRtcEndpoint;
        sender.outgoingEndpoint[senderName][receiver.name]= webRtcEndpoint;
        sender.outgoingEndpoint[senderName] = webRtcEndpoint;

        incomingMedia[senderName].processOffer(sdp, function (error, sdpAnswer) {
          if (error) {
            console.log("Error has occured :" , error);
            rooms[roomName].release();
            pipeline[roomName].release();
            return callback(error);
          }
          resolve(sdpAnswer);
        });

        if(!incomingcandidatesQueue[senderName])
            incomingcandidatesQueue[senderName] = {};

        if (incomingcandidatesQueue[senderName][receiver.name]) {
          while(incomingcandidatesQueue[senderName][receiver.name].length) {
            var candidate =incomingcandidatesQueue[senderName][receiver.name].shift();
            incomingMedia[senderName].addIceCandidate(candidate);
          }
        }

        incomingMedia[senderName].on('OnIceCandidate', function(event) {
          var candidate = kurento.register.complexTypes.IceCandidate(event.candidate);
          console.log(' ------------------------- Outgoing candidate : is: -----------------------'.yellow, candidate)


           let message = {
              id : 'IceCandidate',
              candidate : candidate,
              name : senderName
          }

          if(unicastDataObjects[receiver.name] !== null && unicastDataObjects[receiver.name] !== undefined) {
            unicastDataObjects[receiver.name].data.id = message;
         }
        });

        incomingMedia[senderName].gatherCandidates(function(error){
          if (error) {
            console.log("Error has occured :" , error);
            return callback(error);
          }
        });
        notifyOthers(receiver.name,receiver);
      });
    }
  }
  });
}

/**
 * Get user WebRTCEndPoint, Required for WebRTC calls
 * @param userSession
 * @param sender
 * @param callback
 */

function onJoinRoom(controller, identity, callback) {
    let _this = this;
    let roomName = controller._roomName;
    return new Promise((resolve, reject) => {
      join(controller, identity).then((user) => {
        resolve(user);
      }).catch((reason) => {
        console.error('Error has occured while joinning the room, reason:', reason);
        reject(reason);
    });
  });
}


function join(controller, identity) {
   // register user to room
   // rooms[roomName].participants[userSession.name] = userSession;
   let userHypertyURL = controller._connectionEvent.from;

   let userSdp = controller._connectionEvent.value.connectionDescription;

   let userName = identity.username;
   let roomName = controller._roomName;
   let userURL = identity.userURL;

    let calleeInfo = identity;
    console.log("[Participants]: ".green + userName + " trying to join room: ".green + roomName);
    return new Promise(function(resolve, reject) {
      if(!userName) {
        return onError(controller,"Empty user name");
      }

      if(userRegistry.getByName(userName)) {
        return onError(controller,"Empty user name");
      }
      console.log('---------------------------------   UserSession  ---------------------------------------'.green)
      userSession = new UserSession(userName, userHypertyURL, userURL, userSdp, identity, roomName, controller);
      userRegistry.register(userSession);
      // try {
        var participantsName = userRegistry.getParticipantByRoom(roomName);
        console.log('participantsName', participantsName)
        for (var i in participantsName) {
          if (userName === participantsName[i].name || participantsName[i].name == "") {
            continue;
          }
          for(var index in participantsName[i].outgoingEndpoint) {
            if(participantsName[i].outgoingEndpoint[index] !== null)
            participants.push(index);
            existingUserIds[roomName] = participantsName[i];
          }
        }
        console.log('existing participants is :'.red, participants);

        let message = {
          id: "existingParticipants",
          data: participants
        }

        callHyperty.instance.sendMessage(userSession, message).then(function(unicastDataObject) {

          unicastDataObjects[userSession.name] = unicastDataObject;
          console.log('----------------- unicastDataObjects existingParticipants-------------------------!'.red);
          resolve(userSession);
        }).catch((reason) => {
          console.error(reason);
          reject(reason);
        });
      });
}



function onIceCandidate(username, _candidate, senderName)  {

    let candidate = kurento.register.complexTypes.IceCandidate(_candidate);

    let user = userRegistry.getByName(username);
    let sender = userRegistry.getByName(senderName);

    // console.log(' user is :'.yellow, user, 'sender is :'.yellow, sender);
    let userName = user.name;

    if((senderName === userName) && (incomingMedia[senderName])) {
      incomingMedia[senderName].addIceCandidate(candidate);
    } else if(senderName !== userName) {
      if (user.outgoingEndpoint[senderName]) {
        incomingMedia[senderName].addIceCandidate(candidate);
      } else if (sender.outgoingEndpoint[senderName]) {
        if(sender.outgoingEndpoint[senderName][userName]) {
          sender.outgoingEndpoint[senderName][userName].addIceCandidate(candidate);
        } else {
          console.log('---------------------- >>> Queueing candidate'.green);
          if(!incomingcandidatesQueue[senderName]) {
            incomingcandidatesQueue[senderName] = {};
          }
          if(!incomingcandidatesQueue[senderName][userName]) {
            incomingcandidatesQueue[senderName][userName] = [];
          }
          incomingcandidatesQueue[senderName][userName].push(candidate);
        }
      } else {//sender.outgoingEndpoint[senderName] == null
        console.log('---------------------- >>> Queueing candidate'.green);
        if (!incomingcandidatesQueue[senderName]) {
          incomingcandidatesQueue[senderName] = [];
        }
        if(!incomingcandidatesQueue[senderName][userName]) {
          incomingcandidatesQueue[senderName][userName] = [];
        }
        incomingcandidatesQueue[senderName][userName].push(candidate);
      }
    } else {
       console.log('---------------------- >>> Queueing candidate'.green);
      if (!incomingcandidatesQueue[senderName]) {
        incomingcandidatesQueue[senderName] = [];
      }
      if(!incomingcandidatesQueue[senderName][userName]) {
        incomingcandidatesQueue[senderName][userName] = [];
      }
      incomingcandidatesQueue[senderName][userName].push(candidate);
    }
  }

  function notifyOthers(newParticipant, currentUser) {
    let myRoom = currentUser.roomName;
    if (userRegistry) {
      let participants = userRegistry.getParticipantByRoom(myRoom);
      for (let i in participants) {
        let participant = participants[i];
        if (participant.name !== currentUser.name && participant.id !== undefined) {
          console.log('newParticipant'.red, newParticipant);
          if(participant !== newParticipant) {

            let message = {
              id: 'newParticipantArrived',
              name: newParticipant
            }
            newParticipantArrived[myRoom] = newParticipant;
            if(unicastDataObjects[participant.name].data !== null) {
                unicastDataObjects[participant.name].data.id = message;
              } else {
                callHyperty.instance.sendMessage(participant, message).then(function(unicastDataObject) {
                  console.log('----------------- message sent iceCandidate-------------------------!'.red);
                  unicastDataObjects[participant.name] = unicastDataObject;
                  console.log('----------------- unicastDataObjects iceCandidate-------------------------!'.red);
                }).catch(function(reason) {
                  console.error(reason);
                });
             }

          }
        }
      }
    }
  }



  function onError(objObserver, error) {
     console.log("Error processing register: " + error);
    //  this.sendMessage(objObserver.peer, error);
  }
