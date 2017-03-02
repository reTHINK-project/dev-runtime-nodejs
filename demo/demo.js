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
    as_uri: 'https://localhost:9443/',
    // ws_uri: "ws://apizeekurentoKurentoLoadBalance-1906815936.eu-west-1.elb.amazonaws.com/kurento"
    ws_uri: "ws://localhost:8888/kurento"
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



let domain = 'localhost';
const hypertyURI = (domain, hyperty) => `https://catalogue.${domain}/.well-known/hyperty/${hyperty}`;

let runtime = rethink.default.install({
  domain: domain,
  development: true
}).then((runtime) => {
  console.log('\n loading hyperty :'.green, hypertyURI(domain, 'NodeHyperty'));
  runtime.requireHyperty(hypertyURI(domain, 'NodeHyperty'))
    .then((NodeHyperty) => {
      console.log('Hyperty loaded :\n'.green);
      console.log('NodeHyperty -->\n'.blue, NodeHyperty);
      callHyperty = NodeHyperty;
      init();

      // ..... here we can manipulate hyperty instance
      // console.log('world'.green, world);
      // before trying this make sure that the reTHINK toolkit is up running for node with the command(in dev-hyperty-toolkit) :npm run start:node
      //

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
          onJoinRoom(controller, identity,  function(error, user) {
            if (error) {
              callback(error)
            }
            console.log('------------------- onJoinRoom success! --------------- user :'.green, user.name);
            console.log('existingParticipants is : '.green,  existingUserIds)
            console.log('newParticipantArrived is : '.green,  newParticipantArrived)

        //  if( Object.keys(existingUserIds).length === 0 && existingUserIds.constructor === Object && Object.keys(newParticipantArrived).length === 0 && newParticipantArrived.constructor === Object ) {
              receiveVideoFrom(user, user, user.roomName, function (error, sdpAnswer) {
              if (error) {
                callback(error)
              }

              let message = {
                id: 'receiveVideoAnswer',
                name: user.name,
                sdpAnswer: sdpAnswer
              };
                console.log(' unicastDataObjects[usersInRoom[i].name].data : '.green,  unicastDataObjects[user.name])

              if(unicastDataObjects[user.name] !== null) {
                console.log(' unicastDataObjects[usersInRoom[i].name].data : '.green,  unicastDataObjects[user.name])
                unicastDataObjects[user.name].data.id =message.id;
                unicastDataObjects[user.name].data.name = message.name;
                unicastDataObjects[user.name].data.sdpAnswer = message.sdpAnswer;
              } else {
                callHyperty.instance.sendMessage(user, data).then(function(unicastDataObject) {
                  console.log('----------------- message sent -------------------------!'.red, unicastDataObject);
                  unicastDataObjects[user.name] = unicastDataObject;
                  console.log('----------------- unicastDataObjects-------------------------!'.red, unicastDataObjects);
                }).catch(function(reason) {
                  console.error('Error has occured while sending sdpAnswer, reasonn : ', reason);
                });
              }
              console.log('****************** sdpAnswer ************************* is : '.green, sdpAnswer);
            });
          });
        });
    
  } else {
    let msg = 'Error Occured while loading the hyperty, create a function called hypertyLoaded';
    console.log(msg);
    notification(msg, 'warn');
  }
}

function notification(msg, type) {
// TODO
}

