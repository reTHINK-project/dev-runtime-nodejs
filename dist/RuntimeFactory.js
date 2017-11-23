// version: 0.1.0
// date: Fri Oct 27 2017 16:35:18 GMT+0100 (WEST)
// licence: 
/**
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


(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("child_process"), require("colors"), require("node-fetch"), require("atob"), require("dexie"), require("fake-indexeddb"), require("fake-indexeddb/lib/FDBKeyRange"), require("indexeddbshim"), require("node-localstorage"), require("node-webcrypto-ossl"), require("service-framework/dist/PersistenceManager"), require("service-framework/dist/RuntimeCatalogue"), require("service-framework/dist/StorageManager"));
	else if(typeof define === 'function' && define.amd)
		define("RuntimeFactory", ["runtime-core/dist/minibus", "runtime-core/dist/sandbox", "child_process", "colors", "node-fetch", "atob", "dexie", "fake-indexeddb", "fake-indexeddb/lib/FDBKeyRange", "indexeddbshim", "node-localstorage", "node-webcrypto-ossl", "service-framework/dist/PersistenceManager", "service-framework/dist/RuntimeCatalogue", "service-framework/dist/StorageManager"], factory);
	else if(typeof exports === 'object')
		exports["RuntimeFactory"] = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("child_process"), require("colors"), require("node-fetch"), require("atob"), require("dexie"), require("fake-indexeddb"), require("fake-indexeddb/lib/FDBKeyRange"), require("indexeddbshim"), require("node-localstorage"), require("node-webcrypto-ossl"), require("service-framework/dist/PersistenceManager"), require("service-framework/dist/RuntimeCatalogue"), require("service-framework/dist/StorageManager"));
	else
		root["RuntimeFactory"] = factory(root["runtime-core/dist/minibus"], root["runtime-core/dist/sandbox"], root["child_process"], root["colors"], root["node-fetch"], root["atob"], root["dexie"], root["fake-indexeddb"], root["fake-indexeddb/lib/FDBKeyRange"], root["indexeddbshim"], root["node-localstorage"], root["node-webcrypto-ossl"], root["service-framework/dist/PersistenceManager"], root["service-framework/dist/RuntimeCatalogue"], root["service-framework/dist/StorageManager"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("runtime-core/dist/minibus");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("runtime-core/dist/sandbox");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("colors");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
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
var methods = { GET: 'get', POST: 'post' };

var fetch = __webpack_require__(9);

var Request = function () {
  function Request() {
    _classCallCheck(this, Request);

    var _this = this;
    console.log('Node http Request');
    Object.keys(methods).forEach(function (method) {
      _this[methods[method]] = function (url, options) {
        return new Promise(function (resolve, reject) {
          _this.makeLocalRequest(method, url, options).then(function (result) {
            resolve(result);
          }).catch(function (reason) {
            reject(reason);
          });
        });
      };
    });
  }

  /**
   * handling request methods
   * @returns {text<string>}
   **/


  _createClass(Request, [{
    key: 'makeLocalRequest',
    value: function makeLocalRequest(method, url, options) {
      var _this = this;
      console.log('HTTPS Request:'.yellow, method, url, options);

      return new Promise(function (resolve, reject) {
        var urlMap = _this.mapProtocol(url);

        console.log('Mapped url is '.yellow, urlMap, 'method is:'.green, method);
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

        if (method === 'GET') {
          // handle GET method
          fetch(urlMap).then(function (res) {
            console.log('statusCode is: '.green, res.status);
            return res.text();
          }).then(function (body) {
            resolve(body.toString('utf8'));
          }).catch(function (err) {
            console.error('Error occured on GET method of url:'.red, urlMap, ' reason :'.red, err);
          });
        } else if (method === 'POST') {
          var postOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'cache-control': 'no-cache'
            },
            body: options && options.body ? options.body : {}
          };

          console.log('PostOptions:', postOptions);

          fetch(urlMap, postOptions).then(function (res) {
            console.log('statusCode is: '.green, res.status);
            return res.text();
          }).then(function (body) {
            resolve(body.toString('utf8'));
          }).catch(function (error) {
            console.error('Error occured on POST method of url:', urlMap, 'with options:', options, 'reason :', error);
          });
        }
      });
    }

    /**
     * @returns {variable<string>}
     **/

  }, {
    key: 'mapProtocol',
    value: function mapProtocol(url) {
      var protocolmap = {
        'localhost://': 'https://',
        'undefined://': 'https://',
        'hyperty-catalogue://': 'https://',
        'https://': 'https://',
        'http://': 'https://'
      };

      var foundProtocol = false;
      for (var protocol in protocolmap) {
        if (url.slice(0, protocol.length) === protocol) {
          url = protocolmap[protocol] + url.slice(protocol.length, url.length);
          foundProtocol = true;
          break;
        }
      }

      if (!foundProtocol) {
        throw new Error('Invalid protocol of url: ' + url);
      }
      return url;
    }
  }]);

  return Request;
}();

exports.default = Request;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
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

// TODO: import and extend the class of the service-framework
// service-framework/dist/RuntimeCapabilities;

