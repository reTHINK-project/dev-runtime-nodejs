// version: 0.1.0
// date: Wed Dec 20 2017 17:26:42 GMT+0000 (WET)
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
		module.exports = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("indexeddbshim"), require("node-fetch"), require("urijs"), require("atob"), require("dexie"), require("node-localstorage"), require("node-webcrypto-ossl"), require("service-framework/dist/PersistenceManager"), require("service-framework/dist/RuntimeCatalogue"), require("service-framework/dist/StorageManager"));
	else if(typeof define === 'function' && define.amd)
		define("core", ["runtime-core/dist/minibus", "runtime-core/dist/sandbox", "eval", "child_process", "colors", "indexeddbshim", "node-fetch", "urijs", "atob", "dexie", "node-localstorage", "node-webcrypto-ossl", "service-framework/dist/PersistenceManager", "service-framework/dist/RuntimeCatalogue", "service-framework/dist/StorageManager"], factory);
	else if(typeof exports === 'object')
		exports["core"] = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("indexeddbshim"), require("node-fetch"), require("urijs"), require("atob"), require("dexie"), require("node-localstorage"), require("node-webcrypto-ossl"), require("service-framework/dist/PersistenceManager"), require("service-framework/dist/RuntimeCatalogue"), require("service-framework/dist/StorageManager"));
	else
		root["core"] = factory(root["runtime-core/dist/minibus"], root["runtime-core/dist/sandbox"], root["eval"], root["child_process"], root["colors"], root["indexeddbshim"], root["node-fetch"], root["urijs"], root["atob"], root["dexie"], root["node-localstorage"], root["node-webcrypto-ossl"], root["service-framework/dist/PersistenceManager"], root["service-framework/dist/RuntimeCatalogue"], root["service-framework/dist/StorageManager"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
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
/***/ (function(module, exports) {

module.exports = require("indexeddbshim");

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
var methods = { GET: 'get', POST: 'post' };

var fetch = __webpack_require__(10);

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
						reject(err);
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
						reject(error);
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
/* 7 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("urijs");

/***/ }),
/* 12 */,
/* 13 */
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

var _SandboxWorker = __webpack_require__(9);

var _SandboxWorker2 = _interopRequireDefault(_SandboxWorker);

var _SandboxApp = __webpack_require__(8);

var _SandboxApp2 = _interopRequireDefault(_SandboxApp);

var _Request = __webpack_require__(6);

var _Request2 = _interopRequireDefault(_Request);

var _atob2 = __webpack_require__(14);

var _atob3 = _interopRequireDefault(_atob2);

var _StorageManager = __webpack_require__(20);

var _StorageManager2 = _interopRequireDefault(_StorageManager);

var _RuntimeCatalogue = __webpack_require__(19);

var _PersistenceManager = __webpack_require__(18);

var _PersistenceManager2 = _interopRequireDefault(_PersistenceManager);

var _nodeLocalstorage = __webpack_require__(16);

var _dexie = __webpack_require__(15);

var _dexie2 = _interopRequireDefault(_dexie);

var _indexeddbshim = __webpack_require__(5);

var _indexeddbshim2 = _interopRequireDefault(_indexeddbshim);

var _RuntimeCapabilities = __webpack_require__(7);

var _RuntimeCapabilities2 = _interopRequireDefault(_RuntimeCapabilities);

var _nodeWebcryptoOssl = __webpack_require__(17);

var _nodeWebcryptoOssl2 = _interopRequireDefault(_nodeWebcryptoOssl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(5)(global);

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
  storageManager: function storageManager(name, schemas) {

    if (!this.databases) {
      this.databases = {};
    }
    if (!this.storeManager) {
      this.storeManager = {};
    }

    // Using the implementation of Service Framework
    // Dexie is the IndexDB Wrapper
    if (!this.databases.hasOwnProperty(name)) {

      global.shimIndexedDB.__useShim();
      global.shimIndexedDB.__setConfig({ checkOrigin: false });

      this.databases[name] = new _dexie2.default(name, {
        indexedDB: global.indexedDB,
        IDBKeyRange: global.IDBKeyRange
      });
    }

    if (!this.storeManager.hasOwnProperty(name)) {

      console.log('NAME:', name);

      this.storeManager[name] = new _StorageManager2.default(this.databases[name], name, schemas);
    }

    return this.storeManager[name];
  },
  createRuntimeCatalogue: function createRuntimeCatalogue() {
    this.catalogue = new _RuntimeCatalogue.RuntimeCatalogue(this);
    return this.catalogue;
  },
  runtimeCapabilities: function runtimeCapabilities() {

    if (!this.capabilitiesManager) {
      var storageManager = this.storageManager('capabilities');
      this.capabilitiesManager = new _RuntimeCapabilities2.default(storageManager);
    }

    return this.capabilitiesManager;
  },
  createWebcrypto: function createWebcrypto() {
    return new _nodeWebcryptoOssl2.default();
  }
});

exports.default = RuntimeFactory;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("atob");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("dexie");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("node-localstorage");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("node-webcrypto-ossl");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("service-framework/dist/PersistenceManager");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("service-framework/dist/RuntimeCatalogue");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("service-framework/dist/StorageManager");

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
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


var _urijs = __webpack_require__(11);

var _urijs2 = _interopRequireDefault(_urijs);

var _RuntimeFactory = __webpack_require__(13);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlN2U2MDE1NjY1YjE5NzkyNjllNyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2YWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5kZXhlZGRic2hpbVwiIiwid2VicGFjazovLy8uL3NyYy9SZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9SdW50aW1lQ2FwYWJpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9TYW5kYm94QXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9TYW5kYm94V29ya2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmlqc1wiIiwid2VicGFjazovLy8uL3NyYy9SdW50aW1lRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhdG9iXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGV4aWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWxvY2Fsc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtd2ViY3J5cHRvLW9zc2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS5qcyJdLCJuYW1lcyI6WyJtZXRob2RzIiwiR0VUIiwiUE9TVCIsImZldGNoIiwicmVxdWlyZSIsIlJlcXVlc3QiLCJfdGhpcyIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIm1ldGhvZCIsInVybCIsIm9wdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm1ha2VMb2NhbFJlcXVlc3QiLCJ0aGVuIiwicmVzdWx0IiwiY2F0Y2giLCJyZWFzb24iLCJ5ZWxsb3ciLCJ1cmxNYXAiLCJtYXBQcm90b2NvbCIsImdyZWVuIiwicHJvY2VzcyIsImVudiIsIk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQiLCJyZXMiLCJzdGF0dXMiLCJ0ZXh0IiwiYm9keSIsInRvU3RyaW5nIiwiZXJyIiwiZXJyb3IiLCJyZWQiLCJwb3N0T3B0aW9ucyIsImhlYWRlcnMiLCJwcm90b2NvbG1hcCIsImZvdW5kUHJvdG9jb2wiLCJwcm90b2NvbCIsInNsaWNlIiwibGVuZ3RoIiwiRXJyb3IiLCJSdW50aW1lQ2FwYWJpbGl0aWVzIiwic3RvcmFnZU1hbmFnZXIiLCJhbGwiLCJfZ2V0RW52aXJvbm1lbnQiLCJjYXBhYmlsaXRpZXMiLCJjYXBhYmlsaXR5IiwiYXNzaWduIiwic2V0IiwiZ2V0IiwiaGFzT3duUHJvcGVydHkiLCJnZXRSdW50aW1lQ2FwYWJpbGl0aWVzIiwibm9kZSIsIndpbmRvdyIsIm5hdmlnYXRvciIsIlNhbmRib3hBcHAiLCJ0eXBlIiwiTk9STUFMIiwib24iLCJtc2ciLCJ0byIsInN0YXJ0c1dpdGgiLCJfb25NZXNzYWdlIiwic2VuZCIsImNoaWxkIiwiY29sb3JzIiwiU2FuZGJveFdvcmtlciIsInNjcmlwdCIsIndvcmtlciIsImZvcmsiLCJlIiwiZXhpdCIsImtpbGwiLCJnbG9iYWwiLCJSdW50aW1lRmFjdG9yeSIsImNyZWF0ZSIsImNyZWF0ZVNhbmRib3giLCJTYW5kYm94Q2FwYWJpbGl0aWVzIiwiY2FwYWJpbGl0aWVzTWFuYWdlciIsImlzQXZhaWxhYmxlIiwiY3JlYXRlQXBwU2FuZGJveCIsImNyZWF0ZUh0dHBSZXF1ZXN0IiwicmVxdWVzdCIsImF0b2IiLCJiNjQiLCJwZXJzaXN0ZW5jZU1hbmFnZXIiLCJsb2NhbFN0b3JhZ2UiLCJuYW1lIiwic2NoZW1hcyIsImRhdGFiYXNlcyIsInN0b3JlTWFuYWdlciIsInNoaW1JbmRleGVkREIiLCJfX3VzZVNoaW0iLCJfX3NldENvbmZpZyIsImNoZWNrT3JpZ2luIiwiaW5kZXhlZERCIiwiSURCS2V5UmFuZ2UiLCJjcmVhdGVSdW50aW1lQ2F0YWxvZ3VlIiwiY2F0YWxvZ3VlIiwicnVudGltZUNhcGFiaWxpdGllcyIsImNyZWF0ZVdlYmNyeXB0byIsImRvbWFpbiIsInJ1bnRpbWVEZXNjcmlwdG9yIiwicmV0dXJuSHlwZXJ0eSIsImh5cGVydHkiLCJzZWFyY2hIeXBlcnR5IiwicnVudGltZSIsImRlc2NyaXB0b3IiLCJ1bmRlZmluZWQiLCJpbmRleCIsInJlZ2lzdHJ5IiwiaHlwZXJ0aWVzTGlzdCIsInJ1bnRpbWVSZWFkeSIsInJ1bnRpbWVIeXBlcnR5VVJMIiwiaHlwZXJ0eVVSTCIsImxvYWRIeXBlcnR5IiwibG9hZFN0dWIiLCJvcmFuZ2UiLCJkbyIsInJ1bnRpbWVVUkwiLCJnZXRSdW50aW1lRGVzY3JpcHRvciIsInNvdXJjZVBhY2thZ2VVUkwiLCJzb3VyY2VQYWNrYWdlIiwiZ2V0U291cmNlUGFja2FnZUZyb21VUkwiLCJSdW50aW1lVUEiLCJzb3VyY2VDb2RlIiwiaW5pdCIsIndhcm5pbmciLCJ3YXJuIiwibWVzc2FnZSIsInN0YWNrIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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LENBSkQ7O0FBTUFsRCxRQUFRb0MsRUFBUixDQUFXLE9BQVgsRUFBb0IsVUFBQ0MsR0FBRCxFQUFTO0FBQzNCekQsVUFBUThILElBQVIsQ0FBYSxrQ0FBYjtBQUNBMUcsVUFBUWlELElBQVI7QUFDQWpELFVBQVFrRCxJQUFSO0FBQ0QsQ0FKRDs7QUFNQWxELFFBQVFvQyxFQUFSLENBQVcsUUFBWCxFQUFxQixZQUFNO0FBQ3pCeEQsVUFBUThILElBQVIsQ0FBYSxrREFBYjtBQUNBMUcsVUFBUWlELElBQVI7QUFDQWpELFVBQVFrRCxJQUFSO0FBQ0QsQ0FKRCxFLENBSUk7O0FBRUpsRCxRQUFRb0MsRUFBUixDQUFXLFNBQVgsRUFBc0IsWUFBTTtBQUMxQnhELFVBQVE4SCxJQUFSLENBQWEsaURBQWI7QUFDQTFHLFVBQVFpRCxJQUFSO0FBQ0FqRCxVQUFRa0QsSUFBUjtBQUNELENBSkQsRSxDQUlJLGdCIiwiZmlsZSI6ImNvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIpLCByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiKSwgcmVxdWlyZShcImV2YWxcIiksIHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpLCByZXF1aXJlKFwiY29sb3JzXCIpLCByZXF1aXJlKFwiaW5kZXhlZGRic2hpbVwiKSwgcmVxdWlyZShcIm5vZGUtZmV0Y2hcIiksIHJlcXVpcmUoXCJ1cmlqc1wiKSwgcmVxdWlyZShcImF0b2JcIiksIHJlcXVpcmUoXCJkZXhpZVwiKSwgcmVxdWlyZShcIm5vZGUtbG9jYWxzdG9yYWdlXCIpLCByZXF1aXJlKFwibm9kZS13ZWJjcnlwdG8tb3NzbFwiKSwgcmVxdWlyZShcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImNvcmVcIiwgW1wicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiLCBcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiwgXCJldmFsXCIsIFwiY2hpbGRfcHJvY2Vzc1wiLCBcImNvbG9yc1wiLCBcImluZGV4ZWRkYnNoaW1cIiwgXCJub2RlLWZldGNoXCIsIFwidXJpanNcIiwgXCJhdG9iXCIsIFwiZGV4aWVcIiwgXCJub2RlLWxvY2Fsc3RvcmFnZVwiLCBcIm5vZGUtd2ViY3J5cHRvLW9zc2xcIiwgXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiLCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiLCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY29yZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiksIHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpLCByZXF1aXJlKFwiZXZhbFwiKSwgcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIiksIHJlcXVpcmUoXCJjb2xvcnNcIiksIHJlcXVpcmUoXCJpbmRleGVkZGJzaGltXCIpLCByZXF1aXJlKFwibm9kZS1mZXRjaFwiKSwgcmVxdWlyZShcInVyaWpzXCIpLCByZXF1aXJlKFwiYXRvYlwiKSwgcmVxdWlyZShcImRleGllXCIpLCByZXF1aXJlKFwibm9kZS1sb2NhbHN0b3JhZ2VcIiksIHJlcXVpcmUoXCJub2RlLXdlYmNyeXB0by1vc3NsXCIpLCByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXJcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXRhbG9ndWVcIiksIHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1N0b3JhZ2VNYW5hZ2VyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjb3JlXCJdID0gZmFjdG9yeShyb290W1wicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiXSwgcm9vdFtcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIl0sIHJvb3RbXCJldmFsXCJdLCByb290W1wiY2hpbGRfcHJvY2Vzc1wiXSwgcm9vdFtcImNvbG9yc1wiXSwgcm9vdFtcImluZGV4ZWRkYnNoaW1cIl0sIHJvb3RbXCJub2RlLWZldGNoXCJdLCByb290W1widXJpanNcIl0sIHJvb3RbXCJhdG9iXCJdLCByb290W1wiZGV4aWVcIl0sIHJvb3RbXCJub2RlLWxvY2Fsc3RvcmFnZVwiXSwgcm9vdFtcIm5vZGUtd2ViY3J5cHRvLW9zc2xcIl0sIHJvb3RbXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiXSwgcm9vdFtcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhdGFsb2d1ZVwiXSwgcm9vdFtcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE2X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlN2U2MDE1NjY1YjE5NzkyNjllNyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmFsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXZhbFwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3JzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29sb3JzXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW5kZXhlZGRic2hpbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImluZGV4ZWRkYnNoaW1cIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbmNvbnN0IG1ldGhvZHMgPSB7R0VUOiAnZ2V0JywgUE9TVDogJ3Bvc3QnfVxuXG5sZXQgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJylcblxuXG5jbGFzcyBSZXF1ZXN0IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IF90aGlzID0gdGhpc1xuXHRcdGNvbnNvbGUubG9nKCdOb2RlIGh0dHAgUmVxdWVzdCcpXG5cdFx0T2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaCgobWV0aG9kKSA9PiB7XG5cdFx0XHRfdGhpc1ttZXRob2RzW21ldGhvZF1dID0gKHVybCwgb3B0aW9ucykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdF90aGlzLm1ha2VMb2NhbFJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdClcblx0XHRcdFx0XHR9KS5jYXRjaCgocmVhc29uKSA9PiB7XG5cdFx0XHRcdFx0XHRyZWplY3QocmVhc29uKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdC8qKlxuICAgKiBoYW5kbGluZyByZXF1ZXN0IG1ldGhvZHNcbiAgICogQHJldHVybnMge3RleHQ8c3RyaW5nPn1cbiAgICoqL1xuXHRtYWtlTG9jYWxSZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKSB7XG5cdFx0bGV0IF90aGlzID10aGlzXG5cdFx0Y29uc29sZS5sb2coJ0hUVFBTIFJlcXVlc3Q6Jy55ZWxsb3csIG1ldGhvZCwgdXJsLCBvcHRpb25zKVxuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0bGV0IHVybE1hcCA9IF90aGlzLm1hcFByb3RvY29sKHVybClcblxuXHRcdFx0Y29uc29sZS5sb2coJ01hcHBlZCB1cmwgaXMgJy55ZWxsb3csIHVybE1hcCwnbWV0aG9kIGlzOicuZ3JlZW4sIG1ldGhvZClcblx0XHRcdHByb2Nlc3MuZW52Lk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQgPSAnMCdcblxuXHRcdFx0aWYobWV0aG9kID09PSAnR0VUJykge1xuXHRcdFx0XHQvLyBoYW5kbGUgR0VUIG1ldGhvZFxuXHRcdFx0XHRmZXRjaCh1cmxNYXApLnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdzdGF0dXNDb2RlIGlzOiAnLmdyZWVuLCAgcmVzLnN0YXR1cylcblx0XHRcdFx0XHRyZXR1cm4gcmVzLnRleHQoKVxuXHRcdFx0XHR9KS50aGVuKChib2R5KT0+IHtcblx0XHRcdFx0XHRyZXNvbHZlKGJvZHkudG9TdHJpbmcoJ3V0ZjgnKSlcblx0XHRcdFx0fSkuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VyZWQgb24gR0VUIG1ldGhvZCBvZiB1cmw6Jy5yZWQgLCB1cmxNYXAsICcgcmVhc29uIDonLnJlZCwgZXJyKVxuXHRcdFx0XHRcdHJlamVjdChlcnIpXG5cdFx0XHRcdH0pXG5cblx0XHRcdH0gZWxzZSBpZihtZXRob2QgPT09ICdQT1NUJykge1xuXHRcdFx0XHRsZXQgcG9zdE9wdGlvbnMgPSB7XG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0XHRcdCdjYWNoZS1jb250cm9sJzogJ25vLWNhY2hlJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGJvZHk6IG9wdGlvbnMgJiYgb3B0aW9ucy5ib2R5ID8gb3B0aW9ucy5ib2R5IDoge31cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdQb3N0T3B0aW9uczonLCBwb3N0T3B0aW9ucylcblxuXHRcdFx0XHRmZXRjaCh1cmxNYXAsIHBvc3RPcHRpb25zKS50aGVuKChyZXMpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnc3RhdHVzQ29kZSBpczogJy5ncmVlbiwgIHJlcy5zdGF0dXMpXG5cdFx0XHRcdFx0cmV0dXJuIHJlcy50ZXh0KClcblx0XHRcdFx0fSkudGhlbigoYm9keSkgPT4ge1xuXHRcdFx0XHRcdHJlc29sdmUoYm9keS50b1N0cmluZygndXRmOCcpKVxuXHRcdFx0XHR9KS5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cmVkIG9uIFBPU1QgbWV0aG9kIG9mIHVybDonLHVybE1hcCwgJ3dpdGggb3B0aW9uczonLCBvcHRpb25zLCAncmVhc29uIDonLCBlcnJvcilcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdC8qKlxuICAqIEByZXR1cm5zIHt2YXJpYWJsZTxzdHJpbmc+fVxuICAqKi9cblx0bWFwUHJvdG9jb2wodXJsKSB7XG5cdFx0bGV0IHByb3RvY29sbWFwID0ge1xuXHRcdFx0J2xvY2FsaG9zdDovLyc6ICdodHRwczovLycsXG5cdFx0XHQndW5kZWZpbmVkOi8vJzogJ2h0dHBzOi8vJyxcblx0XHRcdCdoeXBlcnR5LWNhdGFsb2d1ZTovLyc6ICdodHRwczovLycsXG5cdFx0XHQnaHR0cHM6Ly8nOiAnaHR0cHM6Ly8nLFxuXHRcdFx0J2h0dHA6Ly8nOiAnaHR0cHM6Ly8nXG5cdFx0fVxuXG5cdFx0bGV0IGZvdW5kUHJvdG9jb2wgPSBmYWxzZVxuXHRcdGZvciAobGV0IHByb3RvY29sIGluIHByb3RvY29sbWFwKSB7XG5cdFx0XHRpZiAodXJsLnNsaWNlKDAsIHByb3RvY29sLmxlbmd0aCkgPT09IHByb3RvY29sKSB7XG5cdFx0XHRcdHVybCA9IHByb3RvY29sbWFwW3Byb3RvY29sXSArIHVybC5zbGljZShwcm90b2NvbC5sZW5ndGgsIHVybC5sZW5ndGgpXG5cdFx0XHRcdGZvdW5kUHJvdG9jb2wgPSB0cnVlXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCFmb3VuZFByb3RvY29sKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcHJvdG9jb2wgb2YgdXJsOiAnICsgdXJsKVxuXHRcdH1cblx0XHRyZXR1cm4gdXJsXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlcXVlc3QuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbi8vIFRPRE86IGltcG9ydCBhbmQgZXh0ZW5kIHRoZSBjbGFzcyBvZiB0aGUgc2VydmljZS1mcmFtZXdvcmtcbi8vIHNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUnVudGltZUNhcGFiaWxpdGllcztcblxuY2xhc3MgUnVudGltZUNhcGFiaWxpdGllcyB7XG5cbiAgIGNvbnN0cnVjdG9yKHN0b3JhZ2VNYW5hZ2VyKSB7XG4gICAgaWYgKCFzdG9yYWdlTWFuYWdlcikgdGhyb3cgbmV3IEVycm9yKCdUaGUgUnVudGltZSBDYXBhYmlsaXRpZXMgbmVlZCB0aGUgc3RvcmFnZU1hbmFnZXInKTtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyID0gc3RvcmFnZU1hbmFnZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhcyBhIHByb21pc2UgUnVudGltZUNhcGFiaWxpdGllcyBqc29uIG9iamVjdCB3aXRoIGFsbCBhdmFpbGFibGUgY2FwYWJpbGl0aWVzIG9mIHRoZSBydW50aW1lLlxuICAgKiBJZiBpdCB3YXMgbm90IHlldCBwZXJzaXN0ZWQgaW4gdGhlIFN0b3JhZ2UgTWFuYWdlciBpdCBjb2xsZWN0cyBhbGwgcmVxdWlyZWQgaW5mbyBmcm9tIHRoZSBwbGF0Zm9ybSBhbmQgc2F2ZXMgaW4gdGhlIHN0b3JhZ2UgbWFuYWdlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn1cbiAgICovXG4gIGdldFJ1bnRpbWVDYXBhYmlsaXRpZXMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIFByb21pc2UuYWxsKFt0aGlzLl9nZXRFbnZpcm9ubWVudCgpXSkudGhlbigocmVzdWx0KSA9PiB7XG5cbiAgICAgICAgbGV0IGNhcGFiaWxpdGllcyA9IHt9O1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5fZ2V0RW52aXJvbm1lbnQoKXM6ICcsIHRoaXMuX2dldEVudmlyb25tZW50KCkpO1xuXG4gICAgICAgIHJlc3VsdC5mb3JFYWNoKChjYXBhYmlsaXR5KSA9PiB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihjYXBhYmlsaXRpZXMsIGNhcGFiaWxpdHkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnY2FwYWJpbGl0aWVzOiAnLCBjYXBhYmlsaXRpZXMpO1xuICAgICAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyLnNldCgnY2FwYWJpbGl0aWVzJywgJzEnLCBjYXBhYmlsaXRpZXMpO1xuXG4gICAgICAgIHJlc29sdmUoY2FwYWJpbGl0aWVzKTtcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhcyBhIHByb21pc2UgYSBib29sZWFuIGFjY29yZGluZyB0byBhdmFpbGFibGUgY2FwYWJpbGl0aWVzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIGlzQXZhaWxhYmxlKGNhcGFiaWxpdHkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZU1hbmFnZXIuZ2V0KCdjYXBhYmlsaXRpZXMnKS50aGVuKChjYXBhYmlsaXRpZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NhcGFiaWxpdHkgJyArIGNhcGFiaWxpdHkgKyAnIGlzIGF2YWlsYWJsZT8gJywgY2FwYWJpbGl0aWVzLmhhc093blByb3BlcnR5KGNhcGFiaWxpdHkpICYmIGNhcGFiaWxpdGllc1tjYXBhYmlsaXR5XSk7XG4gICAgICAgIGlmIChjYXBhYmlsaXRpZXMuaGFzT3duUHJvcGVydHkoY2FwYWJpbGl0eSkgJiYgY2FwYWJpbGl0aWVzW2NhcGFiaWxpdHldKSB7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGhhcyBvY2N1cmVkIHdoaWxlIGNoZWNraW5nIGNhcGFiaWxpdHksIHJlYXNvbjonLCBlcnJvcik7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBpdCByZWZyZXNoZXMgcHJldmlvdXNseSBjb2xsZWN0ZWQgY2FwYWJpbGl0aWVzIGFuZCB1cGRhdGVzIHRoZSBzdG9yYWdlIG1hbmFnZXJcbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5nZXRSdW50aW1lQ2FwYWJpbGl0aWVzKCkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVE9ETzogb3JnYW5pemUgdGhlIGNvZGUgaW4gc2VwYXJhdGVkIGZpbGVzXG4gIF9nZXRFbnZpcm9ubWVudCgpIHtcbiAgICAvLyBUT0RPOiB0aGlzIHNob3VsZCBiZSBtb3JlIGVmZmVjdGl2ZSBhbmQgY2hlY2sgdGhlIGVudmlyb25tZW50XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGU6ICEhISh3aW5kb3cgJiYgbmF2aWdhdG9yKVxuICAgICAgfTtcbiAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBub2RlOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSdW50aW1lQ2FwYWJpbGl0aWVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1J1bnRpbWVDYXBhYmlsaXRpZXMuanMiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKlxuKi9cblxuaW1wb3J0IHsgU2FuZGJveCwgU2FuZGJveFR5cGUgfSBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94JztcbmltcG9ydCBNaW5pQnVzIGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L21pbmlidXMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbmRib3hBcHAgZXh0ZW5kcyBTYW5kYm94IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU2FuZGJveCBBcHAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLmdyZWVuKTtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlID0gU2FuZGJveFR5cGUuTk9STUFMO1xuICAgIHByb2Nlc3Mub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnU2FuZGJveEFwcCBSZWNlaXZlZCBtZXNzYWdlICBpcyA6XFxuJy5ncmVlbik7XG4gICAgICBpZiAobXNnLmhhc093blByb3BlcnR5KCd0bycpICYmIG1zZy50by5zdGFydHNXaXRoKCdjb3JlOicpKVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIHRoaXMuX29uTWVzc2FnZShtc2cpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uUG9zdE1lc3NhZ2UobXNnKSB7XG4gICAgY29uc29sZS5sb2coJ1NhbmRib3hBcHAgcG9zdE1lc3NhZ2UgbWVzc2FnZTogJy5ncmVlbik7XG4gICAgcHJvY2Vzcy5zZW5kKG1zZyk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TYW5kYm94QXBwLmpzIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuaW1wb3J0IHsgU2FuZGJveCwgU2FuZGJveFR5cGUgfSBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94JztcbmltcG9ydCBNaW5pQnVzIGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L21pbmlidXMnO1xubGV0IGNoaWxkID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpO1xubGV0IGNvbG9ycyA9IHJlcXVpcmUoJ2NvbG9ycycpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYW5kYm94V29ya2VyIGV4dGVuZHMgU2FuZGJveHtcbiAgY29uc3RydWN0b3Ioc2NyaXB0KSB7XG4gICAgc3VwZXIoc2NyaXB0KTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaW4gU2FuZGJveCBXb3JrZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScucmVkKTtcbiAgICB0aGlzLnR5cGUgPSBTYW5kYm94VHlwZS5OT1JNQUw7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB0aGlzLndvcmtlciA9IGNoaWxkLmZvcmsoc2NyaXB0KTtcbiAgICBpZiAoISF0aGlzLndvcmtlcikge1xuICAgICAgdGhpcy53b3JrZXIub24oJ21lc3NhZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICBfdGhpcy5fb25NZXNzYWdlKGUpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLndvcmtlci5zZW5kKCcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgd29ya2VyIFxcbicsIGUpO1xuICAgIH1cblxuICAgIHRoaXMud29ya2VyLm9uKCdleGl0JywgKG1zZykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NoaWxkIHByb2Nlc3MgZXhpdCBTYW5kYm94V29ya2VyIHN0b3BwZWQnKTtcbiAgICAgIHRoaXMud29ya2VyLmV4aXQoKTtcbiAgICAgIHRoaXMud29ya2VyLmtpbGwoKTtcbiAgICB9KTtcblxuICAgIHRoaXMud29ya2VyLm9uKCdlcnJvcicsIChtc2cpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBwcm9jZXNzIGVycm9yICBTYW5kYm94V29ya2VyIHN0b3BwZWQnKTtcbiAgICAgIHRoaXMud29ya2VyLmV4aXQoKTtcbiAgICAgIHRoaXMud29ya2VyLmtpbGwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9vblBvc3RNZXNzYWdlKG1zZykge1xuICAgIHRoaXMud29ya2VyLnNlbmQobXNnKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NhbmRib3hXb3JrZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS1mZXRjaFwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJpanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ1cmlqc1wiXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cbid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnaW5kZXhlZGRic2hpbScpKGdsb2JhbCk7XG5cbmltcG9ydCBTYW5kYm94V29ya2VyIGZyb20gJy4vU2FuZGJveFdvcmtlcic7XG5pbXBvcnQgU2FuZGJveEFwcCBmcm9tICcuL1NhbmRib3hBcHAnO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi9SZXF1ZXN0JztcbmltcG9ydCBhdG9iIGZyb20gJ2F0b2InO1xuXG5pbXBvcnQgU3RvcmFnZU1hbmFnZXIgZnJvbSAnc2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlcic7XG5pbXBvcnQgeyBSdW50aW1lQ2F0YWxvZ3VlIH0gZnJvbSAnc2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlJztcbmltcG9ydCBQZXJzaXN0ZW5jZU1hbmFnZXIgZnJvbSAnc2VydmljZS1mcmFtZXdvcmsvZGlzdC9QZXJzaXN0ZW5jZU1hbmFnZXInO1xuXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tICdub2RlLWxvY2Fsc3RvcmFnZSc7XG5cbmltcG9ydCBEZXhpZSBmcm9tICdkZXhpZSc7XG5cbmltcG9ydCBzZXRHbG9iYWxWYXJzIGZyb20gJ2luZGV4ZWRkYnNoaW0nO1xuXG5pbXBvcnQgUnVudGltZUNhcGFiaWxpdGllcyBmcm9tICcuL1J1bnRpbWVDYXBhYmlsaXRpZXMnO1xuXG5pbXBvcnQgV2ViQ3J5cHRvIGZyb20gJ25vZGUtd2ViY3J5cHRvLW9zc2wnO1xuXG5sZXQgUnVudGltZUZhY3RvcnkgPSBPYmplY3QuY3JlYXRlKHtcbiAgICBjcmVhdGVTYW5kYm94KGNhcGFiaWxpdGllcykge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpICA9PiB7XG5cbiAgICAgICAgbGV0IGNhcGFiaWxpdHkgPSAnbm9kZSc7XG4gICAgICAgIGxldCBTYW5kYm94Q2FwYWJpbGl0aWVzID0ge307XG5cbiAgICAgICAgdGhpcy5jYXBhYmlsaXRpZXNNYW5hZ2VyLmlzQXZhaWxhYmxlKGNhcGFiaWxpdHkpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmKHJlc3VsdCkge1xuICAgICAgICAgICAgU2FuZGJveENhcGFiaWxpdGllcyA9IHsgXCJub2RlXCI6IHRydWUgfTtcbiAgICAgICAgICAgIHJlc29sdmUobmV3IFNhbmRib3hXb3JrZXIoICcuLi9kaXN0L0NvbnRleHRTZXJ2aWNlUHJvdmlkZXIuanMnKSk7XG4gICAgICAgICAgfSBlbHNlIHtcblxuXG4gICAgICAgICAgfVxuICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbY3JlYXRlU2FuZGJveCBdLCBFcnJvciBvY2N1cmVkIHdoaWxlIGNyZWF0aW5nIFNhbmRib3gsIHJlYXNvbiA6ICcsIHJlYXNvbik7XG4gICAgICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjcmVhdGVBcHBTYW5kYm94KCkge1xuICAgICAgcmV0dXJuIG5ldyBTYW5kYm94QXBwKCAnLi4vZGlzdC9Db250ZXh0QXBwLmpzJyk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUh0dHBSZXF1ZXN0KCkge1xuICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgpO1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfSxcblxuICAgIGF0b2IoYjY0KSB7XG4gICAgICByZXR1cm4gYXRvYihiNjQpO1xuICAgIH0sXG5cbiAgICBwZXJzaXN0ZW5jZU1hbmFnZXIoKSB7XG4gICAgICBsZXQgbG9jYWxTdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZSgnLi9zY3JhdGNoJyk7XG4gICAgICByZXR1cm4gbmV3IFBlcnNpc3RlbmNlTWFuYWdlcihsb2NhbFN0b3JhZ2UpO1xuICAgIH0sXG5cblx0XHRzdG9yYWdlTWFuYWdlcihuYW1lLCBzY2hlbWFzKSB7XG5cblx0XHRcdGlmICghdGhpcy5kYXRhYmFzZXMpIHsgdGhpcy5kYXRhYmFzZXMgPSB7fTsgfVxuXHRcdFx0aWYgKCF0aGlzLnN0b3JlTWFuYWdlcikgeyB0aGlzLnN0b3JlTWFuYWdlciA9IHt9OyB9XG5cblx0XHRcdC8vIFVzaW5nIHRoZSBpbXBsZW1lbnRhdGlvbiBvZiBTZXJ2aWNlIEZyYW1ld29ya1xuXHRcdFx0Ly8gRGV4aWUgaXMgdGhlIEluZGV4REIgV3JhcHBlclxuXHRcdFx0aWYgKCF0aGlzLmRhdGFiYXNlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuXG5cdFx0XHRcdGdsb2JhbC5zaGltSW5kZXhlZERCLl9fdXNlU2hpbSgpO1xuXHRcdFx0XHRnbG9iYWwuc2hpbUluZGV4ZWREQi5fX3NldENvbmZpZyh7Y2hlY2tPcmlnaW46IGZhbHNlfSk7XG5cblx0XHRcdFx0dGhpcy5kYXRhYmFzZXNbbmFtZV0gPSBuZXcgRGV4aWUobmFtZSwge1xuXHRcdFx0XHRcdGluZGV4ZWREQjogZ2xvYmFsLmluZGV4ZWREQixcblx0XHRcdFx0XHRJREJLZXlSYW5nZTogZ2xvYmFsLklEQktleVJhbmdlXG5cdFx0XHRcdH0pXG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCF0aGlzLnN0b3JlTWFuYWdlci5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdOQU1FOicsIG5hbWUpO1xuXG5cdFx0XHRcdHRoaXMuc3RvcmVNYW5hZ2VyW25hbWVdID0gbmV3IFN0b3JhZ2VNYW5hZ2VyKHRoaXMuZGF0YWJhc2VzW25hbWVdLCBuYW1lLCBzY2hlbWFzKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMuc3RvcmVNYW5hZ2VyW25hbWVdO1xuXHRcdH0sXG4gICAgY3JlYXRlUnVudGltZUNhdGFsb2d1ZSgpIHtcbiAgICAgIHRoaXMuY2F0YWxvZ3VlID0gbmV3IFJ1bnRpbWVDYXRhbG9ndWUodGhpcyk7XG4gICAgICByZXR1cm4gdGhpcy5jYXRhbG9ndWU7XG4gICAgfSxcblxuXHRcdHJ1bnRpbWVDYXBhYmlsaXRpZXMoKSB7XG5cblx0XHRcdGlmICghdGhpcy5jYXBhYmlsaXRpZXNNYW5hZ2VyKSB7XG5cdFx0XHRcdGxldCBzdG9yYWdlTWFuYWdlciA9IHRoaXMuc3RvcmFnZU1hbmFnZXIoJ2NhcGFiaWxpdGllcycpO1xuXHRcdFx0XHR0aGlzLmNhcGFiaWxpdGllc01hbmFnZXIgPSBuZXcgUnVudGltZUNhcGFiaWxpdGllcyhzdG9yYWdlTWFuYWdlcik7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLmNhcGFiaWxpdGllc01hbmFnZXI7XG5cdFx0fSxcblxuICAgIGNyZWF0ZVdlYmNyeXB0bygpIHtcbiAgICAgIHJldHVybiBuZXcgV2ViQ3J5cHRvKCk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUnVudGltZUZhY3Rvcnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUnVudGltZUZhY3RvcnkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhdG9iXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXRvYlwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRleGllXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZGV4aWVcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWxvY2Fsc3RvcmFnZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtbG9jYWxzdG9yYWdlXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS13ZWJjcnlwdG8tb3NzbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5vZGUtd2ViY3J5cHRvLW9zc2xcIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1BlcnNpc3RlbmNlTWFuYWdlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvUGVyc2lzdGVuY2VNYW5hZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9SdW50aW1lQ2F0YWxvZ3VlXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VydmljZS1mcmFtZXdvcmsvZGlzdC9TdG9yYWdlTWFuYWdlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3RvcmFnZU1hbmFnZXJcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG4vKipcbiAqIE5vZGUuanMgY2hpbGQgcHJvY2VzcyAoc2ltdWx0YW5lb3VzbHkgaXMgYSBwYXJlbnQgcHJvY2VzcyBvZiBDb250ZXh0U2VydmljZVByb3ZpZGVyIHNhbmRib3gpXG4gKiB1c2VkIGFzIGFuIGlzb2xhdGVkIHNhbmRib3ggdG8gbG9hZCB0aGUgSHlwZXJ0eSBydW50aW1lIGFrYSBjb3JlUnVudGltZVxuICoqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgVVJJIGZyb20gJ3VyaWpzJztcbmltcG9ydCBSdW50aW1lRmFjdG9yeSBmcm9tICcuL1J1bnRpbWVGYWN0b3J5JztcbmltcG9ydCBfZXZhbCBmcm9tICdldmFsJztcblxuXG5cbmxldCBkb21haW47XG5sZXQgcnVudGltZURlc2NyaXB0b3I7XG5cbmxldCBjYXRhbG9ndWUgPSBSdW50aW1lRmFjdG9yeS5jcmVhdGVSdW50aW1lQ2F0YWxvZ3VlKCk7XG5cbi8vIHJldHVybkh5cGVydHkgZ2l2ZW50IHRoZSBydW50aW1lSHlwZXJ0eVVSTCxcbi8vIFNlbmRzIG1lc3NhZ2UgPSdsb2FkZWRIeXBlcnR5JyB0byB0aGUgdGhlIHBhcmVudCBwcm9jZXNzIFJ1bnRpbWVOb2RlIHRocm91Z2h0IElQQyBjaGFubmVsXG5cbmZ1bmN0aW9uIHJldHVybkh5cGVydHkoaHlwZXJ0eSkgeyBcbiAgcHJvY2Vzcy5zZW5kKHt0bzoncnVudGltZTpsb2FkZWRIeXBlcnR5JywgYm9keTogaHlwZXJ0eX0pO1xufVxuXG4vLyB3aGlsZSBsb2FkaW5nIHRoZSBwcm90b2NvbFN0dWIgc2VhcmNoIGh5cGVydHkgaW4gdGhlIHJ1bnRpbWUgcmVnaXN0cnlcbmZ1bmN0aW9uIHNlYXJjaEh5cGVydHkocnVudGltZSwgZGVzY3JpcHRvcikge1xuICBsZXQgaHlwZXJ0eSA9IHVuZGVmaW5lZDtcbiAgbGV0IGluZGV4ID0gMDtcbiAgd2hpbGUgKCFoeXBlcnR5ICYmIGluZGV4IDwgcnVudGltZS5yZWdpc3RyeS5oeXBlcnRpZXNMaXN0Lmxlbmd0aCkge1xuICAgIGlmIChydW50aW1lLnJlZ2lzdHJ5Lmh5cGVydGllc0xpc3RbaW5kZXhdLmRlc2NyaXB0b3IgPT09IGRlc2NyaXB0b3IpXG4gICAgICAgIGh5cGVydHkgPSBydW50aW1lLnJlZ2lzdHJ5Lmh5cGVydGllc0xpc3RbaW5kZXhdO1xuICAgIGluZGV4Kys7XG4gIH1cbiAgY29uc29sZS5sb2coJ0h5ZXBydHkgZm91bmRlZCEnLmdyZWVuKTtcbiAgcmV0dXJuIGh5cGVydHk7XG59XG5cbi8vIEluc3RhbGwgcnVudGltZSBvbiB0aGUgY29yZSBTYW5kYm94XG5mdW5jdGlvbiBydW50aW1lUmVhZHkocnVudGltZSkge1xuICAvLyBjb3JlUnVudGltZSBnbG9iYWwgRXZlbnRMaXN0ZW5lciBmb3IgYW50eSBpbmNvbWluZyBtZXNzYWdlXG4gIHByb2Nlc3Mub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XG4gICAgaWYgKG1zZy50byA9PT0gJ2NvcmU6bG9hZEh5cGVydHknKSB7XG4gICAgICBsZXQgZGVzY3JpcHRvciA9IG1zZy5ib2R5LmRlc2NyaXB0b3I7XG4gICAgICBsZXQgaHlwZXJ0eSA9IHNlYXJjaEh5cGVydHkocnVudGltZSwgZGVzY3JpcHRvcik7XG4gICAgICBpZiAoaHlwZXJ0eSkge1xuICAgICAgICByZXR1cm5IeXBlcnR5KHtydW50aW1lSHlwZXJ0eVVSTDogaHlwZXJ0eS5oeXBlcnR5VVJMfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBydW50aW1lLmxvYWRIeXBlcnR5KGRlc2NyaXB0b3IpLnRoZW4ocmV0dXJuSHlwZXJ0eSkuY2F0Y2goKGVycm9yKT0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB3aGlsZSBsb2FkaW5nIEh5cGVydHksIHJlYXNvbjogJywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1zZy50byA9PT0gJ2NvcmU6bG9hZFN0dWInKSB7XG4gICAgICBydW50aW1lLmxvYWRTdHViKG1zZy5ib2R5LmRvbWFpbik7XG4gICAgfVxuICB9LCBmYWxzZSk7XG4gIGNvbnNvbGUubG9nKCctLT4gc2VuZGluZyB0byBNYWluIHByb2Nlc3MgUnVudGltZU5vZGUnLm9yYW5nZSk7XG4gIHByb2Nlc3Muc2VuZCh7dG86J3J1bnRpbWU6aW5zdGFsbGVkJywgYm9keTp7fX0pO1xufVxuXG5cblxucHJvY2Vzcy5vbignbWVzc2FnZScsIChtc2cpID0+IHtcbiAgIGlmIChtc2cuZG8gPT09ICdpbnN0YWxsIHJ1bnRpbWUgY29yZScpIHsgICAgXG4gICAgICAgbGV0IHJ1bnRpbWVVUkwgPSBtc2cuYm9keS5ydW50aW1lVVJMO1xuICAgICAgIGRvbWFpbiA9IG1zZy5ib2R5LmRvbWFpbjtcbiAgICAgICAvLyBHZXRzIFJ1bnRpbWVEZXNjcmlwdG9yIGZyb20gdGhlIHJ1bnRpbWUgY2F0YWxvZ3VlXG4gICAgICBjYXRhbG9ndWUuZ2V0UnVudGltZURlc2NyaXB0b3IocnVudGltZVVSTCkudGhlbigoZGVzY3JpcHRvcikgPT4ge1xuICAgICAgICBydW50aW1lRGVzY3JpcHRvciA9IGRlc2NyaXB0b3I7XG4gICAgICAgIGlmIChkZXNjcmlwdG9yLnNvdXJjZVBhY2thZ2VVUkwgPT09ICcvc291cmNlUGFja2FnZScpIHtcbiAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvci5zb3VyY2VQYWNrYWdlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBjYXRhbG9ndWUuZ2V0U291cmNlUGFja2FnZUZyb21VUkwoZGVzY3JpcHRvci5zb3VyY2VQYWNrYWdlVVJMKTtcbiAgICAgICAgfVxuICAgICAgfSkudGhlbigoc291cmNlUGFja2FnZSkgPT4ge1xuICAgICAgICAgIGxldCBSdW50aW1lVUEgPSBfZXZhbChzb3VyY2VQYWNrYWdlLnNvdXJjZUNvZGUsIHRydWUpO1xuICAgICAgICAgIGxldCBydW50aW1lID0gbmV3IFJ1bnRpbWVVQShydW50aW1lRGVzY3JpcHRvciwgUnVudGltZUZhY3RvcnksIGRvbWFpbik7XG4gICAgICAgICAgcnVudGltZS5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBydW50aW1lUmVhZHkocnVudGltZSk7XG4gICAgICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluaXQnLCByZWFzb24pO1xuICAgICAgICAgIH0pO1xuICAgICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIHRoZSBSdW50aW1lRGVzY3JpcHRvciBmcm9tIHRoZSBzZXJ2aWNlIGZyYW1ld29yayBjYXRhbG9ndWUsIHJlYXNvbjogJywgcmVhc29uKTtcbiAgICAgIH0pO1xuICAgIH1cbn0pO1xuXG4vLyBjb3JlUnVudGltZSBQcm9jZXNzICBlcnJvciBoYW5kbGluZ1xucHJvY2Vzcy5vbignd2FybmluZycsICh3YXJuaW5nKSA9PiB7XG4gIGNvbnNvbGUud2Fybih3YXJuaW5nLm5hbWUpO1xuICBjb25zb2xlLndhcm4od2FybmluZy5tZXNzYWdlKTtcbiAgY29uc29sZS53YXJuKHdhcm5pbmcuc3RhY2spO1xufSk7XG5cbnByb2Nlc3Mub24oJ2V4aXQnLCAobXNnKSA9PiB7XG4gICBjb25zb2xlLmxvZygnY2hpbGQgcHJvY2VzcyBjb3JlIGV4aXRlZCcpO1xuICAgcHJvY2Vzcy5leGl0KCk7XG4gICBwcm9jZXNzLmtpbGwoKTtcbn0pO1xuXG5wcm9jZXNzLm9uKCdlcnJvcicsIChtc2cpID0+IHtcbiAgY29uc29sZS53YXJuKCdjaGlsZCBwcm9jZXNzIGVycm9yIGNvcmUgc3RvcHBlZCcpO1xuICBwcm9jZXNzLmV4aXQoKTtcbiAgcHJvY2Vzcy5raWxsKCk7XG59KTtcblxucHJvY2Vzcy5vbignU0lHSU5UJywgKCkgPT4ge1xuICBjb25zb2xlLndhcm4oJ1JlY2VpdmVkIFNJR0lOVC4gYWxsIE5vZGUgU3ViLVByb2Nlc3MgYXJlIGV4aXRlZCcpO1xuICBwcm9jZXNzLmV4aXQoKTtcbiAgcHJvY2Vzcy5raWxsKCk7XG59KTsgLy8gdG8gY2F0Y2ggY3J0bC1jXG5cbnByb2Nlc3Mub24oJ1NJR1RFUk0nLCAoKSA9PiB7XG4gIGNvbnNvbGUud2FybignUmVjZWl2ZWQgU0lHVEVSTS4gY29yZSBQcmVzcyBDb250cm9sLUQgdG8gZXhpdC4nKTtcbiAgcHJvY2Vzcy5leGl0KCk7XG4gIHByb2Nlc3Mua2lsbCgpO1xufSk7IC8vIHRvIGNhdGNoIGtpbGxcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb3JlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==