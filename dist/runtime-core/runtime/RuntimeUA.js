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

var _PEP = require('../policy/PEP');

var _PEP2 = _interopRequireDefault(_PEP);

var _MessageBus = require('../bus/MessageBus');

var _MessageBus2 = _interopRequireDefault(_MessageBus);

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _runtimeConfiguration = require('./runtimeConfiguration');

var _SyncherManager = require('../syncher/SyncherManager');

var _SyncherManager2 = _interopRequireDefault(_SyncherManager);

var _RuntimeCoreCtx = require('../policy/context/RuntimeCoreCtx');

var _RuntimeCoreCtx2 = _interopRequireDefault(_RuntimeCoreCtx);

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
 * @property {PEP} policyEngine - Policy Engine Module;
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

    // Configuration object with information related with servers
    _this.runtimeConfiguration = Object.assign({ domain: domain }, _runtimeConfiguration.runtimeConfiguration);

    _this.runtimeFactory = runtimeFactory;
    _this.runtimeCatalogue = runtimeFactory.createRuntimeCatalogue();

    if (typeof runtimeFactory.createRuntimeCatalogue === 'function') {
      _this.persistenceManager = runtimeFactory.createRuntimeCatalogue();
    } else {
      throw new Error('Check your Runtime Factory because it need the Runtime Catalogue implementation');
    }

    if (typeof runtimeFactory.persistenceManager === 'function') {
      _this.persistenceManager = runtimeFactory.persistenceManager();
    } else {
      throw new Error('Check your Runtime Factory because it need the Persistence Manager implementation');
    }

    if (typeof runtimeFactory.storageManager === 'function') {
      _this.storageManager = runtimeFactory.storageManager();
    } else {
      throw new Error('Check your Runtime Factory because it need the Storage Manager implementation');
    }
    if (typeof runtimeFactory.runtimeCapabilities === 'function') {
      _this.runtimeCapabilities = runtimeFactory.runtimeCapabilities(_this.storageManager);
      _this.runtimeCapabilities.getRuntimeCapabilities().then(function (result) {
        console.log('capabilities: ', result);
      }).catch(function (err) {
        console.log('Error: ', err);
      });
    } else {
      console.info('Check your RuntimeFactory because it need the Runtime Capabilities implementation');
    }

    // Prepare the loader to load the hyperties, protostubs and idpproxy;
    _this.loader = new _Loader2.default(_this.runtimeConfiguration);

    // TODO: post and return registry/hypertyRuntimeInstance to and from Back-end Service
    // the response is like: runtime://sp1/123

    var runtimeURL = 'runtime://' + domain + '/' + Math.floor(Math.random() * 10000 + 1);
    _this.runtimeURL = runtimeURL;
    _this.domain = domain;

    // TODO: check if runtime catalogue need the runtimeURL;
    _this.runtimeCatalogue.runtimeURL = runtimeURL;

    // Instantiate the identity Module
    _this.identityModule = new _IdentityModule2.default(runtimeURL, _this.runtimeCapabilities);

    // Use the sandbox factory to create an AppSandbox;
    // In the future can be decided by policyEngine if we need
    // create a AppSandbox or not;
    var appSandbox = runtimeFactory.createAppSandbox();

    // Instantiate the Registry Module
    _this.registry = new _Registry2.default(runtimeURL, appSandbox, _this.identityModule, _this.runtimeCatalogue, _this.runtimeCapabilities);

    // Set the loader to load Hyperties, Stubs and IdpProxies
    _this.registry.loader = _this.loader;

    // Instantiate the Message Bus
    _this.messageBus = new _MessageBus2.default(_this.registry);

    // Instantiate the Policy Engine
    _this.policyEngine = new _PEP2.default(new _RuntimeCoreCtx2.default(_this.identityModule, _this.registry, _this.persistenceManager, _this.runtimeCapabilities));

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

    // Use sandbox factory to use specific methods
    // and set the message bus to the factory
    runtimeFactory.messageBus = _this.messageBus;

    // Instanciate the SyncherManager;
    _this.syncherManager = new _SyncherManager2.default(_this.runtimeURL, _this.messageBus, _this.registry, _this.runtimeCatalogue);

    // Set into loader the needed components;
    _this.loader.registry = _this.registry;
    _this.loader.runtimeURL = _this.runtimeURL;
    _this.loader.messageBus = _this.messageBus;
    _this.loader.runtimeCatalogue = _this.runtimeCatalogue;
    _this.loader.runtimeFactory = _this.runtimeFactory;

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
      var _this2 = this;

      if (!hypertyDescriptorURL) throw new Error('Hyperty descriptor url parameter is needed');

      return new Promise(function (resolve, reject) {

        _this2.loader.loadHyperty(hypertyDescriptorURL).then(function (result) {
          resolve(result);
        }).catch(function (reason) {
          reject(reason);
        });
      });
    }

    /**
    * Deploy Stub from Catalogue URL or domain url
    * @param  {URL.URL}     domain          domain
    */

  }, {
    key: 'loadStub',
    value: function loadStub(protostubURL) {
      var _this3 = this;

      if (!protostubURL) throw new Error('ProtoStub descriptor url parameter is needed');

      return new Promise(function (resolve, reject) {

        _this3.loader.loadStub(protostubURL).then(function (result) {
          resolve(result);
        }).catch(function (reason) {
          reject(reason);
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
      var _this4 = this;

      if (!idpProxyURL) throw new Error('The IDP Proxy URL is a needed parameter, could be a DOMAIN or a URL');

      return new Promise(function (resolve, reject) {
        _this4.loader.loadIdpProxy(idpProxyURL).then(function (result) {
          resolve(result);
        }).catch(function (reason) {
          reject(reason);
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