var RuntimeCapabilities = function () {
  function RuntimeCapabilities(storageManager) {
    _classCallCheck(this, RuntimeCapabilities);

    if (!storageManager) throw new Error('The Runtime Capabilities need the storageManager');
    this.storageManager = storageManager;
  }

  /**
   * Returns as a promise RuntimeCapabilities json object with all available capabilities of the runtime.
   * If it was not yet persisted in the Storage Manager it collects all required info from the platform and saves in the storage manager.
   * @returns {Promise<object>}
   */


  _createClass(RuntimeCapabilities, [{
    key: 'getRuntimeCapabilities',
    value: function getRuntimeCapabilities() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        Promise.all([_this._getEnvironment()]).then(function (result) {

          var capabilities = {};
          console.log('this._getEnvironment()s: ', _this._getEnvironment());

          result.forEach(function (capability) {
            Object.assign(capabilities, capability);
          });

          console.log('capabilities: ', capabilities);
          _this.storageManager.set('capabilities', '1', capabilities);

          resolve(capabilities);
        }).catch(function (error) {
          reject(error);
        });
      });
    }

    /**
     * returns as a promise a boolean according to available capabilities.
     * @returns {Promise<boolean>}
     */

  }, {
    key: 'isAvailable',
    value: function isAvailable(capability) {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.storageManager.get('capabilities').then(function (capabilities) {
          console.log('Capability ' + capability + ' is available? ', capabilities.hasOwnProperty(capability) && capabilities[capability]);
          if (capabilities.hasOwnProperty(capability) && capabilities[capability]) {
            resolve(true);
          } else {
            resolve(false);
          }
        }).catch(function (error) {
          console.error('Error has occured while checking capability, reason:', error);
          reject(error);
        });
      });
    }

    /**
     * it refreshes previously collected capabilities and updates the storage manager
     */

  }, {
    key: 'update',
    value: function update() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.getRuntimeCapabilities().then(resolve).catch(reject);
      });
    }

    // TODO: organize the code in separated files

  }, {
    key: '_getEnvironment',
    value: function _getEnvironment() {
      // TODO: this should be more effective and check the environment
      try {
        return {
          node: !!!(window && navigator)
        };
      } catch (error) {
        return {
          node: true
        };
      }
    }
  }]);

  return RuntimeCapabilities;
}();

exports.default = RuntimeCapabilities;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sandbox = __webpack_require__(1);

var _minibus = __webpack_require__(0);

