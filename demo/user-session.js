/**
 * Created by eak on 9/14/15.
 */
class UserSession {
    constructor(userName, userHypertyURL, userURL, userSdp, identity,roomName, controller) {
        this.id = identity.username;
        this.name = userName;
        this.userURL = userURL;
        this.pipeline = {}; 
        this.userHypertyURL = userHypertyURL;
        this.outgoingEndpoint = {};
        this.outgoingEndpoint[userName]=null;
        this.controller = controller;
        this.sdpOffer = userSdp; 
        this.incomingMedia = {};
        this.roomName = roomName;
        this.iceCandidateQueue = {};
    }

    setSdpOffer(sdpOffer) {
        let _this = this;
        _this.sdpOffer = sdpOffer;
    }

    getOutgoingWebRtcPeer() {
        let _this = this;
        return _this.outgoingMedia;
    }

    addIceCandidate(data, candidate) {
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

    sendMessage(data) {
        // this.ws.emit('message', data);
    }

}

export default UserSession;