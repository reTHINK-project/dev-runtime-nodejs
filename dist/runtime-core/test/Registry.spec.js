'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _Registry = require('../src/registry/Registry');

var _Registry2 = _interopRequireDefault(_Registry);

var _Sandbox = require('../src/sandbox/Sandbox');

var _Sandbox2 = _interopRequireDefault(_Sandbox);

var _MessageBus = require('../src/bus/MessageBus');

var _MessageBus2 = _interopRequireDefault(_MessageBus);

var _RuntimeFactory = require('./resources/RuntimeFactory');

var _RuntimeFactory2 = _interopRequireDefault(_RuntimeFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.config.truncateThreshold = 0;

var expect = _chai2.default.expect;
_chai2.default.use(_chaiAsPromised2.default);

// Main dependecies


// Testing Registry

var runtimeURL = 'hyperty-runtime://ua.pt/123';

var runtimeFactory = new _RuntimeFactory2.default();
var appSandbox = runtimeFactory.createAppSandbox();
var sandboxDummy = { sandbox: 'sandbox', type: 'normal' };
var protostubURL = 'url';
var identityModule = {
  getIdentityAssertion: function getIdentityAssertion() {
    var identityBundle = { userProfile: { email: 'openidtest10@gmail.com', token: 'idToken', userURL: 'user://gmail.com/openidtest10' } };
    return new Promise(function (resolve, reject) {
      resolve(identityBundle);
    });
  }
};

var runtimeCatalogue = {
  getDataSchemaDescriptor: function getDataSchemaDescriptor() {
    return new Promise(function (resolve, reject) {
      var dataschema = { sourcePackage: { sourceCode: { properties: { scheme: { constant: 'value' } } } } };
      resolve(dataschema);
    });
  }
};

var getRegistry = new Promise(function (resolve) {
  var registry = new _Registry2.default(runtimeURL, appSandbox, identityModule, runtimeCatalogue);
  resolve(registry);
});

//registry = new Registry(msgbus, runtimeURL, appSandbox);
getRegistry.then(function (registry) {
  describe('Registry', function () {
    var msgbus = new _MessageBus2.default(registry);
    registry.messageBus = msgbus;

    registry.messageBus.addListener('domain://registry.ua.pt/', function (msg) {
      var responseMessage = { id: msg.id, type: 'response', to: msg.from, from: msg.to,
        body: { code: 200 } };

      msgbus.postMessage(responseMessage);
    });

    describe('constructor()', function () {

      it('depends of the MessageBus', function () {
        expect(registry.messageBus).to.be.instanceof(_MessageBus2.default);
      });
    });

    describe('getAppSandbox()', function () {
      it('return AppSandbox()', function () {
        var sandbox = registry.getAppSandbox();
        expect(sandbox).to.be.instanceof(_Sandbox2.default);
      });
    });

    describe('registerStub(sandBox, domainURL)', function () {

      it('should register a stub', function (done) {
        var domainURL = 'ua.pt';

        expect(registry.registerStub(sandboxDummy, domainURL).then(function (done) {
          return done;
        })).to.be.fulfilled.and.eventually.to.contain('msg-node.ua.pt/protostub/').and.notify(done);
      });
    });

    describe('discoverProtostub(url)', function () {

      it('should discover a ProtocolStub', function (done) {
        var url = 'ua.pt';

        expect(registry.discoverProtostub(url).then(function (response) {
          protostubURL = response;
          return response;
        })).to.be.fulfilled.and.eventually.to.contain('msg-node.ua.pt/protostub/').and.notify(done);
      });
    });

    describe('registerPEP(postMessage, hyperty)', function () {

      it('should register PEP', function (done) {
        var postMessage = {};
        var hyperty = 'hyperty-catalogue://ua.pt/HelloHyperty';

        expect(registry.registerPEP(postMessage, hyperty).then(function (response) {
          return response;
        })).to.be.fulfilled.and.eventually.equal('PEP registered with success').and.notify(done);
      });
    });

    describe('unregisterPEP(HypertyRuntimeURL)', function () {

      it('should unregister PEP', function (done) {
        var HypertyRuntimeURL = 'hyperty-catalogue://ua.pt/HelloHyperty';

        expect(registry.unregisterPEP(HypertyRuntimeURL).then(function (response) {
          return response;
        })).to.be.fulfilled.and.eventually.equal('PEP successfully removed.').and.notify(done);
      });
    });

    describe('registerHyperty(sandbox, descriptorURL, descriptor)', function () {

      it('should register an Hyperty', function (done) {

        var descriptorURL = 'hyperty-catalogue://ua.pt/<catalogue-object-identifier>';
        var descriptor = {
          _objectName: 'hyperty-chat',
          dataObjects: ['url'],
          hypertyType: ['comm']
        };

        registry.messageBus.addListener('domain://msg-node.ua.pt/hyperty-address-allocation', function (msg) {
          var message = { id: 1, type: 'response', from: 'domain://msg-node.ua.pt/hyperty-address-allocation', to: msg.from,
            body: { code: 200, value: { allocated: ['hyperty://ua.pt/1'] } } };

          registry.messageBus.postMessage(message, function (reply) {
            console.log('Reply: ', reply);
          });
        });

        expect(registry.registerHyperty(sandboxDummy, descriptorURL, descriptor)).to.be.fulfilled.and.eventually.equal('hyperty://ua.pt/1').and.notify(done);
      });
    });

    describe('getSandbox(url)', function () {

      it('should get a sandbox from a domain', function (done) {
        var domain = 'ua.pt';

        expect(registry.getSandbox(domain).then(function (response) {
          return response;
        })).to.be.fulfilled.and.eventually.to.be.eql(sandboxDummy).and.notify(done);
      });

      it('should get a sandbox from a specific hypertyIstance', function (done) {
        var hypertyInstance = 'hyperty://ua.pt/1';

        expect(registry.getSandbox(hypertyInstance).then(function (response) {
          return response;
        })).to.be.fulfilled.and.eventually.to.be.eql(sandboxDummy).and.notify(done);
      });

      it('should get a sandbox from a specific protostubURL', function (done) {

        expect(registry.getSandbox(protostubURL).then(function (response) {
          return response;
        })).to.be.fulfilled.and.eventually.to.be.eql(sandboxDummy).and.notify(done);
      });

      it('should get a sandbox from a protoStub URL containing the domain', function (done) {
        var domainURL = 'anotherDomain.pt';

        registry.registerStub(sandboxDummy, domainURL).then(function () {
          expect(registry.getSandbox('anotherDomain.pt').then(function (response) {
            return response;
          })).to.be.fulfilled.and.eventually.equal(sandboxDummy).and.notify(done);
        });
      });
    });

    describe('resolve(url)', function () {

      it('should return a protostub url', function (done) {
        var url = 'hyperty-runtime://ua.pt/protostub/123';

        expect(registry.resolve(url).then(function (response) {
          return response;
        })).to.be.fulfilled.and.eventually.to.contain('msg-node.ua.pt/protostub/').and.notify(done);
      });
    });

    describe('unregisterStub(url)', function () {

      it('should unregister a ProtocolStub', function (done) {
        var url = 'ua.pt';

        expect(registry.unregisterStub(url).then(function (response) {
          return response;
        })).to.be.fulfilled.and.eventually.equal('ProtostubURL removed').and.notify(done);
      });
    });

    describe('getHypertyOwner(hypertyURL)', function () {
      it('should return the user associated to the hyperty URL', function () {
        var url = 'hyperty://ua.pt/1';
        expect(registry.getHypertyOwner(url)).to.be.eql('user://gmail.com/openidtest10');
      });
    });

    describe('getHypertyName(hypertyURL)', function () {
      it('should return the hyperty Name from a given hypertyURL', function () {
        var url = 'hyperty://ua.pt/1';

        expect(registry.getHypertyName(url)).to.be.equal('hyperty-chat');
      });
    });

    describe('registerDataObject(identifier, dataObjectschema, dataObjectUrl, dataObjectReporter, authorise)', function () {
      it('should register a new Data Object in the runtime registry', function (done) {
        var identifier = 'hello-chat';
        var dataObjectschema = 'hyperty-catalogue://catalogue.localhost/.well-known/dataschema/Communication';
        var dataObjectUrl = 'comm://localhost/9303b707-f301-4929-ad7d-65a89a356871';
        var dataObjectReporter = 'hyperty://localhost/d692091f-192c-420c-a763-a180f13e626a';
        var authorise = ['user://gmail.com/user15'];

        expect(registry.registerDataObject(identifier, dataObjectschema, dataObjectUrl, dataObjectReporter, ['fake'], authorise).then(function (response) {
          return response;
        })).to.be.fulfilled.and.eventually.equal('ok').and.notify(done);
      });
    });

    describe('getReporterURL(dataObjectURL)', function () {
      it('should return the reporterURL associated with the dataobject URL', function (done) {
        var dataObjectURL = 'comm://localhost/9303b707-f301-4929-ad7d-65a89a356871';
        var fakedataObjectURL = 'comm://fake';

        expect(registry.getReporterURL(dataObjectURL).then(function (response) {
          return response;
        })).to.be.fulfilled.and.eventually.equal('hyperty://localhost/d692091f-192c-420c-a763-a180f13e626a').and.notify(done);

        expect(registry.getReporterURL(fakedataObjectURL).then(function (response) {
          return response;
        })).to.be.fulfilled.and.eventually.equal('No reporter was found').and.notify(done);
      });
    });

    describe('getPreAuthSubscribers(dataObjectURL)', function () {
      it('should return the list of pre authorised users', function () {
        var dataObjectURL = 'comm://localhost/9303b707-f301-4929-ad7d-65a89a356871';
        var fakedataObjectURL = 'comm://fake';

        expect(registry.getPreAuthSubscribers(dataObjectURL)).to.be.eql(['user://gmail.com/user15']);

        expect(registry.getPreAuthSubscribers(fakedataObjectURL)).to.be.eql([]);
      });
    });

    describe('getDataObjectSubscribers(dataObjectURL)', function () {
      it('should return the list of pre authorised users', function () {
        var dataObjectURL = 'comm://localhost/9303b707-f301-4929-ad7d-65a89a356871';
        var fakedataObjectURL = 'comm://fake';
        var subscriberURL = 'hyperty://localhost/00-00-sub1';

        registry.registerSubscriber(dataObjectURL, subscriberURL);

        expect(registry.getDataObjectSubscribers(dataObjectURL)).to.be.eql(['hyperty://localhost/00-00-sub1']);
      });
    });

    describe('unregisterHyperty(url)', function () {
      it('should unregister an Hyperty', function (done) {
        var url = 'hyperty://ua.pt/1';

        expect(registry.unregisterHyperty(url).then(function (response) {
          return response;
        })).to.be.fulfilled.and.eventually.equal('Hyperty successfully deleted').and.notify(done);
      });
    });
  });
});