function receiveVideoFrom(receiver, sender, roomName,  callback) {
  //  let sender = userRegistry.getById(existingUser);
  let senderName = sender.name;
   console.log('---------------------------- receiveVideoFrom----------------------- '.red,'sender:'.red, sender.name,'receiver:'.red,receiver.name )
   if (rooms[roomName] === undefined || (rooms[roomName] === null)) {// first participants that creates the Room
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

          receiver.outgoingEndpoint[receiver.name].processOffer(receiver.sdpOffer.sdp, function (error, sdpAnswer) {        
            callback(null, sdpAnswer);
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
            let message = {
              id : 'iceCandidate',
              candidate : candidate,
              name : receiver.name
            }

          // if(unicastDataObjects[receiver.name] ===! null) {
          //   console.log(' unicastDataObjects[usersInRoom[i].name].data : '.green,  unicastDataObjects[receiver.name].data)
          //   unicastDataObjects[receiver.name].data = iceData;
          // } else {
          //   callHyperty.instance.sendMessage(receiver, message).then(function(unicastDataObject) {
          //     console.log('----------------- message sent iceCandidate-------------------------!'.red);
          //     unicastDataObjects[receiver.name] = unicastDataObject;
          //     console.log('----------------- unicastDataObjects iceCandidate-------------------------!'.red);
          //   }).catch(function(reason) {
          //     console.error(reason);
          //   });
          // }
            // ws.send(JSON.stringify({
            //   id : 'iceCandidate',
            //    candidate : candidate,
            //    name : receiver.name,
            // }));
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

        sender.outgoingEndpoint[senderName][receiver.name].processOffer(receiver.sdpOffer.sdp, function (error, sdpAnswer){//Connection of endpoints is done here
          incomingMedia[senderName].connect(webRtcEndpoint, function () {
             callback(null, sdpAnswer);
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
            //  ws.send(JSON.stringify({
            //    id : 'iceCandidate',
            //   candidate : candidate,
            //   name : senderName
            // }));
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

        incomingMedia[senderName].processOffer(receiver.sdpOffer.sdp, function (error, sdpAnswer) {
          if (error) {
            console.log("Error has occured :" , error);
            rooms[roomName].release();
            pipeline[roomName].release();
            return callback(error);
          }
          callback(null, sdpAnswer);
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
          // ws.send(JSON.stringify({
          //   id : 'iceCandidate',
          //   candidate : candidate,
          //   name : senderName
          // }));
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







  //  room.pipeline.create('WebRtcEndpoint', function (error, webRtcEndpoint) {
  //     if (error) {
  //       console.log("Error has occured :" , error);
  //       console.error('no participant in room'.red);

  //       // no participants in room yet release pipeline
  //       if (Object.keys(room.participants).length == 0) {
  //         room.pipeline.release();
  //       }
  //       // rooms[roomName].release();
  //       // pipeline[roomName].release();
  //       return callback(error);
  //     }

  //     receiver.outgoingEndpoint[receiver.name] = webRtcEndpoint;
  //     incomingMedia[receiver.name] = webRtcEndpoint;
  //     console.log(" Pipeline & Endpoint Created", incomingMedia[receiver.name]);

  //     receiver.outgoingEndpoint[receiver.name].processOffer(receiver.sdpOffer.sdp, function (error, sdpAnswer) {
  //         callback(null, sdpAnswer);
  //       }); 

     

  //      if(!incomingcandidatesQueue[senderName])
  //         incomingcandidatesQueue[senderName] = {};
  //         if (incomingcandidatesQueue[senderName][receiver.name]) {
  //           while(incomingcandidatesQueue[senderName][receiver.name].length) {
  //             var candidate = incomingcandidatesQueue[senderName][receiver.name].shift();
  //             incomingMedia[senderName].addIceCandidate(candidate);
  //           }
  //         }

       
        
        // userSession.outgoingMedia = outgoingMedia;
        // console.log("Endpoint Created : ".green, userSession.outgoingMedia);
        // let iceCandidateQueue = userSession.iceCandidateQueue[userSession.name];

        // if (iceCandidateQueue) {
        //   while (iceCandidateQueue.length) {
        //     let message = iceCandidateQueue.shift();
        //     console.error('user : ' + userSession.name + ' collect candidate for outgoing media');
        //     userSession.outgoingMedia.addIceCandidate(message.candidate);
        //   }
        // }

        // userSession.outgoingMedia.on('OnIceCandidate', function (event) {
        //    console.log("generate outgoing candidate : ".blue + userSession.name);
        //    let candidate = kurento.register.complexTypes.IceCandidate(event.candidate);
          //  userSession.sendMessage({
          //    id: 'iceCandidate',
          //    sessionId: userSession.id,
          //    candidate: candidate
          // });

          // let message = {
          //    id: 'iceCandidate',
          //    sessionId: userSession.name,
          //    candidate: candidate
          // }

          // console.log(' unicastDataObjects[usersInRoom[i].name].data : '.green,  unicastDataObjects[userSession.name])

          // if(unicastDataObjects[userSession.name] ===! null) {
          //   console.log(' unicastDataObjects[usersInRoom[i].name].data : '.green,  unicastDataObjects[userSession.name].data)
          //   unicastDataObjects[userSession.name].data = iceData;
          // } else {
          //   callHyperty.instance.sendMessage(userSession, message).then(function(unicastDataObject) {
          //     console.log('----------------- message sent iceCandidate-------------------------!'.red);
          //     unicastDataObjects[userSession.name] = unicastDataObject;
          //     console.log('----------------- unicastDataObjects iceCandidate-------------------------!'.red);
          //   }).catch(function(reason) {
          //     console.error(reason);
          //   });
          // }
        // });


      
          // notify other user that new user is joining
          // let usersInRoom = room.participants;

          // let data = {
          //   id: 'newParticipantArrived',
          //   new_user_id: receiver.name
          // };

          // // newParticipantArrived.push(userSession);

          // newParticipantArrived[receiver.roomName] = receiver;


        //   // notify existing user
          // for (let i in usersInRoom) {
            // usersInRoom[i].sendMessage(data);
            // if(unicastDataObjects[usersInRoom[i].name] ==! null) {
            //   console.log(' unicastDataObjects[usersInRoom[i].name].data : '.green,  unicastDataObjects[usersInRoom[i].name])
            //   unicastDataObjects[usersInRoom[i].name].data = data;
            // } else {
              // callHyperty.instance.sendMessage(usersInRoom[i], data).then(function(unicastDataObject) {
              //   console.log('----------------- message sent newParticipantArrived-------------------------!'.red, unicastDataObject);
              //   unicastDataObjects[usersInRoom[i].name] = unicastDataObject;
              //   console.log('----------------- unicastDataObjects newParticipantArrived-------------------------!'.red);
              // }).catch(function(reason) {
              //   console.error(reason);
              // });
          // }
        // }

          // let existingUserIds = [];
          // for (let i in room.participants) {
          //   // existingUserIds.push(usersInRoom[i].name);
          //   existingUserIds[roomName] = usersInRoom[i];
          // }

          // send list of current user in the room to current participant
          // let msg = {
          //   id: 'existingParticipants',
          //   data: existingUserIds[roomName],
          //   roomName: room.name
          // }
          
          // userSession.sendMessage({
          //   id: 'existingParticipants',
          //   data: existingUserIds,
          //   roomName: room.name
          // });

          // if(unicastDataObjects[userSession.name] ==! null) {
          //     unicastDataObjects[userSession.name].data = msg;
          //   } else {
          //     callHyperty.instance.sendMessage(userSession, msg).then(function(unicastDataObject) {
          //       console.log('----------------- message sent existingParticipants-------------------------!'.red, unicastDataObject);
          //       unicastDataObjects[userSession.name] = unicastDataObject;
          //       console.log('----------------- unicastDataObjects existingParticipants-------------------------!'.red);
          //     }).catch(function(reason) {
          //       console.error(reason);
          //     });
          // }


          //  callHyperty.instance.sendMessage(userSession, msg).then(function(unicastDataObject) {
          //   console.log('----------------- message sent -------------------------!'.red, unicastDataObject);
          //   unicastDataObjects[userSession.name] = unicastDataObject;

          // }).catch(function(reason) {
          //   console.error(reason);
          // });

          // console.log('-----------------------existingUserIds -------------'.blue, existingUserIds)
          // register user to room
          // room.participants[userSession.name] = userSession;
          // userRegistry.register(userSession);
          // callback(null, userSession);
          // register user in system
          //  incomingMedia[receiver.name].on('OnIceCandidate', function(event) {
          //    let candidate = kurento.register.complexTypes.IceCandidate(event.candidate);
          //     let message = {
          //       id: 'iceCandidate',
          //       candidate : candidate,
          //       name : receiver.name,
          //     }

          //     console.log('Message to be sent is :', message )
          //     if(unicastDataObjects[receiver.name] ===! null) {
          //       console.log(' unicastDataObjects[usersInRoom[i].name].data : '.green,  unicastDataObjects[receiver.name].data)
          //       unicastDataObjects[receiver.name].data = iceData;
          //     } else {
          //       callHyperty.instance.sendMessage(userSession, message).then(function(unicastDataObject) {
          //         console.log('----------------- message sent iceCandidate-------------------------!'.red);
          //         unicastDataObjects[receiver.name] = unicastDataObject;
          //         console.log('----------------- unicastDataObjects iceCandidate-------------------------!'.red);
          //       }).catch(function(reason) {
          //         console.error(reason);
          //       });
          //    }
          // }); 

          // incomingMedia[receiver.name].gatherCandidates(function(error) {
          //   if (error) {
          //     return callback(error);
          //   }
          // });
        
        // receiver.outgoingEndpoint[receiver.name].processOffer(receiver.sdpOffer.sdp, function (error, sdpAnswer) {
        //   // callback(null, sdpAnswer);
        // }); 
    // });




}
/**
 * Get user WebRTCEndPoint, Required for WebRTC calls
 * @param userSession
 * @param sender
 * @param callback
 */

function getEndpointForUser(userSession, sender, callback) {
    // request for self media
    if (userSession.name === sender.name) {
        callback(null, userSession.outgoingMedia);
        return;
    }

    let incoming = userSession.incomingMedia[sender.name];
    if (incoming == null) {
        console.log('user : ' + userSession.name + ' create endpoint to receive video from : ' + sender.name);
        getRoom(userSession.roomName, userSession.controller, function (error, room) {
            if (error) {
                return callback(error);
            }
            room.pipeline.create('WebRtcEndpoint', function (error, incomingMedia) {
                if (error) {
                    // no participants in room yet release pipeline
                    if (Object.keys(room.participants).length == 0) {
                        room.pipeline.release();
                    }
                    return callback(error);
                }
                console.log('user : '.green + userSession.name + ' successfully created incomingMedia Endpoint'.green);
                // incomingMedia.setMaxVideoSendBandwidth(100);
                // incomingMedia.setMinVideoSendBandwidth(20);
                userSession.incomingMedia[sender.name] = incomingMedia;

                // add ice candidate the get sent before endpoint is established
                var iceCandidateQueue = userSession.iceCandidateQueue[sender.name];

                if (iceCandidateQueue) {
                    while (iceCandidateQueue.length) {
                        var message = iceCandidateQueue.shift();
                        console.log('--------------------here -------------------------'.green);
                        console.log('user : '.blue + userSession.name + ' collect candidate for : '.blue + message.data.sender);
                        incomingMedia.addIceCandidate(message.candidate);
                    }
                }

                incomingMedia.on('OnIceCandidate', function (event) {
                    console.log("generate incoming media candidate : " + userSession.name + " from " + sender.name);
                    var candidate = kurento.register.complexTypes.IceCandidate(event.candidate);
                    // userSession.sendMessage({
                    //     id: 'iceCandidate',
                    //     sessionId: sender.name,
                    //     candidate: candidate
                    // });
                    let iceData ={
                        id: 'iceCandidate',
                        sessionId: sender.name,
                        candidate: candidate
                    }

                    if(unicastDataObjects[userSession.name] ==! null) {
                      console.log(' unicastDataObjects[usersInRoom[i].name].data : '.green,  unicastDataObjects[userSession.name].data)
                      // unicastDataObjects[userSession.name].data = iceData;
                    } else {
                      // callHyperty.instance.sendMessage(userSession, iceData).then(function(unicastDataObject) {
                      //   console.log('----------------- message sent newParticipantArrived-------------------------!'.red, unicastDataObject);
                      //   unicastDataObjects[userSession.name] = unicastDataObject;
                      //   console.log('----------------- unicastDataObjects newParticipantArrived-------------------------!'.red);
                      // }).catch(function(reason) {
                      //   console.error(reason);
                      // });
                    }
                });
                sender.outgoingMedia.connect(incomingMedia, function (error) {
                    if (error) {
                        callback(error);
                    }
                    console.log('sender.outgoingMedia connect to incomingMedia successful!'.green);
                    callback(null, incomingMedia);
                });
            });
        });
    } else {
        console.log('user : '.green + userSession.name + ' get existing endpoint to receive video from : '.green + sender.name);
        sender.outgoingMedia.connect(incoming, function (error) {
            if (error) {
                callback(error);
            }
            callback(null, incoming);
        });
    }
}


function onJoinRoom(controller, identity, callback) {

  let _this = this;
  let roomName = controller._roomName;

  // getRoom(roomName, controller, function (error, room) {
  //   if (error) {
  //     callback(error)
  //   }
    join(controller, identity,  function (error, user) {
      if (error) {
        callback(error);
      }
      callback(null, user)
    });
    
  // });
}

  function join(controller, identity,  callback) {
    // register user to room
    // rooms[roomName].participants[userSession.name] = userSession;
    let userHypertyURL = controller._connectionEvent.from;
    let userSdp = controller._connectionEvent.value.ownerPeer.connectionDescription;
    let userName = identity.username;
    let roomName = controller._roomName;
    let userURL = identity.userURL;

    let calleeInfo = identity;
    console.log("[Participants]: ".green + userName + " trying to join room: ".green + roomName);

    if(!userName) {
      return _this.onError(controller,"Empty user name");
    }

    if(userRegistry.getByName(userName)) {
      return _this.onError(controller,"Empty user name");
    }
    console.log('---------------------------------   UserSession  ---------------------------------------'.green)
    userSession = new UserSession(userName, userHypertyURL, userURL, userSdp, identity, roomName, controller);
    userRegistry.register(userSession);
   


    try {
               var participantsName = userRegistry.getParticipantByRoom(roomName);
               console.log('participantsName', participantsName)
                for (var i in participantsName)
                {
                    if (userName === participantsName[i].name || participantsName[i].name == "")
                    {
                        continue;
                    }

                    for(var index in participantsName[i].outgoingEndpoint)
                    {
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

              // if(unicastDataObjects[userSession.name].data !== null) {
              //   console.log(' unicastDataObjects[usersInRoom[i].name].data : '.green,  unicastDataObjects[userSession.name].data)
              //   unicastDataObjects[userSession.name].data.id = message.id;
              //   unicastDataObjects[userSession.name].data.data = message.data;
              //   // unicastDataObjects[userSession.name].data.sdpAnswer = data.sdpAnswer;
              // } else {
                callHyperty.instance.sendMessage(userSession, message).then(function(unicastDataObject) {
                  console.log('----------------- message sent existingParticipants-------------------------!'.red);
                  unicastDataObjects[userSession.name] = unicastDataObject;
                  console.log('----------------- unicastDataObjects existingParticipants-------------------------!'.red);
                  callback(null, userSession);
                }).catch(function(reason) {
                  console.error(reason);
                });
            //  }
                
        } catch (exception) {
        onError(exception);
    }
    callback(null, userSession);
  }


  //

  function getKurentoClient(callback) {
   if (kurentoClient !== null) {
     return callback(null, kurentoClient);
  }
   kurento(argv.ws_uri, function (error, _kurentoClient) {
     if (error) {
       console.log("Coult not find media server at address " + argv.ws_uri);
      return callback("Could not find media server at address" + argv.ws_uri + ". Exiting with error " + error);
    }
   kurentoClient = _kurentoClient;
    callback(null, kurentoClient);
   });
  }


function onIceCandidate(_candidate, senderName) {

    let candidate = kurento.register.complexTypes.IceCandidate(_candidate);
    let user = userRegistry.getById(sessionId);
    let sender = userRegistry.getByName(senderName);
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
          console.log('Queueing candidate');
          if(!incomingcandidatesQueue[senderName]) {
            incomingcandidatesQueue[senderName] = {};
          }
          if(!incomingcandidatesQueue[senderName][userName]) {
            incomingcandidatesQueue[senderName][userName] = [];
          }
          incomingcandidatesQueue[senderName][userName].push(candidate);
        }
      } else {//sender.outgoingEndpoint[senderName] == null
        console.info('Queueing candidate');
        if (!incomingcandidatesQueue[senderName]) {
          incomingcandidatesQueue[senderName] = [];
        }
        if(!incomingcandidatesQueue[senderName][userName]) {
          incomingcandidatesQueue[senderName][userName] = [];
        }
        incomingcandidatesQueue[senderName][userName].push(candidate);
      }
    } else {
      console.info('Queueing candidate');
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
            if(unicastDataObjects[participant.name].data !== null) {
                console.log(' unicastDataObjects[usersInRoom[i].name].data : '.green,  unicastDataObjects[participant.name].data)
                unicastDataObjects[participant.name].data.id = message.id;
                unicastDataObjects[participant.name].data.data = message.data;
                // unicastDataObjects[userSession.name].data.sdpAnswer = data.sdpAnswer;
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
           
          // participant.ws.send(JSON.stringify({
          //   id: 'newParticipantArrived',
          //   name: newParticipant
          // }));
        }
      }
    }
  }



  function onError(objObserver, error) {
     console.log("Error processing register: " + error);
    //  this.sendMessage(objObserver.peer, error);
  }







