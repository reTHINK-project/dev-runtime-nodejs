'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _RuntimeUA = require('../src/runtime/RuntimeUA');

var _RuntimeUA2 = _interopRequireDefault(_RuntimeUA);

var _Registry = require('../src/registry/Registry');

var _Registry2 = _interopRequireDefault(_Registry);

var _IdentityModule = require('../src/identity/IdentityModule');

var _IdentityModule2 = _interopRequireDefault(_IdentityModule);

var _PolicyEngine = require('../src/policy/PolicyEngine');

var _PolicyEngine2 = _interopRequireDefault(_PolicyEngine);

var _MessageBus = require('../src/bus/MessageBus');

var _MessageBus2 = _interopRequireDefault(_MessageBus);

var _RuntimeCatalogue = require('service-framework/dist/RuntimeCatalogue');

var _utils = require('../src/utils/utils');

var _RuntimeFactory = require('./resources/RuntimeFactory');

var _RuntimeFactory2 = _interopRequireDefault(_RuntimeFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

_chai2.default.use(_chaiAsPromised2.default);
_chai2.default.use(_sinonChai2.default);

// Testing Module


// Main dependecies


// Testing runtimeUA;
describe('RuntimeUA', function () {

  // Only for testing
  var runtimeURL = 'runtime://sp.domain/123';
  var runtimeFactory = new _RuntimeFactory2.default();
  var runtime = new _RuntimeUA2.default(runtimeFactory, 'sp.domain');

  // Testing with the Local Runtime and Catalogue
  runtime.runtimeCatalogue = new _RuntimeCatalogue.RuntimeCatalogueLocal(runtimeFactory);

  before(function () {

    var Hyperties = {
      HelloHyperty: {
        cguid: '20',
        type: '0',
        version: '0.1',
        description: 'description of Hello Hyperty',
        objectName: 'HelloHyperty',
        sourcePackageURL: '/sourcePackage',
        sourcePackage: {
          sourceCode: '',
          sourceCodeClassname: 'HelloHyperty',
          encoding: 'UTF-8',
          signature: ''
        },
        language: 'Javascript ECMA5',
        signature: '',
        messageSchemas: '',
        configuration: '',
        constraints: '',
        hypertyCapabilities: '',
        protocolCapabilities: '',
        policies: '',
        dataObjects: []
      },
      WorldHyperty: {
        cguid: '2',
        type: '0',
        version: '0.1',
        description: 'description of World Hyperty',
        objectName: 'WorldHyperty',
        sourcePackageURL: '/sourcePackage',
        sourcePackage: {
          sourceCode: '',
          sourceCodeClassname: 'WorldHyperty',
          encoding: 'UTF-8',
          signature: ''
        },
        language: 'Javascript ECMA5',
        signature: '',
        messageSchemas: '',
        configuration: '',
        constraints: '',
        hypertyCapabilities: '',
        protocolCapabilities: '',
        policies: '',
        dataObjects: []
      }
    };

    var ProtoStubs = {
      default: {
        cguid: '1',
        type: '0',
        version: '0.1',
        description: 'description of VertxProtoStub',
        objectName: 'VertxProtoStub',
        sourcePackageURL: '/sourcePackage',
        sourcePackage: {
          sourceCode: '',
          sourceCodeClassname: 'VertxProtoStub',
          encoding: 'Base64',
          signature: ''
        },
        language: 'Javascript ECMA5',
        signature: '',
        messageSchemas: '',
        configuration: {
          url: 'wss://127.0.0.1:9090/ws'
        },
        constraints: '',
        hypertyCapabilities: '',
        protocolCapabilities: '',
        policies: '',
        dataObjects: []
      }
    };

    _sinon2.default.stub(runtime.runtimeCatalogue, '_createHyperty', function (_this, rawHyperty) {
      return rawHyperty;
    });

    _sinon2.default.stub(runtime.runtimeCatalogue, '_createStub', function (_this, rawHyperty) {
      return rawHyperty;
    });

    _sinon2.default.stub(runtime.runtimeCatalogue, '_createRuntimeDescriptor', function (_this, rawHyperty) {
      return rawHyperty;
    });

    _sinon2.default.stub(runtime.runtimeCatalogue, '_createDataSchema', function (_this, rawHyperty) {
      return rawHyperty;
    });

    _sinon2.default.stub(runtime.runtimeCatalogue, '_createIdpProxy', function (_this, rawHyperty) {
      return rawHyperty;
    });

    _sinon2.default.stub(runtime.runtimeCatalogue, 'getHypertyDescriptor', function (hypertyURL) {
      var _this = this;
      return _this.getDescriptor(hypertyURL, runtime.runtimeCatalogue._createHyperty);
    });

    _sinon2.default.stub(runtime.runtimeCatalogue, 'getStubDescriptor', function (stubURL) {
      var _this = this;
      return _this.getDescriptor(stubURL, runtime.runtimeCatalogue._createStub);
    });

    _sinon2.default.stub(runtime.runtimeCatalogue, 'getRuntimeDescriptor', function (runtimeURL) {
      var _this = this;
      return _this.getDescriptor(runtimeURL, runtime.runtimeCatalogue._createRuntimeDescriptor);
    });

    _sinon2.default.stub(runtime.runtimeCatalogue, 'getDataSchemaDescriptor', function (dataSchemaURL) {
      var _this = this;
      return _this.getDescriptor(dataSchemaURL, runtime.runtimeCatalogue._createDataSchema);
    });

    _sinon2.default.stub(runtime.runtimeCatalogue, 'getIdpProxyDescriptor', function (idpProxyURL) {
      var _this = this;
      return _this.getDescriptor(idpProxyURL, runtime.runtimeCatalogue._createIdpProxy);
    });

    _sinon2.default.stub(runtime.runtimeCatalogue, 'getDescriptor', function (url, createFunc) {

      var dividedURL = (0, _utils.divideURL)(url);
      var identity = dividedURL.identity;

      if (!identity) {
        identity = 'default';
      } else {
        identity = identity.substring(identity.lastIndexOf('/') + 1);
      }

      return new Promise(function (resolve, reject) {

        var result = void 0;

        if (url.includes('Hyperties') || url.includes('Hyperty')) {
          try {
            result = Hyperties[identity];
          } catch (e) {
            reject(e);
          }
        } else if (url.includes('ProtoStubs') || url.includes('protostub')) {
          try {
            result = ProtoStubs[identity];
          } catch (e) {
            reject(e);
          }
        }

        console.log(result);

        // console.log('creating descriptor based on: ', result);
        var descriptor = createFunc(runtime.runtimeCatalogue, result);

        // persistenceManager.set(descriptorURL, descriptor.version, result);
        // console.log('created descriptor object:', hyperty);
        resolve(descriptor);
      });
    });

    _sinon2.default.stub(runtime.registry, 'registerHyperty').returns(new Promise(function (resolve, reject) {
      resolve('hyperty://sp.domain/9c8c1949-e08e-4554-b201-bab201bdb21d');
    }));

    _sinon2.default.stub(runtime.registry, 'discoverProtostub').returns(new Promise(function (resolve, reject) {
      var stubDescriptor = ProtoStubs['default'];
      stubDescriptor.configuration = JSON.stringify(stubDescriptor.configuration);
      resolve(stubDescriptor);
    }));

    _sinon2.default.stub(runtime.registry, 'registerStub').returns(new Promise(function (resolve, reject) {
      resolve('msg-node.sp.domain/protostub/8541');
    }));

    _sinon2.default.stub(runtime.registry, 'getSandbox').returns(new Promise(function (resolve, reject) {
      resolve(runtimeFactory.createSandbox());
    }));

    _sinon2.default.stub(runtime.registry, 'getAppSandbox').returns(new Promise(function (resolve, reject) {
      resolve(runtimeFactory.createAppSandbox());
    }));

    _sinon2.default.stub(runtime.messageBus, 'addListener').returns(new Promise(function (resolve, reject) {
      resolve();
    }));
  });

  after(function () {
    // runtime.runtimeCatalogue.getDescriptor.restore();

    runtime.runtimeCatalogue.getHypertyDescriptor.restore();
    runtime.runtimeCatalogue.getStubDescriptor.restore();
    runtime.runtimeCatalogue.getRuntimeDescriptor.restore();
    runtime.runtimeCatalogue.getDataSchemaDescriptor.restore();
    runtime.runtimeCatalogue.getIdpProxyDescriptor.restore();

    runtime.runtimeCatalogue._createStub.restore();
    runtime.runtimeCatalogue._createRuntimeDescriptor.restore();
    runtime.runtimeCatalogue._createDataSchema.restore();
    runtime.runtimeCatalogue._createIdpProxy.restore();
    runtime.runtimeCatalogue._createHyperty.restore();
  });

  describe('constructor()', function () {

    it('depends of the Registry', function () {
      expect(runtime.registry).to.be.instanceof(_Registry2.default);
    });

    it('depends of the Identity Module', function () {
      expect(runtime.identityModule).to.be.instanceof(_IdentityModule2.default);
    });

    it('depends of the Policy Engine', function () {
      expect(runtime.policyEngine).to.be.instanceof(_PolicyEngine2.default);
    });

    it('depends of the MessageBus', function () {
      expect(runtime.messageBus).to.be.instanceof(_MessageBus2.default);
    });

    it('should throw when given no arguments', function () {
      expect(runtime).to.have.property('runtimeFactory');
    });
  });

  describe('loadHyperty(hypertyDescriptorURL)', function () {

    it('should throw when given no arguments', function (done) {
      var hypertyDescriptorURL = 'hyperty-catalogue://sp.domain/.well-known/hyperty/HelloHyperty';
      var loadHyperty = runtime.loadHyperty(hypertyDescriptorURL);

      expect(loadHyperty).to.be.fulfilled.and.notify(done);
    });

    it('should be a Promise', function (done) {

      var hypertyDescriptorURL = 'hyperty-catalogue://sp.domain/.well-known/hyperty/HelloHyperty';
      var loadHyperty = runtime.loadHyperty(hypertyDescriptorURL);

      expect(loadHyperty).to.be.fulfilled.and.to.be.instanceof(Promise).and.notify(done);
    });

    it('should be deployed', function (done) {

      var hypertyDescriptorURL = 'hyperty-catalogue://sp.domain/.well-known/hyperty/HelloHyperty';
      var loadHyperty = runtime.loadHyperty(hypertyDescriptorURL);

      var hypertyResolved = ['runtimeHypertyURL', 'status'];

      expect(loadHyperty).to.be.fulfilled.and.eventually.to.have.all.keys(hypertyResolved).and.notify(done);
    });
  });

  describe('loadStub(sp-domain)', function () {

    it('should throw when given no arguments', function (done) {
      var spDomain = 'sp.domain';
      var loadStubPromise = runtime.loadStub(spDomain);

      loadStubPromise.then(function (a) {
        console.log(a);
      }).catch(function (reason) {
        console.error(reason);
      });

      expect(loadStubPromise).to.be.fulfilled.and.notify(done);
    });

    it('should be a Promise', function (done) {
      var spDomain = 'sp.domain';
      var loadStubPromise = runtime.loadStub(spDomain);

      expect(loadStubPromise).to.be.fulfilled.to.be.instanceof(Promise).and.notify(done);
    });

    it('should be deployed', function (done) {
      var spDomain = 'sp.domain';
      var loadStubPromise = runtime.loadStub(spDomain);
      var stubResolved = ['runtimeProtoStubURL', 'status'];

      expect(loadStubPromise).to.be.fulfilled.and.eventually.to.have.all.keys(stubResolved).and.notify(done);
    });
  });
});