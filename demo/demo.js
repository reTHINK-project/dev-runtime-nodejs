
import fs from 'fs';
import path from 'path';
import rethink from 'runtime-nodejs/dist/RuntimeNode';
import express from 'express';
import minimist from'minimist';
import url from'url';
import https from 'https';
 // TODO: replace ws with Observer/Reporter communication model
import ws from 'ws';
import kurento from 'kurento-client';
import UserRegistry from './user-registry';
import UserSession from './user-session';
import peer from './peer';

var log4js = require('log4js'); //Log object

log4js.configure('./log-conf.json', {
    reloadSecs: 60,
    cwd: './'
});

log4js.replaceConsole();
var logger = log4js.getLogger('demo');
var loggerCandidate = log4js.getLogger('demo-candidate');
var loggerDebug = log4js.getLogger('demo-debug');

logger.debug("Some debug messages");
logger.info("test log");

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


let domain = 'rethink.apizee.com';
const hypertyURI = (domain, hyperty) => `https://catalogue.${domain}/.well-known/hyperty/${hyperty}`;
const runtimeURL = 'https://catalogue.' + domain + '/.well-known/runtime/Runtime';

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

let runtime = rethink.install({
  domain: domain,
  runtimeURL,
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
  console.log('############################### start Group Communication app ###########################'.blue);

  logger.debug('start Group Communication app'.red);

  if (callHyperty.instance !== null) {
    callHyperty.instance.onInvitation(function(controller, identity) {

      logger.debug('On Invitation'.red);

      console.log(' ------------------------ On Invitation: -------------------------------'.green);

      onJoinRoom(controller, identity).then((user) => {

        logger.debug('onJoinRoom CB'.red);

        changePeerInformation(controller.dataObjectObserver);
        console.log('------------------- onJoinRoom success! --------------- user :'.green, user.name);
        console.log('user.roomName'.green, user.roomName);
        try {
          receiveVideoFrom(user, user, user.roomName, user.sdpOffer.sdp).then((sdpAnswer) => {

            logger.debug('receiveVideoFrom CB');

            let message = {
              id: 'receiveVideoAnswer',
              name: user.name,
              sdpAnswer: sdpAnswer
            };
            console.log('----------------- message sent Before-------------------------!'.red, unicastDataObjects);
            //if(unicastDataObjects[user.name] !== null && unicastDataObjects[user.name] !== undefined) {
            //   console.log('----------------- message sent -------------------------!'.red, unicastDataObjects);
            //  unicastDataObjects[user.name].data.id = message;

            //  console.log('****************** sdpAnswer:'.yellow + sdpAnswer + '  from : '.yellow + message.name + '********* to : : '.yellow, message.name);
            //} else {

            loggerDebug.debug('receiveVideoFrom CB : av send answer to :', user.name );

              callHyperty.instance.sendMessage(user, message).then(function(unicastDataObject) {

                //logger.debug('sendMessage answer CB :', message);
                //logger.debug('...sended to :', user);

                console.log('----------------- message sent -------------------------!'.red, unicastDataObject);
                //unicastDataObjects[user.name] = unicastDataObject;
                console.log('----------------- unicastDataObjects-------------------------!'.red, unicastDataObjects);
              }).catch(function(reason) {
                console.error('Error has occured while sending sdpAnswer, reasonn : ', reason);
              });
            //}
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
    //notification(msg, 'warn');
  }
}

function changePeerInformation(dataObjectObserver) {

  logger.debug("changePeerInformation");

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

function processForSusbcriber(data) {

  loggerDebug.debug("processForSusbcriber :", data);

  let receiver = userRegistry.getByName(data.userName);
  let sender = userRegistry.getByName(data.senderName);
  logger.debug('receiver is :', receiver);
  logger.debug('sender is :', sender);

  let roomName = receiver.roomName;

  if ((rooms[roomName] === undefined) || (rooms[roomName] === null)) {
    logger.error('rooms[roomName] not exist, leaving processForSusbcriber');
    return;
  }

  rooms[roomName].create('WebRtcEndpoint', function (error, webRtcEndpoint) {

    if (error) {
      console.log("Error has occured :" , error);
      logger.error('create WebRtcEndpoint cb error');
    }

    if (incomingMedia[data.userName] === undefined) {
      incomingMedia[data.userName] = {};
    }
    incomingMedia[data.userName][data.senderName] = webRtcEndpoint;

    logger.debug('WebRtcEndpoint created for subscriber');
    logger.debug('data :', data);
    logger.debug('data.sdpOffer :', data.sdpOffer);

    webRtcEndpoint.on('OnIceCandidate', function(event) {

      var candidate = kurento.register.complexTypes.IceCandidate(event.candidate);
      logger.debug('Subscriber - Outgoing candidate : is: ', candidate);

      let message = {
        id : 'IceCandidate',
        candidate : candidate,
        name : data.senderName
      };

//Workaround :: Filtering candidate     
      if (argv.ws_uri === "ws://localhost:8888/kurento") {
        let n = JSON.stringify(message).indexOf("37.187.55.91");
        if(n === -1) {
          loggerCandidate.debug(' candidate filtered for localhost Kurento');
          return;
        }
      }

/*

      //if(unicastDataObjects[receiver.name] !== null && unicastDataObjects[receiver.name] !== undefined) {
      //  unicastDataObjects[receiver.name].data.id = message;
      //} else {
      //  logger.debug("Error can't send IceCandidate to remote user");
      //}
      loggerCandidate.debug('sendingMessage :', message);
      //logger.debug('...sended to :', receiver);
*/
      callHyperty.instance.sendMessage(receiver, message).then(function(unicastDataObject) {

        logger.debug('sendMessage CB :', message);
        //logger.debug('...sended to :', receiver);

        console.log('----------------- message sent -------------------------!'.red, unicastDataObject);
        //unicastDataObjects[user.name] = unicastDataObject;
        //console.log('----------------- unicastDataObjects-------------------------!'.red, unicastDataObjects);
      }).catch(function(reason) {
        console.error('Error has occured while sending IceCandidate, reasonn : ', reason);
      });  
    });

    webRtcEndpoint.processOffer(data.sdpOffer, function (error, sdpAnswer) {
      logger.debug("processOffer for subscriber cb :", sdpAnswer);
      logger.debug("data.senderName :", data.senderName);
      logger.debug("incomingMedia[data.senderName][data.senderName] :", incomingMedia[data.senderName][data.senderName]);

      incomingMedia[data.senderName][data.senderName].connect(webRtcEndpoint, function (error) {

        if (error) {
            logger.error("error on connect when subscribing media", error);
            return;
        }

        logger.debug("subscriber connected to publisher");

        let message = {
          id: 'receiveVideoAnswer',
          name: data.senderName,
          sdpAnswer: sdpAnswer
        };

        //if(unicastDataObjects[receiver.name] !== null && unicastDataObjects[receiver.name] !== undefined) {
        //   unicastDataObjects[receiver.name].data.id = message;
        //   console.log('****************** sdpAnswer:'.yellow + sdpAnswer + '  from : '.yellow + message.name + '********* to : : '.yellow, receiver.name);

        //} else {

        logger.debug('Subscriber - av send answer to :', receiver.name );

        callHyperty.instance.sendMessage(receiver, message).then(function(unicastDataObject) {
          loggerDebug.debug('Answer sended to subscriber :', receiver.name);

          //unicastDataObjects[receiver.name] = unicastDataObject;
          //console.log('----------------- unicastDataObjects-------------------------!'.red, unicastDataObjects);
        }).catch(function(reason) {
          console.error('Error has occured while sending sdpAnswer, reasonn : ', reason);
        });

        webRtcEndpoint.gatherCandidates(function(error) {
          logger.error('gatherCandidates cb');
          if (error) {
            logger.error('error gatherCandidates');
          }
        });

      });//End connect

      logger.debug("process for Sub - av incomingcandidatesQueue");
      logger.debug("data.userName :", data.userName);

      if (!incomingcandidatesQueue[data.userName]) {
        logger.debug("process for Sub - av incomingcandidatesQueue 1");
        incomingcandidatesQueue[data.userName] = {};
      }
      logger.debug("process for Sub - av incomingcandidatesQueue 2");

      if (incomingcandidatesQueue[data.userName][data.senderName]) {

        logger.debug("process for Sub - av incomingcandidatesQueue 3");
        //loggerCandidate.debug("incomingcandidatesQueue[data.userName][data.senderName] :", incomingcandidatesQueue[data.userName][data.senderName]);
        logger.debug("incomingcandidatesQueue[data.userName][data.senderName].length :", incomingcandidatesQueue[data.userName][data.senderName].length);

        while(incomingcandidatesQueue[data.userName][data.senderName].length) {

          loggerCandidate.debug("process for Sub - removing candidate from queue");

          var candidate = incomingcandidatesQueue[data.userName][data.senderName].shift();
          webRtcEndpoint.addIceCandidate(candidate);
        }
      }
    });//End processOffer
  }); //End of create WebRtcEndpoint
}

function processPeerInformation(data) {

  logger.debug("processPeerInformation :", data);

  let _this = this;
  console.log('data is :'.red, data);

  if (data.id  === 'subscribeVideoFrom') {
    logger.debug('User:' + data.userName + ' is asking to receive video from :' + data.senderName);
    logger.debug('subscribeVideoFromProcess :', data);

    processForSusbcriber(data);
  }

  if(data.id  === 'receiveVideoFrom') {
    console.log('User:' .yellow + data.userName + ' is Asking to receive video from :'.yellow + data.senderName);
    console.log('receiveVideoFrom is :'.red, data);

    let receiver = userRegistry.getByName(data.userName);
    let sender = userRegistry.getByName(data.senderName);
    console.log('receiver is :'.red, receiver, 'sender is :'.yellow, sender);

    receiveVideoFrom(receiver, sender, receiver.roomName, data.sdpOffer).then((sdpAnswer) => {
      let message = {
        id: 'receiveVideoAnswer',
        name: sender.name,
        sdpAnswer: sdpAnswer
      };

//loggerDebug.debug("av sendMessage sdpAnswer in processPeerInformation")

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
    console.debug('existingParticipants are :', data);
    if(data.data.length !== 0) {
      _this.onExistingParticipants(data);
    }
  }

  if (data.id === 'onIceCandidate') {
    console.log('Process Ice Candidate: '.green, data);
    onIceCandidate(data.userName, data.icecandidate, data.senderName);
  }
}

/*
function notification(msg, type) {
// TODO
}
*/

function createPipeline(roomName, user, callback) {
  'use strict';
  var i = 0;

  logger.debug('createPipeline()');

  getKurentoClient(function (error, kurentoClient) {
      kurentoClient.create('MediaPipeline', function (error, createdPipeline) {
          if (error) {
              logger.error("joinSession : create MediaPipeline - Error has occured :", error);
              return;
          }
          rooms[roomName] = createdPipeline;
          pipeline[roomName] = createdPipeline;
          user.pipeline = createdPipeline;

          logger.debug("joinSession : pipeline updated for room : " + roomName + " - " + createdPipeline.id);
          callback(roomName, user);
      });
  });
}

function processForPublisher(receiver, sender, roomName, sdp, resolve, reject) {

  logger.debug('processForPublisher');
  let senderName = sender.name;

  rooms[roomName].create('WebRtcEndpoint', function (error, webRtcEndpoint) {

    logger.debug('create WebRtcEndpoint cb');

    if (error) {
      console.log("Error has occured :" , error);
      logger.error('create WebRtcEndpoint cb error');
    }

    if (incomingMedia[senderName] === undefined) {
      incomingMedia[senderName] = {};
    }

    incomingMedia[senderName][senderName] = webRtcEndpoint;

    logger.debug(" Pipeline & Endpoint Created");

    webRtcEndpoint.on('IceComponentStateChange', function(event) {
      loggerDebug.debug("IceComponentStateChange :", event);

/*
      //if(event.state === 'READY') {
      if(event.state === 'CONNECTED') {
        notifyOthers(receiver);
      }
*/
    });

    webRtcEndpoint.on('OnIceCandidate', function(event) {
      var candidate = kurento.register.complexTypes.IceCandidate(event.candidate);
      //loggerCandidate.debug(' ------------------------- Outgoing candidate : is: -----------------------'.yellow, candidate);

      let message = {
        id : 'IceCandidate',
        candidate : candidate,
        name : senderName
      };

//Workaround :: Filtering candidate
      if (argv.ws_uri === "ws://localhost:8888/kurento") {
        let n = JSON.stringify(message).indexOf("37.187.55.91");
        if(n === -1) {
          loggerCandidate.debug('candidate filtered for localhost Kurento');
          return;
        }
      }

      //if(unicastDataObjects[receiver.name] !== null && unicastDataObjects[receiver.name] !== undefined) {
      //  unicastDataObjects[receiver.name].data.id = message;
      //} else {
      //  logger.debug("Error can't send IceCandidate to remote user");
      //}
      //loggerCandidate.debug('sendingMessage :', message);
      //logger.debug('...sended to :', receiver);

      callHyperty.instance.sendMessage(receiver, message).then(function(unicastDataObject) {

        logger.debug('sendMessage CB :', message);
        //logger.debug('...sended to :', receiver);

        console.log('----------------- message sent -------------------------!'.red, unicastDataObject);
        //unicastDataObjects[user.name] = unicastDataObject;
        //console.log('----------------- unicastDataObjects-------------------------!'.red, unicastDataObjects);
      }).catch(function(reason) {
        console.error('Error has occured while sending sdpAnswer, reasonn : ', reason);
      });
    });

    webRtcEndpoint.processOffer(sdp, function (error, sdpAnswer) {
      logger.debug("processOffer cb");

      if (error) {
          loggerDebug.error("Publisher - processOffer - Error has occured :", error);
          return;
      }
      resolve(sdpAnswer);

      webRtcEndpoint.gatherCandidates(function(error) {
        logger.error('gatherCandidates cb');
        if (error) {
          logger.error('error gatherCandidates');
        }
      });
      notifyOthers(receiver);
    });

    if (!incomingcandidatesQueue[senderName]) {
      incomingcandidatesQueue[senderName] = {};
    }

    if (incomingcandidatesQueue[senderName][senderName]) {

      //loggerCandidate.error("PUB - incomingcandidatesQueue length :", incomingcandidatesQueue[senderName][senderName].length);
      //loggerCandidate.error("PUB - incomingcandidatesQueue  :", incomingcandidatesQueue[senderName][senderName]);

      while(incomingcandidatesQueue[senderName][senderName].length) {

        loggerCandidate.error('PUB - removing Candidate from Queue');

        var candidate = incomingcandidatesQueue[senderName][senderName].shift();
        webRtcEndpoint.addIceCandidate(candidate);
      }
    }
    //notifyOthers(receiver);
  });
}

function receiveVideoFrom(receiver, sender, roomName, sdp) {
  //  let sender = userRegistry.getById(existingUser);

  logger.debug('receiveVideoFrom'.red);

  let senderName = sender.name;
  console.log('---------------------------- receiveVideoFrom----------------------- '.red,'sender:'.red, sender.name,'receiver:'.red,receiver.name );
  console.log('roomName is :'.red ,roomName);

  return new Promise(function(resolve, reject) {

    console.log('rooms[roomName] :'.red ,rooms[roomName]);
    if (rooms[roomName] === undefined || (rooms[roomName] === null)) {
      logger.debug('room pipeline not exist'.red);
      createPipeline(roomName, receiver, function (roomName, receiver) {
        logger.debug('createPipeline cb');
        processForPublisher(receiver, sender, roomName, sdp, resolve, reject);

      });
    } else {
      logger.debug('room pipeline exist'.red);
      processForPublisher(receiver, sender, roomName, sdp, resolve, reject);
    }
    //notifyOthers(receiver);
  });
}
/**
 * Get user WebRTCEndPoint, Required for WebRTC calls
 * @param userSession
 * @param sender
 * @param callback
 */

function onJoinRoom(controller, identity, callback) {

  logger.debug("onJoinRoom");

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
  logger.debug("join");

  console.log('join');
  logger.debug('identity is :'.red, identity);
  logger.debug('controller is :'.red, controller);

  let userHypertyURL = controller._connectionEvent.from;
  logger.debug('userHypertyURL is :'.red, userHypertyURL);

  let userSdp = controller.dataObjectObserver.data.connectionDescription;
  logger.debug('userSdp is :'.red, userSdp);

  let userName = identity.username;
  logger.debug('userName is :'.red, userName);

  let roomName = controller._roomName;
  logger.debug('roomName is :'.red, roomName);

  let userURL = controller._connectionEvent.identity.userProfile.userURL;
  logger.debug('trace userURL is :'.red, userURL);

  //let calleeInfo = identity;
  //logger.debug('controller._roomName :'.red, controller._roomName);

  console.log("[Participants]: ".green + userName + " trying to join room: ".green + roomName);

  return new Promise(function(resolve, reject) {
    if(!userName) {
      return onError(controller,"Empty user name");
    }

    if(userRegistry.getByName(userName)) {
      return onError(controller,"Empty user name");
    }

    logger.debug('UserSession');
    console.log('---------------------------------   UserSession  ---------------------------------------'.green);
    userSession = new UserSession(userName, userHypertyURL, userURL, userSdp, identity, roomName, controller);
    userRegistry.register(userSession);

    var participantsName = userRegistry.getParticipantByRoom(roomName);
    console.log('participantsName', participantsName);

    var localParticipants = [];

    for (var i in participantsName) {
      if (userName === participantsName[i].name || participantsName[i].name == "") {
        continue;
      }
      localParticipants.push(participantsName[i].name);
      existingUserIds[roomName] = participantsName[i];
    }

    loggerDebug.debug('existing participants is :', localParticipants);
    console.log('existing participants is :'.red, localParticipants);

    let message = {
      id: "existingParticipants",
      data: localParticipants
    }

    logger.debug('av sendMessage');
    callHyperty.instance.sendMessage(userSession, message).then(function(unicastDataObject) {

      unicastDataObjects[userSession.name] = unicastDataObject;
      console.log('----------------- unicastDataObjects existingParticipants-------------------------!'.red);
      logger.debug('cb sendMessage, av resolve');
      resolve(userSession);

    }).catch((reason) => {

      console.error(reason);
      logger.debug('cb sendMessage, reject');
      reject(reason);
    });
  });
}

function processCandidate(username, senderName, candidate)  {

  loggerCandidate.error("processCandidate :", candidate);

  if (incomingMedia[username] !== undefined && incomingMedia[username][senderName] !== undefined) {
    loggerCandidate.error("incomingMedia exist");
    incomingMedia[username][senderName].addIceCandidate(candidate);

  } else {
    loggerCandidate.error("incomingMedia not exist : Queuing candidate");

    console.log('---------------------- >>> Queueing candidate'.green);
    if (!incomingcandidatesQueue[username]) {
      incomingcandidatesQueue[username] = {};
    }
    if(!incomingcandidatesQueue[username][senderName]) {
      incomingcandidatesQueue[username][senderName] = [];
    }
    incomingcandidatesQueue[username][senderName].push(candidate);
  }
}

function onIceCandidate(username, _candidate, senderName)  {

//On Candidate for a subscribe :
//- username correspond to subscriber
//- senderName correspond to publisher

  loggerCandidate.error("onIceCandidate");
  loggerCandidate.error("username :", username);
  loggerCandidate.error("_candidate :", _candidate);
  loggerCandidate.error("senderName :", senderName);

  let candidate = kurento.register.complexTypes.IceCandidate(_candidate);
  let user = userRegistry.getByName(username);
  let sender = userRegistry.getByName(senderName);

  // console.log(' user is :'.yellow, user, 'sender is :'.yellow, sender);
  let userName = user.name;

  if (senderName === userName) {
      loggerCandidate.error('received onIceCandidate is for publishing call');
      loggerCandidate.error('publisher is :' + userName);

      processCandidate(userName, userName, candidate);
  } else {
      loggerCandidate.error('received onIceCandidate is for subscribing call');
      loggerCandidate.error('subscriber is :' + userName + " ,for published stream from :" + senderName);

      processCandidate(userName, senderName, candidate);
  }
}

function notifyOthers(currentUser) {

  loggerDebug.debug("notifyOthers()");

  let myRoom = currentUser.roomName;
  if (userRegistry) {
    let participants = userRegistry.getParticipantByRoom(myRoom);
    for (let i in participants) {
      let participant = participants[i];

      loggerDebug.debug("participant.name :", participant.name);
      loggerDebug.debug("currentUser.name :", currentUser.name);
      loggerDebug.debug("participant.id :", participant.id);

      if (participant.name !== currentUser.name && participant.id !== undefined) {

        loggerDebug.debug("dans if");

        let message = {
          id: 'newParticipantArrived',
          name: currentUser.name
        }

        logger.debug("Sending newParticipantArrived :", message);
        logger.debug("... to  :", participant.name);

        //if(unicastDataObjects[participant.name].data !== null) {
        //    unicastDataObjects[participant.name].data.id = message;
        //} else {
        callHyperty.instance.sendMessage(participant, message).then(function(unicastDataObject) {
          //console.log('----------------- message sent iceCandidate-------------------------!'.red);
          // unicastDataObjects[participant.name] = unicastDataObject;
          //console.log('----------------- unicastDataObjects iceCandidate-------------------------!'.red);
        }).catch(function(reason) {
          console.error(reason);
        });
      }
    }
  }
}

function onError(objObserver, error) {
    console.log("Error processing register: " + error);
  //  this.sendMessage(objObserver.peer, error);
}
