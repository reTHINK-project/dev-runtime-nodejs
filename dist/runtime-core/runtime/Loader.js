'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../utils/utils');

var _Descriptors = require('./Descriptors');

var _Descriptors2 = _interopRequireDefault(_Descriptors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loader = function () {
  function Loader(runtimeConfiguration) {
    _classCallCheck(this, Loader);

    if (!runtimeConfiguration) throw Error('The descriptor need to know the runtime configuration');
    this.runtimeConfiguration = runtimeConfiguration;
  }

  /**
   * Set runtime url
   * @param  {string} value runtimeURL
   */


  _createClass(Loader, [{
    key: 'loadHyperty',


    /**
    * Deploy Hyperty from Catalogue URL
    * @param  {URL.HypertyCatalogueURL}    hyperty hypertyDescriptor url;
    */
    value: function loadHyperty(hypertyDescriptorURL) {
      var _this = this;

      if (!this._readyToUse()) return false;
      if (!hypertyDescriptorURL) throw new Error('Hyperty descriptor url parameter is needed');

      return new Promise(function (resolve, reject) {

        var _hypertyURL = void 0;
        var _hypertySandbox = void 0;
        var _hypertyDescriptor = void 0;
        var _hypertySourcePackage = void 0;
        var haveError = false;

        var errorReason = function errorReason(reason) {
          console.error('Something failed on the deploy hyperty: ', reason);
          reject(reason);
        };

        var handleError = function handleError(reason) {
          haveError = true;
          reject(reason);
        };

        // Get Hyperty descriptor
        // TODO: the request Module should be changed,
        // because at this moment it is incompatible with nodejs;
        // Probably we need to pass a factory like we do for sandboxes;
        console.info('------------------ Hyperty 999999999999999999999999------------------------'.blue);
        console.info('Get hyperty descriptor for :', hypertyDescriptorURL);
        return _this.descriptors.getHypertyDescriptor(hypertyDescriptorURL).then(function (hypertyDescriptor) {
          // at this point, we have completed "step 2 and 3" as shown in https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md
          console.info('1: return hyperty descriptor');

          // hyperty contains the full path of the catalogue URL, e.g.
          // catalogue.rethink.eu/.well-known/..........
          _hypertyDescriptor = hypertyDescriptor;

          var sourcePackageURL = hypertyDescriptor.sourcePackageURL;

          if (sourcePackageURL === '/sourcePackage') {
            return hypertyDescriptor.sourcePackage;
          }

          // Get the hyperty source code
          return _this.runtimeCatalogue.getSourcePackageFromURL(sourcePackageURL);
        }, handleError).then(function (sourcePackage) {
          if (haveError) return false;

          console.info('2: return hyperty source code');

          // at this point, we have completed "step 4 and 5" as shown in https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md

          _hypertySourcePackage = sourcePackage;

          //
          // steps 6 -- 9 are skipped.
          // TODO: on release of core 0.2;
          // TODO: Promise to check the policy engine

          // mock-up code;
          // temporary code, only
          var policy = true;

          return policy;
        }, handleError).then(function (policyResult) {
          if (haveError) return false;
          console.info('3: return policy engine result' + policyResult);

          // we have completed step 6 to 9 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
          //
          // Steps 6 -- 9
          // As a result of the sipped steps, we know at this point if we execute
          // inSameSandbox or not.
          //

          // For testing, just assume we execute in same Sandbox.
          var inSameSandbox = true;
          var sandbox = void 0;

          if (inSameSandbox) {

            // this don't need be a Promise;
            sandbox = _this.registry.getAppSandbox();

            // we have completed step 11 here.
          } else {

            var domain = (0, _utils.divideURL)(hypertyDescriptorURL).domain;

            // getSandbox, this will return a promise;
            sandbox = _this.registry.getSandbox(domain);
          }

          // this will return the sandbox or one promise to getSandbox;
          return sandbox;
        }, handleError).then(function (sandbox) {
          if (haveError) return false;
          console.info('4: return the sandbox', sandbox);

          // Return the sandbox indepentely if it running in the same sandbox or not
          // we have completed step 14 here.
          return sandbox;
        }, function (reason) {
          if (haveError) return false;
          console.error('4.1: Try to register a new sandbox');

          // check if the sandbox is registed for this hyperty descriptor url;
          // Make Steps xxx --- xxx
          // Instantiate the Sandbox
          var sandbox = _this._runtimeFactory.createSandbox();

          sandbox.addListener('*', function (msg) {
            _this.messageBus.postMessage(msg);
          });

          return sandbox;
        }, handleError).then(function (sandbox) {
          if (haveError) return false;
          console.info('5: return sandbox and register');

          _hypertySandbox = sandbox;

          // Register hyperty
          return _this.registry.registerHyperty(sandbox, hypertyDescriptorURL, _hypertyDescriptor);
        }, handleError).then(function (hypertyURL) {
          if (haveError) return false;
          console.info('6: Hyperty url, after register hyperty', hypertyURL);

          // we have completed step 16 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
          _hypertyURL = hypertyURL;

          // Extend original hyperty configuration;
          var configuration = {};
          if (!(0, _utils.emptyObject)(_hypertyDescriptor.configuration)) {
            try {
              configuration = Object.assign({}, JSON.parse(_hypertyDescriptor.configuration));
            } catch (e) {
              configuration = _hypertyDescriptor.configuration;
            }
          }
          configuration.runtimeURL = _this._runtimeURL;

          // We will deploy the component - step 17 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.

          try {
            return _hypertySandbox.deployComponent(_hypertySourcePackage.sourceCode, _hypertyURL, configuration);
          } catch (e) {
            console.error('Error on deploy component:', e);
            reject(e);
          }
        }, handleError).then(function (deployComponentStatus) {
          if (haveError) return false;
          console.info('7: Deploy component status for hyperty: ', deployComponentStatus);

          // we have completed step 19 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.

          // Add the message bus listener to the appSandbox or hypertSandbox;
          _this.messageBus.addListener(_hypertyURL, function (msg) {

            _hypertySandbox.postMessage(msg);
          });

          // we have completed step 20 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
          var hyperty = {
            runtimeHypertyURL: _hypertyURL,
            status: deployComponentStatus
          };

          resolve(hyperty);

          // we have completed step 21 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
          console.info('------------------ END ------------------------');
        }, handleError).catch(errorReason);
      });
    }

    /**
    * Deploy Stub from Catalogue URL or domain url
    * @param  {URL.URL}     domain          domain
    */

  }, {
    key: 'loadStub',
    value: function loadStub(protostubURL) {
      var _this2 = this;

      if (!this._readyToUse()) return false;
      if (!protostubURL) throw new Error('ProtoStub descriptor url parameter is needed');

      return new Promise(function (resolve, reject) {

        var domain = (0, _utils.divideURL)(protostubURL).domain;

        if (!domain) {
          domain = protostubURL;
        }

        var _stubSandbox = void 0;
        var _stubDescriptor = void 0;
        var _runtimeProtoStubURL = void 0;
        var _stubSourcePackage = void 0;
        var haveError = false;

        var errorReason = function errorReason(reason) {
          console.error('Something failed on the deploy of protocolstub: ', reason);
          reject(reason);
        };

        var handleError = function handleError(reason) {
          haveError = true;
          reject(reason);
        };

        // Discover Protocol Stub
        console.info('------------------- ProtoStub ---------------------------\n');
        console.info('Discover or Create a new ProtoStub for domain: ', domain);
        _this2.registry.discoverProtostub(domain).then(function (runtimeProtoStubURL) {
          // Is registed?
          console.info('1. Proto Stub Discovered for ', domain, ': ', runtimeProtoStubURL);

          // we have completed step 2 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          // TODO: Check if the status is saved in the status of sandbox;
          // let stub = {
          //   runtimeProtoStubURL: runtimeProtoStubURL,
          //   status: 'deployed'
          // };
          var stub = _this2.registry.protostubsList[domain];
          resolve(stub);
          console.info('------------------- END ---------------------------\n');
        }).catch(function (reason) {

          // is not registed?
          console.info('1. Proto Stub not found ' + reason);

          // we have completed step 3 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          // we need to get ProtoStub descriptor step 4 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
          _this2.descriptors.getStubDescriptor(protostubURL).then(function (stubDescriptor) {
            if (haveError) return false;
            console.info('2. return the ProtoStub descriptor');

            // we have completed step 5 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
            _stubDescriptor = stubDescriptor;

            var sourcePackageURL = stubDescriptor.sourcePackageURL;

            if (sourcePackageURL === '/sourcePackage') {
              return stubDescriptor.sourcePackage;
            }

            // we need to get ProtoStub Source code from descriptor - step 6 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
            return _this2.runtimeCatalogue.getSourcePackageFromURL(sourcePackageURL);
          }, handleError).catch(errorReason).then(function (stubSourcePackage) {
            if (haveError) return false;
            console.info('3. return the ProtoStub Source Code');

            // we have completed step 7 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

            _stubSourcePackage = stubSourcePackage;

            // TODO: Check on PEP (policy Engine) if we need the sandbox and check if the Sandbox Factory have the context sandbox;
            var policy = true;
            return policy;
          }, handleError).then(function (policy) {
            if (haveError) return false;

            // this will return the sandbox or one promise to getSandbox;
            return _this2.registry.getSandbox(domain);
          }).then(function (stubSandbox) {
            if (haveError) return false;
            console.info('4. if the sandbox is registered then return the sandbox ', stubSandbox);

            // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

            _stubSandbox = stubSandbox;
            return stubSandbox;
          }).catch(function (reason) {
            if (haveError) return false;
            console.info('5. Sandbox was not found, creating a new one ', reason);

            // check if the sandbox is registed for this stub descriptor url;
            // Make Steps xxx --- xxx
            // Instantiate the Sandbox
            var sandbox = _this2._runtimeFactory.createSandbox();
            sandbox.addListener('*', function (msg) {
              _this2.messageBus.postMessage(msg);
            });

            return sandbox;
          }).then(function (sandbox) {
            if (haveError) return false;
            console.info('6. return the sandbox instance and register', sandbox, 'to domain ', domain);

            _stubSandbox = sandbox;

            // we need register stub on registry - step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
            return _this2.registry.registerStub(_stubSandbox, domain);
          }, handleError).then(function (runtimeProtoStubURL) {
            if (haveError) return false;
            console.info('7. return the runtime protostub url: ', runtimeProtoStubURL);

            // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

            _runtimeProtoStubURL = runtimeProtoStubURL;

            // Extend original hyperty configuration;
            var configuration = {};
            if (!(0, _utils.emptyObject)(_stubDescriptor.configuration)) {
              try {
                configuration = Object.assign({}, JSON.parse(_stubDescriptor.configuration));
              } catch (e) {
                configuration = _stubDescriptor.configuration;
              }
            }

            configuration.runtimeURL = _this2._runtimeURL;

            // Deploy Component step xxx
            try {
              return _stubSandbox.deployComponent(_stubSourcePackage.sourceCode, runtimeProtoStubURL, configuration);
            } catch (e) {
              console.error('Error on deploy component:', e);
              reject(e);
            }
          }, handleError).then(function (deployComponentStatus) {
            if (haveError) return false;
            console.info('8: return deploy component for sandbox status: ', deployComponentStatus);

            // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

            // Add the message bus listener
            console.log('-------------------------------------------'.green);
            _this2.messageBus.addListener(_runtimeProtoStubURL, function (msg) {
              _stubSandbox.postMessage(msg);
            });

            // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
            var stub = _this2.registry.protostubsList[domain];

            // // Load Stub function resolved with success;
            // let stub = {
            //   runtimeProtoStubURL: _runtimeProtoStubURL,
            //   status: deployComponentStatus
            // };

            console.log('Deployed: ', stub, domain, _this2.registry.protostubsList);

            resolve(stub);
            console.info('------------------- END ---------------------------\n');
          }, handleError).catch(errorReason);
        });
      });
    }

    /**
    * Deploy idpProxy from Catalogue URL or domain url
    * @param  {URL.URL}     domain          domain
    */

  }, {
    key: 'loadIdpProxy',
    value: function loadIdpProxy(idpProxyURL) {
      var _this3 = this;

      if (!this._readyToUse()) return false;
      if (!idpProxyURL) throw new Error('IdpProxy descriptor url parameter is needed');

      return new Promise(function (resolve, reject) {

        var domain = (0, _utils.divideURL)(idpProxyURL).domain;

        if (!domain) {
          domain = idpProxyURL;
        }

        var _proxySandbox = void 0;
        var _proxyDescriptor = void 0;
        var _runtimeIdpProxyURL = void 0;
        var _proxySourcePackage = void 0;
        var haveError = false;

        var errorReason = function errorReason(reason) {
          console.error('Something failed on the deploy of IdpProxy: ', reason);
          reject(reason);
        };

        var handleError = function handleError(reason) {
          haveError = true;
          reject(reason);
        };

        // Discover IDPProxy
        console.info('------------------- IDP Proxy Deploy ---------------------------\n');
        console.info('Discover or Create a new IdpProxy for domain/URL: ', domain);
        return _this3.registry.discoverIdpProxy(domain).then(function (runtimeIdpProxyURL) {
          // Is registed?
          console.info('1. IDPProxy Discovered: ', runtimeIdpProxyURL);

          // we have completed step 2 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          var idpProxy = _this3.registry.idpProxyList[domain];
          console.log('Deployed: ', idpProxy);

          resolve(idpProxy);
          console.info('------------------- END ---------------------------\n');
        }).catch(function (reason) {

          // is not registed?
          console.info('1. IdpProxy not found:', reason);

          // we have completed step 3 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          // we need to get ProtoStub descriptor step 4 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
          _this3.descriptors.getIdpProxyDescriptor(idpProxyURL).then(function (proxyDescriptor) {

            console.info('2. Return the IDPProxy descriptor');

            // we have completed step 5 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
            _proxyDescriptor = proxyDescriptor;

            var sourcePackageURL = proxyDescriptor.sourcePackageURL;

            if (sourcePackageURL === '/sourcePackage') {
              return proxyDescriptor.sourcePackage;
            }

            // we need to get ProtoStub Source code from descriptor - step 6 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
            return _this3.runtimeCatalogue.getSourcePackageFromURL(sourcePackageURL);
          }, handleError).then(function (sourcePackage) {
            if (haveError) return false;
            console.info('3. return the IDPProxy source package');

            // we have completed step 7 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

            _proxySourcePackage = sourcePackage;

            // TODO: Check on PEP (policy Engine) if we need the sandbox and check if the Sandbox Factory have the context sandbox;
            var policy = true;
            return policy;
          }, handleError).then(function (policy) {
            if (haveError) return false;

            // this will return the sandbox or one promise to getSandbox;
            return _this3.registry.getSandbox(domain);
          }).then(function (proxySandbox) {
            if (haveError) return false;
            console.info('4. if the sandbox is registered then return the sandbox', proxySandbox);

            _proxySandbox = proxySandbox;
            return proxySandbox;
          }).catch(function (reason) {
            if (haveError) return false;
            console.info('5. Sandbox was not found, creating a new one', reason);

            // check if the sandbox is registed for this proxy descriptor url;
            // Make Steps xxx --- xxx
            // Instantiate the Sandbox
            var sandbox = _this3._runtimeFactory.createSandbox();
            sandbox.addListener('*', function (msg) {
              _this3.messageBus.postMessage(msg);
            });

            return sandbox;
          }).then(function (sandbox) {
            if (haveError) return false;
            console.info('6. return the sandbox instance and register', sandbox, 'to domain ', domain);

            _proxySandbox = sandbox;

            // we need register stub on registry - step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
            return _this3.registry.registerIdpProxy(sandbox, domain);
          }, handleError).then(function (runtimeIdpProxyURL) {
            if (haveError) return false;
            console.info('7. Return the runtime Idp Proxy URL: ', runtimeIdpProxyURL);

            // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

            _runtimeIdpProxyURL = runtimeIdpProxyURL;

            // Extend original hyperty configuration;
            var configuration = {};
            if (!(0, _utils.emptyObject)(_proxyDescriptor.configuration)) {
              try {
                configuration = Object.assign({}, JSON.parse(_proxyDescriptor.configuration));
              } catch (e) {
                configuration = _proxyDescriptor.configuration;
              }
            }
            configuration.runtimeURL = _this3._runtimeURL;

            // Deploy Component step xxx
            try {
              return _proxySandbox.deployComponent(_proxySourcePackage.sourceCode, runtimeIdpProxyURL, configuration);
            } catch (e) {
              console.error('Error on deploy component:', e);
              reject(e);
            }
          }, handleError).then(function (deployComponentStatus) {
            if (haveError) return false;
            console.info('8: return deploy component for sandbox status: ', deployComponentStatus);

            // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

            // Add the message bus listener
            _this3.messageBus.addListener(_runtimeIdpProxyURL, function (msg) {
              _proxySandbox.postMessage(msg);
            });

            // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

            // Load Stub function resolved with success;
            // let idpProxy = {
            //   runtimeIdpProxyURL: _runtimeIdpProxyURL,
            //   status: deployComponentStatus
            // };

            _this3.registry.idpProxyList[domain].status = 'deployed';
            var idpProxy = _this3.registry.idpProxyList[domain];

            console.log('Deployed: ', idpProxy);

            resolve(idpProxy);
            console.info('------------------- END ---------------------------\n');
          }, handleError).catch(errorReason);
        });
      });
    }

    // Check if the loader is ready to load all components

  }, {
    key: '_readyToUse',
    value: function _readyToUse() {

      var status = false;

      if (!this._runtimeURL) throw new Error('The loader need the runtime url address');
      if (!this._messagesBus) throw new Error('The loader need the messageBus component');
      if (!this._runtimeCatalogue) throw new Error('The loader need the runtimeCatalogue component');
      if (!this._registry) throw new Error('The loader need the registry component');
      if (!this._runtimeFactory) throw new Error('The loader need the runtime factory component');

      status = true;
      return status;
    }
  }, {
    key: 'runtimeURL',
    set: function set(value) {
      this._runtimeURL = value;
    }

    /**
     * Get runtime url
     * @return {string} value runtimeURL
     */
    ,
    get: function get() {
      return this._runtimeURL;
    }

    /**
     * Set Registry component
     * @param  {Registry} value Registry Component
     */

  }, {
    key: 'registry',
    set: function set(value) {
      this._registry = value;
    }

    /**
     * Get Registry component
     * @return {Registry} Registry component
     */
    ,
    get: function get() {
      return this._registry;
    }

    /**
     * Set Runtime Catalogue Component
     * @param  {RuntimeCatalogue} value runtime catalogue component
     */

  }, {
    key: 'runtimeCatalogue',
    set: function set(value) {
      this._runtimeCatalogue = value;

      this.descriptors = new _Descriptors2.default(this._runtimeURL, value, this.runtimeConfiguration);
    }

    /**
     * Get Runtime Catalogue component
     * @return {RuntimeCatalogue} Runtime Catalogue component
     */
    ,
    get: function get() {
      return this._runtimeCatalogue;
    }

    /**
     * Set Message Bus component
     * @param  {MessageBus} value Message bus component
     */

  }, {
    key: 'messageBus',
    set: function set(value) {
      this._messagesBus = value;
    }

    /**
     * Get Message Bus component
     * @return {MessageBus} Message Bus component
     */
    ,
    get: function get() {
      return this._messagesBus;
    }

    /**
     * Set Runtime Factory component
     * @param  {runtimeFactory} value Factory includes the specific implementations for each environment
     */

  }, {
    key: 'runtimeFactory',
    set: function set(value) {
      this._runtimeFactory = value;
    }

    /**
     * Get Runtime Factory component
     * @return {runtimeFactory} Runtime Factory component
     */
    ,
    get: function get() {
      return this._runtimeFactory;
    }
  }]);

  return Loader;
}();

exports.default = Loader;