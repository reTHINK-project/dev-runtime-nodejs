'use strict';

var _HypertyDiscovery = require('../src/hyperty-discovery/HypertyDiscovery');

var _HypertyDiscovery2 = _interopRequireDefault(_HypertyDiscovery);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;
_chai2.default.use(_chaiAsPromised2.default);

describe('HypertyDiscovery', function () {
  var domain = 'ist.pt';
  var messageBus = {
    postMessage: function postMessage(msg, replyCallback) {

      //if the discoverHypertyPerUser don't receive a domain, it will use the domain from the constructor
      if (msg.to === 'domain://registry.ist.pt/') {
        expect(msg).to.eql({
          type: 'read', from: domain, to: 'domain://registry.ist.pt/',
          body: { resource: 'user://gmail.com/openidtest10' }
        });
        replyCallback({
          id: 1, type: 'response', to: msg.from, from: msg.to, body: { code: 200,
            assertedIdentity: 'user://gmail.com/openidtest10',
            value: { 'hyperty://ist.pt/1': { descriptor: 'hyperty-catalogue://ist.pt/.well-known/hyperty/HelloHyperty',
                lastModified: '"2016-03-03T13:32:06Z"' } } }
        });
      } else {
        expect(msg).to.eql({
          type: 'read', from: domain, to: 'domain://registry.specific.com/',
          body: { resource: 'user://specific.com/openidtest10' }
        });
        replyCallback({
          id: 1, type: 'response', to: msg.from, from: msg.to, body: { code: 200,
            assertedIdentity: 'user://specific.com/openidtest10',
            value: { 'hyperty://specific.com/1': { descriptor: 'hyperty-catalogue://specific.com/.well-known/hyperty/HelloHyperty',
                lastModified: '"2016-03-03T13:32:06Z"' } } }
        });
      }
    }
  };

  var hypertyDiscovery = new _HypertyDiscovery2.default(domain, messageBus);

  describe('constructor()', function () {
    it('should create a HypertyDiscovery object without error', function () {
      expect(hypertyDiscovery.discoveryURL).to.be.equal(domain);
    });
  });

  describe('discoverHypertyPerUser()', function () {
    it('should return a Promise with an Identity using the defauld domain', function (done) {

      var expectedMessage = { id: 'openidtest10@gmail.com',
        descriptor: 'hyperty-catalogue://ist.pt/.well-known/hyperty/HelloHyperty',
        hypertyURL: 'hyperty://ist.pt/1' };

      expect(hypertyDiscovery.discoverHypertyPerUser('openidtest10@gmail.com').then(function (response) {
        return response;
      })).to.be.fulfilled.and.eventually.eql(expectedMessage).and.notify(done);
    });

    it('should return a Promise with an Identity using a given domain', function (done) {

      var expectedMessage = { id: 'openidtest10@specific.com',
        descriptor: 'hyperty-catalogue://specific.com/.well-known/hyperty/HelloHyperty',
        hypertyURL: 'hyperty://specific.com/1' };

      expect(hypertyDiscovery.discoverHypertyPerUser('openidtest10@specific.com', 'specific.com').then(function (response) {
        return response;
      })).to.be.fulfilled.and.eventually.eql(expectedMessage).and.notify(done);
    });
  });
});