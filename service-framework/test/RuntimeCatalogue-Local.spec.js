'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

var _sinonChai = require('sinon-chai');

var _sinonChai2 = _interopRequireDefault(_sinonChai);

var _RuntimeCatalogue = require('../src/RuntimeCatalogue');

var _RuntimeFactory = require('./resources/RuntimeFactory');

var _RuntimeFactory2 = _interopRequireDefault(_RuntimeFactory);

var _utils = require('../src/utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

_chai2.default.config.truncateThreshold = 0;
_chai2.default.use(_chaiAsPromised2.default);
_chai2.default.use(_sinonChai2.default);

// Testing runtimeUA;
describe('Local Runtime Catalogue', function () {

  var _hypertyDescriptor = void 0;
  var _stubDescriptor = void 0;
  var type = 'https';
  var domain = 'sp.domain';
  var runtimeFactory = new _RuntimeFactory2.default();

  var runtimeCatalogue = new _RuntimeCatalogue.RuntimeCatalogueLocal(runtimeFactory);
  runtimeCatalogue.runtimeURL = domain;

  before(function () {

    var Hyperties = {
      HelloHyperty: {
        cguid: '1',
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

    _sinon2.default.stub(runtimeCatalogue, '_createHyperty', function (_this, rawHyperty) {
      return rawHyperty;
    });

    _sinon2.default.stub(runtimeCatalogue, '_createStub', function (_this, rawHyperty) {
      return rawHyperty;
    });

    _sinon2.default.stub(runtimeCatalogue, '_createRuntimeDescriptor', function (_this, rawHyperty) {
      return rawHyperty;
    });

    _sinon2.default.stub(runtimeCatalogue, '_createDataSchema', function (_this, rawHyperty) {
      return rawHyperty;
    });

    _sinon2.default.stub(runtimeCatalogue, '_createIdpProxy', function (_this, rawHyperty) {
      return rawHyperty;
    });

    _sinon2.default.stub(runtimeCatalogue, 'getHypertyDescriptor', function (hypertyURL) {
      var _this = this;
      return _this.getDescriptor(hypertyURL, runtimeCatalogue._createHyperty);
    });

    _sinon2.default.stub(runtimeCatalogue, 'getStubDescriptor', function (stubURL) {
      var _this = this;

      var dividedURL = (0, _utils.divideURL)(stubURL);
      var type = dividedURL.type;
      var domain = dividedURL.domain;
      var protostub = dividedURL.identity;

      if (!protostub) {
        protostub = 'default';
      } else {
        protostub = protostub.substring(protostub.lastIndexOf('/') + 1);
      }

      stubURL = type + '://' + domain + '/.well-known/protostub/' + protostub;

      return _this.getDescriptor(stubURL, runtimeCatalogue._createStub);
    });

    _sinon2.default.stub(runtimeCatalogue, 'getRuntimeDescriptor', function (runtimeURL) {
      var _this = this;
      return _this.getDescriptor(runtimeURL, runtimeCatalogue._createRuntimeDescriptor);
    });

    _sinon2.default.stub(runtimeCatalogue, 'getDataSchemaDescriptor', function (dataSchemaURL) {
      var _this = this;
      return _this.getDescriptor(dataSchemaURL, runtimeCatalogue._createDataSchema);
    });

    _sinon2.default.stub(runtimeCatalogue, 'getIdpProxyDescriptor', function (idpProxyURL) {
      var _this = this;
      return _this.getDescriptor(idpProxyURL, runtimeCatalogue._createIdpProxy);
    });

    _sinon2.default.stub(runtimeCatalogue, 'getDescriptor', function (url, createFunc) {

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

        // console.log('creating descriptor based on: ', result);
        var descriptor = createFunc(runtimeCatalogue, result);

        // persistenceManager.set(descriptorURL, descriptor.version, result);
        // console.log('created descriptor object:', hyperty);
        resolve(descriptor);
      });
    });
  });

  after(function () {
    runtimeCatalogue.getDescriptor.restore();
  });

  it('should get hyperty descriptor', function (done) {

    var descriptorValidation = ['guid', 'type', 'version', 'objectName', 'description', 'language', 'sourcePackageURL', 'signature', 'sourcePackage', 'configuration', 'constraints', 'policies', 'messageSchema', 'hypertyType', 'dataObjects'];

    // TODO: Check the hyperty descriptor response and compare
    // with what is defined in the specification;
    var hypertyDescriptorURL = 'hyperty-catalogue://' + domain + '/HelloHyperty';
    expect(runtimeCatalogue.getHypertyDescriptor(hypertyDescriptorURL).then(function (hypertyDescriptor) {
      _hypertyDescriptor = hypertyDescriptor;
      return _hypertyDescriptor;
    }).catch(function (reason) {
      throw new Error(reason);
    })).to.be.fulfilled.and.eventually.to.have.any.keys(descriptorValidation).and.notify(done);
  });

  it('should get hyperty source code', function (done) {

    expect(runtimeCatalogue.getSourceCodeFromDescriptor(_hypertyDescriptor)).to.be.fulfilled.and.notify(done);
  });

  it('should get Stub descriptor', function (done) {

    //
    // guid, id, description, kind, catalogueURL,
    // sourceCode, dataObject, type, messageSchema,
    // policies, constraints, configuration,
    // hypertyCapabilities, protocolCapabilities
    //
    var descriptorValidation = ['guid', 'type', 'version', 'description', 'objectName', 'sourcePackageURL', 'sourcePackage', 'language', 'signature', 'messageSchemas', 'configuration', 'constraints'];

    // TODO: Check the hyperty descriptor response and compare
    // with what is defined in the specification;
    var domainURL = 'domain.sp';

    expect(runtimeCatalogue.getStubDescriptor(domainURL).then(function (stubDescriptor) {
      _stubDescriptor = stubDescriptor;
      return _stubDescriptor;
    }).catch(function (reason) {
      throw new Error(reason);
    })).to.be.fulfilled.and.eventually.to.have.any.keys(descriptorValidation).and.eventually.with.deep.property('configuration').that.to.have.any.keys('url').and.notify(done);
  });

  it('should get stub source code', function (done) {

    expect(runtimeCatalogue.getSourceCodeFromDescriptor(_stubDescriptor)).to.be.fulfilled.and.notify(done);
  });
});