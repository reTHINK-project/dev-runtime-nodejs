'use strict';

var _CatalogueDataObjectFactory = require('../src/catalogue-factory/CatalogueDataObjectFactory');

var _CatalogueDataObjectFactory2 = _interopRequireDefault(_CatalogueDataObjectFactory);

var _RuntimeConstraint = require('../src/catalogue-factory/RuntimeConstraint');

var _RuntimeConstraint2 = _interopRequireDefault(_RuntimeConstraint);

var _CatalogueDataObject = require('../src/catalogue-factory/CatalogueDataObject');

var _DataObjectSchema = require('../src/catalogue-factory/DataObjectSchema');

var _HypertyDescriptor = require('../src/catalogue-factory/HypertyDescriptor');

var _HypertyRuntimeDescriptor = require('../src/catalogue-factory/HypertyRuntimeDescriptor.js');

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiAsPromised = require('chai-as-promised');

var _chaiAsPromised2 = _interopRequireDefault(_chaiAsPromised);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;
_chai2.default.use(_chaiAsPromised2.default);

//Testing the CatalogueDataObject-Factory
describe('CatalogueDataObjectFactory', function () {

    var catalogueDataObjectFactory = void 0;

    describe('constructor()', function () {

        it('should create a CatalogueDataObject-Factory object without error', function () {
            catalogueDataObjectFactory = new _CatalogueDataObjectFactory2.default("false", '{}');
        });

        it('should validate', function () {
            expect(catalogueDataObjectFactory.validate()).to.be.true;
        });
    });
    describe('createHypertyDescriptorObject()', function () {

        var hypertyDescriptor = void 0;

        it('should generate HypertyDescriptor', function () {
            hypertyDescriptor = catalogueDataObjectFactory.createHypertyDescriptorObject("525f4671-ebd8-4b35-b062-5a126bf44628", "1.0", "My awesome Hyperty", "Description of Hyperty", _CatalogueDataObject.DataObjectSourceLanguage.JAVASCRIPT_ECMA6, "https://example.org/my-awesome-hyperty/source", [_HypertyDescriptor.HypertyResourceType.av, _HypertyDescriptor.HypertyResourceType.chat], {});
            expect(hypertyDescriptor).not.to.be.empty;
        });

        it('should be of type HYPERTY', function () {
            expect(hypertyDescriptor.type).to.eql(_CatalogueDataObject.CatalogueObjectType.HYPERTY);
        });

        it('testing getters/setters (name, type, messageSchema)', function () {
            var name = "My amazing Hyperty";
            var messageSchema = "test";
            var type = _CatalogueDataObject.CatalogueObjectType.HYPERTY;

            hypertyDescriptor.name = name;
            hypertyDescriptor.type = type;
            hypertyDescriptor.messageSchema = messageSchema;

            expect(hypertyDescriptor.name).to.eql(name);
            expect(hypertyDescriptor.type).to.eql(type);
            expect(hypertyDescriptor.messageSchema).to.eql(messageSchema);
        });

        it('should have valid GUID', function () {
            var guid = hypertyDescriptor.guid;
            expect(guidCheck(guid)).to.be.true;
        });
    });

    describe('createProtoStubDescriptorObject()', function () {
        var protocolStubDescriptor = void 0;

        it('should generate ProtocolStubDescriptor', function () {
            protocolStubDescriptor = catalogueDataObjectFactory.createProtoStubDescriptorObject("3339515e-e457-4fe0-b780-68263ca216db", "1.1", "My awesome Hyperty 2", "Description of Hyperty 2", _CatalogueDataObject.DataObjectSourceLanguage.JAVASCRIPT_ECMA6, "https://example.org/my-awesome-hyperty-2/source", {}, {}, new _RuntimeConstraint2.default());
            expect(protocolStubDescriptor).not.to.be.empty;
        });

        it('should be of type PROTOSTUB', function () {
            expect(protocolStubDescriptor.type).to.eql(_CatalogueDataObject.CatalogueObjectType.PROTOSTUB);
        });

        it('should have valid GUID', function () {
            var guid = protocolStubDescriptor.guid;
            expect(guidCheck(guid)).to.be.true;
        });
    });

    describe('createHypertyInterceptorObject()', function () {
        var hypertyInterceptorDescriptor = void 0;

        it('should generate HypertyInterceptorDescriptor', function () {
            hypertyInterceptorDescriptor = catalogueDataObjectFactory.createHypertyInterceptorDescriptorObject("5dc08572-56e5-4ad1-99c8-79c49578a5b0", "1.0", "My awesome Hyperty 3", "Description of Hyperty 2", _CatalogueDataObject.DataObjectSourceLanguage.PYTHON, "https://example.com/my-awesome-hyperty-3/source", {}, []);
            expect(hypertyInterceptorDescriptor).not.to.be.empty;
        });

        it('should be of type HYPERTY_INTERCEPTOR', function () {
            expect(hypertyInterceptorDescriptor.type).to.eql(_CatalogueDataObject.CatalogueObjectType.HYPERTY_INTERCEPTOR);
        });

        it('should have valid GUID', function () {
            var guid = hypertyInterceptorDescriptor.guid;
            expect(guidCheck(guid)).to.be.true;
        });
    });

    describe('createSourcePackage()', function () {
        var sourcePackage = void 0;

        it('should generate SourcePackage', function () {
            sourcePackage = catalogueDataObjectFactory.createSourcePackage("MyClassName", {});
            expect(sourcePackage).not.to.be.empty;
        });
    });

    describe('createCatalogueDataObject()', function () {

        var catalogueDataObject = void 0;

        it('should generate CatalogueDataObject of type HypertyDescriptor', function () {
            catalogueDataObject = catalogueDataObjectFactory.createCatalogueDataObject("df7c7237-03e4-4547-89ca-c0c8b8d88f63", _CatalogueDataObject.CatalogueObjectType.HYPERTY, "2.5.1", "My awesome Hyperty 4", "Description of Hyperty 4", _CatalogueDataObject.DataObjectSourceLanguage.JAVASCRIPT_ECMA6, "https://example.org/my-awesome-hyperty/source");
            expect(catalogueDataObject).not.to.be.empty;
        });

        it('should be of type HYPERTY', function () {
            expect(catalogueDataObject.type).to.eql(_CatalogueDataObject.CatalogueObjectType.HYPERTY);
        });

        it('should have valid GUID', function () {
            var guid = catalogueDataObject.guid;
            expect(guidCheck(guid)).to.be.true;
        });
    });

    describe('createHypertyRuntimeDescriptorObject()', function () {
        var hypertyRuntimeDescriptor = void 0;

        it('should generate HypertyRuntimeDescriptor', function () {
            hypertyRuntimeDescriptor = catalogueDataObjectFactory.createHypertyRuntimeDescriptorObject("b36392c3-73d4-4a63-942b-4a9c2c663eea", "0.4.4", "My awesome Hyperty 5", "Description of Hyperty 5", _CatalogueDataObject.DataObjectSourceLanguage.JAVASCRIPT_ECMA6, "https://example.org/my-awesome-hyperty-5/source", _HypertyRuntimeDescriptor.RuntimeType.BROWSER, new _HypertyRuntimeDescriptor.RuntimeHypertyCapability(true, true, true, false, false), new _HypertyRuntimeDescriptor.RuntimeProtocolCapability(true, true, true, true, false, true));
            expect(hypertyRuntimeDescriptor).not.to.be.empty;
        });

        it('should be of type HYPERTY_RUNTIME', function () {
            expect(hypertyRuntimeDescriptor.type).to.eql(_CatalogueDataObject.CatalogueObjectType.HYPERTY_RUNTIME);
        });

        it('should have valid GUID', function () {
            var guid = hypertyRuntimeDescriptor.guid;
            expect(guidCheck(guid)).to.be.true;
        });
    });

    describe('createHypertyDataObjectSchema()', function () {
        var dataObjectSchema = void 0;

        it('should generate HypertyDataObjectSchema', function () {
            dataObjectSchema = catalogueDataObjectFactory.createHypertyDataObjectSchema("b36392c3-73d4-4a63-942b-4a9c2c663eea", "1.2.1", "My awesome Schema", "Description of Schema", _CatalogueDataObject.DataObjectSourceLanguage.JAVASCRIPT_ECMA6, "https://example.org/my-awesome-schema/source", "accessControlPolicyString", _DataObjectSchema.DataUrlScheme.COMM);
            expect(dataObjectSchema).not.to.be.empty;
        });

        it('should be of type DATA_SCHEMA', function () {
            expect(dataObjectSchema.type).to.eql(_CatalogueDataObject.CatalogueObjectType.HYPERTY_DATA_OBJECT);
        });

        it('should have valid GUID', function () {
            var guid = dataObjectSchema.guid;
            expect(guidCheck(guid)).to.be.true;
        });
    });

    function guidCheck(guid) {
        if (typeof guid === "undefined") return false;else {
            //GUID should match standard RFC4122
            var match = guid.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
            return match !== null && match.length === 1;
        }
    }
});