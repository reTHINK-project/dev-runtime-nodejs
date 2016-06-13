'use strict';

var _MessageFactory = require('../src/message-factory/MessageFactory.js');

var _MessageFactory2 = _interopRequireDefault(_MessageFactory);

var _Message = require('../src/message-factory/Message.js');

var _MessageBody = require('../src/message-factory/MessageBody.js');

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;
_chai2.default.use(_chaiAsPromised2.default);

//Testing the Message factory
describe('MessageFactory', function () {

    var message = void 0;
    var messageFactory = void 0;

    describe('constructor()', function () {
        it('should create a Message Factory object without error', function (done) {
            messageFactory = new _MessageFactory2.default("false", '{}');
            messageFactory.validate();
            done();
        });
    });

    describe('createCreateMessageRequest()', function () {
        it('should be a Message of Type CREATE', function (done) {
            //(from, to, value, policy)
            message = messageFactory.createCreateMessageRequest("hyperty-runtime-esn://domain.com/12345", "[hyperty-runtime-imei://domain.com/12345, hyperty-runtime-imei://domain.com/678910]", "{audio: 'PCMU-Codec'}", "policyURL");

            //console.log('Create Message', JSON.stringify(message));
            expect(message).to.not.be.empty;
            expect(message.type).to.eql(_Message.MessageType.CREATE);
            done();
        });
    });

    describe('createForwardMessageRequest()', function () {

        it('should create a new Forward Message Request with a message payload', function (done) {

            //from, to, message
            var forwardMessage = messageFactory.createForwardMessageRequest("hyperty-runtime-esn://fromdomain.com/12345", "[hyperty-runtime-imei://todomain.com/12345]", message);

            //console.log('Forward Message Request', JSON.stringify(forwardMessage));
            expect(forwardMessage).to.not.be.empty;
            expect(forwardMessage.type).to.eql(_Message.MessageType.FORWARD);
            done();
        });
    });

    describe('createDeleteMessageRequest()', function () {
        it('should be a Message of Type DELETE', function (done) {
            //createDeleteMessageRequest(from, to, resource, attribute) ;
            var message = messageFactory.createDeleteMessageRequest("hyperty-runtime-esn://domain.com/12345", "[hyperty-runtime-imei://domain.com/123456]", "hyperty-runtime-uuid://domain.com/myResource", "audio");

            //console.log('Delete Message', JSON.stringify(message));
            expect(message).to.not.be.empty;
            expect(message.type).to.eql(_Message.MessageType.DELETE);

            done();
        });
    });

    describe('createUpdateMessageRequest()', function () {
        it('should be a Message of Type UPDATE', function (done) {
            //createUpdateMessageRequest(from, to, value, resource, attribute)
            var message = messageFactory.createUpdateMessageRequest("hyperty-esn://domain.com/12345", "[hyperty-imei://domain.com/123456]", "audio-only", "hyperty-runtime-uuid://domain.com/myResource", "audio");

            //console.log('Update Message', JSON.stringify(message));
            expect(message).to.not.be.empty;
            expect(message.type).to.eql(_Message.MessageType.UPDATE);

            done();
        });
    });

    describe('createReadMessageRequest()', function () {
        it('should be a Message of Type READ', function (done) {
            //createReadMessageRequest(from, to, resource, attribute);
            var readMessage = messageFactory.createReadMessageRequest("hyperty-esn://domain.com/12345", "[hyperty-imei://domain.com/123456]", "hyperty-runtime-uuid://domain.com/myResource", "audio");

            //console.log('Update Message', JSON.stringify(readMessage));
            expect(readMessage).to.not.be.empty;
            expect(readMessage.type).to.eql(_Message.MessageType.READ);

            done();
        });
    });

    describe('createSubscribeMessageRequest()', function () {
        it('should be a Message of Type SUBSCRIBE', function (done) {
            //createSubscribeMessageRequest(from, to, resource);
            var subscribeMessage = messageFactory.createSubscribeMessageRequest("hyperty-esn://domain.com/12345", "[hyperty-imei://domain.com/123456]", "hyperty-runtime-uuid://domain.com/myResource-sub");

            //console.log('UNSUBSCRIBE Message', JSON.stringify(subscribeMessage));
            expect(subscribeMessage).to.not.be.empty;
            expect(subscribeMessage.type).to.eql(_Message.MessageType.SUBSCRIBE);

            done();
        });
    });

    describe('createUnSubscribeMessageRequest()', function () {
        it('should be a Message of Type SUBSCRIBE', function (done) {
            //createSubscribeMessageRequest(from, to, resource);
            var unSubscribeMessage = messageFactory.createUnsubscribeMessageRequest("hyperty-esn://domain.com/12345", "[hyperty-imei://domain.com/123456]", "hyperty-runtime-uuid://domain.com/myResource-unsub");

            //console.log('SUBSCRIBE Message', JSON.stringify(unSubscribeMessage));
            expect(unSubscribeMessage).to.not.be.empty;
            expect(unSubscribeMessage.type).to.eql(_Message.MessageType.UNSUBSCRIBE);

            done();
        });
    });

    describe('assertIdentity()', function () {
        it('should add asserted identity to the given message', function (done) {
            //assertIdentity(token, identity)
            message.assertIdentity("token", "alicem@frauhofer.fokus.de");
            //console.log('asserted Identity Message', JSON.stringify(message));
            expect(message.body.assertedIdentity).to.eql("alicem@frauhofer.fokus.de");
            done();
        });
    });

    describe('addAccessToken()', function () {
        it('should add asserted identity to the given message', function (done) {
            //addAccessToken(token)
            message.addAccessToken("7z94rif97z39gfi9v33893z3");
            //console.log('Updated Message', JSON.stringify(updatedMessage));
            expect(message.body.accessToken).to.eql("7z94rif97z39gfi9v33893z3");
            done();
        });
    });

    describe('addIdToken()', function () {
        it('should add asserted identity to the given message', function (done) {
            //addIdToken(token)
            message.addIdToken("3jwwjhw89whbhuf9z439zhfih94z");
            //console.log('Updated Message', JSON.stringify(message));
            expect(message.body.idToken).to.eql("3jwwjhw89whbhuf9z439zhfih94z");
            done();
        });
    });

    describe('createExecuteMessageRequest()', function () {

        it('should create a new Execute Message Request', function (done) {

            //from, to, method, params
            var executeMessage = messageFactory.createExecuteMessageRequest("hyperty-runtime-esn://fromdomain.com/12345", "[hyperty-runtime-imei://todomain.com/12345]", "read", ['Param1', 'Param2']);

            console.log('Execute Message Request', JSON.stringify(executeMessage));
            expect(executeMessage).to.not.be.empty;
            expect(executeMessage.type).to.eql(_Message.MessageType.EXECUTE);
            done();
        });
    });

    describe('createMessageResponse()', function () {
        it('should be a Response Message of Type RESPONSE', function (done) {
            //message, code, value, source
            var response = messageFactory.createMessageResponse(message, _MessageBody.RESPONSE_CODE[200], _MessageBody.REASON_PHRASE[200]);
            //console.log("response code:"+RESPONSE_CODE[200]+ "reason phrase: "+REASON_PHRASE[200]);
            //console.log('Response Message', JSON.stringify(response));
            expect(response).to.not.be.empty;
            expect(response.type).to.eql(_Message.MessageType.RESPONSE);
            done();
        });
    });
});