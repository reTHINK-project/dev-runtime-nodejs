// version: 0.1.0
// date: Thu Jun 01 2017 15:40:07 GMT+0100 (WEST)
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
		module.exports = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("node-fetch"), require("urijs"), require("atob"), require("dexie"), require("fake-indexeddb"), require("fake-indexeddb/lib/FDBKeyRange"), require("indexeddbshim"), require("node-localstorage"), require("service-framework/dist/PersistenceManager"), require("service-framework/dist/RuntimeCatalogue"), require("service-framework/dist/StorageManager"));
	else if(typeof define === 'function' && define.amd)
		define("core", ["runtime-core/dist/minibus", "runtime-core/dist/sandbox", "eval", "child_process", "colors", "node-fetch", "urijs", "atob", "dexie", "fake-indexeddb", "fake-indexeddb/lib/FDBKeyRange", "indexeddbshim", "node-localstorage", "service-framework/dist/PersistenceManager", "service-framework/dist/RuntimeCatalogue", "service-framework/dist/StorageManager"], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("node-fetch"), require("urijs"), require("atob"), require("dexie"), require("fake-indexeddb"), require("fake-indexeddb/lib/FDBKeyRange"), require("indexeddbshim"), require("node-localstorage"), require("service-framework/dist/PersistenceManager"), require("service-framework/dist/RuntimeCatalogue"), require("service-framework/dist/StorageManager"));
	else
		root["core"] = factory(root["runtime-core/dist/minibus"], root["runtime-core/dist/sandbox"], root["eval"], root["child_process"], root["colors"], root["node-fetch"], root["urijs"], root["atob"], root["dexie"], root["fake-indexeddb"], root["fake-indexeddb/lib/FDBKeyRange"], root["indexeddbshim"], root["node-localstorage"], root["service-framework/dist/PersistenceManager"], root["service-framework/dist/RuntimeCatalogue"], root["service-framework/dist/StorageManager"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("eval");

/***/ }),
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
            /*          headers: {
                        'Content-Type': 'application/json',
                        'cache-control': 'no-cache',
                      },*/
            body: options && options.body ? options.body : null
          };

          fetch(urlMap, postOptions).then(function (res) {
            console.log('statusCode is: '.green, res.status);
            return res.text();
          }).then(function (body) {
            resolve(body.toString('utf8'));
          }).catch(function (error) {
            console.error('Error occured on POST method of url:', urlMap, 'with options:', options, 'reason :', err);
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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("urijs");

/***/ }),
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

var _StorageManager = __webpack_require__(21);

var _StorageManager2 = _interopRequireDefault(_StorageManager);

var _RuntimeCatalogue = __webpack_require__(20);

var _PersistenceManager = __webpack_require__(19);

var _PersistenceManager2 = _interopRequireDefault(_PersistenceManager);

var _nodeLocalstorage = __webpack_require__(18);

var _dexie = __webpack_require__(14);

var _dexie2 = _interopRequireDefault(_dexie);

var _indexeddbshim = __webpack_require__(17);

var _indexeddbshim2 = _interopRequireDefault(_indexeddbshim);

var _RuntimeCapabilities = __webpack_require__(6);

var _RuntimeCapabilities2 = _interopRequireDefault(_RuntimeCapabilities);

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

module.exports = require("service-framework/dist/PersistenceManager");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("service-framework/dist/RuntimeCatalogue");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("service-framework/dist/StorageManager");

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
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
/**
 * Node.js child process (simultaneously is a parent process of ContextServiceProvider sandbox)
 * used as an isolated sandbox to load the Hyperty runtime aka coreRuntime
 **/


var _urijs = __webpack_require__(10);

var _urijs2 = _interopRequireDefault(_urijs);

var _RuntimeFactory = __webpack_require__(12);

var _RuntimeFactory2 = _interopRequireDefault(_RuntimeFactory);

var _eval2 = __webpack_require__(2);

