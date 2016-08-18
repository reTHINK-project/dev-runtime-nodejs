'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2016 PT Inovação e Sistemas SA
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2016 INESC-ID
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2016 QUOBIS NETWORKS SL
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2016 ORANGE SA
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2016 Deutsche Telekom AG
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2016 Apizee
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     **/

//Main dependecies

// import GraphConnector from '../graphconnector/GraphConnector';

require('babel-polyfill');

var _Registry = require('../registry/Registry');

var _Registry2 = _interopRequireDefault(_Registry);

var _IdentityModule = require('../identity/IdentityModule');

var _IdentityModule2 = _interopRequireDefault(_IdentityModule);

var _PolicyEngine = require('../policy/PolicyEngine');

var _PolicyEngine2 = _interopRequireDefault(_PolicyEngine);

var _MessageBus = require('../bus/MessageBus');

var _MessageBus2 = _interopRequireDefault(_MessageBus);

var _SyncherManager = require('../syncher/SyncherManager');

var _SyncherManager2 = _interopRequireDefault(_SyncherManager);

var _RuntimeCoreCtx = require('../policy/context/RuntimeCoreCtx');

var _RuntimeCoreCtx2 = _interopRequireDefault(_RuntimeCoreCtx);

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Runtime User Agent Interface will process all the dependecies of the core runtime;
 * @author Vitor Silva [vitor-t-silva@telecom.pt]
 * @version 0.4.0
 *
 * @property {runtimeFactory} runtimeFactory - Specific implementation for all environments;
 * @property {RuntimeCatalogue} runtimeCatalogue - Catalogue of components can be installed;
 * @property {runtimeURL} runtimeURL - This identify the core runtime, should be unique;
 * @property {IdentityModule} identityModule - Identity Module;
 * @property {PolicyEngine} policyEngine - Policy Engine Module;
 * @property {Registry} registry - Registry Module;
 * @property {MessageBus} messageBus - Message Bus is used like a router to redirect the messages from one component to other(s)
 * @property {GraphConnector} graphConnector - Graph Connector handling GUID and contacts
 */
