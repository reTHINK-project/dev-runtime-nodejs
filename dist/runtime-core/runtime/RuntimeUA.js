'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

require('babel-polyfill');

var _Registry = require('../registry/Registry');

var _Registry2 = _interopRequireDefault(_Registry);

var _IdentityModule = require('../identity/IdentityModule');

var _IdentityModule2 = _interopRequireDefault(_IdentityModule);

var _PEP = require('../policy/PEP');

var _PEP2 = _interopRequireDefault(_PEP);

var _MessageBus = require('../bus/MessageBus');

var _MessageBus2 = _interopRequireDefault(_MessageBus);

var _utils = require('../utils/utils');

var _AddressAllocation = require('../allocation/AddressAllocation');

var _AddressAllocation2 = _interopRequireDefault(_AddressAllocation);

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _Descriptors = require('./Descriptors');

var _Descriptors2 = _interopRequireDefault(_Descriptors);

var _runtimeConfiguration = require('./runtimeConfiguration');

var _runtimeUtils = require('./runtimeUtils');

var _GraphConnector = require('../graphconnector/GraphConnector');

var _GraphConnector2 = _interopRequireDefault(_GraphConnector);

var _DataObjectsStorage = require('../store-objects/DataObjectsStorage');

var _DataObjectsStorage2 = _interopRequireDefault(_DataObjectsStorage);

var _SyncherManager = require('../syncher/SyncherManager');

var _SyncherManager2 = _interopRequireDefault(_SyncherManager);

var _RuntimeCoreCtx = require('../policy/context/RuntimeCoreCtx');

