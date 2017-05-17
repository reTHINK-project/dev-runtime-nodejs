// version: 0.1.0
// date: Wed May 17 2017 11:47:08 GMT+0200 (CEST)
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
		module.exports = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"));
	else if(typeof define === 'function' && define.amd)
		define("ContextServiceProvider", ["runtime-core/dist/minibus", "runtime-core/dist/sandbox", "eval"], factory);
	else if(typeof exports === 'object')
		exports["ContextServiceProvider"] = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"));
	else
		root["ContextServiceProvider"] = factory(root["runtime-core/dist/minibus"], root["runtime-core/dist/sandbox"], root["eval"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("runtime-core/dist/minibus");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("runtime-core/dist/sandbox");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("eval");

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
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
 * Context Service Provider CSP that Loads and activates CSP Protostub to the CSP messaging node services
 **/

var _sandbox = __webpack_require__(1);

var _minibus = __webpack_require__(0);

var _minibus2 = _interopRequireDefault(_minibus);

var _eval2 = __webpack_require__(2);

var _eval3 = _interopRequireDefault(_eval2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process._miniBus = new _minibus2.default();

process._miniBus._onPostMessage = function (msg) {
  process.send(msg);
};

// global EventListener on the IPC communication channel between the Context Service Provider CSP and the RuntimeNode for messages sent from the coreRuntime
process.on('message', function (msg) {
  process._miniBus._onMessage(msg);
});

process._registry = new _sandbox.SandboxRegistry(process._miniBus);
process._registry._create = function (url, sourceCode, config) {
  try {

    var activate = (0, _eval3.default)(sourceCode, true);

    console.log('TYPEOF:', typeof activate === 'undefined' ? 'undefined' : _typeof(activate), _typeof(activate.default));

    if (typeof activate === 'function') {
      return activate(url, process._miniBus, config);
    } else if (typeof activate.default === 'function') {
      return activate.default(url, process._miniBus, config);
    }
  } catch (reason) {
    console.log('ERROR while activating the ProtoStub or IDP Proxy on the CSP, reason:'.red);
    console.log(reason);
  }
};

/***/ })

/******/ });
});