'use strict';

var _expect = require('expect.js');

var _expect2 = _interopRequireDefault(_expect);

var _MiniBus = require('../src/bus/MiniBus');

var _MiniBus2 = _interopRequireDefault(_MiniBus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('MiniBus', function () {
  it('simple sending message', function (done) {
    var mBus = new _MiniBus2.default();
    mBus._onPostMessage = function (msg) {
      (0, _expect2.default)(msg).to.eql({
        id: 1, type: 'test', from: 'hyper-1', to: 'hyper-2',
        body: { value: 'x' }
      });

      done();
    };

    mBus.postMessage({
      type: 'test', from: 'hyper-1', to: 'hyper-2',
      body: { value: 'x' }
    });
  });

  it('send with external response', function (done) {
    this.timeout(4000);
    var msgResult = {};

    var mBus = new _MiniBus2.default();
    mBus.addListener('hyper-1', function (msg) {
      msgResult = msg;
    });

    mBus._onPostMessage = function (msg) {
      (0, _expect2.default)(msg).to.eql({
        id: 1, type: 'test', from: 'hyper-1', to: 'hyper-2',
        body: { value: 'x' }
      });

      mBus._onMessage({
        id: 1, type: 'response', from: 'hyper-2', to: 'hyper-1',
        body: { value: 'y' }
      });
    };

    mBus.postMessage({
      type: 'test', from: 'hyper-1', to: 'hyper-2',
      body: { value: 'x' }
    }, function (response) {
      (0, _expect2.default)(response).to.eql({
        id: 1, type: 'response', from: 'hyper-2', to: 'hyper-1',
        body: { value: 'y' }
      });

      setTimeout(function () {
        //expect not to enter in the hyper-1 listener
        (0, _expect2.default)(msgResult).to.be.empty();
        done();
      });
    });
  });

  it('send and publish', function (done) {
    var mBus = new _MiniBus2.default();
    var msgResult = {};

    var defaultListener = false;
    var hyper2Listener = false;
    var objListener = false;

    mBus.addListener('*', function (msg) {
      msgResult = msg;
      defaultListener = true;
    });

    mBus.addListener('hyperty://hyper-2', function (msg) {
      msgResult = msg;
      hyper2Listener = true;
    });

    mBus.addListener('resource://fake-url', function (msg) {
      msgResult = msg;
      objListener = true;
    });

    //simulate message from MessageBus core
    mBus._onMessage({
      id: 1, type: 'send', from: 'hyperty://hyper-1', to: 'hyperty://hyper-2',
      body: { value: 'x' }
    });

    setTimeout(function () {
      //should be only received in the hyperty listener
      (0, _expect2.default)(defaultListener).to.eql(false);
      (0, _expect2.default)(hyper2Listener).to.eql(true);
      (0, _expect2.default)(msgResult).to.eql({
        id: 1, type: 'send', from: 'hyperty://hyper-1', to: 'hyperty://hyper-2',
        body: { value: 'x' }
      });

      //simulate message from MessageBus core
      mBus._onMessage({
        id: 2, type: 'publish', from: 'hyperty://hyper-1', to: 'resource://fake-url',
        body: { value: 'x' }
      });

      setTimeout(function () {
        //should be received in default and object listener
        (0, _expect2.default)(defaultListener).to.eql(true);
        (0, _expect2.default)(objListener).to.eql(true);
        (0, _expect2.default)(msgResult).to.eql({
          id: 2, type: 'publish', from: 'hyperty://hyper-1', to: 'resource://fake-url',
          body: { value: 'x' }
        });
        done();
      });
    });
  });
});