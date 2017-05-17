// version: 0.1.0
// date: Wed May 17 2017 17:52:49 GMT+0200 (CEST)
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
		module.exports = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("child_process"), require("colors"), require("node-fetch"), require("atob"), require("dexie"), require("fake-indexeddb"), require("fake-indexeddb/lib/FDBKeyRange"), require("indexeddbshim"), require("node-localstorage"), require("service-framework/dist/PersistenceManager"), require("service-framework/dist/RuntimeCatalogue"), require("service-framework/dist/StorageManager"));
	else if(typeof define === 'function' && define.amd)
		define("RuntimeFactory", ["runtime-core/dist/minibus", "runtime-core/dist/sandbox", "child_process", "colors", "node-fetch", "atob", "dexie", "fake-indexeddb", "fake-indexeddb/lib/FDBKeyRange", "indexeddbshim", "node-localstorage", "service-framework/dist/PersistenceManager", "service-framework/dist/RuntimeCatalogue", "service-framework/dist/StorageManager"], factory);
	else if(typeof exports === 'object')
		exports["RuntimeFactory"] = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("child_process"), require("colors"), require("node-fetch"), require("atob"), require("dexie"), require("fake-indexeddb"), require("fake-indexeddb/lib/FDBKeyRange"), require("indexeddbshim"), require("node-localstorage"), require("service-framework/dist/PersistenceManager"), require("service-framework/dist/RuntimeCatalogue"), require("service-framework/dist/StorageManager"));
	else
		root["RuntimeFactory"] = factory(root["runtime-core/dist/minibus"], root["runtime-core/dist/sandbox"], root["child_process"], root["colors"], root["node-fetch"], root["atob"], root["dexie"], root["fake-indexeddb"], root["fake-indexeddb/lib/FDBKeyRange"], root["indexeddbshim"], root["node-localstorage"], root["service-framework/dist/PersistenceManager"], root["service-framework/dist/RuntimeCatalogue"], root["service-framework/dist/StorageManager"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__) {
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
            /*          headers: { 
                        'Content-Type': 'application/json',
                        'cache-control': 'no-cache',
                      },*/
            body: options
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
      console.log('SandboxApp Received message  is :\n'.green, msg);
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGU0MTAxMmU5NWViNDg4NjNlMGVkP2Q1ZTAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiPzc0NzIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiPzYyMzUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiPzQzMDgiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCI/YTE5OCIsIndlYnBhY2s6Ly8vLi9zcmMvUmVxdWVzdC5qcz83M2E5Iiwid2VicGFjazovLy8uL3NyYy9SdW50aW1lQ2FwYWJpbGl0aWVzLmpzPzQ0NTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NhbmRib3hBcHAuanM/NzAyZCIsIndlYnBhY2s6Ly8vLi9zcmMvU2FuZGJveFdvcmtlci5qcz8xZTQ2Iiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtZmV0Y2hcIj9lOTA1Iiwid2VicGFjazovLy8uL3NyYy9SdW50aW1lRmFjdG9yeS5qcz8zNTE0Iiwid2VicGFjazovLy9leHRlcm5hbCBcImF0b2JcIj9jNzVhIiwid2VicGFjazovLy9leHRlcm5hbCBcImRleGllXCI/MWQ2NCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlLWluZGV4ZWRkYlwiPzJhMTciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCI/ZTYwMCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbmRleGVkZGJzaGltXCI/OTZkZiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWxvY2Fsc3RvcmFnZVwiP2IwZmMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIj82YTc3Iiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiP2YxYzQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiPzdjMTkiXSwibmFtZXMiOlsibWV0aG9kcyIsIkdFVCIsIlBPU1QiLCJmZXRjaCIsInJlcXVpcmUiLCJSZXF1ZXN0IiwiX3RoaXMiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJtZXRob2QiLCJ1cmwiLCJvcHRpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtYWtlTG9jYWxSZXF1ZXN0IiwidGhlbiIsInJlc3VsdCIsImNhdGNoIiwicmVhc29uIiwieWVsbG93IiwidXJsTWFwIiwibWFwUHJvdG9jb2wiLCJncmVlbiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX1RMU19SRUpFQ1RfVU5BVVRIT1JJWkVEIiwicmVzIiwic3RhdHVzIiwidGV4dCIsImJvZHkiLCJ0b1N0cmluZyIsImVyciIsImVycm9yIiwicmVkIiwicG9zdE9wdGlvbnMiLCJwcm90b2NvbG1hcCIsImZvdW5kUHJvdG9jb2wiLCJwcm90b2NvbCIsInNsaWNlIiwibGVuZ3RoIiwiRXJyb3IiLCJSdW50aW1lQ2FwYWJpbGl0aWVzIiwic3RvcmFnZU1hbmFnZXIiLCJhbGwiLCJfZ2V0RW52aXJvbm1lbnQiLCJjYXBhYmlsaXRpZXMiLCJjYXBhYmlsaXR5IiwiYXNzaWduIiwic2V0IiwiZ2V0IiwiaGFzT3duUHJvcGVydHkiLCJnZXRSdW50aW1lQ2FwYWJpbGl0aWVzIiwibm9kZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIlNhbmRib3hBcHAiLCJ0eXBlIiwiTk9STUFMIiwib24iLCJtc2ciLCJ0byIsInN0YXJ0c1dpdGgiLCJfb25NZXNzYWdlIiwic2VuZCIsImNoaWxkIiwiY29sb3JzIiwiU2FuZGJveFdvcmtlciIsInNjcmlwdCIsIndvcmtlciIsImZvcmsiLCJlIiwiZXhpdCIsImtpbGwiLCJkZXBlbmRlbmNpZXMiLCJpbmRleGVkREIiLCJJREJLZXlSYW5nZSIsImNyZWF0ZVN0b3JhZ2VNYW5hZ2VyIiwiaW5kZXhlZGRCIiwic3RvcmFnZU5hbWUiLCJkYiIsIlJ1bnRpbWVGYWN0b3J5IiwiY3JlYXRlIiwiY3JlYXRlU2FuZGJveCIsIlNhbmRib3hDYXBhYmlsaXRpZXMiLCJjYXBhYmlsaXRpZXNNYW5hZ2VyIiwiaXNBdmFpbGFibGUiLCJjcmVhdGVBcHBTYW5kYm94IiwiY3JlYXRlSHR0cFJlcXVlc3QiLCJyZXF1ZXN0IiwiYXRvYiIsImI2NCIsInBlcnNpc3RlbmNlTWFuYWdlciIsImxvY2FsU3RvcmFnZSIsImNyZWF0ZVJ1bnRpbWVDYXRhbG9ndWUiLCJjYXRhbG9ndWUiLCJydW50aW1lQ2FwYWJpbGl0aWVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLHNEOzs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLDBDOzs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QixDQUFkLENBQXJCOztrQkF3RGVKLGM7Ozs7OztBQ2pIZixpQzs7Ozs7O0FDQUEsa0M7Ozs7OztBQ0FBLDJDOzs7Ozs7QUNBQSwyRDs7Ozs7O0FDQUEsMEM7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSxzRTs7Ozs7O0FDQUEsb0U7Ozs7OztBQ0FBLGtFIiwiZmlsZSI6IlJ1bnRpbWVGYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKSwgcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiksIHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpLCByZXF1aXJlKFwiY29sb3JzXCIpLCByZXF1aXJlKFwibm9kZS1mZXRjaFwiKSwgcmVxdWlyZShcImF0b2JcIiksIHJlcXVpcmUoXCJkZXhpZVwiKSwgcmVxdWlyZShcImZha2UtaW5kZXhlZGRiXCIpLCByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIpLCByZXF1aXJlKFwiaW5kZXhlZGRic2hpbVwiKSwgcmVxdWlyZShcIm5vZGUtbG9jYWxzdG9yYWdlXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiUnVudGltZUZhY3RvcnlcIiwgW1wicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiLCBcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiwgXCJjaGlsZF9wcm9jZXNzXCIsIFwiY29sb3JzXCIsIFwibm9kZS1mZXRjaFwiLCBcImF0b2JcIiwgXCJkZXhpZVwiLCBcImZha2UtaW5kZXhlZGRiXCIsIFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIsIFwiaW5kZXhlZGRic2hpbVwiLCBcIm5vZGUtbG9jYWxzdG9yYWdlXCIsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIiwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIiwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJ1bnRpbWVGYWN0b3J5XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKSwgcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiksIHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpLCByZXF1aXJlKFwiY29sb3JzXCIpLCByZXF1aXJlKFwibm9kZS1mZXRjaFwiKSwgcmVxdWlyZShcImF0b2JcIiksIHJlcXVpcmUoXCJkZXhpZVwiKSwgcmVxdWlyZShcImZha2UtaW5kZXhlZGRiXCIpLCByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGIvbGliL0ZEQktleVJhbmdlXCIpLCByZXF1aXJlKFwiaW5kZXhlZGRic2hpbVwiKSwgcmVxdWlyZShcIm5vZGUtbG9jYWxzdG9yYWdlXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSdW50aW1lRmFjdG9yeVwiXSA9IGZhY3Rvcnkocm9vdFtcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIl0sIHJvb3RbXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCJdLCByb290W1wiY2hpbGRfcHJvY2Vzc1wiXSwgcm9vdFtcImNvbG9yc1wiXSwgcm9vdFtcIm5vZGUtZmV0Y2hcIl0sIHJvb3RbXCJhdG9iXCJdLCByb290W1wiZGV4aWVcIl0sIHJvb3RbXCJmYWtlLWluZGV4ZWRkYlwiXSwgcm9vdFtcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiXSwgcm9vdFtcImluZGV4ZWRkYnNoaW1cIl0sIHJvb3RbXCJub2RlLWxvY2Fsc3RvcmFnZVwiXSwgcm9vdFtcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCJdLCByb290W1wic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCJdLCByb290W1wic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE1X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTZfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xN19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE4X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIxX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTQxMDEyZTk1ZWI0ODg2M2UwZWQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb2xvcnNcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5jb25zdCBtZXRob2RzID0ge0dFVDogJ2dldCcsIFBPU1Q6ICdwb3N0J307XG5cbmxldCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcblxuXG5jbGFzcyBSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIGNvbnNvbGUubG9nKCdOb2RlIGh0dHAgUmVxdWVzdCcpO1xuICAgIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgX3RoaXNbbWV0aG9kc1ttZXRob2RdXSA9ICh1cmwsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBfdGhpcy5tYWtlTG9jYWxSZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KHJlYXNvbilcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGhhbmRsaW5nIHJlcXVlc3QgbWV0aG9kc1xuICAgKiBAcmV0dXJucyB7dGV4dDxzdHJpbmc+fVxuICAgKiovXG4gIG1ha2VMb2NhbFJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcbiAgICBsZXQgX3RoaXMgPXRoaXNcbiAgICBjb25zb2xlLmxvZygnSFRUUFMgUmVxdWVzdDonLnllbGxvdywgbWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHVybE1hcCA9IF90aGlzLm1hcFByb3RvY29sKHVybCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdNYXBwZWQgdXJsIGlzICcueWVsbG93LCB1cmxNYXAsJ21ldGhvZCBpczonLmdyZWVuLCBtZXRob2QpO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCA9ICcwJ1xuXG4gICAgICBpZihtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIC8vIGhhbmRsZSBHRVQgbWV0aG9kXG4gICAgICAgIGZldGNoKHVybE1hcCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1c0NvZGUgaXM6ICcuZ3JlZW4sICByZXMuc3RhdHVzKVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpXG4gICAgICAgIH0pLnRoZW4oKGJvZHkpPT4ge1xuICAgICAgICAgIHJlc29sdmUoYm9keS50b1N0cmluZygndXRmOCcpKVxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJlZCBvbiBHRVQgbWV0aG9kIG9mIHVybDonLnJlZCAsIHVybE1hcCwgJyByZWFzb24gOicucmVkLCBlcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIGlmKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIGxldCBwb3N0T3B0aW9ucyA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8qICAgICAgICAgIGhlYWRlcnM6IHsgXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ2NhY2hlLWNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgICAgICAgIH0sKi9cbiAgICAgICAgICBib2R5OiBvcHRpb25zXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2godXJsTWFwLCBwb3N0T3B0aW9ucykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3N0YXR1c0NvZGUgaXM6ICcuZ3JlZW4sICByZXMuc3RhdHVzKVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpXG4gICAgICAgIH0pLnRoZW4oKGJvZHkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGJvZHkudG9TdHJpbmcoJ3V0ZjgnKSlcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJlZCBvbiBQT1NUIG1ldGhvZCBvZiB1cmw6Jyx1cmxNYXAsICd3aXRoIG9wdGlvbnM6Jywgb3B0aW9ucywgJ3JlYXNvbiA6JywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuIC8qKlxuICAqIEByZXR1cm5zIHt2YXJpYWJsZTxzdHJpbmc+fVxuICAqKi9cbiAgbWFwUHJvdG9jb2wodXJsKSB7XG4gICAgbGV0IHByb3RvY29sbWFwID0ge1xuICAgICAgJ2xvY2FsaG9zdDovLyc6ICdodHRwczovLycsXG4gICAgICAndW5kZWZpbmVkOi8vJzogJ2h0dHBzOi8vJyxcbiAgICAgICdoeXBlcnR5LWNhdGFsb2d1ZTovLyc6ICdodHRwczovLycsXG4gICAgICAnaHR0cHM6Ly8nOiAnaHR0cHM6Ly8nLFxuICAgICAgJ2h0dHA6Ly8nOiAnaHR0cHM6Ly8nXG4gICAgfVxuXG4gICAgbGV0IGZvdW5kUHJvdG9jb2wgPSBmYWxzZVxuICAgIGZvciAobGV0IHByb3RvY29sIGluIHByb3RvY29sbWFwKSB7XG4gICAgICBpZiAodXJsLnNsaWNlKDAsIHByb3RvY29sLmxlbmd0aCkgPT09IHByb3RvY29sKSB7XG4gICAgICAgIHVybCA9IHByb3RvY29sbWFwW3Byb3RvY29sXSArIHVybC5zbGljZShwcm90b2NvbC5sZW5ndGgsIHVybC5sZW5ndGgpXG4gICAgICAgIGZvdW5kUHJvdG9jb2wgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFmb3VuZFByb3RvY29sKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvdG9jb2wgb2YgdXJsOiAnICsgdXJsKVxuICAgIH1cbiAgICByZXR1cm4gdXJsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVxdWVzdC5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuLy8gVE9ETzogaW1wb3J0IGFuZCBleHRlbmQgdGhlIGNsYXNzIG9mIHRoZSBzZXJ2aWNlLWZyYW1ld29ya1xuLy8gc2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2FwYWJpbGl0aWVzO1xuXG5jbGFzcyBSdW50aW1lQ2FwYWJpbGl0aWVzIHtcblxuICAgY29uc3RydWN0b3Ioc3RvcmFnZU1hbmFnZXIpIHtcbiAgICBpZiAoIXN0b3JhZ2VNYW5hZ2VyKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBSdW50aW1lIENhcGFiaWxpdGllcyBuZWVkIHRoZSBzdG9yYWdlTWFuYWdlcicpO1xuICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIgPSBzdG9yYWdlTWFuYWdlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFzIGEgcHJvbWlzZSBSdW50aW1lQ2FwYWJpbGl0aWVzIGpzb24gb2JqZWN0IHdpdGggYWxsIGF2YWlsYWJsZSBjYXBhYmlsaXRpZXMgb2YgdGhlIHJ1bnRpbWUuXG4gICAqIElmIGl0IHdhcyBub3QgeWV0IHBlcnNpc3RlZCBpbiB0aGUgU3RvcmFnZSBNYW5hZ2VyIGl0IGNvbGxlY3RzIGFsbCByZXF1aXJlZCBpbmZvIGZyb20gdGhlIHBsYXRmb3JtIGFuZCBzYXZlcyBpbiB0aGUgc3RvcmFnZSBtYW5hZ2VyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3Q+fVxuICAgKi9cbiAgZ2V0UnVudGltZUNhcGFiaWxpdGllcygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgUHJvbWlzZS5hbGwoW3RoaXMuX2dldEVudmlyb25tZW50KCldKS50aGVuKChyZXN1bHQpID0+IHtcblxuICAgICAgICBsZXQgY2FwYWJpbGl0aWVzID0ge307XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLl9nZXRFbnZpcm9ubWVudCgpczogJywgdGhpcy5fZ2V0RW52aXJvbm1lbnQoKSk7XG5cbiAgICAgICAgcmVzdWx0LmZvckVhY2goKGNhcGFiaWxpdHkpID0+IHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKGNhcGFiaWxpdGllcywgY2FwYWJpbGl0eSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjYXBhYmlsaXRpZXM6ICcsIGNhcGFiaWxpdGllcyk7XG4gICAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuc2V0KCdjYXBhYmlsaXRpZXMnLCAnMScsIGNhcGFiaWxpdGllcyk7XG5cbiAgICAgICAgcmVzb2x2ZShjYXBhYmlsaXRpZXMpO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGFzIGEgcHJvbWlzZSBhIGJvb2xlYW4gYWNjb3JkaW5nIHRvIGF2YWlsYWJsZSBjYXBhYmlsaXRpZXMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgaXNBdmFpbGFibGUoY2FwYWJpbGl0eSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5zdG9yYWdlTWFuYWdlci5nZXQoJ2NhcGFiaWxpdGllcycpLnRoZW4oKGNhcGFiaWxpdGllcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FwYWJpbGl0eSAnICsgY2FwYWJpbGl0eSArICcgaXMgYXZhaWxhYmxlPyAnLCBjYXBhYmlsaXRpZXMuaGFzT3duUHJvcGVydHkoY2FwYWJpbGl0eSkgJiYgY2FwYWJpbGl0aWVzW2NhcGFiaWxpdHldKTtcbiAgICAgICAgaWYgKGNhcGFiaWxpdGllcy5oYXNPd25Qcm9wZXJ0eShjYXBhYmlsaXR5KSAmJiBjYXBhYmlsaXRpZXNbY2FwYWJpbGl0eV0pIHtcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaGFzIG9jY3VyZWQgd2hpbGUgY2hlY2tpbmcgY2FwYWJpbGl0eSwgcmVhc29uOicsIGVycm9yKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGl0IHJlZnJlc2hlcyBwcmV2aW91c2x5IGNvbGxlY3RlZCBjYXBhYmlsaXRpZXMgYW5kIHVwZGF0ZXMgdGhlIHN0b3JhZ2UgbWFuYWdlclxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmdldFJ1bnRpbWVDYXBhYmlsaXRpZXMoKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUT0RPOiBvcmdhbml6ZSB0aGUgY29kZSBpbiBzZXBhcmF0ZWQgZmlsZXNcbiAgX2dldEVudmlyb25tZW50KCkge1xuICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIGJlIG1vcmUgZWZmZWN0aXZlIGFuZCBjaGVjayB0aGUgZW52aXJvbm1lbnRcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZTogISEhKHdpbmRvdyAmJiBuYXZpZ2F0b3IpXG4gICAgICB9O1xuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGU6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bnRpbWVDYXBhYmlsaXRpZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1J1bnRpbWVDYXBhYmlsaXRpZXMuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKlxuKi9cblxuaW1wb3J0IHsgU2FuZGJveCwgU2FuZGJveFR5cGUgfSBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94JztcbmltcG9ydCBNaW5pQnVzIGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L21pbmlidXMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbmRib3hBcHAgZXh0ZW5kcyBTYW5kYm94IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU2FuZGJveCBBcHAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLmdyZWVuKTtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlID0gU2FuZGJveFR5cGUuTk9STUFMO1xuICAgIHByb2Nlc3Mub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnU2FuZGJveEFwcCBSZWNlaXZlZCBtZXNzYWdlICBpcyA6XFxuJy5ncmVlbiwgbXNnKTtcbiAgICAgIGlmIChtc2cuaGFzT3duUHJvcGVydHkoJ3RvJykgJiYgbXNnLnRvLnN0YXJ0c1dpdGgoJ2NvcmU6JykpXG4gICAgICAgIHJldHVybjtcblxuICAgICAgdGhpcy5fb25NZXNzYWdlKG1zZyk7XG4gICAgfSk7XG4gIH1cblxuICBfb25Qb3N0TWVzc2FnZShtc2cpIHtcbiAgICBjb25zb2xlLmxvZygnU2FuZGJveEFwcCBwb3N0TWVzc2FnZSBtZXNzYWdlOiAnLmdyZWVuKTtcbiAgICBwcm9jZXNzLnNlbmQobXNnKTtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2FuZGJveEFwcC5qcyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbmltcG9ydCB7IFNhbmRib3gsIFNhbmRib3hUeXBlIH0gZnJvbSAncnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveCc7XG5pbXBvcnQgTWluaUJ1cyBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzJztcbmxldCBjaGlsZCA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKTtcbmxldCBjb2xvcnMgPSByZXF1aXJlKCdjb2xvcnMnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FuZGJveFdvcmtlciBleHRlbmRzIFNhbmRib3h7XG4gIGNvbnN0cnVjdG9yKHNjcmlwdCkge1xuICAgIHN1cGVyKHNjcmlwdCk7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGluIFNhbmRib3ggV29ya2VyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLnJlZCk7XG4gICAgdGhpcy50eXBlID0gU2FuZGJveFR5cGUuTk9STUFMO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgdGhpcy53b3JrZXIgPSBjaGlsZC5mb3JrKHNjcmlwdCk7XG4gICAgaWYgKCEhdGhpcy53b3JrZXIpIHtcbiAgICAgIHRoaXMud29ya2VyLm9uKCdtZXNzYWdlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgX3RoaXMuX29uTWVzc2FnZShlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy53b3JrZXIuc2VuZCgnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciBlbnZpcm9ubWVudCBkb2VzIG5vdCBzdXBwb3J0IHdvcmtlciBcXG4nLCBlKTtcbiAgICB9XG5cbiAgICB0aGlzLndvcmtlci5vbignZXhpdCcsIChtc2cpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBwcm9jZXNzIGV4aXQgU2FuZGJveFdvcmtlciBzdG9wcGVkJyk7XG4gICAgICB0aGlzLndvcmtlci5leGl0KCk7XG4gICAgICB0aGlzLndvcmtlci5raWxsKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLndvcmtlci5vbignZXJyb3InLCAobXNnKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2hpbGQgcHJvY2VzcyBlcnJvciAgU2FuZGJveFdvcmtlciBzdG9wcGVkJyk7XG4gICAgICB0aGlzLndvcmtlci5leGl0KCk7XG4gICAgICB0aGlzLndvcmtlci5raWxsKCk7XG4gICAgfSk7XG4gIH1cblxuICBfb25Qb3N0TWVzc2FnZShtc2cpIHtcbiAgICB0aGlzLndvcmtlci5zZW5kKG1zZyk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2FuZGJveFdvcmtlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtZmV0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLWZldGNoXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNyIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFNhbmRib3hXb3JrZXIgZnJvbSAnLi9TYW5kYm94V29ya2VyJztcbmltcG9ydCBTYW5kYm94QXBwIGZyb20gJy4vU2FuZGJveEFwcCc7XG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuL1JlcXVlc3QnO1xuaW1wb3J0IGF0b2IgZnJvbSAnYXRvYic7XG5cbmltcG9ydCBTdG9yYWdlTWFuYWdlciBmcm9tICdzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyJztcbmltcG9ydCB7IFJ1bnRpbWVDYXRhbG9ndWUgfSBmcm9tICdzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWUnO1xuaW1wb3J0IFBlcnNpc3RlbmNlTWFuYWdlciBmcm9tICdzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlcic7XG5cbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJ25vZGUtbG9jYWxzdG9yYWdlJztcblxuaW1wb3J0IERleGllIGZyb20gJ2RleGllJztcbkRleGllLmRlcGVuZGVuY2llcy5pbmRleGVkREIgPSByZXF1aXJlKCdmYWtlLWluZGV4ZWRkYicpXG5EZXhpZS5kZXBlbmRlbmNpZXMuSURCS2V5UmFuZ2UgPSByZXF1aXJlKCdmYWtlLWluZGV4ZWRkYi9saWIvRkRCS2V5UmFuZ2UnKVxuXG5pbXBvcnQgc2V0R2xvYmFsVmFycyBmcm9tICdpbmRleGVkZGJzaGltJztcblxuaW1wb3J0IFJ1bnRpbWVDYXBhYmlsaXRpZXMgZnJvbSAnLi9SdW50aW1lQ2FwYWJpbGl0aWVzJztcblxuXG5sZXQgY3JlYXRlU3RvcmFnZU1hbmFnZXIgPSAoKSA9PiB7XG4gIGxldCBpbmRleGVkZEIgPSB7fTtcbiAgbGV0IHtpbmRleGVkREIsIElEQktleVJhbmdlIH0gPSBpbmRleGVkZEI7XG4gIGxldCBzdG9yYWdlTmFtZSA9ICdjYWNoZSc7XG5cbiAgY29uc3QgZGIgPSBuZXcgRGV4aWUoc3RvcmFnZU5hbWUpO1xuXG4gIHN0b3JhZ2VNYW5hZ2VyID0gbmV3IFN0b3JhZ2VNYW5hZ2VyKGRiLCBzdG9yYWdlTmFtZSk7XG4gIHJldHVybiBzdG9yYWdlTWFuYWdlcjtcbn07XG5cbmxldCBzdG9yYWdlTWFuYWdlciA9IGNyZWF0ZVN0b3JhZ2VNYW5hZ2VyKCk7XG5cbmxldCBSdW50aW1lRmFjdG9yeSA9IE9iamVjdC5jcmVhdGUoe1xuICAgIGNyZWF0ZVNhbmRib3goY2FwYWJpbGl0aWVzKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgID0+IHtcblxuICAgICAgICBsZXQgY2FwYWJpbGl0eSA9ICdub2RlJztcbiAgICAgICAgbGV0IFNhbmRib3hDYXBhYmlsaXRpZXMgPSB7fTtcblxuICAgICAgICB0aGlzLmNhcGFiaWxpdGllc01hbmFnZXIuaXNBdmFpbGFibGUoY2FwYWJpbGl0eSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgICBTYW5kYm94Q2FwYWJpbGl0aWVzID0geyBcIm5vZGVcIjogdHJ1ZSB9O1xuICAgICAgICAgICAgcmVzb2x2ZShuZXcgU2FuZGJveFdvcmtlciggJy4uL2Rpc3QvQ29udGV4dFNlcnZpY2VQcm92aWRlci5qcycpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuXG5cbiAgICAgICAgICB9XG4gICAgICAgICB9KS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tjcmVhdGVTYW5kYm94IF0sIEVycm9yIG9jY3VyZWQgd2hpbGUgY3JlYXRpbmcgU2FuZGJveCwgcmVhc29uIDogJywgcmVhc29uKTtcbiAgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUFwcFNhbmRib3goKSB7XG4gICAgICByZXR1cm4gbmV3IFNhbmRib3hBcHAoICcuLi9kaXN0L0NvbnRleHRBcHAuanMnKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlSHR0cFJlcXVlc3QoKSB7XG4gICAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCk7XG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9LFxuXG4gICAgYXRvYihiNjQpIHtcbiAgICAgIHJldHVybiBhdG9iKGI2NCk7XG4gICAgfSxcblxuICAgIHBlcnNpc3RlbmNlTWFuYWdlcigpIHtcbiAgICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlKCcuL3NjcmF0Y2gnKTtcbiAgICAgIHJldHVybiBuZXcgUGVyc2lzdGVuY2VNYW5hZ2VyKGxvY2FsU3RvcmFnZSk7XG4gICAgfSxcblxuICAgIHN0b3JhZ2VNYW5hZ2VyKCkge1xuICAgICAgcmV0dXJuIHN0b3JhZ2VNYW5hZ2VyO1xuICAgIH0sXG5cbiAgICBjcmVhdGVSdW50aW1lQ2F0YWxvZ3VlKCkge1xuICAgICAgdGhpcy5jYXRhbG9ndWUgPSBuZXcgUnVudGltZUNhdGFsb2d1ZSh0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzLmNhdGFsb2d1ZTtcbiAgICB9LFxuXG4gICAgcnVudGltZUNhcGFiaWxpdGllcygpIHtcbiAgICAgIHRoaXMuY2FwYWJpbGl0aWVzTWFuYWdlciA9IG5ldyBSdW50aW1lQ2FwYWJpbGl0aWVzKHN0b3JhZ2VNYW5hZ2VyKTtcbiAgICAgIHJldHVybiAgdGhpcy5jYXBhYmlsaXRpZXNNYW5hZ2VyO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bnRpbWVGYWN0b3J5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1J1bnRpbWVGYWN0b3J5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXRvYlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImF0b2JcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZXhpZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImRleGllXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZS1pbmRleGVkZGJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmYWtlLWluZGV4ZWRkYlwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImZha2UtaW5kZXhlZGRiL2xpYi9GREJLZXlSYW5nZVwiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImluZGV4ZWRkYnNoaW1cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpbmRleGVkZGJzaGltXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1sb2NhbHN0b3JhZ2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJub2RlLWxvY2Fsc3RvcmFnZVwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJzb3VyY2VSb290IjoiIn0=