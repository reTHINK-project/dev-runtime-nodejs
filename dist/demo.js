'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

var _ws = require('ws');

var _ws2 = _interopRequireDefault(_ws);

var _kurentoClient2 = require('kurento-client');

var _kurentoClient3 = _interopRequireDefault(_kurentoClient2);

var _userRegistry = require('./user-registry');

var _userRegistry2 = _interopRequireDefault(_userRegistry);

var _userSession = require('./user-session');

var _userSession2 = _interopRequireDefault(_userSession);

var _peer = require('./peer');

var _peer2 = _interopRequireDefault(_peer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rethink = require('./RuntimeNode');
// TODO: replace wswith Observer/Reporter communication model


/*
 * Definition of global variables.
 */
var participants = [];
//Table used to keep rooms
var rooms = {};
var candidatesQueue = {};
var kurentoClient = null;
var incomingMedia = {};
var userSession = null;
var userRegistry = new _userRegistry2.default();
var argv = (0, _minimist2.default)(process.argv.slice(2), {
  default: {
    as_uri: 'https://localhost:9443/',
    // ws_uri: "ws://apizeekurentoKurentoLoadBalance-1906815936.eu-west-1.elb.amazonaws.com/kurento"
    ws_uri: "ws://localhost:8888/kurento"
  }
});
var idCounter = 0;
var incomingcandidatesQueue = [];
var master = null;
var unicastDataObjects = {};
var pipeline = {};
var viewers = [];
var incomingEndpoint = new Array();
var PresenterMessage = 'No active Presenter. Try again later...';
var callHyperty = void 0;
var existingUserIds = {};
var newParticipantArrived = {};

/********************************************* room Registry *******************************************/

/*******************************************************************************************************/

var domain = 'localhost';
var hypertyURI = function hypertyURI(domain, hyperty) {
  return 'https://catalogue.' + domain + '/.well-known/hyperty/' + hyperty;
};

// Recover kurentoClient for the first time.
function getKurentoClient(callback) {
  if (kurentoClient !== null) {
    return callback(null, kurentoClient);
  }

  (0, _kurentoClient3.default)(argv.ws_uri, function (error, _kurentoClient) {
    if (error) {
      console.log("Coult not find media server at address " + argv.ws_uri);
      return callback("Could not find media server at address" + argv.ws_uri + ". Exiting with error " + error);
    }

    kurentoClient = _kurentoClient;
    callback(null, kurentoClient);
  });
}

var runtime = rethink.default.install({
  domain: domain,
  development: true
}).then(function (runtime) {
  console.log('\n loading hyperty :'.green, hypertyURI(domain, 'ServerConference'));
  runtime.requireHyperty(hypertyURI(domain, 'ServerConference')).then(function (ServerConference) {

    console.log('NodeHyperty -->\n'.blue, ServerConference);
    callHyperty = ServerConference;

    init();
  }).catch(function (reason) {
    console.log('Error:', reason);
  });
}).catch(function (e) {
  console.error('aie !', e);
});

function init() {
  console.log('############################### start smart business app ###########################'.blue);
  if (callHyperty.instance !== null) {
    callHyperty.instance.onInvitation(function (controller, identity) {
      console.log(' ------------------------ On Invitation: -------------------------------'.green);
      onJoinRoom(controller, identity).then(function (user) {
        changePeerInformation(controller.dataObjectObserver);
        console.log('------------------- onJoinRoom success! --------------- user :'.green, user.name);
        try {
          receiveVideoFrom(user, user, user.roomName, user.sdpOffer.sdp).then(function (sdpAnswer) {
            var message = {
              id: 'receiveVideoAnswer',
              name: user.name,
              sdpAnswer: sdpAnswer
            };
            console.log('----------------- message sent Before-------------------------!'.red, unicastDataObjects);
            if (unicastDataObjects[user.name] !== null && unicastDataObjects[user.name] !== undefined) {
              console.log('----------------- message sent -------------------------!'.red, unicastDataObjects);
              unicastDataObjects[user.name].data.id = message;

              console.log('****************** sdpAnswer:'.yellow + sdpAnswer + '  from : '.yellow + message.name + '********* to : : '.yellow, message.name);
            } else {
              callHyperty.instance.sendMessage(user, data).then(function (unicastDataObject) {
                console.log('----------------- message sent -------------------------!'.red, unicastDataObject);
                unicastDataObjects[user.name] = unicastDataObject;
                console.log('----------------- unicastDataObjects-------------------------!'.red, unicastDataObjects);
              }).catch(function (reason) {
                console.error('Error has occured while sending sdpAnswer, reasonn : ', reason);
              });
            }
          });
        } catch (reason) {
          console.error('Error happened while getting sdp Offer from user :', reason);
        }
      }).catch(function (reason) {
        console.error('Error has occured while sending sdpAnswer, reasonn : ', reason);
      });
    });
  } else {
    var msg = 'Error Occured while loading the hyperty, create a function called hypertyLoaded';
    console.log(msg);
    notification(msg, 'warn');
  }
}

function changePeerInformation(dataObjectObserver) {
  var _this = this;
  var data = dataObjectObserver.data;
  var isOwner = data.hasOwnProperty('ownerPeer');
  console.log('isOwner:', isOwner);
  // let peerData = isOwner ? data.ownerPeer : data.Peer;
  // New model
  var peerData = dataObjectObserver.data;

  console.log('Peer Data:', JSON.stringify(peerData));

  if (peerData !== 'undefined') {
    if (peerData.hasOwnProperty('connectionDescription')) {
      processPeerInformation(peerData.connectionDescription);
    }

    if (peerData.hasOwnProperty('iceCandidates')) {
      console.log('Process Peer data iceCandidates: ', peerData);
      peerData.iceCandidates.forEach(function (ice) {
        processPeerInformation(ice);
      });
    }

    dataObjectObserver.onChange('*', function (event) {
      console.log('Observer on change message: '.green, event);
      processPeerInformation(event.data);
    });
  }
}

function processPeerInformation(data) {
  var _this = this;
  console.log('data is :'.red, data);

  if (data.id === 'receiveVideoFrom') {
    console.log('User:'.yellow + data.userName + ' is Asking to recieve video from :'.yellow + data.senderName);
    console.log('receiveVideoFrom is :'.red, data);
    var receiver = userRegistry.getByName(data.userName);
    var sender = userRegistry.getByName(data.senderName);
    console.log('receiver is :'.red, receiver, 'sender is :'.yellow, sender);

    receiveVideoFrom(receiver, sender, receiver.roomName, data.sdpOffer).then(function (sdpAnswer) {
      var message = {
        id: 'receiveVideoAnswer',
        name: sender.name,
        sdpAnswer: sdpAnswer
      };

      if (unicastDataObjects[receiver.name] !== null && unicastDataObjects[receiver.name] !== undefined) {
        unicastDataObjects[receiver.name].data.id = message;
        console.log('****************** sdpAnswer:'.yellow + sdpAnswer + '  from : '.yellow + message.name + '********* to : : '.yellow, receiver.name);
      } else {
        callHyperty.instance.sendMessage(receiver, data).then(function (unicastDataObject) {
          console.log('----------------- message sent -------------------------!'.red, unicastDataObject);
          unicastDataObjects[receiver.name] = unicastDataObject;
          console.log('----------------- unicastDataObjects-------------------------!'.red, unicastDataObjects);
        }).catch(function (reason) {
          console.error('Error has occured while sending sdpAnswer, reasonn : ', reason);
        });
      }
    });
  }
  if (data.id === 'existingParticipants') {
    console.debug('existingParticipants are :', data);
    if (data.data.length !== 0) {
      _this.onExistingParticipants(data);
    }
  }
  if (data.id === 'onIceCandidate') {
    console.log('Process Ice Candidate: '.green, data);
    onIceCandidate(data.userName, data.icecandidate, data.senderName);
    // _this.peerConnection.addIceCandidate(new RTCIceCandidate({candidate: data.candidate}), _this._remoteDescriptionSuccess, _this._remoteDescriptionError);
  }
}

function notification(msg, type) {
  // TODO
}

function receiveVideoFrom(receiver, sender, roomName, sdp) {
  //  let sender = userRegistry.getById(existingUser);
  var senderName = sender.name;
  console.log('---------------------------- receiveVideoFrom----------------------- '.red, 'sender:'.red, sender.name, 'receiver:'.red, receiver.name);
  return new Promise(function (resolve, reject) {
    if (rooms[roomName] === undefined || rooms[roomName] === null) {
      // first participants that creates the Room
      getKurentoClient(function (error, kurentoClient) {
        kurentoClient.create('MediaPipeline', function (error, _pipeline) {
          if (error) {
            console.log("Error has occured :", error);
            pipeline[roomName].release();
            return callback(error);
          }

          pipeline[roomName] = _pipeline;
          receiver.pipeline = pipeline;
          rooms[roomName] = _pipeline;

          rooms[roomName].create('WebRtcEndpoint', function (error, webRtcEndpoint) {
            if (error) {
              console.log("Error has occured :", error);
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

            if (!incomingcandidatesQueue[senderName]) incomingcandidatesQueue[senderName] = {};

            if (incomingcandidatesQueue[senderName][receiver.name]) {
              while (incomingcandidatesQueue[senderName][receiver.name].length) {
                var candidate = incomingcandidatesQueue[senderName][receiver.name].shift();
                incomingMedia[senderName].addIceCandidate(candidate);
              }
            }

            incomingMedia[receiver.name].on('OnIceCandidate', function (event) {
              var candidate = _kurentoClient3.default.register.complexTypes.IceCandidate(event.candidate);
              console.log(' ------------------------- Outgoing candidate : is: -----------------------'.yellow, candidate);

              var message = {
                id: 'IceCandidate',
                candidate: candidate,
                name: senderName
              };

              if (unicastDataObjects[receiver.name] !== null && unicastDataObjects[receiver.name] !== undefined) {
                unicastDataObjects[receiver.name].data.id = message;
              }
            });

            incomingMedia[receiver.name].gatherCandidates(function (error) {
              if (error) {
                return callback(error);
              }
            });
          });
        });
      });
    } else {
      //room pipeline already exist
      if (incomingMedia[senderName]) {
        rooms[roomName].create('WebRtcEndpoint', function (error, webRtcEndpoint) {
          if (error) {
            console.log("Error has occured :", error);
            rooms[roomName].release();
            pipeline[roomName].release();
            return callback(error);
          }

          if (!sender.outgoingEndpoint[senderName]) sender.outgoingEndpoint[senderName] = {};

          sender.outgoingEndpoint[senderName][receiver.name] = webRtcEndpoint;
          // sender.outgoingEndpoint[senderName] = webRtcEndpoint;
          //instead of connecting with

          sender.outgoingEndpoint[senderName][receiver.name].processOffer(sdp, function (error, sdpAnswer) {
            //Connection of endpoints is done here
            incomingMedia[senderName].connect(webRtcEndpoint, function () {
              console.log('---------------------------------------------------------[Kurento_KMS] Endpoint sender '.yellow, sender.name, 'is now connected with endpoint : '.yellow, receiver.name);
              resolve(sdpAnswer);
            });
          });

          if (!incomingcandidatesQueue[senderName]) incomingcandidatesQueue[senderName] = {};

          if (incomingcandidatesQueue[senderName][receiver.name]) {
            while (incomingcandidatesQueue[senderName][receiver.name].length) {
              var candidate = incomingcandidatesQueue[senderName][receiver.name].shift();
              sender.outgoingEndpoint[senderName][receiver.name].addIceCandidate(candidate);
            }
          }

          sender.outgoingEndpoint[senderName][receiver.name].on('OnIceCandidate', function (event) {
            var candidate = _kurentoClient3.default.register.complexTypes.IceCandidate(event.candidate);
            console.log(' ------------------------- Outgoing candidate : is: -----------------------'.yellow, candidate);

            var message = {
              id: 'iceCandidate',
              candidate: candidate,
              name: senderName
            };

            if (unicastDataObjects[receiver.name] !== null && unicastDataObjects[receiver.name] !== undefined) {
              unicastDataObjects[receiver.name].data.id = message;
            }
          });

          sender.outgoingEndpoint[senderName][receiver.name].gatherCandidates(function (error) {
            if (error) {
              return callback(error);
            }
          });
        });
        //incomingMedia[senderName] == null, has been created yet
      } else {
        rooms[roomName].create('WebRtcEndpoint', function (error, webRtcEndpoint) {
          if (error) {
            console.log("Error has occured :", error);
            rooms[roomName].release();
            pipeline[roomName].release();
            return callback(error);
          }
          // create endpoint to be connected to
          if (!sender.outgoingEndpoint[senderName]) sender.outgoingEndpoint[senderName] = {};

          incomingMedia[senderName] = webRtcEndpoint;
          sender.outgoingEndpoint[senderName][receiver.name] = webRtcEndpoint;
          sender.outgoingEndpoint[senderName] = webRtcEndpoint;

          incomingMedia[senderName].processOffer(sdp, function (error, sdpAnswer) {
            if (error) {
              console.log("Error has occured :", error);
              rooms[roomName].release();
              pipeline[roomName].release();
              return callback(error);
            }
            resolve(sdpAnswer);
          });

          if (!incomingcandidatesQueue[senderName]) incomingcandidatesQueue[senderName] = {};

          if (incomingcandidatesQueue[senderName][receiver.name]) {
            while (incomingcandidatesQueue[senderName][receiver.name].length) {
              var candidate = incomingcandidatesQueue[senderName][receiver.name].shift();
              incomingMedia[senderName].addIceCandidate(candidate);
            }
          }

          incomingMedia[senderName].on('OnIceCandidate', function (event) {
            var candidate = _kurentoClient3.default.register.complexTypes.IceCandidate(event.candidate);
            console.log(' ------------------------- Outgoing candidate : is: -----------------------'.yellow, candidate);

            var message = {
              id: 'iceCandidate',
              candidate: candidate,
              name: senderName
            };

            if (unicastDataObjects[receiver.name] !== null && unicastDataObjects[receiver.name] !== undefined) {
              unicastDataObjects[receiver.name].data.id = message;
            }
          });

          incomingMedia[senderName].gatherCandidates(function (error) {
            if (error) {
              console.log("Error has occured :", error);
              return callback(error);
            }
          });
          notifyOthers(receiver.name, receiver);
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
  var _this = this;
  var roomName = controller._roomName;
  return new Promise(function (resolve, reject) {
    join(controller, identity).then(function (user) {
      resolve(user);
    }).catch(function (reason) {
      console.error('Error has occured while joinning the room, reason:', reason);
      reject(reason);
    });
  });
}

function join(controller, identity) {
  // register user to room
  // rooms[roomName].participants[userSession.name] = userSession;
  var userHypertyURL = controller._connectionEvent.from;

  var userSdp = controller._connectionEvent.value.connectionDescription;

  var userName = identity.username;
  var roomName = controller._roomName;
  var userURL = identity.userURL;

  var calleeInfo = identity;
  console.log("[Participants]: ".green + userName + " trying to join room: ".green + roomName);
  return new Promise(function (resolve, reject) {
    if (!userName) {
      return onError(controller, "Empty user name");
    }

    if (userRegistry.getByName(userName)) {
      return onError(controller, "Empty user name");
    }
    console.log('---------------------------------   UserSession  ---------------------------------------'.green);
    userSession = new _userSession2.default(userName, userHypertyURL, userURL, userSdp, identity, roomName, controller);
    userRegistry.register(userSession);
    // try {
    var participantsName = userRegistry.getParticipantByRoom(roomName);
    console.log('participantsName', participantsName);
    for (var i in participantsName) {
      if (userName === participantsName[i].name || participantsName[i].name == "") {
        continue;
      }
      for (var index in participantsName[i].outgoingEndpoint) {
        if (participantsName[i].outgoingEndpoint[index] !== null) participants.push(index);
        existingUserIds[roomName] = participantsName[i];
      }
    }
    console.log('existing participants is :'.red, participants);

    var message = {
      id: "existingParticipants",
      data: participants
    };

    callHyperty.instance.sendMessage(userSession, message).then(function (unicastDataObject) {

      unicastDataObjects[userSession.name] = unicastDataObject;
      console.log('----------------- unicastDataObjects existingParticipants-------------------------!'.red);
      resolve(userSession);
    }).catch(function (reason) {
      console.error(reason);
      reject(reason);
    });
  });
}

function onIceCandidate(username, _candidate, senderName) {

  var candidate = _kurentoClient3.default.register.complexTypes.IceCandidate(_candidate);

  var user = userRegistry.getByName(username);
  var sender = userRegistry.getByName(senderName);

  // console.log(' user is :'.yellow, user, 'sender is :'.yellow, sender);
  var userName = user.name;

  if (senderName === userName && incomingMedia[senderName]) {
    incomingMedia[senderName].addIceCandidate(candidate);
  } else if (senderName !== userName) {
    if (user.outgoingEndpoint[senderName]) {
      incomingMedia[senderName].addIceCandidate(candidate);
    } else if (sender.outgoingEndpoint[senderName]) {
      if (sender.outgoingEndpoint[senderName][userName]) {
        sender.outgoingEndpoint[senderName][userName].addIceCandidate(candidate);
      } else {
        console.log('---------------------- >>> Queueing candidate'.green);
        if (!incomingcandidatesQueue[senderName]) {
          incomingcandidatesQueue[senderName] = {};
        }
        if (!incomingcandidatesQueue[senderName][userName]) {
          incomingcandidatesQueue[senderName][userName] = [];
        }
        incomingcandidatesQueue[senderName][userName].push(candidate);
      }
    } else {
      //sender.outgoingEndpoint[senderName] == null
      console.log('---------------------- >>> Queueing candidate'.green);
      if (!incomingcandidatesQueue[senderName]) {
        incomingcandidatesQueue[senderName] = [];
      }
      if (!incomingcandidatesQueue[senderName][userName]) {
        incomingcandidatesQueue[senderName][userName] = [];
      }
      incomingcandidatesQueue[senderName][userName].push(candidate);
    }
  } else {
    console.log('---------------------- >>> Queueing candidate'.green);
    if (!incomingcandidatesQueue[senderName]) {
      incomingcandidatesQueue[senderName] = [];
    }
    if (!incomingcandidatesQueue[senderName][userName]) {
      incomingcandidatesQueue[senderName][userName] = [];
    }
    incomingcandidatesQueue[senderName][userName].push(candidate);
  }
}

function notifyOthers(newParticipant, currentUser) {
  var myRoom = currentUser.roomName;
  if (userRegistry) {
    var _participants = userRegistry.getParticipantByRoom(myRoom);

    var _loop = function _loop(i) {
      var participant = _participants[i];
      if (participant.name !== currentUser.name && participant.id !== undefined) {
        console.log('newParticipant'.red, newParticipant);
        if (participant !== newParticipant) {

          var message = {
            id: 'newParticipantArrived',
            name: newParticipant
          };
          newParticipantArrived[myRoom] = newParticipant;
          if (unicastDataObjects[participant.name].data !== null) {
            unicastDataObjects[participant.name].data.id = message;
          } else {
            callHyperty.instance.sendMessage(participant, message).then(function (unicastDataObject) {
              console.log('----------------- message sent iceCandidate-------------------------!'.red);
              unicastDataObjects[participant.name] = unicastDataObject;
              console.log('----------------- unicastDataObjects iceCandidate-------------------------!'.red);
            }).catch(function (reason) {
              console.error(reason);
            });
          }
        }
      }
    };

    for (var i in _participants) {
      _loop(i);
    }
  }
}

function onError(objObserver, error) {
  console.log("Error processing register: " + error);
  //  this.sendMessage(objObserver.peer, error);
}