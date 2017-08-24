/**
 * Created by eak on 9/14/15.
 */

class UserRegistry {
    constructor() {
        this.usersById = {};
        this.usersByName = {};
    }

    register(user) {
        this.usersById[user.id] = user;
        this.usersByName[user.name] = user;
        console.log('user is registered');
    }

    unregister(id) {
        var user = this.getById(id);
        if (user)
            delete this.usersById[id]
        if (user && this.getByName(user.name))
            delete this.usersByName[user.name];
    }

    getById(id) {
        return this.usersById[id];
    }

    getByName(name) {
        return this.usersByName[name];
    }

    getRoomForUser(name) {
        return this.usersByName[name].roomName;
    }

    removeById(id) {
        var userSession = this.usersById[id];
        if (!userSession)
            return;
        delete this.usersById[id];
        delete this.usersByName[userSession.name];
    }

    setSdpOffer(sdpOffer){
        this.sdpOffer = sdpOffer;
    }

    getOutgoingWebRtcPeer () {
        return this.outgoingMedia;
    }

    getParticipantByRoom(roomName) {
        var userList = this.usersByName;
        var usersInRoomList = [];
        for(var i in userList) {
            if (userList[i].roomName === roomName) {
                usersInRoomList.push(userList[i]);
            }
        }
        return usersInRoomList;
    }   
}

export default UserRegistry;