var RuntimeUA = function () {

  /**
   * Create a new instance of Runtime User Agent
   * @param {runtimeFactory} runtimeFactory - Specific implementation for the environment where the core runtime will run;
   * @param {domain} domainURL - specify the domain base for the runtime;
   */
  function RuntimeUA(runtimeFactory, domain) {
    _classCallCheck(this, RuntimeUA);

    if (!runtimeFactory) throw new Error('The sandbox factory is a needed parameter');
    if (!domain) throw new Error('You need the domain of runtime');

    var _this = this;

    _this.runtimeFactory = runtimeFactory;
    _this.runtimeCatalogue = runtimeFactory.createRuntimeCatalogue();

    // TODO: post and return registry/hypertyRuntimeInstance to and from Back-end Service
    // the response is like: runtime://sp1/123

    var runtimeURL = 'runtime://' + domain + '/' + Math.floor(Math.random() * 10000 + 1);
    _this.runtimeURL = runtimeURL;
    _this.domain = domain;

    // TODO: check if runtime catalogue need the runtimeURL;
    _this.runtimeCatalogue.runtimeURL = runtimeURL;

    // Instantiate the identity Module
    _this.identityModule = new _IdentityModule2.default(runtimeURL);

    // Use the sandbox factory to create an AppSandbox;
    // In the future can be decided by policyEngine if we need
    // create a AppSandbox or not;
    var appSandbox = runtimeFactory.createAppSandbox();

    // Instantiate the Registry Module
    _this.registry = new _Registry2.default(runtimeURL, appSandbox, _this.identityModule, _this.runtimeCatalogue);

    // Instantiate the Message Bus
    _this.messageBus = new _MessageBus2.default(_this.registry);

    // Instantiate the Policy Engine
    _this.policyEngine = new _PolicyEngine2.default(new _RuntimeCoreCtx2.default(_this.identityModule, _this.registry));

    _this.messageBus.pipeline.handlers = [

    // Policy message authorise
    function (ctx) {
      _this.policyEngine.authorise(ctx.msg).then(function (changedMgs) {
        ctx.msg = changedMgs;
        ctx.next();
      }).catch(function (reason) {
        console.error(reason);
        ctx.fail(reason);
      });
    }];

    // Add to App Sandbox the listener;
    appSandbox.addListener('*', function (msg) {
      _this.messageBus.postMessage(msg);
    });

    // Register messageBus on Registry
    _this.registry.messageBus = _this.messageBus;

    // Register registry on IdentityModule
    _this.identityModule.registry = _this.registry;

    _this.registry.addEventListener('runtime:loadStub', function (domainURL) {
      _this.loadStub(domainURL).then(function () {
        _this.registry.trigger('runtime:stubLoaded', domainURL);
      }).catch(function (reason) {
        console.error('Failed to deploy the ProtocolStub component ', reason);
      });
    });

    _this.registry.addEventListener('runtime:loadIdpProxy', function (domainURL) {
      _this.loadIdpProxy(domainURL).then(function () {
        _this.registry.trigger('runtime:idpProxyLoaded', domainURL);
      }).catch(function (reason) {
        console.error('Failed to deploy the IDP Proxy component ', reason);
      });
    });

    // Use sandbox factory to use specific methods
    // and set the message bus to the factory
    runtimeFactory.messageBus = _this.messageBus;

    // Instanciate the SyncherManager;
    _this.syncherManager = new _SyncherManager2.default(_this.runtimeURL, _this.messageBus, _this.registry, _this.runtimeCatalogue);

    // Instantiate the Graph Connector
    // _this.graphConnector = new GraphConnector(_this.runtimeURL, _this.messageBus);
  }

  /**
  * Accomodate interoperability in H2H and proto on the fly for newly discovered devices in M2M
  * @param  {CatalogueDataObject.HypertyDescriptor}   descriptor    descriptor
  */


  _createClass(RuntimeUA, [{
    key: 'discoverHiperty',
    value: function discoverHiperty(descriptor) {}
    // Body...


    /**
    * Register Hyperty deployed by the App that is passed as input parameter. To be used when App and Hyperties are from the same domain otherwise the RuntimeUA will raise an exception and the App has to use the loadHyperty(..) function.
    * @param  {Object} Object                   hypertyInstance
    * @param  {URL.HypertyCatalogueURL}         descriptor      descriptor
    */

  }, {
    key: 'registerHyperty',
    value: function registerHyperty(hypertyInstance, descriptor) {}
    // Body...


    /**
    * Deploy Hyperty from Catalogue URL
    * @param  {URL.HypertyCatalogueURL}    hyperty hypertyDescriptor url;
    */

  }, {
    key: 'loadHyperty',
    value: function loadHyperty(hypertyDescriptorURL) {

      var _this = this;

      if (!hypertyDescriptorURL) throw new Error('Hyperty descriptor url parameter is needed');

      return new Promise(function (resolve, reject) {

        var _hypertyURL = void 0;
        var _hypertySandbox = void 0;
        var _hypertyDescriptor = void 0;
        var _hypertySourcePackage = void 0;

        var errorReason = function errorReason(reason) {
          console.error('Something failed on the deploy hyperty: ', reason);
          reject(reason);
        };

        // Get Hyperty descriptor
        // TODO: the request Module should be changed,
        // because at this moment it is incompatible with nodejs;
        // Probably we need to pass a factory like we do for sandboxes;
        console.info('------------------ Hyperty ------------------------');
        console.info('Get hyperty descriptor for :', hypertyDescriptorURL);
        return _this.runtimeCatalogue.getHypertyDescriptor(hypertyDescriptorURL).then(function (hypertyDescriptor) {
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
        }).then(function (sourcePackage) {
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
        }).then(function (policyResult) {
          console.info('3: return policy engine result: ', policyResult);

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
        }).then(function (sandbox) {
          console.info('4: return the sandbox', sandbox);

          // Return the sandbox indepentely if it running in the same sandbox or not
          // we have completed step 14 here.
          return sandbox;
        }, function (reason) {
          console.error('4.1: Try to register a new sandbox ', reason);

          // check if the sandbox is registed for this hyperty descriptor url;
          // Make Steps xxx --- xxx
          // Instantiate the Sandbox
          var sandbox = _this.runtimeFactory.createSandbox();

          sandbox.addListener('*', function (msg) {
            _this.messageBus.postMessage(msg);
          });

          return sandbox;
        }).then(function (sandbox) {
          console.info('5: return sandbox and register');

          _hypertySandbox = sandbox;

          // Register hyperty
          return _this.registry.registerHyperty(sandbox, hypertyDescriptorURL, _hypertyDescriptor);
        }).then(function (hypertyURL) {
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
          configuration.runtimeURL = _this.runtimeURL;

          // We will deploy the component - step 17 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
          return _hypertySandbox.deployComponent(_hypertySourcePackage.sourceCode, _hypertyURL, configuration);
        }).then(function (deployComponentStatus) {
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
          console.log('------------------ END ------------------------');
        }).catch(errorReason);
      });
    }

    /**
    * Deploy Stub from Catalogue URL or domain url
    * @param  {URL.URL}     domain          domain
    */

  }, {
    key: 'loadStub',
    value: function loadStub(protostubURL) {

      var _this = this;

      if (!protostubURL) throw new Error('domain parameter is needed');

      return new Promise(function (resolve, reject) {

        var domain = (0, _utils.divideURL)(protostubURL).domain;

        if (!domain) {
          domain = protostubURL;
        }

        var _stubSandbox = void 0;
        var _stubDescriptor = void 0;
        var _runtimeProtoStubURL = void 0;
        var _stubSourcePackage = void 0;

        var errorReason = function errorReason(reason) {
          console.error('Something failed on the deploy of protocolstub: ', reason);
          reject(reason);
        };

        // Discover Protocol Stub
        console.info('------------------- ProtoStub ---------------------------\n');
        console.info('Discover or Create a new ProtoStub for domain: ', domain);
        _this.registry.discoverProtostub(domain).then(function (runtimeProtoStubURL) {
          // Is registed?
          console.info('1. Proto Stub Discovered: ', runtimeProtoStubURL);

          // we have completed step 2 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          // TODO: Check if the status is saved in the status of sandbox;
          var stub = {
            runtimeProtoStubURL: runtimeProtoStubURL,
            status: 'deployed'
          };

          resolve(stub);
          console.info('------------------- END ---------------------------\n');
        }).catch(function (reason) {

          // is not registed?
          console.info('1. Proto Stub not found:', reason);

          // we have completed step 3 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          // we need to get ProtoStub descriptor step 4 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
          _this.runtimeCatalogue.getStubDescriptor(protostubURL).then(function (stubDescriptor) {

            console.info('2. return the ProtoStub descriptor:', stubDescriptor);

            // we have completed step 5 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
            _stubDescriptor = stubDescriptor;

            var sourcePackageURL = stubDescriptor.sourcePackageURL;

            if (sourcePackageURL === '/sourcePackage') {
              return stubDescriptor.sourcePackage;
            }

            // we need to get ProtoStub Source code from descriptor - step 6 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
            return _this.runtimeCatalogue.getSourcePackageFromURL(sourcePackageURL);
          }).catch(errorReason).then(function (stubSourcePackage) {
            console.info('3. return the ProtoStub Source Code: ', stubSourcePackage);

            // we have completed step 7 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

            _stubSourcePackage = stubSourcePackage;

            // TODO: Check on PEP (policy Engine) if we need the sandbox and check if the Sandbox Factory have the context sandbox;
            var policy = true;
            return policy;
          }).then(function (policy) {
            // this will return the sandbox or one promise to getSandbox;
            return _this.registry.getSandbox(domain);
          }).then(function (stubSandbox) {

            console.info('4. if the sandbox is registered then return the sandbox ', stubSandbox);

            // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

            _stubSandbox = stubSandbox;
            return stubSandbox;
          }).catch(function (reason) {
            console.info('5. Sandbox was not found, creating a new one ', reason);

            // check if the sandbox is registed for this stub descriptor url;
            // Make Steps xxx --- xxx
            // Instantiate the Sandbox
            var sandbox = _this.runtimeFactory.createSandbox();
            sandbox.addListener('*', function (msg) {
              _this.messageBus.postMessage(msg);
            });

            return sandbox;
          }).then(function (sandbox) {
            console.info('6. return the sandbox instance and register', sandbox, 'to domain ', domain);

            _stubSandbox = sandbox;

            // we need register stub on registry - step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
            return _this.registry.registerStub(_stubSandbox, domain);
          }).then(function (runtimeProtoStubURL) {

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

            configuration.runtimeURL = _this.runtimeURL;

            // Deploy Component step xxx
            return _stubSandbox.deployComponent(_stubSourcePackage.sourceCode, runtimeProtoStubURL, configuration);
          }).then(function (deployComponentStatus) {
            console.info('8: return deploy component for sandbox status: ', deployComponentStatus);

            // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

            // Add the message bus listener
            _this.messageBus.addListener(_runtimeProtoStubURL, function (msg) {
              _stubSandbox.postMessage(msg);
            });

            // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

            // Load Stub function resolved with success;
            var stub = {
              runtimeProtoStubURL: _runtimeProtoStubURL,
              status: deployComponentStatus
            };

            resolve(stub);
            console.info('------------------- END ---------------------------\n');
          }).catch(errorReason);
        });
      });
    }

    /**
    * Deploy Stub from Catalogue URL or domain url
    * @param  {URL.URL}     domain          domain
    */

  }, {
    key: 'loadIdpProxy',
    value: function loadIdpProxy(idpProxyURL) {

      var _this = this;

      if (!idpProxyURL) throw new Error('The IDP Proxy URL is a needed parameter, could be a DOMAIN or a URL');

      return new Promise(function (resolve, reject) {

        var domain = (0, _utils.divideURL)(idpProxyURL).domain;

        if (!domain) {
          domain = idpProxyURL;
        }

        var _proxySandbox = void 0;
        var _proxyDescriptor = void 0;
        var _runtimeIdpProxyURL = void 0;
        var _proxySourcePackage = void 0;

        var errorReason = function errorReason(reason) {
          console.error('Something failed on the deploy of IdpProxy: ', reason);
          reject(reason);
        };

        // Discover IDPProxy
        console.info('------------------- IDP Proxy Deploy ---------------------------\n');
        console.info('Discover or Create a new IdpProxy for domain/URL: ', domain);
        return _this.registry.discoverIdpProxy(domain).then(function (runtimeIdpProxyURL) {
          // Is registed?
          console.info('1. IDPProxy Discovered: ', runtimeIdpProxyURL);

          // we have completed step 2 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          // TODO: Check if the status is saved in the status of sandbox;
          var idpProxy = {
            runtimeIdpProxyURL: runtimeIdpProxyURL,
            status: 'deployed'
          };

          resolve(idpProxy);
          console.info('------------------- END ---------------------------\n');
        }).catch(function (reason) {

          // is not registed?
          console.info('1. IdpProxy not found:', reason);

          // we have completed step 3 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

          // we need to get ProtoStub descriptor step 4 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
          _this.runtimeCatalogue.getIdpProxyDescriptor(idpProxyURL).then(function (proxyDescriptor) {

            console.info('2. Return the IDPProxy descriptor:', proxyDescriptor);

            // we have completed step 5 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
            _proxyDescriptor = proxyDescriptor;

            var sourcePackageURL = proxyDescriptor.sourcePackageURL;

            if (sourcePackageURL === '/sourcePackage') {
              return proxyDescriptor.sourcePackage;
            }

            // we need to get ProtoStub Source code from descriptor - step 6 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
            return _this.runtimeCatalogue.getSourcePackageFromURL(sourcePackageURL);
          }).catch(errorReason).then(function (sourcePackage) {
            console.info('3. return the IDPProxy source package: ', sourcePackage);

            // we have completed step 7 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

            _proxySourcePackage = sourcePackage;

            // TODO: Check on PEP (policy Engine) if we need the sandbox and check if the Sandbox Factory have the context sandbox;
            var policy = true;
            return policy;
          }).then(function (policy) {
            // this will return the sandbox or one promise to getSandbox;
            return _this.registry.getSandbox(domain);
          }).then(function (proxySandbox) {

            console.info('4. if the sandbox is registered then return the sandbox', proxySandbox);

            _proxySandbox = proxySandbox;
            return proxySandbox;
          }).catch(function (reason) {
            console.info('5. Sandbox was not found, creating a new one', reason);

            // check if the sandbox is registed for this proxy descriptor url;
            // Make Steps xxx --- xxx
            // Instantiate the Sandbox
            var sandbox = _this.runtimeFactory.createSandbox();
            sandbox.addListener('*', function (msg) {
              _this.messageBus.postMessage(msg);
            });

            return sandbox;
          }).then(function (sandbox) {
            console.info('6. return the sandbox instance and register', sandbox, 'to domain ', domain);

            _proxySandbox = sandbox;

            // we need register stub on registry - step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
            return _this.registry.registerIdpProxy(sandbox, domain);
          }).then(function (runtimeIdpProxyURL) {

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
            configuration.runtimeURL = _this.runtimeURL;

            // Deploy Component step xxx
            return _proxySandbox.deployComponent(_proxySourcePackage.sourceCode, runtimeIdpProxyURL, configuration);
          }).then(function (deployComponentStatus) {
            console.info('8: return deploy component for sandbox status: ', deployComponentStatus);

            // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

            // Add the message bus listener
            _this.messageBus.addListener(_runtimeIdpProxyURL, function (msg) {
              _proxySandbox.postMessage(msg);
            });

            // we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md

            // Load Stub function resolved with success;
            var idpProxy = {
              runtimeIdpProxyURL: _runtimeIdpProxyURL,
              status: deployComponentStatus
            };

            resolve(idpProxy);
            console.info('------------------- END ---------------------------\n');
          }).catch(errorReason);
        });
      });
    }

    /**
     * Used to close all the runtime; Unregister all hyperties;
     * @return {Promise<Boolean>} result of the close method, with true or false to the operation success;
     */

  }, {
    key: 'close',
    value: function close() {
      var _this = this;

      console.info('Unregister all hyperties');
      return new Promise(function (resolve, reject) {

        _this.registry.unregisterAllHyperties().then(function (result) {
          console.info('All the hyperties are unregisted with Success:', result);
          resolve(true);
        }).catch(function (reason) {
          console.error('Failed to unregister the hyperties', reason);
          reject(false);
        });
      });
    }

    /**
    * Used to check for updates about components handled in the Catalogue including protocol stubs and Hyperties. check relationship with lifecycle management provided by Service Workers
    * @param  {CatalogueURL}       url url
    */

  }, {
    key: 'checkForUpdate',
    value: function checkForUpdate(url) {
      // Body...
    }
  }]);

  return RuntimeUA;
}();

exports.default = RuntimeUA;