'use strict';

var _IdentityManager = require('../src/identityManager/IdentityManager');

var _IdentityManager2 = _interopRequireDefault(_IdentityManager);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;
_chai2.default.use(_chaiAsPromised2.default);

describe('IdentityManager', function () {
  var hypertyURL = 'hyperty://localhost/526e9670-593f-4641-8b63-98fa49f933a1';
  var runtimeURL = 'runtime://localhost/1051';
  var msgBus = {
    postMessage: function postMessage(msg, replyCallback) {

      expect(msg).to.eql({
        type: 'read', from: hypertyURL, to: runtimeURL + '/registry/',
        body: { resource: '.', criteria: hypertyURL }
      });

      replyCallback({
        type: 'read', from: runtimeURL + '/registry/', to: hypertyURL,
        body: { resource: { cn: 'test OpenID', userURL: 'user://gmail.com/openidtest10', username: 'openidtest10@gmail.com', avatar: 'avatarURL' } }
      });
    }
  };

  var identityManager = new _IdentityManager2.default(hypertyURL, runtimeURL, msgBus);
  var expectedValue = { cn: 'test OpenID', userURL: 'user://gmail.com/openidtest10', username: 'openidtest10@gmail.com', avatar: 'avatarURL' };

  describe('constructor()', function () {
    it('should create a identityManager object without error', function () {
      expect(identityManager.runtimeURL).to.be.equal(runtimeURL);
    });
  });

  describe('discoverUserRegistered()', function () {
    it('sould return a Promise with the identity associated', function (done) {

      expect(identityManager.discoverUserRegistered().then(function (response) {
        return response;
      })).to.be.fulfilled.and.eventually.eql(expectedValue).and.notify(done);
    });

    it('sould return a Promise with the identity associated (with optional hyperty field)', function (done) {

      expect(identityManager.discoverUserRegistered('.', hypertyURL).then(function (response) {
        return response;
      })).to.be.fulfilled.and.eventually.eql(expectedValue).and.notify(done);
    });
  });
});