var _eval3 = _interopRequireDefault(_eval2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domain = void 0;
var runtimeDescriptor = void 0;

var catalogue = _RuntimeFactory2.default.createRuntimeCatalogue();

// returnHyperty givent the runtimeHypertyURL,
// Sends message ='loadedHyperty' to the the parent process RuntimeNode throught IPC channel

function returnHyperty(hyperty) {
  process.send({ to: 'runtime:loadedHyperty', body: hyperty });
}

// while loading the protocolStub search hyperty in the runtime registry
function searchHyperty(runtime, descriptor) {
  var hyperty = undefined;
  var index = 0;
  while (!hyperty && index < runtime.registry.hypertiesList.length) {
    if (runtime.registry.hypertiesList[index].descriptor === descriptor) hyperty = runtime.registry.hypertiesList[index];
    index++;
  }
  console.log('Hyeprty founded!'.green);
  return hyperty;
}

// Install runtime on the core Sandbox
function runtimeReady(runtime) {
  // coreRuntime global EventListener for anty incoming message
  process.on('message', function (msg) {
    if (msg.to === 'core:loadHyperty') {
      var descriptor = msg.body.descriptor;
      var hyperty = searchHyperty(runtime, descriptor);
      if (hyperty) {
        returnHyperty({ runtimeHypertyURL: hyperty.hypertyURL });
      } else {
        runtime.loadHyperty(descriptor).then(returnHyperty).catch(function (error) {
          console.error('Error while loading Hyperty, reason: ', error);
        });
      }
    } else if (msg.to === 'core:loadStub') {
      runtime.loadStub(msg.body.domain);
    }
  }, false);
  console.log('--> sending to Main process RuntimeNode'.orange);
  process.send({ to: 'runtime:installed', body: {} });
}

process.on('message', function (msg) {
  if (msg.do === 'install runtime core') {
    var runtimeURL = msg.body.runtimeURL;
    domain = msg.body.domain;
    // Gets RuntimeDescriptor from the runtime catalogue
    catalogue.getRuntimeDescriptor(runtimeURL).then(function (descriptor) {
      runtimeDescriptor = descriptor;
      if (descriptor.sourcePackageURL === '/sourcePackage') {
        return descriptor.sourcePackage;
      } else {
        return catalogue.getSourcePackageFromURL(descriptor.sourcePackageURL);
      }
    }).then(function (sourcePackage) {
      var RuntimeUA = (0, _eval3.default)(sourcePackage.sourceCode, true);
      var runtime = new RuntimeUA(runtimeDescriptor, _RuntimeFactory2.default, domain);
      runtime.init().then(function () {
        runtimeReady(runtime);
      }).catch(function (reason) {
        console.log('Error init', reason);
      });
    }).catch(function (reason) {
      console.error('Error getting the RuntimeDescriptor from the service framework catalogue, reason: ', reason);
    });
  }
});

// coreRuntime Process  error handling
process.on('warning', function (warning) {
  console.warn(warning.name);
  console.warn(warning.message);
  console.warn(warning.stack);
});

process.on('exit', function (msg) {
  console.log('child process core exited');
  process.exit();
  process.kill();
});

process.on('error', function (msg) {
  console.warn('child process error core stopped');
  process.exit();
  process.kill();
});

process.on('SIGINT', function () {
  console.warn('Received SIGINT. all Node Sub-Process are exited');
  process.exit();
  process.kill();
}); // to catch crtl-c

process.on('SIGTERM', function () {
  console.warn('Received SIGTERM. core Press Control-D to exit.');
  process.exit();
  process.kill();
}); // to catch kill

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2MDM4ZDEzOWYzMmNmMzFmZTA2OCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2YWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1J1bnRpbWVDYXBhYmlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NhbmRib3hBcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NhbmRib3hXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVyaWpzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1J1bnRpbWVGYWN0b3J5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF0b2JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZXhpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZha2UtaW5kZXhlZGRiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5kZXhlZGRic2hpbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtbG9jYWxzdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUuanMiXSwibmFtZXMiOlsibWV0aG9kcyIsIkdFVCIsIlBPU1QiLCJmZXRjaCIsInJlcXVpcmUiLCJSZXF1ZXN0IiwiX3RoaXMiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJtZXRob2QiLCJ1cmwiLCJvcHRpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtYWtlTG9jYWxSZXF1ZXN0IiwidGhlbiIsInJlc3VsdCIsImNhdGNoIiwicmVhc29uIiwieWVsbG93IiwidXJsTWFwIiwibWFwUHJvdG9jb2wiLCJncmVlbiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX1RMU19SRUpFQ1RfVU5BVVRIT1JJWkVEIiwicmVzIiwic3RhdHVzIiwidGV4dCIsImJvZHkiLCJ0b1N0cmluZyIsImVyciIsImVycm9yIiwicmVkIiwicG9zdE9wdGlvbnMiLCJwcm90b2NvbG1hcCIsImZvdW5kUHJvdG9jb2wiLCJwcm90b2NvbCIsInNsaWNlIiwibGVuZ3RoIiwiRXJyb3IiLCJSdW50aW1lQ2FwYWJpbGl0aWVzIiwic3RvcmFnZU1hbmFnZXIiLCJhbGwiLCJfZ2V0RW52aXJvbm1lbnQiLCJjYXBhYmlsaXRpZXMiLCJjYXBhYmlsaXR5IiwiYXNzaWduIiwic2V0IiwiZ2V0IiwiaGFzT3duUHJvcGVydHkiLCJnZXRSdW50aW1lQ2FwYWJpbGl0aWVzIiwibm9kZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIlNhbmRib3hBcHAiLCJ0eXBlIiwiTk9STUFMIiwib24iLCJtc2ciLCJ0byIsInN0YXJ0c1dpdGgiLCJfb25NZXNzYWdlIiwic2VuZCIsImNoaWxkIiwiY29sb3JzIiwiU2FuZGJveFdvcmtlciIsInNjcmlwdCIsIndvcmtlciIsImZvcmsiLCJlIiwiZXhpdCIsImtpbGwiLCJkZXBlbmRlbmNpZXMiLCJpbmRleGVkREIiLCJJREJLZXlSYW5nZSIsImNyZWF0ZVN0b3JhZ2VNYW5hZ2VyIiwiaW5kZXhlZGRCIiwic3RvcmFnZU5hbWUiLCJkYiIsIlJ1bnRpbWVGYWN0b3J5IiwiY3JlYXRlIiwiY3JlYXRlU2FuZGJveCIsIlNhbmRib3hDYXBhYmlsaXRpZXMiLCJjYXBhYmlsaXRpZXNNYW5hZ2VyIiwiaXNBdmFpbGFibGUiLCJjcmVhdGVBcHBTYW5kYm94IiwiY3JlYXRlSHR0cFJlcXVlc3QiLCJyZXF1ZXN0IiwiYXRvYiIsImI2NCIsInBlcnNpc3RlbmNlTWFuYWdlciIsImxvY2FsU3RvcmFnZSIsImNyZWF0ZVJ1bnRpbWVDYXRhbG9ndWUiLCJjYXRhbG9ndWUiLCJydW50aW1lQ2FwYWJpbGl0aWVzIiwiZG9tYWluIiwicnVudGltZURlc2NyaXB0b3IiLCJyZXR1cm5IeXBlcnR5IiwiaHlwZXJ0eSIsInNlYXJjaEh5cGVydHkiLCJydW50aW1lIiwiZGVzY3JpcHRvciIsInVuZGVmaW5lZCIsImluZGV4IiwicmVnaXN0cnkiLCJoeXBlcnRpZXNMaXN0IiwicnVudGltZVJlYWR5IiwicnVudGltZUh5cGVydHlVUkwiLCJoeXBlcnR5VVJMIiwibG9hZEh5cGVydHkiLCJsb2FkU3R1YiIsIm9yYW5nZSIsImRvIiwicnVudGltZVVSTCIsImdldFJ1bnRpbWVEZXNjcmlwdG9yIiwic291cmNlUGFja2FnZVVSTCIsInNvdXJjZVBhY2thZ2UiLCJnZXRTb3VyY2VQYWNrYWdlRnJvbVVSTCIsIlJ1bnRpbWVVQSIsInNvdXJjZUNvZGUiLCJpbml0Iiwid2FybmluZyIsIndhcm4iLCJuYW1lIiwibWVzc2FnZSIsInN0YWNrIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNELEtBakJEO0FBa0JEO0FBQ0osQ0F4QkQ7O0FBMEJBO0FBQ0FLLFFBQVFtQyxFQUFSLENBQVcsU0FBWCxFQUFzQixVQUFDZ0UsT0FBRCxFQUFhO0FBQ2pDdkgsVUFBUXdILElBQVIsQ0FBYUQsUUFBUUUsSUFBckI7QUFDQXpILFVBQVF3SCxJQUFSLENBQWFELFFBQVFHLE9BQXJCO0FBQ0ExSCxVQUFRd0gsSUFBUixDQUFhRCxRQUFRSSxLQUFyQjtBQUNELENBSkQ7O0FBTUF2RyxRQUFRbUMsRUFBUixDQUFXLE1BQVgsRUFBbUIsVUFBQ0MsR0FBRCxFQUFTO0FBQ3pCeEQsVUFBUUMsR0FBUixDQUFZLDJCQUFaO0FBQ0FtQixVQUFRZ0QsSUFBUjtBQUNBaEQsVUFBUWlELElBQVI7QUFDRixDQUpEOztBQU1BakQsUUFBUW1DLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFVBQUNDLEdBQUQsRUFBUztBQUMzQnhELFVBQVF3SCxJQUFSLENBQWEsa0NBQWI7QUFDQXBHLFVBQVFnRCxJQUFSO0FBQ0FoRCxVQUFRaUQsSUFBUjtBQUNELENBSkQ7O0FBTUFqRCxRQUFRbUMsRUFBUixDQUFXLFFBQVgsRUFBcUIsWUFBTTtBQUN6QnZELFVBQVF3SCxJQUFSLENBQWEsa0RBQWI7QUFDQXBHLFVBQVFnRCxJQUFSO0FBQ0FoRCxVQUFRaUQsSUFBUjtBQUNELENBSkQsRSxDQUlJOztBQUVKakQsUUFBUW1DLEVBQVIsQ0FBVyxTQUFYLEVBQXNCLFlBQU07QUFDMUJ2RCxVQUFRd0gsSUFBUixDQUFhLGlEQUFiO0FBQ0FwRyxVQUFRZ0QsSUFBUjtBQUNBaEQsVUFBUWlELElBQVI7QUFDRCxDQUpELEUsQ0FJSSxnQiIsImZpbGUiOiJjb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKSwgcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiksIHJlcXVpcmUoXCJldmFsXCIpLCByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKSwgcmVxdWlyZShcImNvbG9yc1wiKSwgcmVxdWlyZShcIm5vZGUtZmV0Y2hcIiksIHJlcXVpcmUoXCJ1cmlqc1wiKSwgcmVxdWlyZShcImF0b2JcIiksIHJlcXVpcmUoXCJkZXhpZVwiKSwgcmVxdWlyZShcImZha2UtaW5kZXhlZGRiXCIpLCByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIpLCByZXF1aXJlKFwiaW5kZXhlZGRic2hpbVwiKSwgcmVxdWlyZShcIm5vZGUtbG9jYWxzdG9yYWdlXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiY29yZVwiLCBbXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiLCBcImV2YWxcIiwgXCJjaGlsZF9wcm9jZXNzXCIsIFwiY29sb3JzXCIsIFwibm9kZS1mZXRjaFwiLCBcInVyaWpzXCIsIFwiYXRvYlwiLCBcImRleGllXCIsIFwiZmFrZS1pbmRleGVkZGJcIiwgXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIiwgXCJpbmRleGVkZGJzaGltXCIsIFwibm9kZS1sb2NhbHN0b3JhZ2VcIiwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiLCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiLCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY29yZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiksIHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpLCByZXF1aXJlKFwiZXZhbFwiKSwgcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIiksIHJlcXVpcmUoXCJjb2xvcnNcIiksIHJlcXVpcmUoXCJub2RlLWZldGNoXCIpLCByZXF1aXJlKFwidXJpanNcIiksIHJlcXVpcmUoXCJhdG9iXCIpLCByZXF1aXJlKFwiZGV4aWVcIiksIHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYlwiKSwgcmVxdWlyZShcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiKSwgcmVxdWlyZShcImluZGV4ZWRkYnNoaW1cIiksIHJlcXVpcmUoXCJub2RlLWxvY2Fsc3RvcmFnZVwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiY29yZVwiXSA9IGZhY3Rvcnkocm9vdFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIl0sIHJvb3RbXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCJdLCByb290W1wiZXZhbFwiXSwgcm9vdFtcImNoaWxkX3Byb2Nlc3NcIl0sIHJvb3RbXCJjb2xvcnNcIl0sIHJvb3RbXCJub2RlLWZldGNoXCJdLCByb290W1widXJpanNcIl0sIHJvb3RbXCJhdG9iXCJdLCByb290W1wiZGV4aWVcIl0sIHJvb3RbXCJmYWtlLWluZGV4ZWRkYlwiXSwgcm9vdFtcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiXSwgcm9vdFtcImluZGV4ZWRkYnNoaW1cIl0sIHJvb3RbXCJub2RlLWxvY2Fsc3RvcmFnZVwiXSwgcm9vdFtcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCJdLCByb290W1wic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCJdLCByb290W1wic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE1X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTZfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xN19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE4X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIxX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjAzOGQxMzlmMzJjZjMxZmUwNjgiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV2YWxcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbG9yc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbG9yc1wiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbmNvbnN0IG1ldGhvZHMgPSB7R0VUOiAnZ2V0JywgUE9TVDogJ3Bvc3QnfTtcblxubGV0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpO1xuXG5cbmNsYXNzIFJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgY29uc29sZS5sb2coJ05vZGUgaHR0cCBSZXF1ZXN0Jyk7XG4gICAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG4gICAgICBfdGhpc1ttZXRob2RzW21ldGhvZF1dID0gKHVybCwgb3B0aW9ucykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIF90aGlzLm1ha2VMb2NhbFJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgICByZWplY3QocmVhc29uKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogaGFuZGxpbmcgcmVxdWVzdCBtZXRob2RzXG4gICAqIEByZXR1cm5zIHt0ZXh0PHN0cmluZz59XG4gICAqKi9cbiAgbWFrZUxvY2FsUmVxdWVzdChtZXRob2QsIHVybCwgb3B0aW9ucykge1xuICAgIGxldCBfdGhpcyA9dGhpc1xuICAgIGNvbnNvbGUubG9nKCdIVFRQUyBSZXF1ZXN0OicueWVsbG93LCBtZXRob2QsIHVybCwgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBsZXQgdXJsTWFwID0gX3RoaXMubWFwUHJvdG9jb2wodXJsKTtcblxuICAgICAgY29uc29sZS5sb2coJ01hcHBlZCB1cmwgaXMgJy55ZWxsb3csIHVybE1hcCwnbWV0aG9kIGlzOicuZ3JlZW4sIG1ldGhvZCk7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX1RMU19SRUpFQ1RfVU5BVVRIT1JJWkVEID0gJzAnXG5cbiAgICAgIGlmKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgLy8gaGFuZGxlIEdFVCBtZXRob2RcbiAgICAgICAgZmV0Y2godXJsTWFwKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3RhdHVzQ29kZSBpczogJy5ncmVlbiwgIHJlcy5zdGF0dXMpXG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KClcbiAgICAgICAgfSkudGhlbigoYm9keSk9PiB7XG4gICAgICAgICAgcmVzb2x2ZShib2R5LnRvU3RyaW5nKCd1dGY4JykpXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cmVkIG9uIEdFVCBtZXRob2Qgb2YgdXJsOicucmVkICwgdXJsTWFwLCAnIHJlYXNvbiA6Jy5yZWQsIGVycik7XG4gICAgICAgIH0pO1xuXG4gICAgICB9IGVsc2UgaWYobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgbGV0IHBvc3RPcHRpb25zID0ge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuLyogICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdjYWNoZS1jb250cm9sJzogJ25vLWNhY2hlJyxcbiAgICAgICAgICB9LCovXG4gICAgICAgICAgYm9keTogb3B0aW9ucyAmJiBvcHRpb25zLmJvZHkgPyBvcHRpb25zLmJvZHkgOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2godXJsTWFwLCBwb3N0T3B0aW9ucykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1c0NvZGUgaXM6ICcuZ3JlZW4sICByZXMuc3RhdHVzKVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpXG4gICAgICAgIH0pLnRoZW4oKGJvZHkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGJvZHkudG9TdHJpbmcoJ3V0ZjgnKSlcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJlZCBvbiBQT1NUIG1ldGhvZCBvZiB1cmw6Jyx1cmxNYXAsICd3aXRoIG9wdGlvbnM6Jywgb3B0aW9ucywgJ3JlYXNvbiA6JywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuIC8qKlxuICAqIEByZXR1cm5zIHt2YXJpYWJsZTxzdHJpbmc+fVxuICAqKi9cbiAgbWFwUHJvdG9jb2wodXJsKSB7XG4gICAgbGV0IHByb3RvY29sbWFwID0ge1xuICAgICAgJ2xvY2FsaG9zdDovLyc6ICdodHRwczovLycsXG4gICAgICAndW5kZWZpbmVkOi8vJzogJ2h0dHBzOi8vJyxcbiAgICAgICdoeXBlcnR5LWNhdGFsb2d1ZTovLyc6ICdodHRwczovLycsXG4gICAgICAnaHR0cHM6Ly8nOiAnaHR0cHM6Ly8nLFxuICAgICAgJ2h0dHA6Ly8nOiAnaHR0cHM6Ly8nXG4gICAgfVxuXG4gICAgbGV0IGZvdW5kUHJvdG9jb2wgPSBmYWxzZVxuICAgIGZvciAobGV0IHByb3RvY29sIGluIHByb3RvY29sbWFwKSB7XG4gICAgICBpZiAodXJsLnNsaWNlKDAsIHByb3RvY29sLmxlbmd0aCkgPT09IHByb3RvY29sKSB7XG4gICAgICAgIHVybCA9IHByb3RvY29sbWFwW3Byb3RvY29sXSArIHVybC5zbGljZShwcm90b2NvbC5sZW5ndGgsIHVybC5sZW5ndGgpXG4gICAgICAgIGZvdW5kUHJvdG9jb2wgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmb3VuZFByb3RvY29sKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvdG9jb2wgb2YgdXJsOiAnICsgdXJsKVxuICAgIH1cbiAgICByZXR1cm4gdXJsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXF1ZXN0LmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG4vLyBUT0RPOiBpbXBvcnQgYW5kIGV4dGVuZCB0aGUgY2xhc3Mgb2YgdGhlIHNlcnZpY2UtZnJhbWV3b3JrXG4vLyBzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXBhYmlsaXRpZXM7XG5cbmNsYXNzIFJ1bnRpbWVDYXBhYmlsaXRpZXMge1xuXG4gICBjb25zdHJ1Y3RvcihzdG9yYWdlTWFuYWdlcikge1xuICAgIGlmICghc3RvcmFnZU1hbmFnZXIpIHRocm93IG5ldyBFcnJvcignVGhlIFJ1bnRpbWUgQ2FwYWJpbGl0aWVzIG5lZWQgdGhlIHN0b3JhZ2VNYW5hZ2VyJyk7XG4gICAgdGhpcy5zdG9yYWdlTWFuYWdlciA9IHN0b3JhZ2VNYW5hZ2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYXMgYSBwcm9taXNlIFJ1bnRpbWVDYXBhYmlsaXRpZXMganNvbiBvYmplY3Qgd2l0aCBhbGwgYXZhaWxhYmxlIGNhcGFiaWxpdGllcyBvZiB0aGUgcnVudGltZS5cbiAgICogSWYgaXQgd2FzIG5vdCB5ZXQgcGVyc2lzdGVkIGluIHRoZSBTdG9yYWdlIE1hbmFnZXIgaXQgY29sbGVjdHMgYWxsIHJlcXVpcmVkIGluZm8gZnJvbSB0aGUgcGxhdGZvcm0gYW5kIHNhdmVzIGluIHRoZSBzdG9yYWdlIG1hbmFnZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdD59XG4gICAqL1xuICBnZXRSdW50aW1lQ2FwYWJpbGl0aWVzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBQcm9taXNlLmFsbChbdGhpcy5fZ2V0RW52aXJvbm1lbnQoKV0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuXG4gICAgICAgIGxldCBjYXBhYmlsaXRpZXMgPSB7fTtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuX2dldEVudmlyb25tZW50KClzOiAnLCB0aGlzLl9nZXRFbnZpcm9ubWVudCgpKTtcblxuICAgICAgICByZXN1bHQuZm9yRWFjaCgoY2FwYWJpbGl0eSkgPT4ge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oY2FwYWJpbGl0aWVzLCBjYXBhYmlsaXR5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2NhcGFiaWxpdGllczogJywgY2FwYWJpbGl0aWVzKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlTWFuYWdlci5zZXQoJ2NhcGFiaWxpdGllcycsICcxJywgY2FwYWJpbGl0aWVzKTtcblxuICAgICAgICByZXNvbHZlKGNhcGFiaWxpdGllcyk7XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYXMgYSBwcm9taXNlIGEgYm9vbGVhbiBhY2NvcmRpbmcgdG8gYXZhaWxhYmxlIGNhcGFiaWxpdGllcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBpc0F2YWlsYWJsZShjYXBhYmlsaXR5KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyLmdldCgnY2FwYWJpbGl0aWVzJykudGhlbigoY2FwYWJpbGl0aWVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDYXBhYmlsaXR5ICcgKyBjYXBhYmlsaXR5ICsgJyBpcyBhdmFpbGFibGU/ICcsIGNhcGFiaWxpdGllcy5oYXNPd25Qcm9wZXJ0eShjYXBhYmlsaXR5KSAmJiBjYXBhYmlsaXRpZXNbY2FwYWJpbGl0eV0pO1xuICAgICAgICBpZiAoY2FwYWJpbGl0aWVzLmhhc093blByb3BlcnR5KGNhcGFiaWxpdHkpICYmIGNhcGFiaWxpdGllc1tjYXBhYmlsaXR5XSkge1xuICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBoYXMgb2NjdXJlZCB3aGlsZSBjaGVja2luZyBjYXBhYmlsaXR5LCByZWFzb246JywgZXJyb3IpO1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogaXQgcmVmcmVzaGVzIHByZXZpb3VzbHkgY29sbGVjdGVkIGNhcGFiaWxpdGllcyBhbmQgdXBkYXRlcyB0aGUgc3RvcmFnZSBtYW5hZ2VyXG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuZ2V0UnVudGltZUNhcGFiaWxpdGllcygpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRPRE86IG9yZ2FuaXplIHRoZSBjb2RlIGluIHNlcGFyYXRlZCBmaWxlc1xuICBfZ2V0RW52aXJvbm1lbnQoKSB7XG4gICAgLy8gVE9ETzogdGhpcyBzaG91bGQgYmUgbW9yZSBlZmZlY3RpdmUgYW5kIGNoZWNrIHRoZSBlbnZpcm9ubWVudFxuICAgIHRyeSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBub2RlOiAhISEod2luZG93ICYmIG5hdmlnYXRvcilcbiAgICAgIH07XG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZTogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUnVudGltZUNhcGFiaWxpdGllcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SdW50aW1lQ2FwYWJpbGl0aWVzLmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbipcbiovXG5cbmltcG9ydCB7IFNhbmRib3gsIFNhbmRib3hUeXBlIH0gZnJvbSAncnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveCc7XG5pbXBvcnQgTWluaUJ1cyBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYW5kYm94QXBwIGV4dGVuZHMgU2FuZGJveCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFNhbmRib3ggQXBwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJy5ncmVlbik7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZSA9IFNhbmRib3hUeXBlLk5PUk1BTDtcbiAgICBwcm9jZXNzLm9uKCdtZXNzYWdlJywgKG1zZykgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ1NhbmRib3hBcHAgUmVjZWl2ZWQgbWVzc2FnZSAgaXMgOlxcbicuZ3JlZW4pO1xuICAgICAgaWYgKG1zZy5oYXNPd25Qcm9wZXJ0eSgndG8nKSAmJiBtc2cudG8uc3RhcnRzV2l0aCgnY29yZTonKSlcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICB0aGlzLl9vbk1lc3NhZ2UobXNnKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9vblBvc3RNZXNzYWdlKG1zZykge1xuICAgIGNvbnNvbGUubG9nKCdTYW5kYm94QXBwIHBvc3RNZXNzYWdlIG1lc3NhZ2U6ICcuZ3JlZW4pO1xuICAgIHByb2Nlc3Muc2VuZChtc2cpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2FuZGJveEFwcC5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbmltcG9ydCB7IFNhbmRib3gsIFNhbmRib3hUeXBlIH0gZnJvbSAncnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveCc7XG5pbXBvcnQgTWluaUJ1cyBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzJztcbmxldCBjaGlsZCA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcbmxldCBjb2xvcnMgPSByZXF1aXJlKCdjb2xvcnMnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FuZGJveFdvcmtlciBleHRlbmRzIFNhbmRib3h7XG4gIGNvbnN0cnVjdG9yKHNjcmlwdCkge1xuICAgIHN1cGVyKHNjcmlwdCk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGluIFNhbmRib3ggV29ya2VyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLnJlZCk7XG4gICAgdGhpcy50eXBlID0gU2FuZGJveFR5cGUuTk9STUFMO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy53b3JrZXIgPSBjaGlsZC5mb3JrKHNjcmlwdCk7XG4gICAgaWYgKCEhdGhpcy53b3JrZXIpIHtcbiAgICAgIHRoaXMud29ya2VyLm9uKCdtZXNzYWdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgX3RoaXMuX29uTWVzc2FnZShlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy53b3JrZXIuc2VuZCgnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciBlbnZpcm9ubWVudCBkb2VzIG5vdCBzdXBwb3J0IHdvcmtlciBcXG4nLCBlKTtcbiAgICB9XG5cbiAgICB0aGlzLndvcmtlci5vbignZXhpdCcsIChtc2cpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBwcm9jZXNzIGV4aXQgU2FuZGJveFdvcmtlciBzdG9wcGVkJyk7XG4gICAgICB0aGlzLndvcmtlci5leGl0KCk7XG4gICAgICB0aGlzLndvcmtlci5raWxsKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLndvcmtlci5vbignZXJyb3InLCAobXNnKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2hpbGQgcHJvY2VzcyBlcnJvciAgU2FuZGJveFdvcmtlciBzdG9wcGVkJyk7XG4gICAgICB0aGlzLndvcmtlci5leGl0KCk7XG4gICAgICB0aGlzLndvcmtlci5raWxsKCk7XG4gICAgfSk7XG4gIH1cblxuICBfb25Qb3N0TWVzc2FnZShtc2cpIHtcbiAgICB0aGlzLndvcmtlci5zZW5kKG1zZyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TYW5kYm94V29ya2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtZmV0Y2hcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJpanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1cmlqc1wiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFNhbmRib3hXb3JrZXIgZnJvbSAnLi9TYW5kYm94V29ya2VyJztcbmltcG9ydCBTYW5kYm94QXBwIGZyb20gJy4vU2FuZGJveEFwcCc7XG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuL1JlcXVlc3QnO1xuaW1wb3J0IGF0b2IgZnJvbSAnYXRvYic7XG5cbmltcG9ydCBTdG9yYWdlTWFuYWdlciBmcm9tICdzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyJztcbmltcG9ydCB7IFJ1bnRpbWVDYXRhbG9ndWUgfSBmcm9tICdzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWUnO1xuaW1wb3J0IFBlcnNpc3RlbmNlTWFuYWdlciBmcm9tICdzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlcic7XG5cbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJ25vZGUtbG9jYWxzdG9yYWdlJztcblxuaW1wb3J0IERleGllIGZyb20gJ2RleGllJztcbkRleGllLmRlcGVuZGVuY2llcy5pbmRleGVkREIgPSByZXF1aXJlKCdmYWtlLWluZGV4ZWRkYicpXG5EZXhpZS5kZXBlbmRlbmNpZXMuSURCS2V5UmFuZ2UgPSByZXF1aXJlKCdmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2UnKVxuXG5pbXBvcnQgc2V0R2xvYmFsVmFycyBmcm9tICdpbmRleGVkZGJzaGltJztcblxuaW1wb3J0IFJ1bnRpbWVDYXBhYmlsaXRpZXMgZnJvbSAnLi9SdW50aW1lQ2FwYWJpbGl0aWVzJztcblxuXG5sZXQgY3JlYXRlU3RvcmFnZU1hbmFnZXIgPSAoKSA9PiB7XG4gIGxldCBpbmRleGVkZEIgPSB7fTtcbiAgbGV0IHtpbmRleGVkREIsIElEQktleVJhbmdlIH0gPSBpbmRleGVkZEI7XG4gIGxldCBzdG9yYWdlTmFtZSA9ICdjYWNoZSc7XG5cbiAgY29uc3QgZGIgPSBuZXcgRGV4aWUoc3RvcmFnZU5hbWUpO1xuXG4gIHN0b3JhZ2VNYW5hZ2VyID0gbmV3IFN0b3JhZ2VNYW5hZ2VyKGRiLCBzdG9yYWdlTmFtZSk7XG4gIHJldHVybiBzdG9yYWdlTWFuYWdlcjtcbn07XG5cbmxldCBzdG9yYWdlTWFuYWdlciA9IGNyZWF0ZVN0b3JhZ2VNYW5hZ2VyKCk7XG5cbmxldCBSdW50aW1lRmFjdG9yeSA9IE9iamVjdC5jcmVhdGUoe1xuICAgIGNyZWF0ZVNhbmRib3goY2FwYWJpbGl0aWVzKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgID0+IHtcblxuICAgICAgICBsZXQgY2FwYWJpbGl0eSA9ICdub2RlJztcbiAgICAgICAgbGV0IFNhbmRib3hDYXBhYmlsaXRpZXMgPSB7fTtcblxuICAgICAgICB0aGlzLmNhcGFiaWxpdGllc01hbmFnZXIuaXNBdmFpbGFibGUoY2FwYWJpbGl0eSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgICBTYW5kYm94Q2FwYWJpbGl0aWVzID0geyBcIm5vZGVcIjogdHJ1ZSB9O1xuICAgICAgICAgICAgcmVzb2x2ZShuZXcgU2FuZGJveFdvcmtlciggJy4uL2Rpc3QvQ29udGV4dFNlcnZpY2VQcm92aWRlci5qcycpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuXG5cbiAgICAgICAgICB9XG4gICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tjcmVhdGVTYW5kYm94IF0sIEVycm9yIG9jY3VyZWQgd2hpbGUgY3JlYXRpbmcgU2FuZGJveCwgcmVhc29uIDogJywgcmVhc29uKTtcbiAgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUFwcFNhbmRib3goKSB7XG4gICAgICByZXR1cm4gbmV3IFNhbmRib3hBcHAoICcuLi9kaXN0L0NvbnRleHRBcHAuanMnKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlSHR0cFJlcXVlc3QoKSB7XG4gICAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCk7XG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9LFxuXG4gICAgYXRvYihiNjQpIHtcbiAgICAgIHJldHVybiBhdG9iKGI2NCk7XG4gICAgfSxcblxuICAgIHBlcnNpc3RlbmNlTWFuYWdlcigpIHtcbiAgICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlKCcuL3NjcmF0Y2gnKTtcbiAgICAgIHJldHVybiBuZXcgUGVyc2lzdGVuY2VNYW5hZ2VyKGxvY2FsU3RvcmFnZSk7XG4gICAgfSxcblxuICAgIHN0b3JhZ2VNYW5hZ2VyKCkge1xuICAgICAgcmV0dXJuIHN0b3JhZ2VNYW5hZ2VyO1xuICAgIH0sXG5cbiAgICBjcmVhdGVSdW50aW1lQ2F0YWxvZ3VlKCkge1xuICAgICAgdGhpcy5jYXRhbG9ndWUgPSBuZXcgUnVudGltZUNhdGFsb2d1ZSh0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzLmNhdGFsb2d1ZTtcbiAgICB9LFxuXG4gICAgcnVudGltZUNhcGFiaWxpdGllcygpIHtcbiAgICAgIHRoaXMuY2FwYWJpbGl0aWVzTWFuYWdlciA9IG5ldyBSdW50aW1lQ2FwYWJpbGl0aWVzKHN0b3JhZ2VNYW5hZ2VyKTtcbiAgICAgIHJldHVybiAgdGhpcy5jYXBhYmlsaXRpZXNNYW5hZ2VyO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bnRpbWVGYWN0b3J5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1J1bnRpbWVGYWN0b3J5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXRvYlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImF0b2JcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZXhpZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImRleGllXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmYWtlLWluZGV4ZWRkYlwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImluZGV4ZWRkYnNoaW1cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpbmRleGVkZGJzaGltXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1sb2NhbHN0b3JhZ2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLWxvY2Fsc3RvcmFnZVwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbi8qKlxuICogTm9kZS5qcyBjaGlsZCBwcm9jZXNzIChzaW11bHRhbmVvdXNseSBpcyBhIHBhcmVudCBwcm9jZXNzIG9mIENvbnRleHRTZXJ2aWNlUHJvdmlkZXIgc2FuZGJveClcbiAqIHVzZWQgYXMgYW4gaXNvbGF0ZWQgc2FuZGJveCB0byBsb2FkIHRoZSBIeXBlcnR5IHJ1bnRpbWUgYWthIGNvcmVSdW50aW1lXG4gKiovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBVUkkgZnJvbSAndXJpanMnO1xuaW1wb3J0IFJ1bnRpbWVGYWN0b3J5IGZyb20gJy4vUnVudGltZUZhY3RvcnknO1xuaW1wb3J0IF9ldmFsIGZyb20gJ2V2YWwnO1xuXG5cblxubGV0IGRvbWFpbjtcbmxldCBydW50aW1lRGVzY3JpcHRvcjtcblxubGV0IGNhdGFsb2d1ZSA9IFJ1bnRpbWVGYWN0b3J5LmNyZWF0ZVJ1bnRpbWVDYXRhbG9ndWUoKTtcblxuLy8gcmV0dXJuSHlwZXJ0eSBnaXZlbnQgdGhlIHJ1bnRpbWVIeXBlcnR5VVJMLFxuLy8gU2VuZHMgbWVzc2FnZSA9J2xvYWRlZEh5cGVydHknIHRvIHRoZSB0aGUgcGFyZW50IHByb2Nlc3MgUnVudGltZU5vZGUgdGhyb3VnaHQgSVBDIGNoYW5uZWxcblxuZnVuY3Rpb24gcmV0dXJuSHlwZXJ0eShoeXBlcnR5KSB7IFxuICBwcm9jZXNzLnNlbmQoe3RvOidydW50aW1lOmxvYWRlZEh5cGVydHknLCBib2R5OiBoeXBlcnR5fSk7XG59XG5cbi8vIHdoaWxlIGxvYWRpbmcgdGhlIHByb3RvY29sU3R1YiBzZWFyY2ggaHlwZXJ0eSBpbiB0aGUgcnVudGltZSByZWdpc3RyeVxuZnVuY3Rpb24gc2VhcmNoSHlwZXJ0eShydW50aW1lLCBkZXNjcmlwdG9yKSB7XG4gIGxldCBoeXBlcnR5ID0gdW5kZWZpbmVkO1xuICBsZXQgaW5kZXggPSAwO1xuICB3aGlsZSAoIWh5cGVydHkgJiYgaW5kZXggPCBydW50aW1lLnJlZ2lzdHJ5Lmh5cGVydGllc0xpc3QubGVuZ3RoKSB7XG4gICAgaWYgKHJ1bnRpbWUucmVnaXN0cnkuaHlwZXJ0aWVzTGlzdFtpbmRleF0uZGVzY3JpcHRvciA9PT0gZGVzY3JpcHRvcilcbiAgICAgICAgaHlwZXJ0eSA9IHJ1bnRpbWUucmVnaXN0cnkuaHlwZXJ0aWVzTGlzdFtpbmRleF07XG4gICAgaW5kZXgrKztcbiAgfVxuICBjb25zb2xlLmxvZygnSHllcHJ0eSBmb3VuZGVkIScuZ3JlZW4pO1xuICByZXR1cm4gaHlwZXJ0eTtcbn1cblxuLy8gSW5zdGFsbCBydW50aW1lIG9uIHRoZSBjb3JlIFNhbmRib3hcbmZ1bmN0aW9uIHJ1bnRpbWVSZWFkeShydW50aW1lKSB7XG4gIC8vIGNvcmVSdW50aW1lIGdsb2JhbCBFdmVudExpc3RlbmVyIGZvciBhbnR5IGluY29taW5nIG1lc3NhZ2VcbiAgcHJvY2Vzcy5vbignbWVzc2FnZScsIChtc2cpID0+IHtcbiAgICBpZiAobXNnLnRvID09PSAnY29yZTpsb2FkSHlwZXJ0eScpIHtcbiAgICAgIGxldCBkZXNjcmlwdG9yID0gbXNnLmJvZHkuZGVzY3JpcHRvcjtcbiAgICAgIGxldCBoeXBlcnR5ID0gc2VhcmNoSHlwZXJ0eShydW50aW1lLCBkZXNjcmlwdG9yKTtcbiAgICAgIGlmIChoeXBlcnR5KSB7XG4gICAgICAgIHJldHVybkh5cGVydHkoe3J1bnRpbWVIeXBlcnR5VVJMOiBoeXBlcnR5Lmh5cGVydHlVUkx9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJ1bnRpbWUubG9hZEh5cGVydHkoZGVzY3JpcHRvcikudGhlbihyZXR1cm5IeXBlcnR5KS5jYXRjaCgoZXJyb3IpPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHdoaWxlIGxvYWRpbmcgSHlwZXJ0eSwgcmVhc29uOiAnLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobXNnLnRvID09PSAnY29yZTpsb2FkU3R1YicpIHtcbiAgICAgIHJ1bnRpbWUubG9hZFN0dWIobXNnLmJvZHkuZG9tYWluKTtcbiAgICB9XG4gIH0sIGZhbHNlKTtcbiAgY29uc29sZS5sb2coJy0tPiBzZW5kaW5nIHRvIE1haW4gcHJvY2VzcyBSdW50aW1lTm9kZScub3JhbmdlKTtcbiAgcHJvY2Vzcy5zZW5kKHt0bzoncnVudGltZTppbnN0YWxsZWQnLCBib2R5Ont9fSk7XG59XG5cblxuXG5wcm9jZXNzLm9uKCdtZXNzYWdlJywgKG1zZykgPT4ge1xuICAgaWYgKG1zZy5kbyA9PT0gJ2luc3RhbGwgcnVudGltZSBjb3JlJykgeyAgICBcbiAgICAgICBsZXQgcnVudGltZVVSTCA9IG1zZy5ib2R5LnJ1bnRpbWVVUkw7XG4gICAgICAgZG9tYWluID0gbXNnLmJvZHkuZG9tYWluO1xuICAgICAgIC8vIEdldHMgUnVudGltZURlc2NyaXB0b3IgZnJvbSB0aGUgcnVudGltZSBjYXRhbG9ndWVcbiAgICAgIGNhdGFsb2d1ZS5nZXRSdW50aW1lRGVzY3JpcHRvcihydW50aW1lVVJMKS50aGVuKChkZXNjcmlwdG9yKSA9PiB7XG4gICAgICAgIHJ1bnRpbWVEZXNjcmlwdG9yID0gZGVzY3JpcHRvcjtcbiAgICAgICAgaWYgKGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZVVSTCA9PT0gJy9zb3VyY2VQYWNrYWdlJykge1xuICAgICAgICAgIHJldHVybiBkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGNhdGFsb2d1ZS5nZXRTb3VyY2VQYWNrYWdlRnJvbVVSTChkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2VVUkwpO1xuICAgICAgICB9XG4gICAgICB9KS50aGVuKChzb3VyY2VQYWNrYWdlKSA9PiB7XG4gICAgICAgICAgbGV0IFJ1bnRpbWVVQSA9IF9ldmFsKHNvdXJjZVBhY2thZ2Uuc291cmNlQ29kZSwgdHJ1ZSk7XG4gICAgICAgICAgbGV0IHJ1bnRpbWUgPSBuZXcgUnVudGltZVVBKHJ1bnRpbWVEZXNjcmlwdG9yLCBSdW50aW1lRmFjdG9yeSwgZG9tYWluKTtcbiAgICAgICAgICBydW50aW1lLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJ1bnRpbWVSZWFkeShydW50aW1lKTtcbiAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW5pdCcsIHJlYXNvbik7XG4gICAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgdGhlIFJ1bnRpbWVEZXNjcmlwdG9yIGZyb20gdGhlIHNlcnZpY2UgZnJhbWV3b3JrIGNhdGFsb2d1ZSwgcmVhc29uOiAnLCByZWFzb24pO1xuICAgICAgfSk7XG4gICAgfVxufSk7XG5cbi8vIGNvcmVSdW50aW1lIFByb2Nlc3MgIGVycm9yIGhhbmRsaW5nXG5wcm9jZXNzLm9uKCd3YXJuaW5nJywgKHdhcm5pbmcpID0+IHtcbiAgY29uc29sZS53YXJuKHdhcm5pbmcubmFtZSk7XG4gIGNvbnNvbGUud2Fybih3YXJuaW5nLm1lc3NhZ2UpO1xuICBjb25zb2xlLndhcm4od2FybmluZy5zdGFjayk7XG59KTtcblxucHJvY2Vzcy5vbignZXhpdCcsIChtc2cpID0+IHtcbiAgIGNvbnNvbGUubG9nKCdjaGlsZCBwcm9jZXNzIGNvcmUgZXhpdGVkJyk7XG4gICBwcm9jZXNzLmV4aXQoKTtcbiAgIHByb2Nlc3Mua2lsbCgpO1xufSk7XG5cbnByb2Nlc3Mub24oJ2Vycm9yJywgKG1zZykgPT4ge1xuICBjb25zb2xlLndhcm4oJ2NoaWxkIHByb2Nlc3MgZXJyb3IgY29yZSBzdG9wcGVkJyk7XG4gIHByb2Nlc3MuZXhpdCgpO1xuICBwcm9jZXNzLmtpbGwoKTtcbn0pO1xuXG5wcm9jZXNzLm9uKCdTSUdJTlQnLCAoKSA9PiB7XG4gIGNvbnNvbGUud2FybignUmVjZWl2ZWQgU0lHSU5ULiBhbGwgTm9kZSBTdWItUHJvY2VzcyBhcmUgZXhpdGVkJyk7XG4gIHByb2Nlc3MuZXhpdCgpO1xuICBwcm9jZXNzLmtpbGwoKTtcbn0pOyAvLyB0byBjYXRjaCBjcnRsLWNcblxucHJvY2Vzcy5vbignU0lHVEVSTScsICgpID0+IHtcbiAgY29uc29sZS53YXJuKCdSZWNlaXZlZCBTSUdURVJNLiBjb3JlIFByZXNzIENvbnRyb2wtRCB0byBleGl0LicpO1xuICBwcm9jZXNzLmV4aXQoKTtcbiAgcHJvY2Vzcy5raWxsKCk7XG59KTsgLy8gdG8gY2F0Y2gga2lsbFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvcmUuanMiXSwic291cmNlUm9vdCI6IiJ9