var _minibus2 = _interopRequireDefault(_minibus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var SandboxApp = function (_Sandbox) {
  _inherits(SandboxApp, _Sandbox);

  function SandboxApp() {
    _classCallCheck(this, SandboxApp);

    console.log('---------------------- Sandbox App -----------------------'.green);

    var _this = _possibleConstructorReturn(this, (SandboxApp.__proto__ || Object.getPrototypeOf(SandboxApp)).call(this));

    _this.type = _sandbox.SandboxType.NORMAL;
    process.on('message', function (msg) {
      // console.log('SandboxApp Received message  is :\n'.green);
      if (msg.hasOwnProperty('to') && msg.to.startsWith('core:')) return;

      _this._onMessage(msg);
    });
    return _this;
  }

  _createClass(SandboxApp, [{
    key: '_onPostMessage',
    value: function _onPostMessage(msg) {
      console.log('SandboxApp postMessage message: '.green);
      process.send(msg);
    }
  }]);

  return SandboxApp;
}(_sandbox.Sandbox);

exports.default = SandboxApp;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sandbox = __webpack_require__(1);

var _minibus = __webpack_require__(0);

var _minibus2 = _interopRequireDefault(_minibus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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


var child = __webpack_require__(3);
var colors = __webpack_require__(4);

var SandboxWorker = function (_Sandbox) {
  _inherits(SandboxWorker, _Sandbox);

  function SandboxWorker(script) {
    _classCallCheck(this, SandboxWorker);

    var _this2 = _possibleConstructorReturn(this, (SandboxWorker.__proto__ || Object.getPrototypeOf(SandboxWorker)).call(this, script));

    console.log('-------------------------------------------- in Sandbox Worker ----------------------------------'.red);
    _this2.type = _sandbox.SandboxType.NORMAL;
    var _this = _this2;
    _this2.worker = child.fork(script);
    if (!!_this2.worker) {
      _this2.worker.on('message', function (e) {
        _this._onMessage(e);
      });
      _this2.worker.send('');
    } else {
      throw new Error('Your environment does not support worker \n', e);
    }

    _this2.worker.on('exit', function (msg) {
      console.log('child process exit SandboxWorker stopped');
      _this2.worker.exit();
      _this2.worker.kill();
    });

    _this2.worker.on('error', function (msg) {
      console.log('child process error  SandboxWorker stopped');
      _this2.worker.exit();
      _this2.worker.kill();
    });
    return _this2;
  }

  _createClass(SandboxWorker, [{
    key: '_onPostMessage',
    value: function _onPostMessage(msg) {
      this.worker.send(msg);
    }
  }]);

  return SandboxWorker;
}(_sandbox.Sandbox);

exports.default = SandboxWorker;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SandboxWorker = __webpack_require__(8);

var _SandboxWorker2 = _interopRequireDefault(_SandboxWorker);

var _SandboxApp = __webpack_require__(7);

var _SandboxApp2 = _interopRequireDefault(_SandboxApp);

var _Request = __webpack_require__(5);

var _Request2 = _interopRequireDefault(_Request);

var _atob2 = __webpack_require__(13);

var _atob3 = _interopRequireDefault(_atob2);

var _StorageManager = __webpack_require__(22);

var _StorageManager2 = _interopRequireDefault(_StorageManager);

var _RuntimeCatalogue = __webpack_require__(21);

var _PersistenceManager = __webpack_require__(20);

var _PersistenceManager2 = _interopRequireDefault(_PersistenceManager);

var _nodeLocalstorage = __webpack_require__(18);

var _dexie = __webpack_require__(14);

var _dexie2 = _interopRequireDefault(_dexie);

var _indexeddbshim = __webpack_require__(17);

var _indexeddbshim2 = _interopRequireDefault(_indexeddbshim);

var _RuntimeCapabilities = __webpack_require__(6);

var _RuntimeCapabilities2 = _interopRequireDefault(_RuntimeCapabilities);

var _nodeWebcryptoOssl = __webpack_require__(19);

var _nodeWebcryptoOssl2 = _interopRequireDefault(_nodeWebcryptoOssl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dexie2.default.dependencies.indexedDB = __webpack_require__(15);
_dexie2.default.dependencies.IDBKeyRange = __webpack_require__(16);

var createStorageManager = function createStorageManager() {
  var indexeddB = {};
  var indexedDB = indexeddB.indexedDB,
      IDBKeyRange = indexeddB.IDBKeyRange;

  var storageName = 'cache';

  var db = new _dexie2.default(storageName);

  _storageManager = new _StorageManager2.default(db, storageName);
  return _storageManager;
};

var _storageManager = createStorageManager();

var RuntimeFactory = Object.create({
  createSandbox: function createSandbox(capabilities) {
    var _this = this;

    return new Promise(function (resolve, reject) {

      var capability = 'node';
      var SandboxCapabilities = {};

      _this.capabilitiesManager.isAvailable(capability).then(function (result) {
        if (result) {
          SandboxCapabilities = { "node": true };
          resolve(new _SandboxWorker2.default('../dist/ContextServiceProvider.js'));
        } else {}
      }).catch(function (reason) {
        console.error('[createSandbox ], Error occured while creating Sandbox, reason : ', reason);
        reject(reason);
      });
    });
  },
  createAppSandbox: function createAppSandbox() {
    return new _SandboxApp2.default('../dist/ContextApp.js');
  },
  createHttpRequest: function createHttpRequest() {
    var request = new _Request2.default();
    return request;
  },
  atob: function atob(b64) {
    return (0, _atob3.default)(b64);
  },
  persistenceManager: function persistenceManager() {
    var localStorage = new _nodeLocalstorage.LocalStorage('./scratch');
    return new _PersistenceManager2.default(localStorage);
  },
  storageManager: function storageManager() {
    return _storageManager;
  },
  createRuntimeCatalogue: function createRuntimeCatalogue() {
    this.catalogue = new _RuntimeCatalogue.RuntimeCatalogue(this);
    return this.catalogue;
  },
  runtimeCapabilities: function runtimeCapabilities() {
    this.capabilitiesManager = new _RuntimeCapabilities2.default(_storageManager);
    return this.capabilitiesManager;
  },
  createWebcrypto: function createWebcrypto() {
    return new _nodeWebcryptoOssl2.default();
  }
});

exports.default = RuntimeFactory;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("atob");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("dexie");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("fake-indexeddb");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("fake-indexeddb/lib/FDBKeyRange");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("indexeddbshim");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("node-localstorage");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("node-webcrypto-ossl");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("service-framework/dist/PersistenceManager");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("service-framework/dist/RuntimeCatalogue");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("service-framework/dist/StorageManager");

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDhhMzM1MTk0ODg2MDRlNzMyNzE2PzIyMTkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiPzc0NzIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiPzYyMzUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiPzQzMDgiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCI/YTE5OCIsIndlYnBhY2s6Ly8vLi9zcmMvUmVxdWVzdC5qcz83M2E5Iiwid2VicGFjazovLy8uL3NyYy9SdW50aW1lQ2FwYWJpbGl0aWVzLmpzPzQ0NTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NhbmRib3hBcHAuanM/NzAyZCIsIndlYnBhY2s6Ly8vLi9zcmMvU2FuZGJveFdvcmtlci5qcz8xZTQ2Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtZmV0Y2hcIj9lOTA1Iiwid2VicGFjazovLy8uL3NyYy9SdW50aW1lRmFjdG9yeS5qcz8zNTE0Iiwid2VicGFjazovLy9leHRlcm5hbCBcImF0b2JcIj9jNzVhIiwid2VicGFjazovLy9leHRlcm5hbCBcImRleGllXCI/MWQ2NCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlLWluZGV4ZWRkYlwiPzJhMTciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCI/ZTYwMCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbmRleGVkZGJzaGltXCI/OTZkZiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWxvY2Fsc3RvcmFnZVwiP2IwZmMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS13ZWJjcnlwdG8tb3NzbFwiPzE4MzIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIj82YTc3Iiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiP2YxYzQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiPzdjMTkiXSwibmFtZXMiOlsibWV0aG9kcyIsIkdFVCIsIlBPU1QiLCJmZXRjaCIsInJlcXVpcmUiLCJSZXF1ZXN0IiwiX3RoaXMiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJtZXRob2QiLCJ1cmwiLCJvcHRpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtYWtlTG9jYWxSZXF1ZXN0IiwidGhlbiIsInJlc3VsdCIsImNhdGNoIiwicmVhc29uIiwieWVsbG93IiwidXJsTWFwIiwibWFwUHJvdG9jb2wiLCJncmVlbiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX1RMU19SRUpFQ1RfVU5BVVRIT1JJWkVEIiwicmVzIiwic3RhdHVzIiwidGV4dCIsImJvZHkiLCJ0b1N0cmluZyIsImVyciIsImVycm9yIiwicmVkIiwicG9zdE9wdGlvbnMiLCJoZWFkZXJzIiwicHJvdG9jb2xtYXAiLCJmb3VuZFByb3RvY29sIiwicHJvdG9jb2wiLCJzbGljZSIsImxlbmd0aCIsIkVycm9yIiwiUnVudGltZUNhcGFiaWxpdGllcyIsInN0b3JhZ2VNYW5hZ2VyIiwiYWxsIiwiX2dldEVudmlyb25tZW50IiwiY2FwYWJpbGl0aWVzIiwiY2FwYWJpbGl0eSIsImFzc2lnbiIsInNldCIsImdldCIsImhhc093blByb3BlcnR5IiwiZ2V0UnVudGltZUNhcGFiaWxpdGllcyIsIm5vZGUiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJTYW5kYm94QXBwIiwidHlwZSIsIk5PUk1BTCIsIm9uIiwibXNnIiwidG8iLCJzdGFydHNXaXRoIiwiX29uTWVzc2FnZSIsInNlbmQiLCJjaGlsZCIsImNvbG9ycyIsIlNhbmRib3hXb3JrZXIiLCJzY3JpcHQiLCJ3b3JrZXIiLCJmb3JrIiwiZSIsImV4aXQiLCJraWxsIiwiZGVwZW5kZW5jaWVzIiwiaW5kZXhlZERCIiwiSURCS2V5UmFuZ2UiLCJjcmVhdGVTdG9yYWdlTWFuYWdlciIsImluZGV4ZWRkQiIsInN0b3JhZ2VOYW1lIiwiZGIiLCJSdW50aW1lRmFjdG9yeSIsImNyZWF0ZSIsImNyZWF0ZVNhbmRib3giLCJTYW5kYm94Q2FwYWJpbGl0aWVzIiwiY2FwYWJpbGl0aWVzTWFuYWdlciIsImlzQXZhaWxhYmxlIiwiY3JlYXRlQXBwU2FuZGJveCIsImNyZWF0ZUh0dHBSZXF1ZXN0IiwicmVxdWVzdCIsImF0b2IiLCJiNjQiLCJwZXJzaXN0ZW5jZU1hbmFnZXIiLCJsb2NhbFN0b3JhZ2UiLCJjcmVhdGVSdW50aW1lQ2F0YWxvZ3VlIiwiY2F0YWxvZ3VlIiwicnVudGltZUNhcGFiaWxpdGllcyIsImNyZWF0ZVdlYmNyeXB0byJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSxzRDs7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O0FBQ3ZCLFNBQUtDLFNBQUwsR0FBaUIsdUNBQXFCLElBQXJCLENBQWpCO0FBQ0EsV0FBTyxLQUFLQSxTQUFaO0FBQ0QsR0EvQzhCO0FBaUQvQkMscUJBakQrQixpQ0FpRFQ7QUFDcEIsU0FBS1gsbUJBQUwsR0FBMkIsa0NBQXdCMUMsZUFBeEIsQ0FBM0I7QUFDQSxXQUFRLEtBQUswQyxtQkFBYjtBQUNELEdBcEQ4QjtBQXNEL0JZLGlCQXREK0IsNkJBc0RiO0FBQ2hCLFdBQU8saUNBQVA7QUFDRDtBQXhEOEIsQ0FBZCxDQUFyQjs7a0JBNERlaEIsYzs7Ozs7O0FDdkhmLGlDOzs7Ozs7QUNBQSxrQzs7Ozs7O0FDQUEsMkM7Ozs7OztBQ0FBLDJEOzs7Ozs7QUNBQSwwQzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxzRTs7Ozs7O0FDQUEsb0U7Ozs7OztBQ0FBLGtFIiwiZmlsZSI6IlJ1bnRpbWVGYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKSwgcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiksIHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpLCByZXF1aXJlKFwiY29sb3JzXCIpLCByZXF1aXJlKFwibm9kZS1mZXRjaFwiKSwgcmVxdWlyZShcImF0b2JcIiksIHJlcXVpcmUoXCJkZXhpZVwiKSwgcmVxdWlyZShcImZha2UtaW5kZXhlZGRiXCIpLCByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIpLCByZXF1aXJlKFwiaW5kZXhlZGRic2hpbVwiKSwgcmVxdWlyZShcIm5vZGUtbG9jYWxzdG9yYWdlXCIpLCByZXF1aXJlKFwibm9kZS13ZWJjcnlwdG8tb3NzbFwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlJ1bnRpbWVGYWN0b3J5XCIsIFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiwgXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIsIFwiY2hpbGRfcHJvY2Vzc1wiLCBcImNvbG9yc1wiLCBcIm5vZGUtZmV0Y2hcIiwgXCJhdG9iXCIsIFwiZGV4aWVcIiwgXCJmYWtlLWluZGV4ZWRkYlwiLCBcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiLCBcImluZGV4ZWRkYnNoaW1cIiwgXCJub2RlLWxvY2Fsc3RvcmFnZVwiLCBcIm5vZGUtd2ViY3J5cHRvLW9zc2xcIiwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiLCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiLCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUnVudGltZUZhY3RvcnlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIpLCByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiKSwgcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIiksIHJlcXVpcmUoXCJjb2xvcnNcIiksIHJlcXVpcmUoXCJub2RlLWZldGNoXCIpLCByZXF1aXJlKFwiYXRvYlwiKSwgcmVxdWlyZShcImRleGllXCIpLCByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGJcIiksIHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIiksIHJlcXVpcmUoXCJpbmRleGVkZGJzaGltXCIpLCByZXF1aXJlKFwibm9kZS1sb2NhbHN0b3JhZ2VcIiksIHJlcXVpcmUoXCJub2RlLXdlYmNyeXB0by1vc3NsXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSdW50aW1lRmFjdG9yeVwiXSA9IGZhY3Rvcnkocm9vdFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIl0sIHJvb3RbXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCJdLCByb290W1wiY2hpbGRfcHJvY2Vzc1wiXSwgcm9vdFtcImNvbG9yc1wiXSwgcm9vdFtcIm5vZGUtZmV0Y2hcIl0sIHJvb3RbXCJhdG9iXCJdLCByb290W1wiZGV4aWVcIl0sIHJvb3RbXCJmYWtlLWluZGV4ZWRkYlwiXSwgcm9vdFtcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiXSwgcm9vdFtcImluZGV4ZWRkYnNoaW1cIl0sIHJvb3RbXCJub2RlLWxvY2Fsc3RvcmFnZVwiXSwgcm9vdFtcIm5vZGUtd2ViY3J5cHRvLW9zc2xcIl0sIHJvb3RbXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiXSwgcm9vdFtcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiXSwgcm9vdFtcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE2X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIyX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGEzMzUxOTQ4ODYwNGU3MzI3MTYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb2xvcnNcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5jb25zdCBtZXRob2RzID0ge0dFVDogJ2dldCcsIFBPU1Q6ICdwb3N0J307XG5cbmxldCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcblxuXG5jbGFzcyBSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIGNvbnNvbGUubG9nKCdOb2RlIGh0dHAgUmVxdWVzdCcpO1xuICAgIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgX3RoaXNbbWV0aG9kc1ttZXRob2RdXSA9ICh1cmwsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBfdGhpcy5tYWtlTG9jYWxSZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGhhbmRsaW5nIHJlcXVlc3QgbWV0aG9kc1xuICAgKiBAcmV0dXJucyB7dGV4dDxzdHJpbmc+fVxuICAgKiovXG4gIG1ha2VMb2NhbFJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcbiAgICBsZXQgX3RoaXMgPXRoaXNcbiAgICBjb25zb2xlLmxvZygnSFRUUFMgUmVxdWVzdDonLnllbGxvdywgbWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHVybE1hcCA9IF90aGlzLm1hcFByb3RvY29sKHVybCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdNYXBwZWQgdXJsIGlzICcueWVsbG93LCB1cmxNYXAsJ21ldGhvZCBpczonLmdyZWVuLCBtZXRob2QpO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCA9ICcwJ1xuXG4gICAgICBpZihtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIC8vIGhhbmRsZSBHRVQgbWV0aG9kXG4gICAgICAgIGZldGNoKHVybE1hcCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1c0NvZGUgaXM6ICcuZ3JlZW4sICByZXMuc3RhdHVzKVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpXG4gICAgICAgIH0pLnRoZW4oKGJvZHkpPT4ge1xuICAgICAgICAgIHJlc29sdmUoYm9keS50b1N0cmluZygndXRmOCcpKVxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJlZCBvbiBHRVQgbWV0aG9kIG9mIHVybDonLnJlZCAsIHVybE1hcCwgJyByZWFzb24gOicucmVkLCBlcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIGlmKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIGxldCBwb3N0T3B0aW9ucyA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ2NhY2hlLWNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogb3B0aW9ucyAmJiBvcHRpb25zLmJvZHkgPyBvcHRpb25zLmJvZHkgOiB7fVxuICAgICAgICB9O1xuXG5cdGNvbnNvbGUubG9nKCdQb3N0T3B0aW9uczonLCBwb3N0T3B0aW9ucyk7XG5cbiAgICAgICAgZmV0Y2godXJsTWFwLCBwb3N0T3B0aW9ucykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1c0NvZGUgaXM6ICcuZ3JlZW4sICByZXMuc3RhdHVzKVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpXG4gICAgICAgIH0pLnRoZW4oKGJvZHkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGJvZHkudG9TdHJpbmcoJ3V0ZjgnKSlcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJlZCBvbiBQT1NUIG1ldGhvZCBvZiB1cmw6Jyx1cmxNYXAsICd3aXRoIG9wdGlvbnM6Jywgb3B0aW9ucywgJ3JlYXNvbiA6JywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gLyoqXG4gICogQHJldHVybnMge3ZhcmlhYmxlPHN0cmluZz59XG4gICoqL1xuICBtYXBQcm90b2NvbCh1cmwpIHtcbiAgICBsZXQgcHJvdG9jb2xtYXAgPSB7XG4gICAgICAnbG9jYWxob3N0Oi8vJzogJ2h0dHBzOi8vJyxcbiAgICAgICd1bmRlZmluZWQ6Ly8nOiAnaHR0cHM6Ly8nLFxuICAgICAgJ2h5cGVydHktY2F0YWxvZ3VlOi8vJzogJ2h0dHBzOi8vJyxcbiAgICAgICdodHRwczovLyc6ICdodHRwczovLycsXG4gICAgICAnaHR0cDovLyc6ICdodHRwczovLydcbiAgICB9XG5cbiAgICBsZXQgZm91bmRQcm90b2NvbCA9IGZhbHNlXG4gICAgZm9yIChsZXQgcHJvdG9jb2wgaW4gcHJvdG9jb2xtYXApIHtcbiAgICAgIGlmICh1cmwuc2xpY2UoMCwgcHJvdG9jb2wubGVuZ3RoKSA9PT0gcHJvdG9jb2wpIHtcbiAgICAgICAgdXJsID0gcHJvdG9jb2xtYXBbcHJvdG9jb2xdICsgdXJsLnNsaWNlKHByb3RvY29sLmxlbmd0aCwgdXJsLmxlbmd0aClcbiAgICAgICAgZm91bmRQcm90b2NvbCA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWZvdW5kUHJvdG9jb2wpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwcm90b2NvbCBvZiB1cmw6ICcgKyB1cmwpXG4gICAgfVxuICAgIHJldHVybiB1cmxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlcXVlc3QuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbi8vIFRPRE86IGltcG9ydCBhbmQgZXh0ZW5kIHRoZSBjbGFzcyBvZiB0aGUgc2VydmljZS1mcmFtZXdvcmtcbi8vIHNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhcGFiaWxpdGllcztcblxuY2xhc3MgUnVudGltZUNhcGFiaWxpdGllcyB7XG5cbiAgIGNvbnN0cnVjdG9yKHN0b3JhZ2VNYW5hZ2VyKSB7XG4gICAgaWYgKCFzdG9yYWdlTWFuYWdlcikgdGhyb3cgbmV3IEVycm9yKCdUaGUgUnVudGltZSBDYXBhYmlsaXRpZXMgbmVlZCB0aGUgc3RvcmFnZU1hbmFnZXInKTtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyID0gc3RvcmFnZU1hbmFnZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhcyBhIHByb21pc2UgUnVudGltZUNhcGFiaWxpdGllcyBqc29uIG9iamVjdCB3aXRoIGFsbCBhdmFpbGFibGUgY2FwYWJpbGl0aWVzIG9mIHRoZSBydW50aW1lLlxuICAgKiBJZiBpdCB3YXMgbm90IHlldCBwZXJzaXN0ZWQgaW4gdGhlIFN0b3JhZ2UgTWFuYWdlciBpdCBjb2xsZWN0cyBhbGwgcmVxdWlyZWQgaW5mbyBmcm9tIHRoZSBwbGF0Zm9ybSBhbmQgc2F2ZXMgaW4gdGhlIHN0b3JhZ2UgbWFuYWdlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn1cbiAgICovXG4gIGdldFJ1bnRpbWVDYXBhYmlsaXRpZXMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIFByb21pc2UuYWxsKFt0aGlzLl9nZXRFbnZpcm9ubWVudCgpXSkudGhlbigocmVzdWx0KSA9PiB7XG5cbiAgICAgICAgbGV0IGNhcGFiaWxpdGllcyA9IHt9O1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5fZ2V0RW52aXJvbm1lbnQoKXM6ICcsIHRoaXMuX2dldEVudmlyb25tZW50KCkpO1xuXG4gICAgICAgIHJlc3VsdC5mb3JFYWNoKChjYXBhYmlsaXR5KSA9PiB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihjYXBhYmlsaXRpZXMsIGNhcGFiaWxpdHkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnY2FwYWJpbGl0aWVzOiAnLCBjYXBhYmlsaXRpZXMpO1xuICAgICAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyLnNldCgnY2FwYWJpbGl0aWVzJywgJzEnLCBjYXBhYmlsaXRpZXMpO1xuXG4gICAgICAgIHJlc29sdmUoY2FwYWJpbGl0aWVzKTtcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhcyBhIHByb21pc2UgYSBib29sZWFuIGFjY29yZGluZyB0byBhdmFpbGFibGUgY2FwYWJpbGl0aWVzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIGlzQXZhaWxhYmxlKGNhcGFiaWxpdHkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuZ2V0KCdjYXBhYmlsaXRpZXMnKS50aGVuKChjYXBhYmlsaXRpZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NhcGFiaWxpdHkgJyArIGNhcGFiaWxpdHkgKyAnIGlzIGF2YWlsYWJsZT8gJywgY2FwYWJpbGl0aWVzLmhhc093blByb3BlcnR5KGNhcGFiaWxpdHkpICYmIGNhcGFiaWxpdGllc1tjYXBhYmlsaXR5XSk7XG4gICAgICAgIGlmIChjYXBhYmlsaXRpZXMuaGFzT3duUHJvcGVydHkoY2FwYWJpbGl0eSkgJiYgY2FwYWJpbGl0aWVzW2NhcGFiaWxpdHldKSB7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhcyBvY2N1cmVkIHdoaWxlIGNoZWNraW5nIGNhcGFiaWxpdHksIHJlYXNvbjonLCBlcnJvcik7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpdCByZWZyZXNoZXMgcHJldmlvdXNseSBjb2xsZWN0ZWQgY2FwYWJpbGl0aWVzIGFuZCB1cGRhdGVzIHRoZSBzdG9yYWdlIG1hbmFnZXJcbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5nZXRSdW50aW1lQ2FwYWJpbGl0aWVzKCkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVE9ETzogb3JnYW5pemUgdGhlIGNvZGUgaW4gc2VwYXJhdGVkIGZpbGVzXG4gIF9nZXRFbnZpcm9ubWVudCgpIHtcbiAgICAvLyBUT0RPOiB0aGlzIHNob3VsZCBiZSBtb3JlIGVmZmVjdGl2ZSBhbmQgY2hlY2sgdGhlIGVudmlyb25tZW50XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGU6ICEhISh3aW5kb3cgJiYgbmF2aWdhdG9yKVxuICAgICAgfTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBub2RlOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdW50aW1lQ2FwYWJpbGl0aWVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1J1bnRpbWVDYXBhYmlsaXRpZXMuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKlxuKi9cblxuaW1wb3J0IHsgU2FuZGJveCwgU2FuZGJveFR5cGUgfSBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94JztcbmltcG9ydCBNaW5pQnVzIGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L21pbmlidXMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbmRib3hBcHAgZXh0ZW5kcyBTYW5kYm94IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU2FuZGJveCBBcHAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLmdyZWVuKTtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlID0gU2FuZGJveFR5cGUuTk9STUFMO1xuICAgIHByb2Nlc3Mub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnU2FuZGJveEFwcCBSZWNlaXZlZCBtZXNzYWdlICBpcyA6XFxuJy5ncmVlbik7XG4gICAgICBpZiAobXNnLmhhc093blByb3BlcnR5KCd0bycpICYmIG1zZy50by5zdGFydHNXaXRoKCdjb3JlOicpKVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIHRoaXMuX29uTWVzc2FnZShtc2cpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uUG9zdE1lc3NhZ2UobXNnKSB7XG4gICAgY29uc29sZS5sb2coJ1NhbmRib3hBcHAgcG9zdE1lc3NhZ2UgbWVzc2FnZTogJy5ncmVlbik7XG4gICAgcHJvY2Vzcy5zZW5kKG1zZyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TYW5kYm94QXBwLmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuaW1wb3J0IHsgU2FuZGJveCwgU2FuZGJveFR5cGUgfSBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94JztcbmltcG9ydCBNaW5pQnVzIGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L21pbmlidXMnO1xubGV0IGNoaWxkID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpO1xubGV0IGNvbG9ycyA9IHJlcXVpcmUoJ2NvbG9ycycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYW5kYm94V29ya2VyIGV4dGVuZHMgU2FuZGJveHtcbiAgY29uc3RydWN0b3Ioc2NyaXB0KSB7XG4gICAgc3VwZXIoc2NyaXB0KTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaW4gU2FuZGJveCBXb3JrZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScucmVkKTtcbiAgICB0aGlzLnR5cGUgPSBTYW5kYm94VHlwZS5OT1JNQUw7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB0aGlzLndvcmtlciA9IGNoaWxkLmZvcmsoc2NyaXB0KTtcbiAgICBpZiAoISF0aGlzLndvcmtlcikge1xuICAgICAgdGhpcy53b3JrZXIub24oJ21lc3NhZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICBfdGhpcy5fb25NZXNzYWdlKGUpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLndvcmtlci5zZW5kKCcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgd29ya2VyIFxcbicsIGUpO1xuICAgIH1cblxuICAgIHRoaXMud29ya2VyLm9uKCdleGl0JywgKG1zZykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NoaWxkIHByb2Nlc3MgZXhpdCBTYW5kYm94V29ya2VyIHN0b3BwZWQnKTtcbiAgICAgIHRoaXMud29ya2VyLmV4aXQoKTtcbiAgICAgIHRoaXMud29ya2VyLmtpbGwoKTtcbiAgICB9KTtcblxuICAgIHRoaXMud29ya2VyLm9uKCdlcnJvcicsIChtc2cpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBwcm9jZXNzIGVycm9yICBTYW5kYm94V29ya2VyIHN0b3BwZWQnKTtcbiAgICAgIHRoaXMud29ya2VyLmV4aXQoKTtcbiAgICAgIHRoaXMud29ya2VyLmtpbGwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9vblBvc3RNZXNzYWdlKG1zZykge1xuICAgIHRoaXMud29ya2VyLnNlbmQobXNnKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NhbmRib3hXb3JrZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS1mZXRjaFwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDciLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTYW5kYm94V29ya2VyIGZyb20gJy4vU2FuZGJveFdvcmtlcic7XG5pbXBvcnQgU2FuZGJveEFwcCBmcm9tICcuL1NhbmRib3hBcHAnO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi9SZXF1ZXN0JztcbmltcG9ydCBhdG9iIGZyb20gJ2F0b2InO1xuXG5pbXBvcnQgU3RvcmFnZU1hbmFnZXIgZnJvbSAnc2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlcic7XG5pbXBvcnQgeyBSdW50aW1lQ2F0YWxvZ3VlIH0gZnJvbSAnc2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlJztcbmltcG9ydCBQZXJzaXN0ZW5jZU1hbmFnZXIgZnJvbSAnc2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXInO1xuXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tICdub2RlLWxvY2Fsc3RvcmFnZSc7XG5cbmltcG9ydCBEZXhpZSBmcm9tICdkZXhpZSc7XG5EZXhpZS5kZXBlbmRlbmNpZXMuaW5kZXhlZERCID0gcmVxdWlyZSgnZmFrZS1pbmRleGVkZGInKVxuRGV4aWUuZGVwZW5kZW5jaWVzLklEQktleVJhbmdlID0gcmVxdWlyZSgnZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlJylcblxuaW1wb3J0IHNldEdsb2JhbFZhcnMgZnJvbSAnaW5kZXhlZGRic2hpbSc7XG5cbmltcG9ydCBSdW50aW1lQ2FwYWJpbGl0aWVzIGZyb20gJy4vUnVudGltZUNhcGFiaWxpdGllcyc7XG5cbmltcG9ydCBXZWJDcnlwdG8gZnJvbSAnbm9kZS13ZWJjcnlwdG8tb3NzbCc7XG5cblxubGV0IGNyZWF0ZVN0b3JhZ2VNYW5hZ2VyID0gKCkgPT4ge1xuICBsZXQgaW5kZXhlZGRCID0ge307XG4gIGxldCB7aW5kZXhlZERCLCBJREJLZXlSYW5nZSB9ID0gaW5kZXhlZGRCO1xuICBsZXQgc3RvcmFnZU5hbWUgPSAnY2FjaGUnO1xuXG4gIGNvbnN0IGRiID0gbmV3IERleGllKHN0b3JhZ2VOYW1lKTtcblxuICBzdG9yYWdlTWFuYWdlciA9IG5ldyBTdG9yYWdlTWFuYWdlcihkYiwgc3RvcmFnZU5hbWUpO1xuICByZXR1cm4gc3RvcmFnZU1hbmFnZXI7XG59O1xuXG5sZXQgc3RvcmFnZU1hbmFnZXIgPSBjcmVhdGVTdG9yYWdlTWFuYWdlcigpO1xuXG5sZXQgUnVudGltZUZhY3RvcnkgPSBPYmplY3QuY3JlYXRlKHtcbiAgICBjcmVhdGVTYW5kYm94KGNhcGFiaWxpdGllcykge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpICA9PiB7XG5cbiAgICAgICAgbGV0IGNhcGFiaWxpdHkgPSAnbm9kZSc7XG4gICAgICAgIGxldCBTYW5kYm94Q2FwYWJpbGl0aWVzID0ge307XG5cbiAgICAgICAgdGhpcy5jYXBhYmlsaXRpZXNNYW5hZ2VyLmlzQXZhaWxhYmxlKGNhcGFiaWxpdHkpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmKHJlc3VsdCkge1xuICAgICAgICAgICAgU2FuZGJveENhcGFiaWxpdGllcyA9IHsgXCJub2RlXCI6IHRydWUgfTtcbiAgICAgICAgICAgIHJlc29sdmUobmV3IFNhbmRib3hXb3JrZXIoICcuLi9kaXN0L0NvbnRleHRTZXJ2aWNlUHJvdmlkZXIuanMnKSk7XG4gICAgICAgICAgfSBlbHNlIHtcblxuXG4gICAgICAgICAgfVxuICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbY3JlYXRlU2FuZGJveCBdLCBFcnJvciBvY2N1cmVkIHdoaWxlIGNyZWF0aW5nIFNhbmRib3gsIHJlYXNvbiA6ICcsIHJlYXNvbik7XG4gICAgICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjcmVhdGVBcHBTYW5kYm94KCkge1xuICAgICAgcmV0dXJuIG5ldyBTYW5kYm94QXBwKCAnLi4vZGlzdC9Db250ZXh0QXBwLmpzJyk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUh0dHBSZXF1ZXN0KCkge1xuICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgpO1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfSxcblxuICAgIGF0b2IoYjY0KSB7XG4gICAgICByZXR1cm4gYXRvYihiNjQpO1xuICAgIH0sXG5cbiAgICBwZXJzaXN0ZW5jZU1hbmFnZXIoKSB7XG4gICAgICBsZXQgbG9jYWxTdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZSgnLi9zY3JhdGNoJyk7XG4gICAgICByZXR1cm4gbmV3IFBlcnNpc3RlbmNlTWFuYWdlcihsb2NhbFN0b3JhZ2UpO1xuICAgIH0sXG5cbiAgICBzdG9yYWdlTWFuYWdlcigpIHtcbiAgICAgIHJldHVybiBzdG9yYWdlTWFuYWdlcjtcbiAgICB9LFxuXG4gICAgY3JlYXRlUnVudGltZUNhdGFsb2d1ZSgpIHtcbiAgICAgIHRoaXMuY2F0YWxvZ3VlID0gbmV3IFJ1bnRpbWVDYXRhbG9ndWUodGhpcyk7XG4gICAgICByZXR1cm4gdGhpcy5jYXRhbG9ndWU7XG4gICAgfSxcblxuICAgIHJ1bnRpbWVDYXBhYmlsaXRpZXMoKSB7XG4gICAgICB0aGlzLmNhcGFiaWxpdGllc01hbmFnZXIgPSBuZXcgUnVudGltZUNhcGFiaWxpdGllcyhzdG9yYWdlTWFuYWdlcik7XG4gICAgICByZXR1cm4gIHRoaXMuY2FwYWJpbGl0aWVzTWFuYWdlcjtcbiAgICB9LFxuXG4gICAgY3JlYXRlV2ViY3J5cHRvKCkge1xuICAgICAgcmV0dXJuIG5ldyBXZWJDcnlwdG8oKTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBSdW50aW1lRmFjdG9yeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SdW50aW1lRmFjdG9yeS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF0b2JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhdG9iXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGV4aWVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJkZXhpZVwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2UtaW5kZXhlZGRiXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmFrZS1pbmRleGVkZGJcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIlxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbmRleGVkZGJzaGltXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaW5kZXhlZGRic2hpbVwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtbG9jYWxzdG9yYWdlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS1sb2NhbHN0b3JhZ2VcIlxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLXdlYmNyeXB0by1vc3NsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS13ZWJjcnlwdG8tb3NzbFwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJzb3VyY2VSb290IjoiIn0=