'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by eak on 9/14/15.
 */

var UserRegistry = function () {
    function UserRegistry() {
        _classCallCheck(this, UserRegistry);

        this.usersById = {};
        this.usersByName = {};
    }

    _createClass(UserRegistry, [{
        key: 'register',
        value: function register(user) {
            this.usersById[user.id] = user;
            this.usersByName[user.name] = user;
            console.log('user is registered');
        }
    }, {
        key: 'unregister',
        value: function unregister(id) {
            var user = this.getById(id);
            if (user) delete this.usersById[id];
            if (user && this.getByName(user.name)) delete this.usersByName[user.name];
        }
    }, {
        key: 'getById',
        value: function getById(id) {
            return this.usersById[id];
        }
    }, {
        key: 'getByName',
        value: function getByName(name) {
            return this.usersByName[name];
        }
    }, {
        key: 'getRoomForUser',
        value: function getRoomForUser(name) {
            return this.usersByName[name].roomName;
        }
    }, {
        key: 'removeById',
        value: function removeById(id) {
            var userSession = this.usersById[id];
            if (!userSession) return;
            delete this.usersById[id];
            delete this.usersByName[userSession.name];
        }
    }, {
        key: 'setSdpOffer',
        value: function setSdpOffer(sdpOffer) {
            this.sdpOffer = sdpOffer;
        }
    }, {
        key: 'getOutgoingWebRtcPeer',
        value: function getOutgoingWebRtcPeer() {
            return this.outgoingMedia;
        }
    }, {
        key: 'getParticipantByRoom',
        value: function getParticipantByRoom(roomName) {
            var userList = this.usersByName;
            var usersInRoomList = [];
            for (var i in userList) {
                if (userList[i].roomName === roomName) {
                    usersInRoomList.push(userList[i]);
                }
            }
            return usersInRoomList;
        }
    }]);

    return UserRegistry;
}();

exports.default = UserRegistry;