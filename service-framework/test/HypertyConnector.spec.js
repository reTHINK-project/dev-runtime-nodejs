'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _connection = require('../src/hyperty-connector/connection');

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Unit test modules


var expect = _chai2.default.expect;

// internal modules to be tested


_chai2.default.config.showDiff = true;
_chai2.default.config.truncateThreshold = 0;

_chai2.default.use(_chaiAsPromised2.default);
_chai2.default.use(_sinonChai2.default);

describe('Hyperty Connector', function () {

  it('Hyperty connector constructor', function () {

    _connection2.default.ownerPeer.connectionDescription = { sdp: 'v=0↵o=- 6997563545332188312 2 IN IP4 127.0.0.1↵s=-↵t=0 0↵a=group:BUNDLE audio video↵a=msid-semantic: WMS nuKjUwz3wF05NDkXyfhCrfNIg6rVOVSyvPzK↵m=audio 9 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 126↵c=IN IP4 0.0.0.0↵a=rtcp:9 IN IP4 0.0.0.0↵a=ice-ufrag:Nt6V9F/OHUiTEWdX↵a=ice-pwd:n5IzNyHn0f2s/C/IF6V1cn2t↵a=fingerprint:sha-256 A6:CE:E6:87:CD:2C:12:C4:68:FB:09:9C:04:4C:67:90:F1:53:87:80:F9:63:76:76:EC:6D:14:6B:95:3A:F5:61↵a=setup:active↵a=mid:audio↵a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level↵a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time↵a=sendrecv↵a=rtcp-mux↵a=rtpmap:111 opus/48000/2↵a=fmtp:111 minptime=10;useinbandfec=1↵a=rtpmap:103 ISAC/16000↵a=rtpmap:104 ISAC/32000↵a=rtpmap:9 G722/8000↵a=rtpmap:0 PCMU/8000↵a=rtpmap:8 PCMA/8000↵a=rtpmap:106 CN/32000↵a=rtpmap:105 CN/16000↵a=rtpmap:13 CN/8000↵a=rtpmap:126 telephone-event/8000↵a=maxptime:60↵a=ssrc:3200729091cname:CcK3s7bcYLDPG9AZ↵a=ssrc:3200729091 msid:nuKjUwz3wF05NDkXyfhCrfNIg6rVOVSyvPzKcca2f68c-081f-403e-a0a0-3791c02e9484↵a=ssrc:3200729091 mslabel:nuKjUwz3wF05NDkXyfhCrfNIg6rVOVSyvPzK↵a=ssrc:3200729091 label:cca2f68c-081f-403e-a0a0-3791c02e9484↵m=video 9 UDP/TLS/RTP/SAVPF 100 11611796↵c=IN IP4 0.0.0.0↵a=rtcp:9 IN IP4 0.0.0.0↵a=ice-ufrag:Nt6V9F/OHUiTEWdX↵a=ice-pwd:n5IzNyHn0f2s/C/IF6V1cn2t↵a=fingerprint:sha-256 A6:CE:E6:87:CD:2C:12:C4:68:FB:09:9C:04:4C:67:90:F1:53:87:80:F9:63:76:76:EC:6D:14:6B:95:3A:F5:61↵a=setup:active↵a=mid:video↵a=extmap:2urn:ietf:params:rtp-hdrext:toffset↵a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time↵a=extmap:4 urn:3gpp:video-orientaton↵a=sendrecv↵a=rtcp-mux↵a=rtpmap:100 VP8/90000↵a=rtcp-fb:100ccmfir↵a=rtcp-fb:100nack↵a=rtcp-fb:100nackpli↵a=rtcp-fb:100goog-remb↵a=rtpmap:116red/90000↵a=rtpmap:117ulpfec/90000↵a=rtpmap:96rtx/90000↵a=fmtp:96apt=100↵a=ssrc-group:FID23146547863406861764↵a=ssrc:2314654786cname:CcK3s7bcYLDPG9AZ↵a=ssrc:2314654786msid:nuKjUwz3wF05NDkXyfhCrfNIg6rVOVSyvPzK07222e7d-22c3-4114-804e-e976866d7c7a↵a=ssrc:2314654786mslabel:nuKjUwz3wF05NDkXyfhCrfNIg6rVOVSyvPzK↵a=ssrc:2314654786label:07222e7d-22c3-4114-804e-e976866d7c7a↵a=ssrc:3406861764cname:CcK3s7bcYLDPG9AZ↵a=ssrc:3406861764msid:nuKjUwz3wF05NDkXyfhCrfNIg6rVOVSyvPzK07222e7d-22c3-4114-804e-e976866d7c7a↵a=ssrc:3406861764mslabel:nuKjUwz3wF05NDkXyfhCrfNIg6rVOVSyvPzK↵a=ssrc:3406861764label:07222e7d-22c3-4114-804e-e976866d7c7a↵',
      type: 'offer'
    };
    _connection2.default.ownerPeer.iceCandidates = { type: 'candidate', candidate: 'candidate:948596300 1 udp 2122265343 fdce:a4d:96d9:0:d068:9ac4:7704:fb72 60280 typ host generation 0', sdpMid: 'audio', sdpMLineIndex: 0 };
    _connection2.default.ownerPeer.iceCandidates = { type: 'candidate', candidate: 'candidate:948596300 1 udp 2122265343 fdce:a4d:96d9:0:d068:9ac4:7704:fb72 60280 typ host generation 0', sdpMid: 'audio', sdpMLineIndex: 0 };

    console.log(_connection2.default);
    expect(true).equal(true);
  });
});