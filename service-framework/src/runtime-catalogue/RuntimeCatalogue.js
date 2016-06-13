'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
  });

var _createClass = function() {
  function defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor);
    } } return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor;
  };
}();

var _utils = require('../utils/utils');

var _CatalogueDataObjectFactory = require('../catalogue-factory/CatalogueDataObjectFactory');

var _CatalogueDataObjectFactory2 = _interopRequireDefault(_CatalogueDataObjectFactory);

var _PersistenceManager = require('../persistence/PersistenceManager');

var _PersistenceManager2 = _interopRequireDefault(_PersistenceManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var RuntimeCatalogue = function() {
    function RuntimeCatalogue(runtimeFactory) {
      _classCallCheck(this, RuntimeCatalogue);

      if (!runtimeFactory) throw Error('The catalogue needs the runtimeFactory');

      var _this = this;
      _this._factory = new _CatalogueDataObjectFactory2.default(false, undefined);
      _this.httpRequest = runtimeFactory.createHttpRequest();
    }

    /**
     * Get a Catalogue Data Object (Descriptor) from a URL, and construct it using the provided function
     * @param {String} descriptorURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty
     * @param {function} createFunc - e.g. _createHyperty
     * @returns {Promise}
     */

    _createClass(RuntimeCatalogue, [{
        key: 'getDescriptor',
        value: function getDescriptor(descriptorURL, createFunc) {
            var _this = this;
            // console.log("getDescriptor", descriptorURL);

            return new Promise(function(resolve, reject) {

                _this.httpRequest.get(descriptorURL + '/version').then(function(result) {
                    if (_PersistenceManager2.default.getVersion(descriptorURL) >= result) {
                      // return saved version
                      console.log('returning saved version:', _PersistenceManager2.default.get(descriptorURL));
                      resolve(createFunc(_this, _PersistenceManager2.default.get(descriptorURL)));
                    } else {
                      // request the json
                      _this.httpRequest.get(descriptorURL).then(function(result) {
                          result = JSON.parse(result);

                          if (result['ERROR']) {
                            // TODO handle error properly
                            reject(result);
                          } else {
                            // FIXME hotfix for unparsed arrays (e.g. hypertyType), will be fixed in Catalogue 1.1.0
                            for (var key in result) {
                                try {
                                    result[key] = JSON.parse(result[key]);
                                } catch (e) {
                                    // do nothing
                                }
                            }
                            // console.log("creating descriptor based on: ", result);
                            var descriptor = createFunc(_this, result);
                            _PersistenceManager2.default.set(descriptorURL, descriptor.version, result);
                            // console.log("created descriptor object:", hyperty);
                            resolve(descriptor);
                          }
                        });
                    }
                  }).catch(function(reason) {
                    reject(reason);
                  });
              });
          }

        /**
         * Get HypertyDescriptor
         * @param hypertyURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty
         * @returns {Promise}
         */

      }, {
        key: 'getHypertyDescriptor',
        value: function getHypertyDescriptor(hypertyURL) {
            var _this = this;
            return _this.getDescriptor(hypertyURL, _this._createHyperty);
          }

        /**
         * Get StubDescriptor
         * @param stubURL - e.g. mydomain.com/.well-known/protostub/MyProtostub
         * @returns {Promise}
         */

      }, {
        key: 'getStubDescriptor',
        value: function getStubDescriptor(stubURL) {
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

            var prefix = 'catalogue.';
            if (stubURL.includes('catalogue')) {
              prefix = '';
            }

            stubURL = type + '://' + prefix + domain + '/.well-known/protocolstub/' + protostub;

            return _this.getDescriptor(stubURL, _this._createStub);
          }

        /**
         * Get RuntimeDescriptor
         * @param runtimeURL - e.g. mydomain.com/.well-known/runtime/MyRuntime
         * @returns {Promise}
         */

      }, {
        key: 'getRuntimeDescriptor',
        value: function getRuntimeDescriptor(runtimeURL) {
            var _this = this;
            return _this.getDescriptor(runtimeURL, _this._createRuntimeDescriptor);
          }

        /**
         * Get DataSchemaDescriptor
         * @param dataSchemaURL - e.g. mydomain.com/.well-known/dataschema/MyDataSchema
         * @returns {Promise}
         */

      }, {
        key: 'getDataSchemaDescriptor',
        value: function getDataSchemaDescriptor(dataSchemaURL) {
            var _this = this;
            return _this.getDescriptor(dataSchemaURL, _this._createDataSchema);
          }

        /**
         * Get IDPProxyDescriptor
         * @param idpProxyURL - e.g. mydomain.com/.well-known/idp-proxy/MyProxy
         * @returns {Promise}
         */

      }, {
        key: 'getIdpProxyDescriptor',
        value: function getIdpProxyDescriptor(idpProxyURL) {
            var _this = this;

            return new Promise(function(resolve, reject) {

                var dividedURL = (0, _utils.divideURL)(idpProxyURL);
                var type = dividedURL.type;
                var domain = dividedURL.domain;
                var idpproxy = dividedURL.identity;

                var originDividedURL = (0, _utils.divideURL)(_this.runtimeURL);
                var originDomain = originDividedURL.domain;

                if (!domain) {
                  domain = idpProxyURL;
                }

                if (domain === originDomain || !idpproxy) {
                  idpproxy = 'default';
                } else {
                  idpproxy = idpproxy.substring(idpproxy.lastIndexOf('/') + 1);
                }

                var prefix = 'catalogue.';
                if (idpProxyURL.includes('catalogue')) {
                  prefix = '';
                }

                idpProxyURL = type + '://' + domain + '/.well-known/idp-proxy/' + idpproxy;

                return _this.getDescriptor(idpProxyURL, _this._createIdpProxy).then(function(result) {

                    console.log('result: ', result);
                    resolve(result);
                  }).catch(function() {

                    idpproxy = domain;
                    domain = originDomain;

                    console.log('Get an specific protostub for domain', domain, ' specific for: ', idpproxy);
                    idpProxyURL = type + '://' + prefix + domain + '/.well-known/idp-proxy/' + idpproxy;

                    return _this.getDescriptor(idpProxyURL, _this._createIdpProxy);
                  }).then(function(result) {
                    resolve(result);
                  }).catch(function(reason) {
                    reject(reason);
                  });
              });
          }

        /**
         * Create HypertyDescriptor based on raw object that contains its attributes
         * @param _this
         * @param rawHyperty
         * @returns {HypertyDescriptor}
         */

    }, {
        key: '_createHyperty',
        value: function _createHyperty(_this, rawHyperty) {
            // create the descriptor
            var hyperty = _this._factory.createHypertyDescriptorObject(rawHyperty["cguid"], rawHyperty["version"], rawHyperty["objectName"], rawHyperty["description"], rawHyperty["language"], rawHyperty["sourcePackageURL"], rawHyperty["type"] || rawHyperty["hypertyType"], rawHyperty["dataObjects"]);

            // optional fields
            hyperty.configuration = rawHyperty["configuration"];
            hyperty.constraints = rawHyperty["constraints"];
            hyperty.messageSchema = rawHyperty["messageSchema"];
            hyperty.policies = rawHyperty["policies"];
            hyperty.signature = rawHyperty["signature"];

            // parse and attach sourcePackage
            var sourcePackage = rawHyperty["sourcePackage"];
            if (sourcePackage) {
                // console.log("hyperty has sourcePackage:", sourcePackage);
                hyperty.sourcePackage = _this._createSourcePackage(_this, sourcePackage);
            }

            return hyperty;
        }

        /**
         * Create ProtocolStubDescriptor based on raw object that contains its attributes
         * @param _this
         * @param rawStub
         * @returns {ProtocolStubDescriptor}
         */

    }, {
        key: '_createStub',
        value: function _createStub(_this, rawStub) {
            // console.log("creating stub descriptor based on: ", rawStub);

            // create the descriptor
            var stub = _this._factory.createProtoStubDescriptorObject(rawStub["cguid"], rawStub["version"], rawStub["objectName"], rawStub["description"], rawStub["language"], rawStub["sourcePackageURL"], rawStub["messageSchemas"], rawStub["configuration"], rawStub["constraints"]);

            // optional fields
            stub.signature = rawStub["signature"];

            // parse and attach the sourcePackage
            var sourcePackage = rawStub["sourcePackage"];
            if (sourcePackage) {
                sourcePackage = _this._createSourcePackage(_this, sourcePackage);
                stub.sourcePackage = sourcePackage;
            }

            return stub;
        }

        /**
         * Create HypertyRuntimeDescriptor based on raw object that contains its attributes
         * @param _this
         * @param rawRuntime
         * @returns {HypertyRuntimeDescriptor}
         */

    }, {
        key: '_createRuntimeDescriptor',
        value: function _createRuntimeDescriptor(_this, rawRuntime) {
            // parse capabilities first
            try {
                rawRuntime["hypertyCapabilities"] = JSON.parse(rawRuntime["hypertyCapabilities"]);
                rawRuntime["protocolCapabilities"] = JSON.parse(rawRuntime["protocolCapabilities"]);
            } catch (e) {
                // already json object
            }
            console.log("creating runtime descriptor based on: ", rawRuntime);

            // create the descriptor
            var runtime = _this._factory.createHypertyRuntimeDescriptorObject(rawRuntime["cguid"], rawRuntime["version"], rawRuntime["objectName"], rawRuntime["description"], rawRuntime["language"], rawRuntime["sourcePackageURL"], rawRuntime["type"] || rawRuntime["runtimeType"], rawRuntime["hypertyCapabilities"], rawRuntime["protocolCapabilities"]);

            // optional fields
            runtime.signature = rawRuntime["signature"];

            // parse and attach sourcePackage
            var sourcePackage = rawRuntime["sourcePackage"];
            if (sourcePackage) {
                // console.log("runtime has sourcePackage:", sourcePackage);
                runtime.sourcePackage = _this._createSourcePackage(_this, sourcePackage);
            }
            return runtime;
        }

        /**
         * Create DataObjectSchema based on raw object that contains its attributes
         * @param _this
         * @param rawSchema
         * @returns {DataObjectSchema}
         */

    }, {
        key: '_createDataSchema',
        value: function _createDataSchema(_this, rawSchema) {
            console.log("creating dataSchema based on: ", rawSchema);

            var dataSchema = void 0;
            console.log('1. createMessageDataObjectSchema: ', rawSchema["accessControlPolicy"]);
            console.log('2. createMessageDataObjectSchema: ', rawSchema["scheme"]);
            if (rawSchema["accessControlPolicy"] && rawSchema["scheme"]) {
                dataSchema = _this._factory.createHypertyDataObjectSchema(rawSchema["cguid"], rawSchema["version"], rawSchema["objectName"], rawSchema["description"], rawSchema["language"], rawSchema["sourcePackageURL"], rawSchema["accessControlPolicy"], rawSchema["scheme"]);
            } else {
                console.log('3. createMessageDataObjectSchema: ', rawSchema);
                dataSchema = _this._factory.createMessageDataObjectSchema(rawSchema["cguid"], rawSchema["version"], rawSchema["objectName"], rawSchema["description"], rawSchema["language"], rawSchema["sourcePackageURL"]);
            }

            // optional fields
            dataSchema.signature = rawSchema["signature"];

            // parse and attach sourcePackage
            var sourcePackage = rawSchema["sourcePackage"];
            if (sourcePackage) {
                console.log("dataSchema has sourcePackage:", sourcePackage);
                dataSchema.sourcePackage = _this._createSourcePackage(_this, sourcePackage);

                try {
                    dataSchema.sourcePackage.sourceCode = JSON.parse(dataSchema.sourcePackage.sourceCode);
                } catch (e) {
                    console.log('DataSchema Source code is already parsed');
                }

                return dataSchema;
            } else {
                console.log('4. getSourcePackageFromURL: ', rawSchema.sourcePackageURL);

                return new Promise(function(resolve, reject) {

                    _this.getSourcePackageFromURL(rawSchema.sourcePackageURL).then(function(sourcePackage) {
                        console.log('5. result of getSourcePackageFromURL', sourcePackage);
                        dataSchema.sourcePackage = sourcePackage;
                        resolve(dataSchema);
                    }).catch(function(reason) {
                        console.log('Error getting the sourcePackageURL ', reason);
                        reject(reason);
                    });
                });
            }
            // console.log("created dataSchema descriptor object:", dataSchema);
            // return dataSchema;
        }

        /**
         * Create ProtocolStubDescriptor based on raw object that contains its attributes
         * @param _this
         * @param rawProxy
         * @returns {ProtocolStubDescriptor}
         */

    }, {
        key: '_createIdpProxy',
        value: function _createIdpProxy(_this, rawProxy) {
            // console.log("creating idpproxy descriptor based on: ", rawProxy);

            // create the descriptor
            var idpproxy = _this._factory.createProtoStubDescriptorObject(rawProxy["cguid"], rawProxy["version"], rawProxy["objectName"], rawProxy["description"], rawProxy["language"], rawProxy["sourcePackageURL"], rawProxy["messageSchemas"], rawProxy["configuration"], rawProxy["constraints"]);

            // optional fields
            idpproxy.signature = rawProxy["signature"];

            // parse and attach the sourcePackage
            var sourcePackage = rawProxy["sourcePackage"];
            if (sourcePackage) {
                sourcePackage = _this._createSourcePackage(_this, sourcePackage);
                idpproxy.sourcePackage = sourcePackage;
            }

            return idpproxy;
        }
    }, {
        key: '_createSourcePackage',
        value: function _createSourcePackage(_this, sp) {
            try {
                sp = JSON.parse(sp);
            } catch (e) {
                console.log("parsing sourcePackage failed. already parsed? -> ", sp);
            }

            // check encoding
            if (sp["encoding"] === "base64") {
                sp["sourceCode"] = atob(sp["sourceCode"]);
            }

            var sourcePackage = _this._factory.createSourcePackage(sp["sourceCodeClassname"], sp["sourceCode"]);
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
        key: 'getSourcePackageFromURL',
        value: function getSourcePackageFromURL(sourcePackageURL) {
            var _this = this;

            console.log("getting sourcePackage from:", sourcePackageURL);
            console.warn("-------------------------------------------------------------------------------------------");
            console.warn("ATTENTION: This function may fail if the sourceCode of the the sourcePackage is very large!");
            console.warn("-------------------------------------------------------------------------------------------");

            return new Promise(function(resolve, reject) {
                _this.httpRequest.get(sourcePackageURL).then(function(result) {
                    //console.log("got raw sourcePackage:", result);
                    if (result["ERROR"]) {
                        // TODO handle error properly
                        reject(result);
                    } else {
                        result = JSON.parse(result);
                        var sourcePackage = _this._createSourcePackage(_this, result);
                        resolve(sourcePackage);
                    }
                }).catch(function(reason) {
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
        key: 'getSourceCodeFromDescriptor',
        value: function getSourceCodeFromDescriptor(descriptor) {
            var _this = this;
            return new Promise(function(resolve, reject) {
                if (descriptor.sourcePackage) {
                    //console.log("descriptor has sourcePackage");
                    //console.log("returning sourceCode:", descriptor.sourcePackage.sourceCode);
                    resolve(descriptor.sourcePackage.sourceCode);
                } else {
                    if (_PersistenceManager2.default.getVersion(descriptor.sourcePackageURL + "/sourceCode") >= descriptor.version) {
                        console.log("returning cached version from persistence manager");
                        resolve(_PersistenceManager2.default.get(descriptor.sourcePackageURL + "/sourceCode"));
                    } else {
                        _this.httpRequest.get(descriptor.sourcePackageURL + "/sourceCode").then(function(sourceCode) {
                            if (sourceCode["ERROR"]) {
                                // TODO handle error properly
                                reject(sourceCode);
                            } else {
                                _PersistenceManager2.default.set(descriptor.sourcePackageURL + "/sourceCode", descriptor.version, sourceCode);
                                resolve(sourceCode);
                            }
                        });
                    }
                }
            });
        }
    }, {
        key: 'deleteFromPM',
        value: function deleteFromPM(url) {
            _PersistenceManager2.default.delete(url);
        }
    }, {
        key: 'runtimeURL',
        set: function set(runtimeURL) {
            var _this = this;
            _this._runtimeURL = runtimeURL;
        },
        get: function get() {
            var _this = this;
            return _this._runtimeURL;
        }
    }]);

    return RuntimeCatalogue;
}();

exports.default = RuntimeCatalogue;
