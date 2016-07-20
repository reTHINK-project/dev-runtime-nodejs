'use strict';

var _expect = require('expect.js');

var _expect2 = _interopRequireDefault(_expect);

var _MessageBus = require('../src/bus/MessageBus');

var _MessageBus2 = _interopRequireDefault(_MessageBus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('MessageBus', function () {
  it('sending message', function (done) {
    var msgResult = void 0;

    var mockRegistry = {
      resolve: function resolve(url) {
        return new Promise(function (resolve) {
          //resolve to the same URL
          resolve(url);
        });
      }
    };

    var msgBus = new _MessageBus2.default(mockRegistry);
    msgBus.addListener('hyper-2', function (msg) {
      msgResult = msg;
    });

    msgBus.postMessage({
      from: 'hyper-1', to: 'hyper-2',
      body: { value: 'x' }
    });

    setTimeout(function () {
      (0, _expect2.default)(msgResult).to.eql({
        id: 1, from: 'hyper-1', to: 'hyper-2',
        body: { value: 'x' }
      });

      done();
    });
  });

  it('pipeline msg change', function (done) {
    var mBus = new _MessageBus2.default();
    mBus.pipeline.handlers = [function (ctx) {
      ctx.msg.token = '12345678';
      ctx.next();
    }];

    mBus.addListener('hyper-2', function (msg) {
      (0, _expect2.default)(msg).to.eql({ id: 1, type: 'ping', token: '12345678', from: 'hyper-1', to: 'hyper-2' });
      done();
    });

    mBus.postMessage({ type: 'ping', from: 'hyper-1', to: 'hyper-2' });
  });

  it('sending using external system', function (done) {
    var msgResult = void 0;

    var mockRegistry = {
      resolve: function resolve() {
        return new Promise(function (resolve) {
          //resolve to default
          resolve('protostub');
        });
      }
    };

    var msgBus = new _MessageBus2.default(mockRegistry);
    msgBus.addListener('protostub', function (msg) {
      msgResult = msg;
    });

    msgBus.postMessage({
      from: 'hyper-1', to: 'hyper-2/other',
      body: { value: 'x' }
    });

    setTimeout(function () {
      (0, _expect2.default)(msgResult).to.eql({
        id: 1, from: 'hyper-1', to: 'hyper-2/other',
        body: { value: 'x' }
      });

      done();
    });
  });

  it('publish unique messages', function (done) {
    var result = { obj1: 0, obj2: 0 };

    var msgBus = new _MessageBus2.default();
    msgBus._onPostMessage = function (msg) {
      console.log(msg);
      result[msg.to]++;
    };

    msgBus.addPublish('obj1');
    msgBus.addPublish('obj1'); //repeated route ignored
    msgBus.addPublish('obj2');

    setTimeout(function () {
      msgBus.postMessage({ from: 'x', to: 'obj1' });
      msgBus.postMessage({ from: 'x', to: 'obj2' });
      msgBus.postMessage({ from: 'x', to: 'obj2' });

      setTimeout(function () {
        (0, _expect2.default)(result).to.eql({ obj1: 1, obj2: 2 });
        done();
      });
    });
  });
});