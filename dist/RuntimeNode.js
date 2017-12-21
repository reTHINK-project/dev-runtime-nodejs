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
		module.exports = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("urijs"), require("es6-promise"));
	else if(typeof define === 'function' && define.amd)
		define("RuntimeNode", ["runtime-core/dist/minibus", "runtime-core/dist/sandbox", "eval", "child_process", "colors", "urijs", "es6-promise"], factory);
	else if(typeof exports === 'object')
		exports["RuntimeNode"] = factory(require("runtime-core/dist/minibus"), require("runtime-core/dist/sandbox"), require("eval"), require("child_process"), require("colors"), require("urijs"), require("es6-promise"));
	else
		root["RuntimeNode"] = factory(root["runtime-core/dist/minibus"], root["runtime-core/dist/sandbox"], root["eval"], root["child_process"], root["colors"], root["urijs"], root["es6-promise"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_21__) {
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
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("urijs");

/***/ }),
/* 12 */
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

/**
* @returns activate Hyperty onn the context App
**/
function createContextApp(coreRuntime) {

  process._miniBus = new _minibus2.default();
  process._miniBus._onPostMessage = function (msg) {
    // onPostMessage on the miniBus will be sent to coreRuntime
    coreRuntime.send(msg);
  };

  // EventListener on the IPC communication channel between the coreRuntime and the RuntimeNode for messages sent from the coreRuntime
  coreRuntime.on('message', function (event) {
    if (event.to.startsWith('runtime:loadedHyperty')) return;

    // onMessage received on the coreRuntime miniBus
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
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ContextApp = __webpack_require__(12);

var _ContextApp2 = _interopRequireDefault(_ContextApp);

var _urijs = __webpack_require__(11);

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

var Promise = __webpack_require__(21);

var coreRuntime = {};
coreRuntime = _child_process2.default.fork('../dist/core.js');

var buildMsg = function buildMsg(hypertyComponent, msg) {
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
      coreRuntime.send({ do: 'install runtime core', body: { domain: domain, runtimeURL: runtimeURL } });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlN2U2MDE1NjY1YjE5NzkyNjllNz8wZDkxKiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCI/NzQ3MioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiPzYyMzUqIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2YWxcIj9hZWFlIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIj80MzA4KiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvcnNcIj9hMTk4KiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmlqc1wiPzk3ZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRleHRBcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXM2LXByb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9zcmMvUnVudGltZU5vZGUuanMiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dEFwcCIsImNvcmVSdW50aW1lIiwicHJvY2VzcyIsIl9taW5pQnVzIiwiX29uUG9zdE1lc3NhZ2UiLCJtc2ciLCJzZW5kIiwib24iLCJldmVudCIsInRvIiwic3RhcnRzV2l0aCIsIl9vbk1lc3NhZ2UiLCJfcmVnaXN0cnkiLCJfY3JlYXRlIiwidXJsIiwic291cmNlQ29kZSIsImNvbmZpZyIsImFjdGl2YXRlIiwiY29uc29sZSIsImxvZyIsImRlZmF1bHQiLCJyZWFzb24iLCJnZXRIeXBlcnR5QnkiLCJoeXBlcnR5RGVzY3JpcHRvciIsImNvbXBvbmVudHMiLCJQcm9taXNlIiwicmVxdWlyZSIsImZvcmsiLCJidWlsZE1zZyIsImh5cGVydHlDb21wb25lbnQiLCJydW50aW1lSHlwZXJ0eVVSTCIsImJvZHkiLCJzdGF0dXMiLCJpbnN0YW5jZSIsIm5hbWUiLCJydW50aW1lUHJveHkiLCJyZXF1aXJlSHlwZXJ0eSIsInJldXNlQWRkcmVzcyIsInJlc29sdmUiLCJyZWplY3QiLCJncmVlbiIsImRlc2NyaXB0b3IiLCJyZXF1aXJlUHJvdG9zdHViIiwiZG9tYWluIiwiUmV0aGlua05vZGUiLCJpbnN0YWxsIiwicnVudGltZVVSTCIsImRldmVsb3BtZW50IiwicnVudGltZSIsImdldFJ1bnRpbWUiLCJkbyIsImJsdWUiLCJlcnJvciIsImtpbGwiLCJob3N0IiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSxzRDs7Ozs7O0FDQUEsc0Q7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSwwQzs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7Ozs7OzhRQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBOztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7QUFHQSxTQUFTQSxnQkFBVCxDQUEwQkMsV0FBMUIsRUFBdUM7O0FBRXJDQyxVQUFRQyxRQUFSLEdBQW1CLHVCQUFuQjtBQUNBRCxVQUFRQyxR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a0JBQVlNLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFVBQUM2QyxLQUFELEVBQVc7QUFDakNsQyxnQkFBUWtDLEtBQVIsQ0FBYyw4QkFBZCxFQUE4Q0EsS0FBOUM7QUFDQW5ELG9CQUFhb0QsSUFBYjtBQUNBZCxlQUFPYSxLQUFQO0FBQ0QsT0FKRDs7QUFNQW5ELGtCQUFZTSxFQUFaLENBQWUsTUFBZixFQUF1QixZQUFNO0FBQzNCVyxnQkFBUUMsR0FBUixDQUFZLHNCQUFaO0FBQ0FsQixvQkFBWW9ELElBQVo7QUFDRCxPQUhEOztBQUtBLDJCQUFJckQsZ0JBQUosQ0FBcUJDLFdBQXJCO0FBQ0QsS0F0Qk0sQ0FBUDtBQXVCRCxHQXpCZTs7QUEyQmhCZ0QsWUEzQmdCLHNCQTJCTEgsVUEzQkssRUEyQk9ILE1BM0JQLEVBMkJlSSxXQTNCZixFQTJCNEI7QUFDMUMsUUFBSSxDQUFDLENBQUNBLFdBQU4sRUFBbUI7QUFDakJELG1CQUFhQSxjQUFjLFlBQVlILE1BQVosR0FBcUIsOEJBQWhEO0FBQ0FBLGVBQVNBLFVBQVUsb0JBQVFHLFVBQVIsRUFBb0JRLElBQXBCLEVBQW5CO0FBQ0QsS0FIRCxNQUdPO0FBQ0xSLG1CQUFhQSxjQUFjLDhDQUEzQjtBQUNBSCxlQUFTQSxVQUFVLG9CQUFRRyxVQUFSLEVBQW9CUSxJQUFwQixHQUEyQkMsT0FBM0IsQ0FBbUMsWUFBbkMsRUFBaUQsRUFBakQsQ0FBbkI7QUFDRDtBQUNELFdBQU87QUFDTHpDLFdBQUtnQyxVQURBO0FBRUxILGNBQVFBO0FBRkgsS0FBUDtBQUlEO0FBdkNlLENBQWxCO2tCQXlDZUMsVyIsImZpbGUiOiJSdW50aW1lTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIiksIHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpLCByZXF1aXJlKFwiZXZhbFwiKSwgcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIiksIHJlcXVpcmUoXCJjb2xvcnNcIiksIHJlcXVpcmUoXCJ1cmlqc1wiKSwgcmVxdWlyZShcImVzNi1wcm9taXNlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiUnVudGltZU5vZGVcIiwgW1wicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiLCBcInJ1bnRpbWUtY29yZS9kaXN0L3NhbmRib3hcIiwgXCJldmFsXCIsIFwiY2hpbGRfcHJvY2Vzc1wiLCBcImNvbG9yc1wiLCBcInVyaWpzXCIsIFwiZXM2LXByb21pc2VcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUnVudGltZU5vZGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCIpLCByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiKSwgcmVxdWlyZShcImV2YWxcIiksIHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpLCByZXF1aXJlKFwiY29sb3JzXCIpLCByZXF1aXJlKFwidXJpanNcIiksIHJlcXVpcmUoXCJlczYtcHJvbWlzZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUnVudGltZU5vZGVcIl0gPSBmYWN0b3J5KHJvb3RbXCJydW50aW1lLWNvcmUvZGlzdC9taW5pYnVzXCJdLCByb290W1wicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiXSwgcm9vdFtcImV2YWxcIl0sIHJvb3RbXCJjaGlsZF9wcm9jZXNzXCJdLCByb290W1wiY29sb3JzXCJdLCByb290W1widXJpanNcIl0sIHJvb3RbXCJlczYtcHJvbWlzZVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU3ZTYwMTU2NjViMTk3OTI2OWU3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnVudGltZS1jb3JlL2Rpc3QvbWluaWJ1c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ1bnRpbWUtY29yZS9kaXN0L21pbmlidXNcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnVudGltZS1jb3JlL2Rpc3Qvc2FuZGJveFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2YWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldmFsXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb2xvcnNcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmlqc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVyaWpzXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG4vLyAgVGhlIGNvbnRleHRBcHAgaXMgY29tcGxtZW50YXJ5IG1vZHVsZSB0byB0aGUgIFJ1bnRpbWVOb2RlIHRoYXQgY3JlYXRlcyB0aGUgQ29udGV4dCB3aGVyZSB0aGUgSHlwZXJ0eSB3aWxsIGJlIGRlcGxveWVkXG4vLyAgVGhlIGNvbnRleHRBcHAgaGFuZGxzIGNvbW11bmlvY2F0aW9uIGJldHdlZW4gdGhlIEh5cGVydHkgYW5kIHRoZSBjb3JlUnVudGltZVxuXG5pbXBvcnQgeyBTYW5kYm94LCBTYW5kYm94UmVnaXN0cnkgfSBmcm9tICdydW50aW1lLWNvcmUvZGlzdC9zYW5kYm94JztcbmltcG9ydCBNaW5pQnVzIGZyb20gJ3J1bnRpbWUtY29yZS9kaXN0L21pbmlidXMnO1xuaW1wb3J0IF9ldmFsIGZyb20gJ2V2YWwnO1xuXG4vKipcbiogQHJldHVybnMgYWN0aXZhdGUgSHlwZXJ0eSBvbm4gdGhlIGNvbnRleHQgQXBwXG4qKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHRBcHAoY29yZVJ1bnRpbWUpIHtcblxuICBwcm9jZXNzLl9taW5pQnVzID0gbmV3IE1pbmlCdXMoKTtcbiAgcHJvY2Vzcy5fbWluaUJ1cy5fb25Qb3N0TWVzc2FnZSA9IChtc2cpID0+IHtcbiAgICAgIC8vIG9uUG9zdE1lc3NhZ2Ugb24gdGhlIG1pbmlCdXMgd2lsbCBiZSBzZW50IHRvIGNvcmVSdW50aW1lXG4gICAgICBjb3JlUnVudGltZS5zZW5kKG1zZyk7XG4gICAgfTtcblxuICAvLyBFdmVudExpc3RlbmVyIG9uIHRoZSBJUEMgY29tbXVuaWNhdGlvbiBjaGFubmVsIGJldHdlZW4gdGhlIGNvcmVSdW50aW1lIGFuZCB0aGUgUnVudGltZU5vZGUgZm9yIG1lc3NhZ2VzIHNlbnQgZnJvbSB0aGUgY29yZVJ1bnRpbWVcbiAgY29yZVJ1bnRpbWUub24oJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudG8uc3RhcnRzV2l0aCgncnVudGltZTpsb2FkZWRIeXBlcnR5JykpXG4gICAgICAgIHJldHVybjtcblxuICAgIC8vIG9uTWVzc2FnZSByZWNlaXZlZCBvbiB0aGUgY29yZVJ1bnRpbWUgbWluaUJ1c1xuICAgIHByb2Nlc3MuX21pbmlCdXMuX29uTWVzc2FnZShldmVudCk7XG4gIH0pO1xuXG4gIHByb2Nlc3MuX3JlZ2lzdHJ5ID0gbmV3IFNhbmRib3hSZWdpc3RyeShwcm9jZXNzLl9taW5pQnVzKTtcblxuICBwcm9jZXNzLl9yZWdpc3RyeS5fY3JlYXRlID0gKHVybCwgc291cmNlQ29kZSwgY29uZmlnKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBhY3RpdmF0ZSA9IF9ldmFsKHNvdXJjZUNvZGUsIHRydWUpO1xuXG4gICAgICBjb25zb2xlLmxvZygnVFlQRU9GOicsIHR5cGVvZihhY3RpdmF0ZSkpO1xuXG4gICAgICBpZiAodHlwZW9mKGFjdGl2YXRlKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gYWN0aXZhdGUodXJsLCBwcm9jZXNzLl9taW5pQnVzLCBjb25maWcpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YoYWN0aXZhdGUuZGVmYXVsdCkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2YXRlLmRlZmF1bHQodXJsLCBwcm9jZXNzLl9taW5pQnVzLCBjb25maWcpO1xuICAgICAgfVxuXG4gICAgfSBjYXRjaCAocmVhc29uKSB7XG4gICAgICBjb25zb2xlLmxvZygnRVJST1Igd2hpbGUgYWN0aXZhdGluZyB0aGUgSHlwZXJ0eSwgcmVhc29uOicsIHJlYXNvbik7XG4gICAgfVxuICB9O1xufTtcblxuXG4vKipcbiogQHJldHVybnMgSHlwZXJ0eSBieSBkZXNjcmlwdG9yVVJMXG4qKi9cbmZ1bmN0aW9uIGdldEh5cGVydHlCeShoeXBlcnR5RGVzY3JpcHRvcikge1xuICBjb25zb2xlLmxvZygnR2V0IEh5cGVydHk6JywgaHlwZXJ0eURlc2NyaXB0b3IsIHByb2Nlc3MuX3JlZ2lzdHJ5LmNvbXBvbmVudHMpO1xuICByZXR1cm4gcHJvY2Vzcy5fcmVnaXN0cnkuY29tcG9uZW50c1toeXBlcnR5RGVzY3JpcHRvcl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGNyZWF0ZUNvbnRleHRBcHAsIGdldEh5cGVydHlCeSB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnRleHRBcHAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlczYtcHJvbWlzZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImVzNi1wcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlcnVudGltZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbmxldCBQcm9taXNlID0gcmVxdWlyZSgnZXM2LXByb21pc2UnKTtcblxuXG5pbXBvcnQgYXBwIGZyb20gJy4vQ29udGV4dEFwcCc7XG5pbXBvcnQgVVJJIGZyb20gJ3VyaWpzJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnY29sb3JzJztcbmltcG9ydCBjaGlsZCBmcm9tICdjaGlsZF9wcm9jZXNzJztcblxuXG5cbmxldCBjb3JlUnVudGltZSA9IHt9O1xuY29yZVJ1bnRpbWUgID0gY2hpbGQuZm9yayggJy4uL2Rpc3QvY29yZS5qcycpOyBcblxubGV0IGJ1aWxkTXNnID0gKGh5cGVydHlDb21wb25lbnQsIG1zZykgPT4ge1xuICByZXR1cm4ge1xuICAgIHJ1bnRpbWVIeXBlcnR5VVJMOiBtc2cuYm9keS5ydW50aW1lSHlwZXJ0eVVSTCxcbiAgICBzdGF0dXM6IG1zZy5ib2R5LnN0YXR1cyxcbiAgICBpbnN0YW5jZTogaHlwZXJ0eUNvbXBvbmVudC5pbnN0YW5jZSxcbiAgICBuYW1lOiBoeXBlcnR5Q29tcG9uZW50Lm5hbWVcbiAgfTtcbn07XG5cbi8qKlxuKiBSZXR1cm5zIGFzIGEgcHJvbWlzZSBIeXBlcnR5IG9iamVjdCB3aXRoIGFsbCBpdHMgaW5mb3JtYXRpb25zLlxuKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3Q+fVxuKiovXG5sZXQgcnVudGltZVByb3h5ID0ge1xuICByZXF1aXJlSHlwZXJ0eTogKGh5cGVydHlEZXNjcmlwdG9yLCByZXVzZUFkZHJlc3MgPSBmYWxzZSk9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT4ge1xuICAgICAgY29yZVJ1bnRpbWUub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tIE1lc3NhZ2UgZnJvbSBydW50aW1lIGNvcmUgLS0tLScuZ3JlZW4pO1xuICAgICAgICBjb25zb2xlLmxvZygnSHlwZXJ0eSBsb2FkZWQgOlxcbicuZ3JlZW4pO1xuXG4gICAgICAgIGlmIChtc2cudG8gPT09ICdydW50aW1lOmxvYWRlZEh5cGVydHknKSB7XG4gICAgICAgICAgcmVzb2x2ZShidWlsZE1zZyhhcHAuZ2V0SHlwZXJ0eUJ5KG1zZy5ib2R5LnJ1bnRpbWVIeXBlcnR5VVJMKSwgbXNnKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2NvcmVSdW50aW1lIC5zZW5kJy5ncmVlbik7XG4gICAgICBjb3JlUnVudGltZS5zZW5kKHt0bzonY29yZTpsb2FkSHlwZXJ0eScsIGJvZHk6e2Rlc2NyaXB0b3I6IGh5cGVydHlEZXNjcmlwdG9yLCByZXVzZUFkZHJlc3N9fSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgcmVxdWlyZVByb3Rvc3R1YjogKGRvbWFpbikgPT4ge1xuICAgIGNvcmVSdW50aW1lLnNlbmQoe3RvOidjb3JlOmxvYWRTdHViJywgYm9keTp7ZG9tYWluOiBkb21haW59fSk7XG4gIH1cbn07XG5cbi8qKlxuKiBSZXR1cm5zIGFzIGEgcHJvbWlzZSBIeXBlcnR5IHJ1bnRpbWUgb2JqZWN0LlxuKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3Q+fVxuKiovXG5sZXQgUmV0aGlua05vZGUgPSB7XG4gIGluc3RhbGw6IGZ1bmN0aW9uKHtkb21haW4sIHJ1bnRpbWVVUkwsIGRldmVsb3BtZW50fT17fSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgcnVudGltZSA9IHRoaXMuZ2V0UnVudGltZShydW50aW1lVVJMLCBkb21haW4sIGRldmVsb3BtZW50KTtcbiAgICAgIGNvcmVSdW50aW1lLnNlbmQoe2RvOidpbnN0YWxsIHJ1bnRpbWUgY29yZScsIGJvZHk6IHsgZG9tYWluOiBkb21haW4sIHJ1bnRpbWVVUkw6IHJ1bnRpbWVVUkx9fSk7ICBcbiAgICAgIGNvcmVSdW50aW1lLm9uKCdtZXNzYWdlJywgKG1zZykgPT4ge1xuICAgICAgICBpZiAobXNnLnRvID09PSAncnVudGltZTppbnN0YWxsZWQnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1xcbiBSdW50aW1lIGluc3RhbGxlZCB3aXRoIHN1Y2Nlc3NcXG4nLmJsdWUpO1xuICAgICAgICAgIHJlc29sdmUocnVudGltZVByb3h5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvcmVSdW50aW1lLm9uKCdlcnJvcicsIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdydW50aW1lIGNvcmUgaW5zdGFsbCBmYWlsZWQ6JywgZXJyb3IpO1xuICAgICAgICBjb3JlUnVudGltZSAua2lsbCgpO1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvcmVSdW50aW1lLm9uKCdleGl0JywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncnVudGltZSBjb3JlIGV4aXRlZC4nKTtcbiAgICAgICAgY29yZVJ1bnRpbWUua2lsbCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGFwcC5jcmVhdGVDb250ZXh0QXBwKGNvcmVSdW50aW1lKTtcbiAgICB9KTtcbiAgfSxcblxuICBnZXRSdW50aW1lKHJ1bnRpbWVVUkwsIGRvbWFpbiwgZGV2ZWxvcG1lbnQpIHtcbiAgICBpZiAoISFkZXZlbG9wbWVudCkge1xuICAgICAgcnVudGltZVVSTCA9IHJ1bnRpbWVVUkwgfHwgJ2h0dHA6Ly8nICsgZG9tYWluICsgJy8ud2VsbC1rbm93bi9ydW50aW1lL1J1bnRpbWUnO1xuICAgICAgZG9tYWluID0gZG9tYWluIHx8IG5ldyBVUkkocnVudGltZVVSTCkuaG9zdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBydW50aW1lVVJMID0gcnVudGltZVVSTCB8fCAnaHR0cDovLyR7ZG9tYWlufS8ud2VsbC1rbm93bi9ydW50aW1lL2RlZmF1bHQnO1xuICAgICAgZG9tYWluID0gZG9tYWluIHx8IG5ldyBVUkkocnVudGltZVVSTCkuaG9zdCgpLnJlcGxhY2UoJ2NhdGFsb2d1ZS4nLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB1cmw6IHJ1bnRpbWVVUkwsXG4gICAgICBkb21haW46IGRvbWFpblxuICAgIH07XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBSZXRoaW5rTm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SdW50aW1lTm9kZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=