var _RuntimeCoreCtx2 = _interopRequireDefault(_RuntimeCoreCtx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


//Main dependecies
var RuntimeUA = function () {

  /**
   * Create a new instance of Runtime User Agent
   * @param {descriptor} runtimeDescriptor - pass all the hyperty runtime descriptor
   * @param {runtimeFactory} runtimeFactory - Specific implementation for the environment where the core runtime will run;
   * @param {domain} domainURL - specify the domain base for the runtime;
   */
  function RuntimeUA(runtimeDescriptor, runtimeFactory, domain) {
    (0, _classCallCheck3.default)(this, RuntimeUA);

    if (!runtimeDescriptor) throw new Error('The runtime descriptor is a needed parameter');
    if (!runtimeFactory) throw new Error('The sandbox factory is a needed parameter');
    if (!domain) throw new Error('You need the domain of runtime');

    // Configuration object with information related with servers
    this.runtimeConfiguration = (0, _assign2.default)({ domain: domain }, _runtimeConfiguration.runtimeConfiguration);
    this.runtimeFactory = runtimeFactory;
    this.runtimeCatalogue = runtimeFactory.createRuntimeCatalogue();

    if (runtimeDescriptor.p2pHandlerStub && typeof runtimeDescriptor.p2pHandlerStub === 'string' && runtimeDescriptor.p2pHandlerStub.includes('://')) {
      this.p2p = true;
    } else {
      this.p2p = false;
    }

    _runtimeUtils.runtimeUtils.runtimeDescriptor = runtimeDescriptor;
    this.runtimeUtils = _runtimeUtils.runtimeUtils;

    if (typeof runtimeFactory.createRuntimeCatalogue === 'function') {
      this.persistenceManager = runtimeFactory.createRuntimeCatalogue();
    } else {
      throw new Error('Check your Runtime Factory because it need the Runtime Catalogue implementation');
    }

    if (typeof runtimeFactory.persistenceManager === 'function') {
      this.persistenceManager = runtimeFactory.persistenceManager();
    } else {
      throw new Error('Check your Runtime Factory because it need the Persistence Manager implementation');
    }

    if (typeof runtimeFactory.storageManager === 'function') {
      this.storageManager = runtimeFactory.storageManager();
    } else {
      throw new Error('Check your Runtime Factory because it need the Storage Manager implementation');
    }
    if (typeof runtimeFactory.runtimeCapabilities === 'function') {
      this.runtimeCapabilities = runtimeFactory.runtimeCapabilities(this.storageManager);
    } else {
      console.info('Check your RuntimeFactory because it need the Runtime Capabilities implementation');
    }
  }

  /**
   * Intialize the installation of runtime
   *
   * @access public
   * @return {Promise<Boolean, Error>} this is Promise and if the installation process happened without any problems returns true otherwise the error.
   *
   * @memberOf RuntimeUA
   */


  (0, _createClass3.default)(RuntimeUA, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      return new _promise2.default(function (resolve, reject) {

        _this2.domain = _this2.runtimeConfiguration.domain;

        try {
          var getCapabilities = _this2.runtimeCapabilities.getRuntimeCapabilities();
          var getRuntimeURL = _this2.storageManager.get('runtime:URL');
          var getStoredDataObjects = _this2.storageManager.get('syncherManager:ObjectURLs');

          _promise2.default.all([getRuntimeURL, getCapabilities, getStoredDataObjects]).then(function (results) {

            _this2.runtimeURL = results[0] ? results[0].runtimeURL : results[0];
            if (!_this2.runtimeURL) {
              _this2.runtimeURL = 'runtime://' + _this2.domain + '/' + (0, _utils.generateGUID)();
              _this2.storageManager.set('runtime:URL', 1, { runtimeURL: _this2.runtimeURL });
            }

            _this2.capabilities = results[1];
            (0, _assign2.default)(_runtimeUtils.runtimeUtils.runtimeCapabilities.constraints, results[1]);

            _this2._dataObjectsStorage = new _DataObjectsStorage2.default(_this2.storageManager, results[2] || {});

            return _this2._loadComponents();
          }).then(function (status) {

            if (_this2.p2p) {
              console.info('[RuntimeUA - init] load p2pHandler: ', status);
              return _this2._loadP2PHandler();
            } else {
              console.info('[RuntimeUA - init] P2P not supported');
              return 'P2P Not Supported';
            }
          }).then(function (result) {
            console.info('[runtime ua - init] - status: ', result);
            resolve(true);
          }, function (reason) {
            console.error('ERROR: ', reason);
            resolve(true);
          });
        } catch (e) {
          reject(e);
        }
      });
    }
  }, {
    key: '_loadP2PHandler',
    value: function _loadP2PHandler() {
      var _this3 = this;

      return new _promise2.default(function (resolve) {

        var runtimeDescriptor = _runtimeUtils.runtimeUtils.runtimeDescriptor;
        var p2pStubHandler = runtimeDescriptor.p2pHandlerStub;

        var p2pConfig = {
          isHandlerStub: true,
          runtimeURL: _this3.runtimeURL
        };

        console.log('[RuntimeUA loadP2PHandler] P2PStubHandler: ', p2pStubHandler);

        _this3.loader.loadStub(p2pStubHandler, p2pConfig).then(function (result) {

          var runtimeUAURL = _this3.runtimeURL + '/ua';
          var msg = {
            type: 'subscribe',
            from: runtimeUAURL,
            to: 'domain://msg-node.' + _this3.domain + '/sm',
            body: {
              subscribe: [result.url],
              source: _this3.runtimeURL
            }
          };

          _this3.messageBus.addListener(runtimeUAURL, function (msg) {
            console.log('[runtime ua - listener] - receive msg: ', msg);
          });

          _this3.messageBus.postMessage(msg, function (reply) {
            console.log('[runtime ua - postMessage] - reply: ', reply);
          });

          console.info('[runtime ua - p2p installation] - success: ', result);
          resolve(true);
        }).catch(function (reason) {
          console.info('[runtime ua - p2p installation] - fail: ', reason);
          resolve(false);
        });
      });
    }

    /**
     *
     * @access private
     * @return {Promise<Boolean, Error>} this is Promise and returns true if all components are loaded with success or an error if someone fails.
     *
     * @memberOf RuntimeUA
     */

  }, {
    key: '_loadComponents',
    value: function _loadComponents() {
      var _this4 = this;

      return new _promise2.default(function (resolve, reject) {

        try {

          // Prepare the on instance to handle with the fallbacks and runtimeCatalogue;
          _this4.descriptorInstance = new _Descriptors2.default(_this4.runtimeURL, _this4.runtimeCatalogue, _this4.runtimeConfiguration);

          // Prepare the loader to load the hyperties, protostubs and idpproxy;
          _this4.loader = new _Loader2.default(_this4.runtimeURL, _this4.runtimeConfiguration, _this4.descriptorInstance);

          // Instantiate the identity Module
          _this4.identityModule = new _IdentityModule2.default(_this4.runtimeURL, _this4.runtimeCapabilities, _this4.storageManager);

          // Use the sandbox factory to create an AppSandbox;
          // In the future can be decided by policyEngine if we need
          // create a AppSandbox or not;
          var appSandbox = _this4.runtimeFactory.createAppSandbox();

          // Instantiate the Registry Module
          _this4.registry = new _Registry2.default(_this4.runtimeURL, appSandbox, _this4.identityModule, _this4.runtimeCatalogue, _this4.runtimeCapabilities, _this4.storageManager);

          // Set the loader to load Hyperties, Stubs and IdpProxies
          _this4.registry.loader = _this4.loader;

          // Instantiate the Message Bus
          _this4.messageBus = new _MessageBus2.default(_this4.registry);

          // Prepare the address allocation instance;
          _this4.addressAllocation = new _AddressAllocation2.default(_this4.runtimeURL, _this4.messageBus, _this4.registry);

          // Instantiate the Policy Engine
          _this4.policyEngine = new _PEP2.default(new _RuntimeCoreCtx2.default(_this4.identityModule, _this4.registry, _this4.storageManager, _this4.runtimeCapabilities));

          _this4.messageBus.pipeline.handlers = [

          // Policy message authorise
          function (ctx) {
            _this4.policyEngine.authorise(ctx.msg).then(function (changedMgs) {
              ctx.msg = changedMgs;
              ctx.next();
            }).catch(function (reason) {
              console.error(reason);
              ctx.fail(reason);
            });
          }];

          // Instantiate the Graph Connector
          _this4.graphConnector = new _GraphConnector2.default(_this4.runtimeURL, _this4.messageBus, _this4.storageManager);

          // Add to App Sandbox the listener;
          appSandbox.addListener('*', function (msg) {
            _this4.messageBus.postMessage(msg);
          });

          // Register messageBus on Registry
          _this4.registry.messageBus = _this4.messageBus;

          // Register registry on IdentityModule
          _this4.identityModule.registry = _this4.registry;

          // Use sandbox factory to use specific methods
          // and set the message bus to the factory
          _this4.runtimeFactory.messageBus = _this4.messageBus;

          // Instanciate the SyncherManager;
          _this4.syncherManager = new _SyncherManager2.default(_this4.runtimeURL, _this4.messageBus, _this4.registry, _this4.runtimeCatalogue, _this4.storageManager, null, _this4._dataObjectsStorage);

          // Set into loader the needed components;
          _this4.loader.runtimeURL = _this4.runtimeURL;
          _this4.loader.messageBus = _this4.messageBus;
          _this4.loader.registry = _this4.registry;
          _this4.loader.runtimeCatalogue = _this4.runtimeCatalogue;
          _this4.loader.runtimeFactory = _this4.runtimeFactory;

          resolve(true);
        } catch (e) {
          reject(e);
        }
      });
    }

    /**
     * Deploy Hyperty from Catalogue URL
     *
     * @see https://github.com/reTHINK-project/specs/tree/master/datamodel/core/address
     *
     * @param {URL.HypertyCatalogueURL} hypertyCatalogueURL - The Catalogue URL used to identify descriptors in the Catalogue.
     * @param {boolean|URL.HypertyURL} [reuseURL=false] reuseURL - reuseURL is used to reuse the hypertyURL previously registred, by default the reuse is disabled;
     * @param {URL} appURL - the app url address; // TODO: improve this description;
     * @returns {Promise<Boolean, Error>} this is Promise and returns true if all components are loaded with success or an error if someone fails.
     *
     * @memberOf RuntimeUA
     */

  }, {
    key: 'loadHyperty',
    value: function loadHyperty(hypertyCatalogueURL) {
      var reuseURL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var appURL = arguments[2];


      if (!hypertyCatalogueURL) throw new Error('Hyperty descriptor url parameter is needed');
      return this.loader.loadHyperty(hypertyCatalogueURL, reuseURL, appURL);
    }

    /**
    * Deploy Stub from Catalogue URL or domain url
    * @param  {URL.URL}     domain          domain
    */

  }, {
    key: 'loadStub',
    value: function loadStub(protocolstubCatalogueURL) {

      if (!protocolstubCatalogueURL) throw new Error('ProtoStub descriptor url parameter is needed');
      return this.loader.loadStub(protocolstubCatalogueURL);
    }

    /**
    * Deploy idpProxy from Catalogue URL or domain url
    * @param  {URL.URL}     domain          domain
    */

  }, {
    key: 'loadIdpProxy',
    value: function loadIdpProxy(ipdProxyCatalogueURL) {

      if (!ipdProxyCatalogueURL) throw new Error('The IDP Proxy URL is a needed parameter, could be a DOMAIN or a URL');
      return this.loader.loadIdpProxy(ipdProxyCatalogueURL);
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
      return new _promise2.default(function (resolve, reject) {

        _this.registry.unregisterAllHyperties().then(function (result) {
          console.info('All the hyperties are unregisted with Success:', result);
          resolve(true);
        }).catch(function (reason) {
          console.error('Failed to unregister the hyperties', reason);
          reject(false);
        });
      });
    }
  }]);
  return RuntimeUA;
}(); /**
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

exports.default = RuntimeUA;