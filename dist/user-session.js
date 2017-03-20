'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by eak on 9/14/15.
 */
var UserSession = function () {
    function UserSession(userName, userHypertyURL, userURL, userSdp, identity, roomName, controller) {
        _classCallCheck(this, UserSession);

        this.id = identity;
        this.name = userName;
        this.userURL = userURL;
        this.pipeline = {};
        this.userHypertyURL = userHypertyURL;
        this.outgoingEndpoint = {};
        this.outgoingEndpoint[userName] = null;
        this.controller = controller;
        this.sdpOffer = userSdp;
        this.incomingMedia = {};
        this.roomName = roomName;
        this.iceCandidateQueue = {};
    }

    _createClass(UserSession, [{
        key: 'setSdpOffer',
        value: function setSdpOffer(sdpOffer) {
            var _this = this;
            _this.sdpOffer = sdpOffer;
        }
    }, {
        key: 'getOutgoingWebRtcPeer',
        value: function getOutgoingWebRtcPeer() {
            var _this = this;
            return _this.outgoingMedia;
        }
    }, {
        key: 'addIceCandidate',
        value: function addIceCandidate(data, candidate) {
            // ice candidate for this user
            if (data.sender === this.name) {
                if (this.outgoingMedia) {
                    console.log(' add candidate to self : ' + data.sender);
                    this.outgoingMedia.addIceCandidate(candidate);
                } else {
                    console.error(' still does not have outgoing endpoint for : ' + data.sender);
                    this.iceCandidateQueue[data.sender].push({
                        data: data,
                        candidate: candidate
                    });
                }
            } else {
                var webRtc = this.incomingMedia[data.sender];
                if (webRtc) {
                    console.log(this.id + ' add candidate to from : ' + data.sender);
                    webRtc.addIceCandidate(candidate);
                } else {
                    console.error(this.name + ' still does not have endpoint for : ' + data.sender);
                    if (!this.iceCandidateQueue[data.sender]) {
                        this.iceCandidateQueue[data.sender] = [];
                    }
                    this.iceCandidateQueue[data.sender].push({
                        data: data,
                        candidate: candidate
                    });
                }
            }
        }
    }, {
        key: 'sendMessage',
        value: function sendMessage(data) {
            // this.ws.emit('message', data);
        }
    }]);

    return UserSession;
}();

exports.default = UserSession;