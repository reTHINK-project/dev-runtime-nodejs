'use strict';

var _expect = require('expect.js');

var _expect2 = _interopRequireDefault(_expect);

var _Pipeline = require('../src/bus/Pipeline');

var _Pipeline2 = _interopRequireDefault(_Pipeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Pipeline', function () {
  it('fail detected', function () {
    var errorResult = 'none';
    var msgResult;

    var pipeline = new _Pipeline2.default(function (error) {
      errorResult = error;
    });

    pipeline.handlers = [function (ctx) {
      ctx.msg.value++;
      msgResult = ctx.msg;
      ctx.fail('error-msg');
    }, function (ctx) {
      ctx.msg.value++;
      ctx.next();
    }];

    pipeline.process({ id: 1, value: 0 }, function (msg) {
      msg.result = 'OK';
      msgResult = msg;
    });

    (0, _expect2.default)({ id: 1, value: 1 }).to.eql(msgResult);
    (0, _expect2.default)('error-msg').to.eql(errorResult);
  });

  it('deliver detected', function () {
    var errorResult = 'none';
    var msgResult;

    var pipeline = new _Pipeline2.default(function (error) {
      errorResult = error;
    });

    pipeline.handlers = [function (ctx) {
      ctx.msg.value++;
      ctx.deliver();
    }, function (ctx) {
      ctx.msg.value++;
      ctx.next();
    }];

    pipeline.process({ id: 1, value: 0 }, function (msg) {
      msg.result = 'OK';
      msgResult = msg;
    });

    (0, _expect2.default)({ id: 1, value: 1, result: 'OK' }).to.eql(msgResult);
    (0, _expect2.default)('none').to.eql(errorResult);
  });

  it('sequence processor', function () {
    var errorResult = 'none';
    var msgResult;

    var pipeline = new _Pipeline2.default(function (error) {
      errorResult = error;
    });

    pipeline.handlers = [function (ctx) {
      ctx.msg.value++;
      ctx.next();
    }, function (ctx) {
      ctx.msg.value++;
      ctx.next();
    }];

    pipeline.process({ id: 1, value: 0 }, function (msg) {
      msg.result = 'OK';
      msgResult = msg;
    });

    (0, _expect2.default)({ id: 1, value: 2, result: 'OK' }).to.eql(msgResult);
    (0, _expect2.default)('none').to.eql(errorResult);
  });
});