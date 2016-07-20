'use strict';

var _AddressAllocation = require('../src/registry/AddressAllocation');

var _AddressAllocation2 = _interopRequireDefault(_AddressAllocation);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;
_chai2.default.use(_chaiAsPromised2.default);

describe('AddressAllocation', function () {
  it('creation message and reply', function (done) {
    var bus = {
      postMessage: function postMessage(msg, replyCallback) {
        expect(msg).to.eql({
          type: 'create', from: 'local://fake.url', to: 'domain://msg-node.ua.pt/hyperty-address-allocation',
          body: { value: { number: 2 } }
        });

        replyCallback({
          id: 1, type: 'response', from: 'domain://msg-node.ua.pt/hyperty-address-allocation', to: 'local://fake.url',
          body: { code: 200, value: { allocated: ['hyperty://ua.pt/1', 'hyperty://ua.pt/2'] } }
        });
      }
    };

    var aa = new _AddressAllocation2.default('local://fake.url', bus);
    expect(aa.create('ua.pt', 2).then(function (list) {
      expect(list).to.eql(['hyperty://ua.pt/1', 'hyperty://ua.pt/2']);
    })).notify(done);
  });
});