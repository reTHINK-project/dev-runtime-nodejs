// version: 0.1.0
// date: Fri Oct 20 2017 10:47:08 GMT+0100 (WEST)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwZDU5Y2RkYjljYWRlMzczMzA4ZiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2YWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1J1bnRpbWVDYXBhYmlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NhbmRib3hBcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NhbmRib3hXb3JrZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVyaWpzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL1J1bnRpbWVGYWN0b3J5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF0b2JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZXhpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZha2UtaW5kZXhlZGRiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5kZXhlZGRic2hpbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtbG9jYWxzdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUuanMiXSwibmFtZXMiOlsibWV0aG9kcyIsIkdFVCIsIlBPU1QiLCJmZXRjaCIsInJlcXVpcmUiLCJSZXF1ZXN0IiwiX3RoaXMiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJtZXRob2QiLCJ1cmwiLCJvcHRpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtYWtlTG9jYWxSZXF1ZXN0IiwidGhlbiIsInJlc3VsdCIsImNhdGNoIiwicmVhc29uIiwieWVsbG93IiwidXJsTWFwIiwibWFwUHJvdG9jb2wiLCJncmVlbiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX1RMU19SRUpFQ1RfVU5BVVRIT1JJWkVEIiwicmVzIiwic3RhdHVzIiwidGV4dCIsImJvZHkiLCJ0b1N0cmluZyIsImVyciIsImVycm9yIiwicmVkIiwicG9zdE9wdGlvbnMiLCJoZWFkZXJzIiwicHJvdG9jb2xtYXAiLCJmb3VuZFByb3RvY29sIiwicHJvdG9jb2wiLCJzbGljZSIsImxlbmd0aCIsIkVycm9yIiwiUnVudGltZUNhcGFiaWxpdGllcyIsInN0b3JhZ2VNYW5hZ2VyIiwiYWxsIiwiX2dldEVudmlyb25tZW50IiwiY2FwYWJpbGl0aWVzIiwiY2FwYWJpbGl0eSIsImFzc2lnbiIsInNldCIsImdldCIsImhhc093blByb3BlcnR5IiwiZ2V0UnVudGltZUNhcGFiaWxpdGllcyIsIm5vZGUiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJTYW5kYm94QXBwIiwidHlwZSIsIk5PUk1BTCIsIm9uIiwibXNnIiwidG8iLCJzdGFydHNXaXRoIiwiX29uTWVzc2FnZSIsInNlbmQiLCJjaGlsZCIsImNvbG9ycyIsIlNhbmRib3hXb3JrZXIiLCJzY3JpcHQiLCJ3b3JrZXIiLCJmb3JrIiwiZSIsImV4aXQiLCJraWxsIiwiZGVwZW5kZW5jaWVzIiwiaW5kZXhlZERCIiwiSURCS2V5UmFuZ2UiLCJjcmVhdGVTdG9yYWdlTWFuYWdlciIsImluZGV4ZWRkQiIsInN0b3JhZ2VOYW1lIiwiZGIiLCJSdW50aW1lRmFjdG9yeSIsImNyZWF0ZSIsImNyZWF0ZVNhbmRib3giLCJTYW5kYm94Q2FwYWJpbGl0aWVzIiwiY2FwYWJpbGl0aWVzTWFuYWdlciIsImlzQXZhaWxhYmxlIiwiY3JlYXRlQXBwU2FuZGJveCIsImNyZWF0ZUh0dHBSZXF1ZXN0IiwicmVxdWVzdCIsImF0b2IiLCJiNjQiLCJwZXJzaXN0ZW5jZU1hbmFnZXIiLCJsb2NhbFN0b3JhZ2UiLCJjcmVhdGVSdW50aW1lQ2F0YWxvZ3VlIiwiY2F0YWxvZ3VlIiwicnVudGltZUNhcGFiaWxpdGllcyIsImRvbWFpbiIsInJ1bnRpbWVEZXNjcmlwdG9yIiwicmV0dXJuSHlwZXJ0eSIsImh5cGVydHkiLCJzZWFyY2hIeXBlcnR5IiwicnVudGltZSIsImRlc2NyaXB0b3IiLCJ1bmRlZmluZWQiLCJpbmRleCIsInJlZ2lzdHJ5IiwiaHlwZXJ0aWVzTGlzdCIsInJ1bnRpbWVSZWFkeSIsInJ1bnRpbWVIeXBlcnR5VVJMIiwiaHlwZXJ0eVVSTCIsImxvYWRIeXBlcnR5IiwibG9hZFN0dWIiLCJvcmFuZ2UiLCJkbyIsInJ1bnRpbWVVUkwiLCJnZXRSdW50aW1lRGVzY3JpcHRvciIsInNvdXJjZVBhY2thZ2VVUkwiLCJzb3VyY2VQYWNrYWdlIiwiZ2V0U291cmNlUGFja2FnZUZyb21VUkwiLCJSdW50aW1lVUEiLCJzb3VyY2VDb2RlIiwiaW5pdCIsIndhcm5pbmciLCJ3YXJuIiwibmFtZSIsIm1lc3NhZ2UiLCJzdGFjayJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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MUI7QUFDRCxPQUpEO0FBS0gsS0FmRCxFQWVHRCxLQWZILENBZVMsVUFBQ0MsTUFBRCxFQUFZO0FBQ25CZixjQUFRNkIsS0FBUixDQUFjLG9GQUFkLEVBQW9HZCxNQUFwRztBQUNELEtBakJEO0FBa0JEO0FBQ0osQ0F4QkQ7O0FBMEJBO0FBQ0FLLFFBQVFvQyxFQUFSLENBQVcsU0FBWCxFQUFzQixVQUFDZ0UsT0FBRCxFQUFhO0FBQ2pDeEgsVUFBUXlILElBQVIsQ0FBYUQsUUFBUUUsSUFBckI7QUFDQTFILFVBQVF5SCxJQUFSLENBQWFELFFBQVFHLE9BQXJCO0FBQ0EzSCxVQUFReUgsSUFBUixDQUFhRCxRQUFRSSxLQUFyQjtBQUNELENBSkQ7O0FBTUF4RyxRQUFRb0MsRUFBUixDQUFXLE1BQVgsRUFBbUIsVUFBQ0MsR0FBRCxFQUFTO0FBQ3pCekQsVUFBUUMsR0FBUixDQUFZLDJCQUFaO0FBQ0FtQixVQUFRaUQsSUFBUjtBQUNBakQsVUFBUWtELElBQVI7QUFDRixDQUpEOztBQU1BbEQsUUFBUW9DLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFVBQUNDLEdBQUQsRUFBUztBQUMzQnpELFVBQVF5SCxJQUFSLENBQWEsa0NBQWI7QUFDQXJHLFVBQVFpRCxJQUFSO0FBQ0FqRCxVQUFRa0QsSUFBUjtBQUNELENBSkQ7O0FBTUFsRCxRQUFRb0MsRUFBUixDQUFXLFFBQVgsRUFBcUIsWUFBTTtBQUN6QnhELFVBQVF5SCxJQUFSLENBQWEsa0RBQWI7QUFDQXJHLFVBQVFpRCxJQUFSO0FBQ0FqRCxVQUFRa0QsSUFBUjtBQUNELENBSkQsRSxDQUlJOztBQUVKbEQsUUFBUW9DLEVBQVIsQ0FBVyxTQUFYLEVBQXNCLFlBQU07QUFDMUJ4RCxVQUFReUgsSUFBUixDQUFhLGlEQUFiO0FBQ0FyRyxVQUFRaUQsSUFBUjtBQUNBakQsVUFBUWtELElBQVI7QUFDRCxDQUpELEUsQ0FJSSxnQiIsImZpbGUiOiJjb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKSwgcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiksIHJlcXVpcmUoXCJldmFsXCIpLCByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKSwgcmVxdWlyZShcImNvbG9yc1wiKSwgcmVxdWlyZShcIm5vZGUtZmV0Y2hcIiksIHJlcXVpcmUoXCJ1cmlqc1wiKSwgcmVxdWlyZShcImF0b2JcIiksIHJlcXVpcmUoXCJkZXhpZVwiKSwgcmVxdWlyZShcImZha2UtaW5kZXhlZGRiXCIpLCByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIpLCByZXF1aXJlKFwiaW5kZXhlZGRic2hpbVwiKSwgcmVxdWlyZShcIm5vZGUtbG9jYWxzdG9yYWdlXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiY29yZVwiLCBbXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiLCBcImV2YWxcIiwgXCJjaGlsZF9wcm9jZXNzXCIsIFwiY29sb3JzXCIsIFwibm9kZS1mZXRjaFwiLCBcInVyaWpzXCIsIFwiYXRvYlwiLCBcImRleGllXCIsIFwiZmFrZS1pbmRleGVkZGJcIiwgXCJmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2VcIiwgXCJpbmRleGVkZGJzaGltXCIsIFwibm9kZS1sb2NhbHN0b3JhZ2VcIiwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiLCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiLCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY29yZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiksIHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpLCByZXF1aXJlKFwiZXZhbFwiKSwgcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIiksIHJlcXVpcmUoXCJjb2xvcnNcIiksIHJlcXVpcmUoXCJub2RlLWZldGNoXCIpLCByZXF1aXJlKFwidXJpanNcIiksIHJlcXVpcmUoXCJhdG9iXCIpLCByZXF1aXJlKFwiZGV4aWVcIiksIHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYlwiKSwgcmVxdWlyZShcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiKSwgcmVxdWlyZShcImluZGV4ZWRkYnNoaW1cIiksIHJlcXVpcmUoXCJub2RlLWxvY2Fsc3RvcmFnZVwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiY29yZVwiXSA9IGZhY3Rvcnkocm9vdFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIl0sIHJvb3RbXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCJdLCByb290W1wiZXZhbFwiXSwgcm9vdFtcImNoaWxkX3Byb2Nlc3NcIl0sIHJvb3RbXCJjb2xvcnNcIl0sIHJvb3RbXCJub2RlLWZldGNoXCJdLCByb290W1widXJpanNcIl0sIHJvb3RbXCJhdG9iXCJdLCByb290W1wiZGV4aWVcIl0sIHJvb3RbXCJmYWtlLWluZGV4ZWRkYlwiXSwgcm9vdFtcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiXSwgcm9vdFtcImluZGV4ZWRkYnNoaW1cIl0sIHJvb3RbXCJub2RlLWxvY2Fsc3RvcmFnZVwiXSwgcm9vdFtcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCJdLCByb290W1wic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCJdLCByb290W1wic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE1X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTZfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xN19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE4X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIxX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGQ1OWNkZGI5Y2FkZTM3MzMwOGYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV2YWxcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbG9yc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbG9yc1wiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbmNvbnN0IG1ldGhvZHMgPSB7R0VUOiAnZ2V0JywgUE9TVDogJ3Bvc3QnfTtcblxubGV0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpO1xuXG5cbmNsYXNzIFJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgY29uc29sZS5sb2coJ05vZGUgaHR0cCBSZXF1ZXN0Jyk7XG4gICAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG4gICAgICBfdGhpc1ttZXRob2RzW21ldGhvZF1dID0gKHVybCwgb3B0aW9ucykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIF90aGlzLm1ha2VMb2NhbFJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdClcbiAgICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgICByZWplY3QocmVhc29uKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogaGFuZGxpbmcgcmVxdWVzdCBtZXRob2RzXG4gICAqIEByZXR1cm5zIHt0ZXh0PHN0cmluZz59XG4gICAqKi9cbiAgbWFrZUxvY2FsUmVxdWVzdChtZXRob2QsIHVybCwgb3B0aW9ucykge1xuICAgIGxldCBfdGhpcyA9dGhpc1xuICAgIGNvbnNvbGUubG9nKCdIVFRQUyBSZXF1ZXN0OicueWVsbG93LCBtZXRob2QsIHVybCwgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBsZXQgdXJsTWFwID0gX3RoaXMubWFwUHJvdG9jb2wodXJsKTtcblxuICAgICAgY29uc29sZS5sb2coJ01hcHBlZCB1cmwgaXMgJy55ZWxsb3csIHVybE1hcCwnbWV0aG9kIGlzOicuZ3JlZW4sIG1ldGhvZCk7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX1RMU19SRUpFQ1RfVU5BVVRIT1JJWkVEID0gJzAnXG5cbiAgICAgIGlmKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgLy8gaGFuZGxlIEdFVCBtZXRob2RcbiAgICAgICAgZmV0Y2godXJsTWFwKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3RhdHVzQ29kZSBpczogJy5ncmVlbiwgIHJlcy5zdGF0dXMpXG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KClcbiAgICAgICAgfSkudGhlbigoYm9keSk9PiB7XG4gICAgICAgICAgcmVzb2x2ZShib2R5LnRvU3RyaW5nKCd1dGY4JykpXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cmVkIG9uIEdFVCBtZXRob2Qgb2YgdXJsOicucmVkICwgdXJsTWFwLCAnIHJlYXNvbiA6Jy5yZWQsIGVycik7XG4gICAgICAgIH0pO1xuXG4gICAgICB9IGVsc2UgaWYobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgbGV0IHBvc3RPcHRpb25zID0ge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnY2FjaGUtY29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBvcHRpb25zICYmIG9wdGlvbnMuYm9keSA/IG9wdGlvbnMuYm9keSA6IHt9XG4gICAgICAgIH07XG5cblx0Y29uc29sZS5sb2coJ1Bvc3RPcHRpb25zOicsIHBvc3RPcHRpb25zKTtcblxuICAgICAgICBmZXRjaCh1cmxNYXAsIHBvc3RPcHRpb25zKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3RhdHVzQ29kZSBpczogJy5ncmVlbiwgIHJlcy5zdGF0dXMpXG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KClcbiAgICAgICAgfSkudGhlbigoYm9keSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoYm9keS50b1N0cmluZygndXRmOCcpKVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cmVkIG9uIFBPU1QgbWV0aG9kIG9mIHVybDonLHVybE1hcCwgJ3dpdGggb3B0aW9uczonLCBvcHRpb25zLCAncmVhc29uIDonLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gLyoqXG4gICogQHJldHVybnMge3ZhcmlhYmxlPHN0cmluZz59XG4gICoqL1xuICBtYXBQcm90b2NvbCh1cmwpIHtcbiAgICBsZXQgcHJvdG9jb2xtYXAgPSB7XG4gICAgICAnbG9jYWxob3N0Oi8vJzogJ2h0dHBzOi8vJyxcbiAgICAgICd1bmRlZmluZWQ6Ly8nOiAnaHR0cHM6Ly8nLFxuICAgICAgJ2h5cGVydHktY2F0YWxvZ3VlOi8vJzogJ2h0dHBzOi8vJyxcbiAgICAgICdodHRwczovLyc6ICdodHRwczovLycsXG4gICAgICAnaHR0cDovLyc6ICdodHRwczovLydcbiAgICB9XG5cbiAgICBsZXQgZm91bmRQcm90b2NvbCA9IGZhbHNlXG4gICAgZm9yIChsZXQgcHJvdG9jb2wgaW4gcHJvdG9jb2xtYXApIHtcbiAgICAgIGlmICh1cmwuc2xpY2UoMCwgcHJvdG9jb2wubGVuZ3RoKSA9PT0gcHJvdG9jb2wpIHtcbiAgICAgICAgdXJsID0gcHJvdG9jb2xtYXBbcHJvdG9jb2xdICsgdXJsLnNsaWNlKHByb3RvY29sLmxlbmd0aCwgdXJsLmxlbmd0aClcbiAgICAgICAgZm91bmRQcm90b2NvbCA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWZvdW5kUHJvdG9jb2wpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwcm90b2NvbCBvZiB1cmw6ICcgKyB1cmwpXG4gICAgfVxuICAgIHJldHVybiB1cmxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlcXVlc3QuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbi8vIFRPRE86IGltcG9ydCBhbmQgZXh0ZW5kIHRoZSBjbGFzcyBvZiB0aGUgc2VydmljZS1mcmFtZXdvcmtcbi8vIHNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhcGFiaWxpdGllcztcblxuY2xhc3MgUnVudGltZUNhcGFiaWxpdGllcyB7XG5cbiAgIGNvbnN0cnVjdG9yKHN0b3JhZ2VNYW5hZ2VyKSB7XG4gICAgaWYgKCFzdG9yYWdlTWFuYWdlcikgdGhyb3cgbmV3IEVycm9yKCdUaGUgUnVudGltZSBDYXBhYmlsaXRpZXMgbmVlZCB0aGUgc3RvcmFnZU1hbmFnZXInKTtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyID0gc3RvcmFnZU1hbmFnZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhcyBhIHByb21pc2UgUnVudGltZUNhcGFiaWxpdGllcyBqc29uIG9iamVjdCB3aXRoIGFsbCBhdmFpbGFibGUgY2FwYWJpbGl0aWVzIG9mIHRoZSBydW50aW1lLlxuICAgKiBJZiBpdCB3YXMgbm90IHlldCBwZXJzaXN0ZWQgaW4gdGhlIFN0b3JhZ2UgTWFuYWdlciBpdCBjb2xsZWN0cyBhbGwgcmVxdWlyZWQgaW5mbyBmcm9tIHRoZSBwbGF0Zm9ybSBhbmQgc2F2ZXMgaW4gdGhlIHN0b3JhZ2UgbWFuYWdlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn1cbiAgICovXG4gIGdldFJ1bnRpbWVDYXBhYmlsaXRpZXMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIFByb21pc2UuYWxsKFt0aGlzLl9nZXRFbnZpcm9ubWVudCgpXSkudGhlbigocmVzdWx0KSA9PiB7XG5cbiAgICAgICAgbGV0IGNhcGFiaWxpdGllcyA9IHt9O1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5fZ2V0RW52aXJvbm1lbnQoKXM6ICcsIHRoaXMuX2dldEVudmlyb25tZW50KCkpO1xuXG4gICAgICAgIHJlc3VsdC5mb3JFYWNoKChjYXBhYmlsaXR5KSA9PiB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihjYXBhYmlsaXRpZXMsIGNhcGFiaWxpdHkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnY2FwYWJpbGl0aWVzOiAnLCBjYXBhYmlsaXRpZXMpO1xuICAgICAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyLnNldCgnY2FwYWJpbGl0aWVzJywgJzEnLCBjYXBhYmlsaXRpZXMpO1xuXG4gICAgICAgIHJlc29sdmUoY2FwYWJpbGl0aWVzKTtcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhcyBhIHByb21pc2UgYSBib29sZWFuIGFjY29yZGluZyB0byBhdmFpbGFibGUgY2FwYWJpbGl0aWVzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIGlzQXZhaWxhYmxlKGNhcGFiaWxpdHkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuZ2V0KCdjYXBhYmlsaXRpZXMnKS50aGVuKChjYXBhYmlsaXRpZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NhcGFiaWxpdHkgJyArIGNhcGFiaWxpdHkgKyAnIGlzIGF2YWlsYWJsZT8gJywgY2FwYWJpbGl0aWVzLmhhc093blByb3BlcnR5KGNhcGFiaWxpdHkpICYmIGNhcGFiaWxpdGllc1tjYXBhYmlsaXR5XSk7XG4gICAgICAgIGlmIChjYXBhYmlsaXRpZXMuaGFzT3duUHJvcGVydHkoY2FwYWJpbGl0eSkgJiYgY2FwYWJpbGl0aWVzW2NhcGFiaWxpdHldKSB7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhcyBvY2N1cmVkIHdoaWxlIGNoZWNraW5nIGNhcGFiaWxpdHksIHJlYXNvbjonLCBlcnJvcik7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpdCByZWZyZXNoZXMgcHJldmlvdXNseSBjb2xsZWN0ZWQgY2FwYWJpbGl0aWVzIGFuZCB1cGRhdGVzIHRoZSBzdG9yYWdlIG1hbmFnZXJcbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5nZXRSdW50aW1lQ2FwYWJpbGl0aWVzKCkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVE9ETzogb3JnYW5pemUgdGhlIGNvZGUgaW4gc2VwYXJhdGVkIGZpbGVzXG4gIF9nZXRFbnZpcm9ubWVudCgpIHtcbiAgICAvLyBUT0RPOiB0aGlzIHNob3VsZCBiZSBtb3JlIGVmZmVjdGl2ZSBhbmQgY2hlY2sgdGhlIGVudmlyb25tZW50XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGU6ICEhISh3aW5kb3cgJiYgbmF2aWdhdG9yKVxuICAgICAgfTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBub2RlOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdW50aW1lQ2FwYWJpbGl0aWVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1J1bnRpbWVDYXBhYmlsaXRpZXMuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKlxuKi9cblxuaW1wb3J0IHsgU2FuZGJveCwgU2FuZGJveFR5cGUgfSBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94JztcbmltcG9ydCBNaW5pQnVzIGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L21pbmlidXMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbmRib3hBcHAgZXh0ZW5kcyBTYW5kYm94IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU2FuZGJveCBBcHAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLmdyZWVuKTtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlID0gU2FuZGJveFR5cGUuTk9STUFMO1xuICAgIHByb2Nlc3Mub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnU2FuZGJveEFwcCBSZWNlaXZlZCBtZXNzYWdlICBpcyA6XFxuJy5ncmVlbik7XG4gICAgICBpZiAobXNnLmhhc093blByb3BlcnR5KCd0bycpICYmIG1zZy50by5zdGFydHNXaXRoKCdjb3JlOicpKVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIHRoaXMuX29uTWVzc2FnZShtc2cpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uUG9zdE1lc3NhZ2UobXNnKSB7XG4gICAgY29uc29sZS5sb2coJ1NhbmRib3hBcHAgcG9zdE1lc3NhZ2UgbWVzc2FnZTogJy5ncmVlbik7XG4gICAgcHJvY2Vzcy5zZW5kKG1zZyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TYW5kYm94QXBwLmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuaW1wb3J0IHsgU2FuZGJveCwgU2FuZGJveFR5cGUgfSBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94JztcbmltcG9ydCBNaW5pQnVzIGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L21pbmlidXMnO1xubGV0IGNoaWxkID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpO1xubGV0IGNvbG9ycyA9IHJlcXVpcmUoJ2NvbG9ycycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYW5kYm94V29ya2VyIGV4dGVuZHMgU2FuZGJveHtcbiAgY29uc3RydWN0b3Ioc2NyaXB0KSB7XG4gICAgc3VwZXIoc2NyaXB0KTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaW4gU2FuZGJveCBXb3JrZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScucmVkKTtcbiAgICB0aGlzLnR5cGUgPSBTYW5kYm94VHlwZS5OT1JNQUw7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB0aGlzLndvcmtlciA9IGNoaWxkLmZvcmsoc2NyaXB0KTtcbiAgICBpZiAoISF0aGlzLndvcmtlcikge1xuICAgICAgdGhpcy53b3JrZXIub24oJ21lc3NhZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICBfdGhpcy5fb25NZXNzYWdlKGUpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLndvcmtlci5zZW5kKCcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgd29ya2VyIFxcbicsIGUpO1xuICAgIH1cblxuICAgIHRoaXMud29ya2VyLm9uKCdleGl0JywgKG1zZykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NoaWxkIHByb2Nlc3MgZXhpdCBTYW5kYm94V29ya2VyIHN0b3BwZWQnKTtcbiAgICAgIHRoaXMud29ya2VyLmV4aXQoKTtcbiAgICAgIHRoaXMud29ya2VyLmtpbGwoKTtcbiAgICB9KTtcblxuICAgIHRoaXMud29ya2VyLm9uKCdlcnJvcicsIChtc2cpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBwcm9jZXNzIGVycm9yICBTYW5kYm94V29ya2VyIHN0b3BwZWQnKTtcbiAgICAgIHRoaXMud29ya2VyLmV4aXQoKTtcbiAgICAgIHRoaXMud29ya2VyLmtpbGwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9vblBvc3RNZXNzYWdlKG1zZykge1xuICAgIHRoaXMud29ya2VyLnNlbmQobXNnKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NhbmRib3hXb3JrZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS1mZXRjaFwiXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDciLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmlqc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVyaWpzXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgU2FuZGJveFdvcmtlciBmcm9tICcuL1NhbmRib3hXb3JrZXInO1xuaW1wb3J0IFNhbmRib3hBcHAgZnJvbSAnLi9TYW5kYm94QXBwJztcbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4vUmVxdWVzdCc7XG5pbXBvcnQgYXRvYiBmcm9tICdhdG9iJztcblxuaW1wb3J0IFN0b3JhZ2VNYW5hZ2VyIGZyb20gJ3NlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXInO1xuaW1wb3J0IHsgUnVudGltZUNhdGFsb2d1ZSB9IGZyb20gJ3NlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZSc7XG5pbXBvcnQgUGVyc2lzdGVuY2VNYW5hZ2VyIGZyb20gJ3NlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyJztcblxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSAnbm9kZS1sb2NhbHN0b3JhZ2UnO1xuXG5pbXBvcnQgRGV4aWUgZnJvbSAnZGV4aWUnO1xuRGV4aWUuZGVwZW5kZW5jaWVzLmluZGV4ZWREQiA9IHJlcXVpcmUoJ2Zha2UtaW5kZXhlZGRiJylcbkRleGllLmRlcGVuZGVuY2llcy5JREJLZXlSYW5nZSA9IHJlcXVpcmUoJ2Zha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZScpXG5cbmltcG9ydCBzZXRHbG9iYWxWYXJzIGZyb20gJ2luZGV4ZWRkYnNoaW0nO1xuXG5pbXBvcnQgUnVudGltZUNhcGFiaWxpdGllcyBmcm9tICcuL1J1bnRpbWVDYXBhYmlsaXRpZXMnO1xuXG5cbmxldCBjcmVhdGVTdG9yYWdlTWFuYWdlciA9ICgpID0+IHtcbiAgbGV0IGluZGV4ZWRkQiA9IHt9O1xuICBsZXQge2luZGV4ZWREQiwgSURCS2V5UmFuZ2UgfSA9IGluZGV4ZWRkQjtcbiAgbGV0IHN0b3JhZ2VOYW1lID0gJ2NhY2hlJztcblxuICBjb25zdCBkYiA9IG5ldyBEZXhpZShzdG9yYWdlTmFtZSk7XG5cbiAgc3RvcmFnZU1hbmFnZXIgPSBuZXcgU3RvcmFnZU1hbmFnZXIoZGIsIHN0b3JhZ2VOYW1lKTtcbiAgcmV0dXJuIHN0b3JhZ2VNYW5hZ2VyO1xufTtcblxubGV0IHN0b3JhZ2VNYW5hZ2VyID0gY3JlYXRlU3RvcmFnZU1hbmFnZXIoKTtcblxubGV0IFJ1bnRpbWVGYWN0b3J5ID0gT2JqZWN0LmNyZWF0ZSh7XG4gICAgY3JlYXRlU2FuZGJveChjYXBhYmlsaXRpZXMpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSAgPT4ge1xuXG4gICAgICAgIGxldCBjYXBhYmlsaXR5ID0gJ25vZGUnO1xuICAgICAgICBsZXQgU2FuZGJveENhcGFiaWxpdGllcyA9IHt9O1xuXG4gICAgICAgIHRoaXMuY2FwYWJpbGl0aWVzTWFuYWdlci5pc0F2YWlsYWJsZShjYXBhYmlsaXR5KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgICAgIFNhbmRib3hDYXBhYmlsaXRpZXMgPSB7IFwibm9kZVwiOiB0cnVlIH07XG4gICAgICAgICAgICByZXNvbHZlKG5ldyBTYW5kYm94V29ya2VyKCAnLi4vZGlzdC9Db250ZXh0U2VydmljZVByb3ZpZGVyLmpzJykpO1xuICAgICAgICAgIH0gZWxzZSB7XG5cblxuICAgICAgICAgIH1cbiAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICAgY29uc29sZS5lcnJvcignW2NyZWF0ZVNhbmRib3ggXSwgRXJyb3Igb2NjdXJlZCB3aGlsZSBjcmVhdGluZyBTYW5kYm94LCByZWFzb24gOiAnLCByZWFzb24pO1xuICAgICAgICAgICByZWplY3QocmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgY3JlYXRlQXBwU2FuZGJveCgpIHtcbiAgICAgIHJldHVybiBuZXcgU2FuZGJveEFwcCggJy4uL2Rpc3QvQ29udGV4dEFwcC5qcycpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVIdHRwUmVxdWVzdCgpIHtcbiAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoKTtcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH0sXG5cbiAgICBhdG9iKGI2NCkge1xuICAgICAgcmV0dXJuIGF0b2IoYjY0KTtcbiAgICB9LFxuXG4gICAgcGVyc2lzdGVuY2VNYW5hZ2VyKCkge1xuICAgICAgbGV0IGxvY2FsU3RvcmFnZSA9IG5ldyBMb2NhbFN0b3JhZ2UoJy4vc2NyYXRjaCcpO1xuICAgICAgcmV0dXJuIG5ldyBQZXJzaXN0ZW5jZU1hbmFnZXIobG9jYWxTdG9yYWdlKTtcbiAgICB9LFxuXG4gICAgc3RvcmFnZU1hbmFnZXIoKSB7XG4gICAgICByZXR1cm4gc3RvcmFnZU1hbmFnZXI7XG4gICAgfSxcblxuICAgIGNyZWF0ZVJ1bnRpbWVDYXRhbG9ndWUoKSB7XG4gICAgICB0aGlzLmNhdGFsb2d1ZSA9IG5ldyBSdW50aW1lQ2F0YWxvZ3VlKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXMuY2F0YWxvZ3VlO1xuICAgIH0sXG5cbiAgICBydW50aW1lQ2FwYWJpbGl0aWVzKCkge1xuICAgICAgdGhpcy5jYXBhYmlsaXRpZXNNYW5hZ2VyID0gbmV3IFJ1bnRpbWVDYXBhYmlsaXRpZXMoc3RvcmFnZU1hbmFnZXIpO1xuICAgICAgcmV0dXJuICB0aGlzLmNhcGFiaWxpdGllc01hbmFnZXI7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUnVudGltZUZhY3Rvcnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUnVudGltZUZhY3RvcnkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhdG9iXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXRvYlwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRleGllXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZGV4aWVcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlLWluZGV4ZWRkYlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZha2UtaW5kZXhlZGRiXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW5kZXhlZGRic2hpbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImluZGV4ZWRkYnNoaW1cIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWxvY2Fsc3RvcmFnZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtbG9jYWxzdG9yYWdlXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuLyoqXG4gKiBOb2RlLmpzIGNoaWxkIHByb2Nlc3MgKHNpbXVsdGFuZW91c2x5IGlzIGEgcGFyZW50IHByb2Nlc3Mgb2YgQ29udGV4dFNlcnZpY2VQcm92aWRlciBzYW5kYm94KVxuICogdXNlZCBhcyBhbiBpc29sYXRlZCBzYW5kYm94IHRvIGxvYWQgdGhlIEh5cGVydHkgcnVudGltZSBha2EgY29yZVJ1bnRpbWVcbiAqKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFVSSSBmcm9tICd1cmlqcyc7XG5pbXBvcnQgUnVudGltZUZhY3RvcnkgZnJvbSAnLi9SdW50aW1lRmFjdG9yeSc7XG5pbXBvcnQgX2V2YWwgZnJvbSAnZXZhbCc7XG5cblxuXG5sZXQgZG9tYWluO1xubGV0IHJ1bnRpbWVEZXNjcmlwdG9yO1xuXG5sZXQgY2F0YWxvZ3VlID0gUnVudGltZUZhY3RvcnkuY3JlYXRlUnVudGltZUNhdGFsb2d1ZSgpO1xuXG4vLyByZXR1cm5IeXBlcnR5IGdpdmVudCB0aGUgcnVudGltZUh5cGVydHlVUkwsXG4vLyBTZW5kcyBtZXNzYWdlID0nbG9hZGVkSHlwZXJ0eScgdG8gdGhlIHRoZSBwYXJlbnQgcHJvY2VzcyBSdW50aW1lTm9kZSB0aHJvdWdodCBJUEMgY2hhbm5lbFxuXG5mdW5jdGlvbiByZXR1cm5IeXBlcnR5KGh5cGVydHkpIHsgXG4gIHByb2Nlc3Muc2VuZCh7dG86J3J1bnRpbWU6bG9hZGVkSHlwZXJ0eScsIGJvZHk6IGh5cGVydHl9KTtcbn1cblxuLy8gd2hpbGUgbG9hZGluZyB0aGUgcHJvdG9jb2xTdHViIHNlYXJjaCBoeXBlcnR5IGluIHRoZSBydW50aW1lIHJlZ2lzdHJ5XG5mdW5jdGlvbiBzZWFyY2hIeXBlcnR5KHJ1bnRpbWUsIGRlc2NyaXB0b3IpIHtcbiAgbGV0IGh5cGVydHkgPSB1bmRlZmluZWQ7XG4gIGxldCBpbmRleCA9IDA7XG4gIHdoaWxlICghaHlwZXJ0eSAmJiBpbmRleCA8IHJ1bnRpbWUucmVnaXN0cnkuaHlwZXJ0aWVzTGlzdC5sZW5ndGgpIHtcbiAgICBpZiAocnVudGltZS5yZWdpc3RyeS5oeXBlcnRpZXNMaXN0W2luZGV4XS5kZXNjcmlwdG9yID09PSBkZXNjcmlwdG9yKVxuICAgICAgICBoeXBlcnR5ID0gcnVudGltZS5yZWdpc3RyeS5oeXBlcnRpZXNMaXN0W2luZGV4XTtcbiAgICBpbmRleCsrO1xuICB9XG4gIGNvbnNvbGUubG9nKCdIeWVwcnR5IGZvdW5kZWQhJy5ncmVlbik7XG4gIHJldHVybiBoeXBlcnR5O1xufVxuXG4vLyBJbnN0YWxsIHJ1bnRpbWUgb24gdGhlIGNvcmUgU2FuZGJveFxuZnVuY3Rpb24gcnVudGltZVJlYWR5KHJ1bnRpbWUpIHtcbiAgLy8gY29yZVJ1bnRpbWUgZ2xvYmFsIEV2ZW50TGlzdGVuZXIgZm9yIGFudHkgaW5jb21pbmcgbWVzc2FnZVxuICBwcm9jZXNzLm9uKCdtZXNzYWdlJywgKG1zZykgPT4ge1xuICAgIGlmIChtc2cudG8gPT09ICdjb3JlOmxvYWRIeXBlcnR5Jykge1xuICAgICAgbGV0IGRlc2NyaXB0b3IgPSBtc2cuYm9keS5kZXNjcmlwdG9yO1xuICAgICAgbGV0IGh5cGVydHkgPSBzZWFyY2hIeXBlcnR5KHJ1bnRpbWUsIGRlc2NyaXB0b3IpO1xuICAgICAgaWYgKGh5cGVydHkpIHtcbiAgICAgICAgcmV0dXJuSHlwZXJ0eSh7cnVudGltZUh5cGVydHlVUkw6IGh5cGVydHkuaHlwZXJ0eVVSTH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcnVudGltZS5sb2FkSHlwZXJ0eShkZXNjcmlwdG9yKS50aGVuKHJldHVybkh5cGVydHkpLmNhdGNoKChlcnJvcik9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd2hpbGUgbG9hZGluZyBIeXBlcnR5LCByZWFzb246ICcsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtc2cudG8gPT09ICdjb3JlOmxvYWRTdHViJykge1xuICAgICAgcnVudGltZS5sb2FkU3R1Yihtc2cuYm9keS5kb21haW4pO1xuICAgIH1cbiAgfSwgZmFsc2UpO1xuICBjb25zb2xlLmxvZygnLS0+IHNlbmRpbmcgdG8gTWFpbiBwcm9jZXNzIFJ1bnRpbWVOb2RlJy5vcmFuZ2UpO1xuICBwcm9jZXNzLnNlbmQoe3RvOidydW50aW1lOmluc3RhbGxlZCcsIGJvZHk6e319KTtcbn1cblxuXG5cbnByb2Nlc3Mub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XG4gICBpZiAobXNnLmRvID09PSAnaW5zdGFsbCBydW50aW1lIGNvcmUnKSB7ICAgIFxuICAgICAgIGxldCBydW50aW1lVVJMID0gbXNnLmJvZHkucnVudGltZVVSTDtcbiAgICAgICBkb21haW4gPSBtc2cuYm9keS5kb21haW47XG4gICAgICAgLy8gR2V0cyBSdW50aW1lRGVzY3JpcHRvciBmcm9tIHRoZSBydW50aW1lIGNhdGFsb2d1ZVxuICAgICAgY2F0YWxvZ3VlLmdldFJ1bnRpbWVEZXNjcmlwdG9yKHJ1bnRpbWVVUkwpLnRoZW4oKGRlc2NyaXB0b3IpID0+IHtcbiAgICAgICAgcnVudGltZURlc2NyaXB0b3IgPSBkZXNjcmlwdG9yO1xuICAgICAgICBpZiAoZGVzY3JpcHRvci5zb3VyY2VQYWNrYWdlVVJMID09PSAnL3NvdXJjZVBhY2thZ2UnKSB7XG4gICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gY2F0YWxvZ3VlLmdldFNvdXJjZVBhY2thZ2VGcm9tVVJMKGRlc2NyaXB0b3Iuc291cmNlUGFja2FnZVVSTCk7XG4gICAgICAgIH1cbiAgICAgIH0pLnRoZW4oKHNvdXJjZVBhY2thZ2UpID0+IHtcbiAgICAgICAgICBsZXQgUnVudGltZVVBID0gX2V2YWwoc291cmNlUGFja2FnZS5zb3VyY2VDb2RlLCB0cnVlKTtcbiAgICAgICAgICBsZXQgcnVudGltZSA9IG5ldyBSdW50aW1lVUEocnVudGltZURlc2NyaXB0b3IsIFJ1bnRpbWVGYWN0b3J5LCBkb21haW4pO1xuICAgICAgICAgIHJ1bnRpbWUuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcnVudGltZVJlYWR5KHJ1bnRpbWUpO1xuICAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbml0JywgcmVhc29uKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2V0dGluZyB0aGUgUnVudGltZURlc2NyaXB0b3IgZnJvbSB0aGUgc2VydmljZSBmcmFtZXdvcmsgY2F0YWxvZ3VlLCByZWFzb246ICcsIHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9XG59KTtcblxuLy8gY29yZVJ1bnRpbWUgUHJvY2VzcyAgZXJyb3IgaGFuZGxpbmdcbnByb2Nlc3Mub24oJ3dhcm5pbmcnLCAod2FybmluZykgPT4ge1xuICBjb25zb2xlLndhcm4od2FybmluZy5uYW1lKTtcbiAgY29uc29sZS53YXJuKHdhcm5pbmcubWVzc2FnZSk7XG4gIGNvbnNvbGUud2Fybih3YXJuaW5nLnN0YWNrKTtcbn0pO1xuXG5wcm9jZXNzLm9uKCdleGl0JywgKG1zZykgPT4ge1xuICAgY29uc29sZS5sb2coJ2NoaWxkIHByb2Nlc3MgY29yZSBleGl0ZWQnKTtcbiAgIHByb2Nlc3MuZXhpdCgpO1xuICAgcHJvY2Vzcy5raWxsKCk7XG59KTtcblxucHJvY2Vzcy5vbignZXJyb3InLCAobXNnKSA9PiB7XG4gIGNvbnNvbGUud2FybignY2hpbGQgcHJvY2VzcyBlcnJvciBjb3JlIHN0b3BwZWQnKTtcbiAgcHJvY2Vzcy5leGl0KCk7XG4gIHByb2Nlc3Mua2lsbCgpO1xufSk7XG5cbnByb2Nlc3Mub24oJ1NJR0lOVCcsICgpID0+IHtcbiAgY29uc29sZS53YXJuKCdSZWNlaXZlZCBTSUdJTlQuIGFsbCBOb2RlIFN1Yi1Qcm9jZXNzIGFyZSBleGl0ZWQnKTtcbiAgcHJvY2Vzcy5leGl0KCk7XG4gIHByb2Nlc3Mua2lsbCgpO1xufSk7IC8vIHRvIGNhdGNoIGNydGwtY1xuXG5wcm9jZXNzLm9uKCdTSUdURVJNJywgKCkgPT4ge1xuICBjb25zb2xlLndhcm4oJ1JlY2VpdmVkIFNJR1RFUk0uIGNvcmUgUHJlc3MgQ29udHJvbC1EIHRvIGV4aXQuJyk7XG4gIHByb2Nlc3MuZXhpdCgpO1xuICBwcm9jZXNzLmtpbGwoKTtcbn0pOyAvLyB0byBjYXRjaCBraWxsXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29yZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=