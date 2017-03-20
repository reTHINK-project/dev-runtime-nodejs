"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _CatalogueDataObjectFactory = require("../catalogue-factory/CatalogueDataObjectFactory");

var _CatalogueDataObjectFactory2 = _interopRequireDefault(_CatalogueDataObjectFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RuntimeCatalogue = function () {
    function RuntimeCatalogue(runtimeFactory) {
        (0, _classCallCheck3.default)(this, RuntimeCatalogue);

        if (!runtimeFactory) throw Error('The catalogue needs the runtimeFactory');

        this._factory = new _CatalogueDataObjectFactory2.default();
        this.httpRequest = runtimeFactory.createHttpRequest();
        this.atob = runtimeFactory.atob ? runtimeFactory.atob : atob;
        this.storageManager = runtimeFactory.storageManager();
    }

    /**
     * Get a Catalogue Data Object (Descriptor) from a URL, and construct it using the provided function
     * @param {String} descriptorURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty
     * @param {function} createFunc - e.g. createHyperty
     * @param {boolean} [getFull] - whether or not to get descriptor with sourcePackage, or only the descriptor part
     * @returns {Promise}
     */


    (0, _createClass3.default)(RuntimeCatalogue, [{
        key: "getDescriptor",
        value: function getDescriptor(descriptorURL, createFunc) {
            var _this = this;

            var getFull = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

            console.log("getting descriptor from:", descriptorURL);

            // some flags for optimization
            // (later the descriptor will not be saved in case both of these booleans are true)
            var isSavedDescriptor = false;
            var isCompleteDescriptor = false;

            // get raw descriptor
            // first checks if descriptor is already in localStorage (based on cguid and version)
            var descriptorPromise = _promise2.default.all([this.httpRequest.get(descriptorURL + "/version"), this.httpRequest.get(descriptorURL + "/cguid")]).then(function (_ref) {
                var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
                    version = _ref2[0],
                    cguid = _ref2[1];

                console.log("got version (" + version + ") and cguid (" + cguid + ") for descriptor " + descriptorURL);

                // check if same version is contained in localStorage
                return _this.storageManager.getVersion(cguid).then(function (dbVersion) {
                    if (dbVersion >= version) {
                        console.log("storageManager contains saved version that is the same or newer than requested");
                        isSavedDescriptor = true;
                        return _this.storageManager.get(cguid);
                    } else {
                        console.log("storageManager does not contain saved version");
                        // no saved copy, proceed with retrieving descriptor
                        return _this.httpRequest.get(descriptorURL).then(function (descriptor) {
                            descriptor = JSON.parse(descriptor);
                            //console.log("got descriptor:", JSON.stringify(descriptor, null, 2));
                            if (descriptor["ERROR"]) {
                                // TODO handle error properly
                                throw new Error(descriptor);
                            } else {
                                return descriptor;
                            }
                        });
                    }
                });
            }).catch(function (error) {
                var errorString = "Unable to get descriptor for " + descriptorURL + ": " + error;
                console.error(errorString);
                throw new Error(errorString);
            });

            var returnPromise = descriptorPromise;

            // if getFull, attach sourcePackage
            if (getFull) {
                console.log("adding promise to attach sourcePackage");
                returnPromise = descriptorPromise.then(function (descriptor) {
                    if (descriptor.sourcePackage) {
                        isCompleteDescriptor = true;
                        return descriptor;
                    } else {
                        isCompleteDescriptor = false;
                        return _this.attachRawSourcePackage(descriptor);
                    }
                });
            }

            // finally create object
            returnPromise = returnPromise.then(function (descriptor) {
                // store if not saved before, or if full descriptor was requested and only partial descriptor was stored.
                if (!isSavedDescriptor || isSavedDescriptor && !isCompleteDescriptor && getFull) {
                    _this.storageManager.set(descriptor.cguid, descriptor.version, descriptor);
                }
                return createFunc.apply(_this, [descriptor]);
            });

            return returnPromise;
        }

        /**
         * Uses the sourcePackageURL from the descriptor, requests the sourcePackage and attaches it to the descriptor.
         * @param {CatalogueDataObject} descriptor
         * @returns {Promise} - fulfills with complete descriptor
         */

    }, {
        key: "attachRawSourcePackage",
        value: function attachRawSourcePackage(descriptor) {
            var _this2 = this;

            console.log("attaching raw sourcePackage from:", descriptor.sourcePackageURL);
            return new _promise2.default(function (resolve) {
                _this2.httpRequest.get(descriptor.sourcePackageURL).then(function (sourcePackage) {
                    sourcePackage = JSON.parse(sourcePackage);
                    //delete descriptor.sourcePackageURL;
                    //console.log("attaching sourcePackage:", sourcePackage);
                    descriptor.sourcePackage = sourcePackage;
                    resolve(descriptor);
                });
            });
        }

        /**
         * Get HypertyDescriptor
         * @param hypertyURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty
         * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
         * @returns {Promise}
         */

    }, {
        key: "getHypertyDescriptor",
        value: function getHypertyDescriptor(hypertyURL) {
            var getFull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return this.getDescriptor(hypertyURL, this.createHyperty, getFull);
        }

        /**
         * Get StubDescriptor
         * @param stubURL - e.g. mydomain.com/.well-known/protostub/MyProtostub
         * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
         * @returns {Promise}
         */

    }, {
        key: "getStubDescriptor",
        value: function getStubDescriptor(stubURL) {
            var getFull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return this.getDescriptor(stubURL, this.createStub, getFull);
        }

        /**
         * Get RuntimeDescriptor
         * @param runtimeURL - e.g. mydomain.com/.well-known/runtime/MyRuntime
         * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
         * @returns {Promise}
         */

    }, {
        key: "getRuntimeDescriptor",
        value: function getRuntimeDescriptor(runtimeURL) {
            var getFull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return this.getDescriptor(runtimeURL, this.createRuntimeDescriptor, getFull);
        }

        /**
         * Get DataSchemaDescriptor
         * @param dataSchemaURL - e.g. mydomain.com/.well-known/dataschema/MyDataSchema
         * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
         * @returns {Promise}
         */

    }, {
        key: "getDataSchemaDescriptor",
        value: function getDataSchemaDescriptor(dataSchemaURL) {
            var getFull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return this.getDescriptor(dataSchemaURL, this.createDataSchema, getFull);
        }

        /**
         * Get IDPProxyDescriptor
         * @param idpProxyURL - e.g. mydomain.com/.well-known/idp-proxy/MyProxy
         * @param {boolean} [getFull] - boolean to decide to get the descriptor with the sourcePackage or (potentially) without
         * @returns {Promise}
         */

    }, {
        key: "getIdpProxyDescriptor",
        value: function getIdpProxyDescriptor(idpProxyURL) {
            var getFull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return this.getDescriptor(idpProxyURL, this.createIdpProxy, getFull);
        }

        /**
         * Create HypertyDescriptor based on raw object that contains its attributes
         * @param {JSON} rawHyperty
         * @returns {HypertyDescriptor}
         */

    }, {
        key: "createHyperty",
        value: function createHyperty(rawHyperty) {
            //console.log("createHyperty:", rawHyperty);
            // create the descriptor
            var hyperty = this._factory.createHypertyDescriptorObject(rawHyperty["cguid"], rawHyperty["version"], rawHyperty["objectName"], rawHyperty["description"], rawHyperty["language"], rawHyperty["sourcePackageURL"], rawHyperty["type"] || rawHyperty["hypertyType"], rawHyperty["dataObjects"]);
            //console.log("factory returned:", hyperty);

            // optional fields
            hyperty.configuration = rawHyperty["configuration"];
            hyperty.constraints = rawHyperty["constraints"];
            hyperty.messageSchema = rawHyperty["messageSchema"];
            hyperty.policies = rawHyperty["policies"];
            hyperty.signature = rawHyperty["signature"];

            // parse and attach sourcePackage
            var sourcePackage = rawHyperty["sourcePackage"];
            if (sourcePackage) {
                hyperty.sourcePackage = this.createSourcePackage(sourcePackage);
            }

            return hyperty;
        }

        /**
         * Create ProtocolStubDescriptor based on raw object that contains its attributes
         * @param rawStub
         * @returns {ProtocolStubDescriptor}
         */

    }, {
        key: "createStub",
        value: function createStub(rawStub) {
            // console.log("creating stub descriptor based on: ", rawStub);

            // create the descriptor
            var stub = this._factory.createProtoStubDescriptorObject(rawStub["cguid"], rawStub["version"], rawStub["objectName"], rawStub["description"], rawStub["language"], rawStub["sourcePackageURL"], rawStub["messageSchemas"], rawStub["configuration"], rawStub["constraints"], rawStub["hypertyType"], rawStub["dataObjects"], rawStub["interworking"], rawStub["idpProxy"], rawStub["mutualAuthentication"]);

            // optional fields
            stub.signature = rawStub["signature"];

            // parse and attach the sourcePackage
            var sourcePackage = rawStub["sourcePackage"];
            if (sourcePackage) {
                stub.sourcePackage = this.createSourcePackage(sourcePackage);
            }

            return stub;
        }

        /**
         * Create HypertyRuntimeDescriptor based on raw object that contains its attributes
         * @param rawRuntime
         * @returns {HypertyRuntimeDescriptor}
         */

    }, {
        key: "createRuntimeDescriptor",
        value: function createRuntimeDescriptor(rawRuntime) {
            // parse capabilities first
            try {
                rawRuntime["hypertyCapabilities"] = JSON.parse(rawRuntime["hypertyCapabilities"]);
                rawRuntime["protocolCapabilities"] = JSON.parse(rawRuntime["protocolCapabilities"]);
            } catch (e) {}
            // already json object

            //console.log("creating runtime descriptor based on: ", rawRuntime);


            // create the descriptor
            var runtime = this._factory.createHypertyRuntimeDescriptorObject(rawRuntime["cguid"], rawRuntime["version"], rawRuntime["objectName"], rawRuntime["description"], rawRuntime["language"], rawRuntime["sourcePackageURL"], rawRuntime["type"] || rawRuntime["runtimeType"], rawRuntime["hypertyCapabilities"], rawRuntime["protocolCapabilities"], rawRuntime["p2pHandlerStub"], rawRuntime["p2pRequesterStub"]);

            // optional fields
            runtime.signature = rawRuntime["signature"];

            // parse and attach sourcePackage
            var sourcePackage = rawRuntime["sourcePackage"];
            if (sourcePackage) {
                // console.log("runtime has sourcePackage:", sourcePackage);
                runtime.sourcePackage = this.createSourcePackage(sourcePackage);
            }
            return runtime;
        }

        /**
         * Create DataObjectSchema based on raw object that contains its attributes
         * @param rawSchema
         * @returns {DataObjectSchema}
         */

    }, {
        key: "createDataSchema",
        value: function createDataSchema(rawSchema) {
            //console.log("creating dataSchema based on: ", rawSchema);

            var dataSchema = void 0;
            //console.log('1. createMessageDataObjectSchema: ', rawSchema["accessControlPolicy"]);
            //console.log('2. createMessageDataObjectSchema: ', rawSchema["scheme"]);
            if (rawSchema["accessControlPolicy"] && rawSchema["scheme"]) {
                dataSchema = this._factory.createHypertyDataObjectSchema(rawSchema["cguid"], rawSchema["version"], rawSchema["objectName"], rawSchema["description"], rawSchema["language"], rawSchema["sourcePackageURL"], rawSchema["accessControlPolicy"], rawSchema["scheme"]);
            } else {
                //console.log('3. createMessageDataObjectSchema: ', rawSchema);
                dataSchema = this._factory.createMessageDataObjectSchema(rawSchema["cguid"], rawSchema["version"], rawSchema["objectName"], rawSchema["description"], rawSchema["language"], rawSchema["sourcePackageURL"]);
            }

            // optional fields
            dataSchema.signature = rawSchema["signature"];

            // parse and attach sourcePackage
            var sourcePackage = rawSchema["sourcePackage"];
            if (sourcePackage) {
                //console.log("dataSchema has sourcePackage:", sourcePackage);
                dataSchema.sourcePackage = this.createSourcePackage(sourcePackage);

                try {
                    dataSchema.sourcePackage.sourceCode = JSON.parse(dataSchema.sourcePackage.sourceCode);
                } catch (e) {
                    console.log('DataSchema Source code is already parsed');
                }

                return dataSchema;
            }
            //console.log("created dataSchema descriptor object:", dataSchema);
            return dataSchema;
        }

        /**
         * Create ProtocolStubDescriptor based on raw object that contains its attributes
         * @param rawProxy
         * @returns {ProtocolStubDescriptor}
         */

    }, {
        key: "createIdpProxy",
        value: function createIdpProxy(rawProxy) {
            // console.log("creating idpproxy descriptor based on: ", rawProxy);

            // create the descriptor
            var idpproxy = this._factory.createProtoStubDescriptorObject(rawProxy["cguid"], rawProxy["version"], rawProxy["objectName"], rawProxy["description"], rawProxy["language"], rawProxy["sourcePackageURL"], rawProxy["messageSchemas"], rawProxy["configuration"], rawProxy["constraints"], rawProxy["hypertyType"], rawProxy["dataObjects"], rawProxy["interworking"], rawProxy["idpProxy"], rawProxy["mutualAuthentication"]);

            // optional fields
            idpproxy.signature = rawProxy["signature"];

            // parse and attach the sourcePackage
            var sourcePackage = rawProxy["sourcePackage"];
            if (sourcePackage) {
                sourcePackage = this.createSourcePackage(sourcePackage);
                idpproxy.sourcePackage = sourcePackage;
            }

            return idpproxy;
        }
    }, {
        key: "createSourcePackage",
        value: function createSourcePackage(sp) {
            //console.log("createSourcePackage:", sp);

            // check encoding
            if (sp["encoding"] === "base64") {
                sp["sourceCode"] = this.atob(sp["sourceCode"]);
                sp["encoding"] = 'utf-8';
            }

            var sourcePackage = this._factory.createSourcePackage(sp["sourceCodeClassname"], sp["sourceCode"]);
            if (sp["encoding"]) sourcePackage.encoding = sp["encoding"];

            if (sp["signature"]) sourcePackage.signature = sp["signature"];

            return sourcePackage;
        }

        /**
         * Get source Package from a URL
         * @param sourcePackageURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty/sourcePackage
         * @returns {Promise}
         */

    }, {
        key: "getSourcePackageFromURL",
        value: function getSourcePackageFromURL(sourcePackageURL) {
            var _this3 = this;

            console.log("getting sourcePackage from:", sourcePackageURL);

            return new _promise2.default(function (resolve, reject) {
                _this3.httpRequest.get(sourcePackageURL).then(function (result) {
                    //console.log("got raw sourcePackage:", result);
                    if (result["ERROR"]) {
                        // TODO handle error properly
                        reject(result);
                    } else {
                        result = JSON.parse(result);
                        var sourcePackage = _this3.createSourcePackage(result);
                        resolve(sourcePackage);
                    }
                }).catch(function (reason) {
                    reject(reason);
                });
            });
        }

        /**
         * Returns the sourceCode of a given descriptor
         * @param {CatalogueDataObject} descriptor - Catalogue Object that was retrieved using e.g. getHypertyDescriptor()
         * @returns {Promise}
         */

    }, {
        key: "getSourceCodeFromDescriptor",
        value: function getSourceCodeFromDescriptor(descriptor) {
            var _this4 = this;

            return new _promise2.default(function (resolve, reject) {
                if (descriptor.sourcePackage) {
                    //console.log("descriptor has sourcePackage");
                    //console.log("returning sourceCode:", descriptor.sourcePackage.sourceCode);
                    resolve(descriptor.sourcePackage.sourceCode);
                } else {
                    _this4.storageManager.getVersion(descriptor.sourcePackageURL + "/sourceCode").then(function (dbVersion) {
                        if (dbVersion >= descriptor.version) {
                            console.log("returning cached version from storageManager");
                            _this4.storageManager.get(descriptor.sourcePackageURL + "/sourceCode").then(function (sourceCode) {
                                resolve(sourceCode);
                            });
                        } else {
                            _this4.httpRequest.get(descriptor.sourcePackageURL + "/sourceCode").then(function (sourceCode) {
                                if (sourceCode["ERROR"]) {
                                    // TODO handle error properly
                                    reject(sourceCode);
                                } else {
                                    _this4.storageManager.set(descriptor.sourcePackageURL + "/sourceCode", descriptor.version, sourceCode);
                                    resolve(sourceCode);
                                }
                            });
                        }
                    });
                }
            });
        }

        /**
         * Returns the list of available catalogue objects for the given "type URL",
         * i.e. a catalogue URL that specifies a type, but no catalogue object name.
         * @param typeURL - URL pointing to the catalogue object type you want a list of available objects for,
         * e.g. hyperty-catalogue://catalogue.fokus.fraunhofer.de/.well-known/idp-proxy
         * @returns {Promise} typeListPromise - Promise that fulfills with the list of available catalogue object names for the requested type,
         * rejects on HTTP error or if the HTTP response is not in JSON.
         */

    }, {
        key: "getTypeList",
        value: function getTypeList(typeURL) {
            var _this5 = this;

            return new _promise2.default(function (resolve, reject) {
                _this5.httpRequest.get(typeURL).then(function (typeList) {
                    typeList = JSON.parse(typeList);
                    resolve(typeList);
                }).catch(function (reason) {
                    reject(reason);
                });
            });
        }
    }, {
        key: "deleteFromPM",
        value: function deleteFromPM(url) {
            return this.storageManager.delete(url);
        }
    }, {
        key: "runtimeURL",
        set: function set(runtimeURL) {
            this._runtimeURL = runtimeURL;
        },
        get: function get() {
            return this._runtimeURL;
        }
    }]);
    return RuntimeCatalogue;
}();

exports.default = RuntimeCatalogue;