// version: 0.1.0
// date: Thu May 18 2017 10:56:54 GMT+0200 (CEST)
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
		module.exports = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("urijs"), require("es6-promise"));
	else if(typeof define === 'function' && define.amd)
		define("RuntimeNode", ["runtime-core/dist/minibus", "runtime-core/dist/sandbox", "eval", "child_process", "colors", "urijs", "es6-promise"], factory);
	else if(typeof exports === 'object')
		exports["RuntimeNode"] = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("urijs"), require("es6-promise"));
	else
		root["RuntimeNode"] = factory(root["runtime-core/dist/minibus"], root["runtime-core/dist/sandbox"], root["eval"], root["child_process"], root["colors"], root["urijs"], root["es6-promise"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_22__) {
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("urijs");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

//  The contextApp is complmentary module to the  RuntimeNode that creates the Context where the Hyperty will be deployed
//  The contextApp handls communiocation between the Hyperty and the coreRuntime

var _sandbox = __webpack_require__(1);

var _minibus = __webpack_require__(0);

var _minibus2 = _interopRequireDefault(_minibus);

var _eval2 = __webpack_require__(2);

var _eval3 = _interopRequireDefault(_eval2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createContextApp(coreRuntime) {

  process._miniBus = new _minibus2.default();
  process._miniBus._onPostMessage = function (msg) {
    // onPostMessage on the miniBus will be sent to coreRuntime 
    coreRuntime.send(msg);
  };
  // EventListener on the IPC communication channel between the coreRuntime and the RuntimeNode for messages sent from the coreRuntime
  coreRuntime.on('message', function (event) {
    if (event.to.startsWith('runtime:loadedHyperty')) return;

    // _onMessage received on the coreRuntime miniBus

    process._miniBus._onMessage(event);
  });

  process._registry = new _sandbox.SandboxRegistry(process._miniBus);

  process._registry._create = function (url, sourceCode, config) {
    try {
      var activate = (0, _eval3.default)(sourceCode, true);

      console.log('TYPEOF:', typeof activate === 'undefined' ? 'undefined' : _typeof(activate));

      if (typeof activate === 'function') {
        return activate(url, process._miniBus, config);
      } else if (typeof activate.default === 'function') {
        return activate.default(url, process._miniBus, config);
      }
    } catch (reason) {
      console.log('ERROR while activating the Hyperty, reason:', reason);
    }
  };
};

/**
* @returns Hyperty by descriptorURL
**/
function getHypertyBy(hypertyDescriptor) {
  console.log('Get Hyperty:', hypertyDescriptor, process._registry.components);
  return process._registry.components[hypertyDescriptor];
};

exports.default = { createContextApp: createContextApp, getHypertyBy: getHypertyBy };

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ContextApp = __webpack_require__(11);

var _ContextApp2 = _interopRequireDefault(_ContextApp);

var _urijs = __webpack_require__(10);

var _urijs2 = _interopRequireDefault(_urijs);

var _colors = __webpack_require__(4);

var _colors2 = _interopRequireDefault(_colors);

var _child_process = __webpack_require__(3);

var _child_process2 = _interopRequireDefault(_child_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
* distributed under the Liceruntimense is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

var Promise = __webpack_require__(22);

var domain = 'localhost';
var coreRuntime = {};

coreRuntime = _child_process2.default.fork('../dist/core.js');

var buildMsg = function buildMsg(hypertyComponent, msg) {
  console.log('hypertyComponent is :', hypertyComponent, msg);
  return {
    runtimeHypertyURL: msg.body.runtimeHypertyURL,
    status: msg.body.status,
    instance: hypertyComponent.instance,
    name: hypertyComponent.name
  };
};

/**
* Returns as a promise Hyperty object with all its informations.
* @returns {Promise<object>}
**/
var runtimeProxy = {
  requireHyperty: function requireHyperty(hypertyDescriptor) {
    var reuseAddress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    return new Promise(function (resolve, reject) {
      coreRuntime.on('message', function (msg) {
        console.log('---- Message from runtime core ----'.green);
        console.log('Hyperty loaded :\n'.green);

        if (msg.to === 'runtime:loadedHyperty') {
          resolve(buildMsg(_ContextApp2.default.getHypertyBy(msg.body.runtimeHypertyURL), msg));
        }
      });
      // console.log('coreRuntime .send'.green);
      coreRuntime.send({ to: 'core:loadHyperty', body: { descriptor: hypertyDescriptor, reuseAddress: reuseAddress } });
    });
  },

  requireProtostub: function requireProtostub(domain) {
    coreRuntime.send({ to: 'core:loadStub', body: { domain: domain } });
  }
};

/**
* Returns as a promise Hyperty runtime object.
* @returns {Promise<object>}
**/
var RethinkNode = {
  install: function install() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        domain = _ref.domain,
        runtimeURL = _ref.runtimeURL,
        development = _ref.development;

    return new Promise(function (resolve, reject) {
      var runtime = _this.getRuntime(runtimeURL, domain, development);
      coreRuntime.send({ do: 'install runtime core' });
      coreRuntime.on('message', function (msg) {
        if (msg.to === 'runtime:installed') {
          console.log('\n Runtime installed with success\n'.blue);
          resolve(runtimeProxy);
        }
      });

      coreRuntime.on('error', function (error) {
        console.error('runtime core install failed:', error);
        coreRuntime.kill();
        reject(error);
      });

      coreRuntime.on('exit', function () {
        console.log('runtime core exited.');
        coreRuntime.kill();
      });

      _ContextApp2.default.createContextApp(coreRuntime);
    });
  },

  getRuntime: function getRuntime(runtimeURL, domain, development) {
    if (!!development) {
      runtimeURL = runtimeURL || 'http://' + domain + '/.well-known/runtime/Runtime';
      domain = domain || new _urijs2.default(runtimeURL).host();
    } else {
      runtimeURL = runtimeURL || 'http://${domain}/.well-known/runtime/default';
      domain = domain || new _urijs2.default(runtimeURL).host().replace('catalogue.', '');
    }
    return {
      url: runtimeURL,
      domain: domain
    };
  }
};
exports.default = RethinkNode;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlNDEwMTJlOTVlYjQ4ODYzZTBlZD9kNWUwKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCI/NzQ3MioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiPzYyMzUqIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2YWxcIj9hZWFlIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIj80MzA4KiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvcnNcIj9hMTk4KiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmlqc1wiPzk3ZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHRBcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXM2LXByb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9zcmMvUnVudGltZU5vZGUuanMiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dEFwcCIsImNvcmVSdW50aW1lIiwicHJvY2VzcyIsIl9taW5pQnVzIiwiX29uUG9zdE1lc3NhZ2UiLCJtc2ciLCJzZW5kIiwib24iLCJldmVudCIsInRvIiwic3RhcnRzV2l0aCIsIl9vbk1lc3NhZ2UiLCJfcmVnaXN0cnkiLCJfY3JlYXRlIiwidXJsIiwic291cmNlQ29kZSIsImNvbmZpZyIsImFjdGl2YXRlIiwiY29uc29sZSIsImxvZyIsImRlZmF1bHQiLCJyZWFzb24iLCJnZXRIeXBlcnR5QnkiLCJoeXBlcnR5RGVzY3JpcHRvciIsImNvbXBvbmVudHMiLCJQcm9taXNlIiwicmVxdWlyZSIsImRvbWFpbiIsImZvcmsiLCJidWlsZE1zZyIsImh5cGVydHlDb21wb25lbnQiLCJydW50aW1lSHlwZXJ0eVVSTCIsImJvZHkiLCJzdGF0dXMiLCJpbnN0YW5jZSIsIm5hbWUiLCJydW50aW1lUHJveHkiLCJyZXF1aXJlSHlwZXJ0eSIsInJldXNlQWRkcmVzcyIsInJlc29sdmUiLCJyZWplY3QiLCJncmVlbiIsImRlc2NyaXB0b3IiLCJyZXF1aXJlUHJvdG9zdHViIiwiUmV0aGlua05vZGUiLCJpbnN0YWxsIiwicnVudGltZVVSTCIsImRldmVsb3BtZW50IiwicnVudGltZSIsImdldFJ1bnRpbWUiLCJkbyIsImJsdWUiLCJlcnJvciIsImtpbGwiLCJob3N0IiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSxzRDs7Ozs7O0FDQUEsc0Q7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSwwQzs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7Ozs7OFFDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsU0FBU0EsZ0JBQVQsQ0FBMEJDLFdBQTFCLEVBQXVDOztBQUVyQ0MsVUFBUUMsUUFBUixHQUFtQix1QkFBbkI7QUFDQUQsVUFBUUMsUUFBUixDQUFp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UjtBQUNEO0FBQ0YsT0FMRDs7QUFPQW5DLGtCQUFZTSxFQUFaLENBQWUsT0FBZixFQUF3QixVQUFDNkMsS0FBRCxFQUFXO0FBQ2pDbEMsZ0JBQVFrQyxLQUFSLENBQWMsOEJBQWQsRUFBOENBLEtBQTlDO0FBQ0FuRCxvQkFBYW9ELElBQWI7QUFDQWIsZUFBT1ksS0FBUDtBQUNELE9BSkQ7O0FBTUFuRCxrQkFBWU0sRUFBWixDQUFlLE1BQWYsRUFBdUIsWUFBTTtBQUMzQlcsZ0JBQVFDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBbEIsb0JBQVlvRCxJQUFaO0FBQ0QsT0FIRDs7QUFLQSwyQkFBSXJELGdCQUFKLENBQXFCQyxXQUFyQjtBQUNELEtBdEJNLENBQVA7QUF1QkQsR0F6QmU7O0FBMkJoQmdELFlBM0JnQixzQkEyQkxILFVBM0JLLEVBMkJPbkIsTUEzQlAsRUEyQmVvQixXQTNCZixFQTJCNEI7QUFDMUMsUUFBSSxDQUFDLENBQUNBLFdBQU4sRUFBbUI7QUFDakJELG1CQUFhQSxjQUFjLFlBQVluQixNQUFaLEdBQXFCLDhCQUFoRDtBQUNBQSxlQUFTQSxVQUFVLG9CQUFRbUIsVUFBUixFQUFvQlEsSUFBcEIsRUFBbkI7QUFDRCxLQUhELE1BR087QUFDTFIsbUJBQWFBLGNBQWMsOENBQTNCO0FBQ0FuQixlQUFTQSxVQUFVLG9CQUFRbUIsVUFBUixFQUFvQlEsSUFBcEIsR0FBMkJDLE9BQTNCLENBQW1DLFlBQW5DLEVBQWlELEVBQWpELENBQW5CO0FBQ0Q7QUFDRCxXQUFPO0FBQ0x6QyxXQUFLZ0MsVUFEQTtBQUVMbkIsY0FBUUE7QUFGSCxLQUFQO0FBSUQ7QUF2Q2UsQ0FBbEI7a0JBeUNlaUIsVyIsImZpbGUiOiJSdW50aW1lTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiksIHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpLCByZXF1aXJlKFwiZXZhbFwiKSwgcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIiksIHJlcXVpcmUoXCJjb2xvcnNcIiksIHJlcXVpcmUoXCJ1cmlqc1wiKSwgcmVxdWlyZShcImVzNi1wcm9taXNlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiUnVudGltZU5vZGVcIiwgW1wicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiLCBcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiwgXCJldmFsXCIsIFwiY2hpbGRfcHJvY2Vzc1wiLCBcImNvbG9yc1wiLCBcInVyaWpzXCIsIFwiZXM2LXByb21pc2VcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUnVudGltZU5vZGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIpLCByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiKSwgcmVxdWlyZShcImV2YWxcIiksIHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpLCByZXF1aXJlKFwiY29sb3JzXCIpLCByZXF1aXJlKFwidXJpanNcIiksIHJlcXVpcmUoXCJlczYtcHJvbWlzZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUnVudGltZU5vZGVcIl0gPSBmYWN0b3J5KHJvb3RbXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCJdLCByb290W1wicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiXSwgcm9vdFtcImV2YWxcIl0sIHJvb3RbXCJjaGlsZF9wcm9jZXNzXCJdLCByb290W1wiY29sb3JzXCJdLCByb290W1widXJpanNcIl0sIHJvb3RbXCJlczYtcHJvbWlzZVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU0MTAxMmU5NWViNDg4NjNlMGVkIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2YWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldmFsXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb2xvcnNcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmlqc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVyaWpzXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG4vLyAgVGhlIGNvbnRleHRBcHAgaXMgY29tcGxtZW50YXJ5IG1vZHVsZSB0byB0aGUgIFJ1bnRpbWVOb2RlIHRoYXQgY3JlYXRlcyB0aGUgQ29udGV4dCB3aGVyZSB0aGUgSHlwZXJ0eSB3aWxsIGJlIGRlcGxveWVkXG4vLyAgVGhlIGNvbnRleHRBcHAgaGFuZGxzIGNvbW11bmlvY2F0aW9uIGJldHdlZW4gdGhlIEh5cGVydHkgYW5kIHRoZSBjb3JlUnVudGltZVxuXG5pbXBvcnQgeyBTYW5kYm94LCBTYW5kYm94UmVnaXN0cnkgfSBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94JztcbmltcG9ydCBNaW5pQnVzIGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L21pbmlidXMnO1xuaW1wb3J0IF9ldmFsIGZyb20gJ2V2YWwnO1xuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0QXBwKGNvcmVSdW50aW1lKSB7XG5cbiAgcHJvY2Vzcy5fbWluaUJ1cyA9IG5ldyBNaW5pQnVzKCk7XG4gIHByb2Nlc3MuX21pbmlCdXMuX29uUG9zdE1lc3NhZ2UgPSBmdW5jdGlvbihtc2cpIHtcbiAgICAgIC8vIG9uUG9zdE1lc3NhZ2Ugb24gdGhlIG1pbmlCdXMgd2lsbCBiZSBzZW50IHRvIGNvcmVSdW50aW1lIFxuICAgICAgY29yZVJ1bnRpbWUuc2VuZChtc2cpO1xufTtcbi8vIEV2ZW50TGlzdGVuZXIgb24gdGhlIElQQyBjb21tdW5pY2F0aW9uIGNoYW5uZWwgYmV0d2VlbiB0aGUgY29yZVJ1bnRpbWUgYW5kIHRoZSBSdW50aW1lTm9kZSBmb3IgbWVzc2FnZXMgc2VudCBmcm9tIHRoZSBjb3JlUnVudGltZVxuY29yZVJ1bnRpbWUub24oJ21lc3NhZ2UnLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC50by5zdGFydHNXaXRoKCdydW50aW1lOmxvYWRlZEh5cGVydHknKSlcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgLy8gX29uTWVzc2FnZSByZWNlaXZlZCBvbiB0aGUgY29yZVJ1bnRpbWUgbWluaUJ1c1xuXG4gICAgcHJvY2Vzcy5fbWluaUJ1cy5fb25NZXNzYWdlKGV2ZW50KTtcbiAgfSk7XG5cbiAgcHJvY2Vzcy5fcmVnaXN0cnkgPSBuZXcgU2FuZGJveFJlZ2lzdHJ5KHByb2Nlc3MuX21pbmlCdXMpO1xuXG4gIHByb2Nlc3MuX3JlZ2lzdHJ5Ll9jcmVhdGUgPSAodXJsLCBzb3VyY2VDb2RlLCBjb25maWcpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IGFjdGl2YXRlID0gX2V2YWwoc291cmNlQ29kZSwgdHJ1ZSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdUWVBFT0Y6JywgdHlwZW9mKGFjdGl2YXRlKSk7XG5cbiAgICAgIGlmICh0eXBlb2YoYWN0aXZhdGUpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmF0ZSh1cmwsIHByb2Nlc3MuX21pbmlCdXMsIGNvbmZpZyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZihhY3RpdmF0ZS5kZWZhdWx0KSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gYWN0aXZhdGUuZGVmYXVsdCh1cmwsIHByb2Nlc3MuX21pbmlCdXMsIGNvbmZpZyk7XG4gICAgICB9XG5cbiAgICB9IGNhdGNoIChyZWFzb24pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiB3aGlsZSBhY3RpdmF0aW5nIHRoZSBIeXBlcnR5LCByZWFzb246JywgcmVhc29uKTtcbiAgICB9XG4gIH07XG59O1xuXG5cbi8qKlxuKiBAcmV0dXJucyBIeXBlcnR5IGJ5IGRlc2NyaXB0b3JVUkxcbioqL1xuZnVuY3Rpb24gZ2V0SHlwZXJ0eUJ5KGh5cGVydHlEZXNjcmlwdG9yKSB7XG4gIGNvbnNvbGUubG9nKCdHZXQgSHlwZXJ0eTonLCBoeXBlcnR5RGVzY3JpcHRvciwgcHJvY2Vzcy5fcmVnaXN0cnkuY29tcG9uZW50cyk7XG4gIHJldHVybiBwcm9jZXNzLl9yZWdpc3RyeS5jb21wb25lbnRzW2h5cGVydHlEZXNjcmlwdG9yXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgY3JlYXRlQ29udGV4dEFwcCwgZ2V0SHlwZXJ0eUJ5IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29udGV4dEFwcC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVzNi1wcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXM2LXByb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2VydW50aW1lbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxubGV0IFByb21pc2UgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpO1xuXG5cbmltcG9ydCBhcHAgZnJvbSAnLi9Db250ZXh0QXBwJztcbmltcG9ydCBVUkkgZnJvbSAndXJpanMnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICdjb2xvcnMnO1xuaW1wb3J0IGNoaWxkIGZyb20gJ2NoaWxkX3Byb2Nlc3MnXG5cblxubGV0IGRvbWFpbiA9ICdsb2NhbGhvc3QnO1xubGV0IGNvcmVSdW50aW1lID0ge307XG5cblxuY29yZVJ1bnRpbWUgID0gY2hpbGQuZm9yayggJy4uL2Rpc3QvY29yZS5qcycpO1xuXG5cbmxldCBidWlsZE1zZyA9IChoeXBlcnR5Q29tcG9uZW50LCBtc2cpID0+IHtcbiAgY29uc29sZS5sb2coJ2h5cGVydHlDb21wb25lbnQgaXMgOicsIGh5cGVydHlDb21wb25lbnQsIG1zZyk7XG4gIHJldHVybiB7XG4gICAgcnVudGltZUh5cGVydHlVUkw6IG1zZy5ib2R5LnJ1bnRpbWVIeXBlcnR5VVJMLFxuICAgIHN0YXR1czogbXNnLmJvZHkuc3RhdHVzLFxuICAgIGluc3RhbmNlOiBoeXBlcnR5Q29tcG9uZW50Lmluc3RhbmNlLFxuICAgIG5hbWU6IGh5cGVydHlDb21wb25lbnQubmFtZVxuICB9O1xufTtcblxuLyoqXG4qIFJldHVybnMgYXMgYSBwcm9taXNlIEh5cGVydHkgb2JqZWN0IHdpdGggYWxsIGl0cyBpbmZvcm1hdGlvbnMuXG4qIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdD59XG4qKi9cbmxldCBydW50aW1lUHJveHkgPSB7XG4gIHJlcXVpcmVIeXBlcnR5OiAoaHlwZXJ0eURlc2NyaXB0b3IsIHJldXNlQWRkcmVzcyA9IGZhbHNlKT0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7XG4gICAgICBjb3JlUnVudGltZS5vbignbWVzc2FnZScsIChtc2cpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0gTWVzc2FnZSBmcm9tIHJ1bnRpbWUgY29yZSAtLS0tJy5ncmVlbik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdIeXBlcnR5IGxvYWRlZCA6XFxuJy5ncmVlbik7XG5cbiAgICAgICAgaWYgKG1zZy50byA9PT0gJ3J1bnRpbWU6bG9hZGVkSHlwZXJ0eScpIHtcbiAgICAgICAgICByZXNvbHZlKGJ1aWxkTXNnKGFwcC5nZXRIeXBlcnR5QnkobXNnLmJvZHkucnVudGltZUh5cGVydHlVUkwpLCBtc2cpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY29yZVJ1bnRpbWUgLnNlbmQnLmdyZWVuKTtcbiAgICAgIGNvcmVSdW50aW1lLnNlbmQoe3RvOidjb3JlOmxvYWRIeXBlcnR5JywgYm9keTp7ZGVzY3JpcHRvcjogaHlwZXJ0eURlc2NyaXB0b3IsIHJldXNlQWRkcmVzc319KTtcbiAgICB9KTtcbiAgfSxcblxuICByZXF1aXJlUHJvdG9zdHViOiAoZG9tYWluKSA9PiB7XG4gICAgY29yZVJ1bnRpbWUuc2VuZCh7dG86J2NvcmU6bG9hZFN0dWInLCBib2R5Ontkb21haW46IGRvbWFpbn19KTtcbiAgfVxufTtcblxuLyoqXG4qIFJldHVybnMgYXMgYSBwcm9taXNlIEh5cGVydHkgcnVudGltZSBvYmplY3QuXG4qIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdD59XG4qKi9cbmxldCBSZXRoaW5rTm9kZSA9IHtcbiAgaW5zdGFsbDogZnVuY3Rpb24oe2RvbWFpbiwgcnVudGltZVVSTCwgZGV2ZWxvcG1lbnR9PXt9KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBydW50aW1lID0gdGhpcy5nZXRSdW50aW1lKHJ1bnRpbWVVUkwsIGRvbWFpbiwgZGV2ZWxvcG1lbnQpO1xuICAgICAgY29yZVJ1bnRpbWUuc2VuZCh7ZG86J2luc3RhbGwgcnVudGltZSBjb3JlJ30pO1xuICAgICAgY29yZVJ1bnRpbWUub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XG4gICAgICAgIGlmIChtc2cudG8gPT09ICdydW50aW1lOmluc3RhbGxlZCcpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnXFxuIFJ1bnRpbWUgaW5zdGFsbGVkIHdpdGggc3VjY2Vzc1xcbicuYmx1ZSk7XG4gICAgICAgICAgcmVzb2x2ZShydW50aW1lUHJveHkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29yZVJ1bnRpbWUub24oJ2Vycm9yJywgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3J1bnRpbWUgY29yZSBpbnN0YWxsIGZhaWxlZDonLCBlcnJvcik7XG4gICAgICAgIGNvcmVSdW50aW1lIC5raWxsKCk7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcblxuICAgICAgY29yZVJ1bnRpbWUub24oJ2V4aXQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdydW50aW1lIGNvcmUgZXhpdGVkLicpO1xuICAgICAgICBjb3JlUnVudGltZS5raWxsKCk7XG4gICAgICB9KTtcblxuICAgICAgYXBwLmNyZWF0ZUNvbnRleHRBcHAoY29yZVJ1bnRpbWUpO1xuICAgIH0pO1xuICB9LFxuXG4gIGdldFJ1bnRpbWUocnVudGltZVVSTCwgZG9tYWluLCBkZXZlbG9wbWVudCkge1xuICAgIGlmICghIWRldmVsb3BtZW50KSB7XG4gICAgICBydW50aW1lVVJMID0gcnVudGltZVVSTCB8fCAnaHR0cDovLycgKyBkb21haW4gKyAnLy53ZWxsLWtub3duL3J1bnRpbWUvUnVudGltZSc7XG4gICAgICBkb21haW4gPSBkb21haW4gfHwgbmV3IFVSSShydW50aW1lVVJMKS5ob3N0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJ1bnRpbWVVUkwgPSBydW50aW1lVVJMIHx8ICdodHRwOi8vJHtkb21haW59Ly53ZWxsLWtub3duL3J1bnRpbWUvZGVmYXVsdCc7XG4gICAgICBkb21haW4gPSBkb21haW4gfHwgbmV3IFVSSShydW50aW1lVVJMKS5ob3N0KCkucmVwbGFjZSgnY2F0YWxvZ3VlLicsICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogcnVudGltZVVSTCxcbiAgICAgIGRvbWFpbjogZG9tYWluXG4gICAgfTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFJldGhpbmtOb2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1J1bnRpbWVOb2RlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==