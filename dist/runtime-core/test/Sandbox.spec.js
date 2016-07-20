'use strict';

var _SandboxRegistry = require('../src/sandbox/SandboxRegistry');

var _SandboxRegistry2 = _interopRequireDefault(_SandboxRegistry);

var _Sandbox = require('../src/sandbox/Sandbox');

var _Sandbox2 = _interopRequireDefault(_Sandbox);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;
_chai2.default.use(_chaiAsPromised2.default);

describe('Sandbox', function () {
  var externalURL = 'hyperty-runtime://sandbox/external';
  var internalURL = 'hyperty-runtime://sandbox/internal';

  it('deploy and undeploy', function (done) {
    var deploySend = void 0;

    var sb = new _Sandbox2.default();
    sb._onPostMessage = function (msg) {
      console.log(msg);
      if (msg.id === 1) {
        expect(msg).to.eql({
          id: 1, type: 'create', from: externalURL, to: internalURL,
          body: { url: 'hyperty://fake-url', sourceCode: '<source code>', config: { init: '<init>' } }
        });
      }

      if (msg.id === 2) {
        expect(msg).to.eql({
          id: 2, type: 'delete', from: externalURL, to: internalURL,
          body: { url: 'hyperty://fake-url' }
        });
      }

      deploySend(msg);
    };

    var bus = {
      addListener: function addListener(url, callback) {
        expect(url).to.eql(internalURL);
        deploySend = callback;
      },

      postMessage: function postMessage(msg) {
        expect(msg).to.eql({
          id: msg.id, type: 'response', from: internalURL, to: externalURL,
          body: { code: 200 }
        });

        sb._onMessage(msg);
      },

      removeAllListenersOf: function removeAllListenersOf(url) {
        expect(url).to.eql('hyperty://fake-url');
      }
    };

    var sbr = new _SandboxRegistry2.default(bus);
    sbr._create = function (url, sourceCode, config) {
      expect(url).to.eql('hyperty://fake-url');
      expect(sourceCode).to.eql('<source code>');
      expect(config).to.eql({ init: '<init>' });
      return '<instance>';
    };

    expect(sb.deployComponent('<source code>', 'hyperty://fake-url', { init: '<init>' }).then(function (deployReply) {
      expect(deployReply).to.eql('deployed');
      expect(sbr.components).to.eql({ 'hyperty://fake-url': '<instance>' });

      return sb.removeComponent('hyperty://fake-url').then(function (unDeployReply) {
        expect(unDeployReply).to.eql('undeployed');
        expect(sbr.components).to.eql({});
      });
    })).notify(done);
  });

  it('deploy url duplication rejected', function (done) {
    var deploySend = void 0;

    var sb = new _Sandbox2.default();
    sb._onPostMessage = function (msg) {
      deploySend(msg);
    };

    var bus = {
      addListener: function addListener(url, callback) {
        deploySend = callback;
      },

      postMessage: function postMessage(msg) {
        sb._onMessage(msg);
      }
    };

    var sbr = new _SandboxRegistry2.default(bus);
    sbr._create = function (url, sourceCode, config) {
      return '<instance>';
    };

    expect(sb.deployComponent('<source code>', 'hyperty://fake-url', { init: '<init>' }).then(function (deployReply) {
      expect(deployReply).to.eql('deployed');
      expect(sbr.components).to.eql({ 'hyperty://fake-url': '<instance>' });
      return expect(sb.deployComponent('<source code>', 'hyperty://fake-url', { init: '<init>' })).to.be.rejectedWith('Instance hyperty://fake-url already exist!');
    })).notify(done);
  });
});