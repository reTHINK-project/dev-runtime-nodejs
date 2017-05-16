// version: 0.1.0
// date: Tue May 16 2017 15:19:02 GMT+0200 (CEST)
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
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("RuntimeCapabilities", [], factory);
	else if(typeof exports === 'object')
		exports["RuntimeCapabilities"] = factory();
	else
		root["RuntimeCapabilities"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ({

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n* Copyright 2016 PT Inovação e Sistemas SA\n* Copyright 2016 INESC-ID\n* Copyright 2016 QUOBIS NETWORKS SL\n* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V\n* Copyright 2016 ORANGE SA\n* Copyright 2016 Deutsche Telekom AG\n* Copyright 2016 Apizee\n* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN\n*\n* Licensed under the Apache License, Version 2.0 (the \"License\");\n* you may not use this file except in compliance with the License.\n* You may obtain a copy of the License at\n*\n*   http://www.apache.org/licenses/LICENSE-2.0\n*\n* Unless required by applicable law or agreed to in writing, software\n* distributed under the License is distributed on an \"AS IS\" BASIS,\n* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n* See the License for the specific language governing permissions and\n* limitations under the License.\n**/\n\n// TODO: import and extend the class of the service-framework\n// service-framework/dist/RuntimeCapabilities;\n\nvar RuntimeCapabilities = function () {\n  function RuntimeCapabilities(storageManager) {\n    _classCallCheck(this, RuntimeCapabilities);\n\n    if (!storageManager) throw new Error('The Runtime Capabilities need the storageManager');\n    this.storageManager = storageManager;\n  }\n\n  /**\n   * Returns as a promise RuntimeCapabilities json object with all available capabilities of the runtime.\n   * If it was not yet persisted in the Storage Manager it collects all required info from the platform and saves in the storage manager.\n   * @returns {Promise<object>}\n   */\n\n\n  _createClass(RuntimeCapabilities, [{\n    key: 'getRuntimeCapabilities',\n    value: function getRuntimeCapabilities() {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        Promise.all([_this._getEnvironment()]).then(function (result) {\n\n          var capabilities = {};\n          console.log('this._getEnvironment()s: ', _this._getEnvironment());\n\n          result.forEach(function (capability) {\n            Object.assign(capabilities, capability);\n          });\n\n          console.log('capabilities: ', capabilities);\n          _this.storageManager.set('capabilities', '1', capabilities);\n\n          resolve(capabilities);\n        }).catch(function (error) {\n          reject(error);\n        });\n      });\n    }\n\n    /**\n     * returns as a promise a boolean according to available capabilities.\n     * @returns {Promise<boolean>}\n     */\n\n  }, {\n    key: 'isAvailable',\n    value: function isAvailable(capability) {\n      var _this2 = this;\n\n      return new Promise(function (resolve) {\n        _this2.storageManager.get('capabilities').then(function (capabilities) {\n          console.log('Capability ' + capability + ' is available? ', capabilities.hasOwnProperty(capability) && capabilities[capability]);\n          if (capabilities.hasOwnProperty(capability) && capabilities[capability]) {\n            resolve(true);\n          } else {\n            resolve(false);\n          }\n        }).catch(function (error) {\n          console.error('Error has occured while checking capability, reason:', error);\n          reject(error);\n        });\n      });\n    }\n\n    /**\n     * it refreshes previously collected capabilities and updates the storage manager\n     */\n\n  }, {\n    key: 'update',\n    value: function update() {\n      var _this3 = this;\n\n      return new Promise(function (resolve, reject) {\n        _this3.getRuntimeCapabilities().then(resolve).catch(reject);\n      });\n    }\n\n    // TODO: organize the code in separated files\n\n  }, {\n    key: '_getEnvironment',\n    value: function _getEnvironment() {\n      // TODO: this should be more effective and check the environment\n      try {\n        return {\n          node: !!!(window && navigator)\n        };\n      } catch (error) {\n        return {\n          node: true\n        };\n      }\n    }\n  }]);\n\n  return RuntimeCapabilities;\n}();\n\nexports.default = RuntimeCapabilities;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUnVudGltZUNhcGFiaWxpdGllcy5qcz80YWZiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG4vLyBUT0RPOiBpbXBvcnQgYW5kIGV4dGVuZCB0aGUgY2xhc3Mgb2YgdGhlIHNlcnZpY2UtZnJhbWV3b3JrXG4vLyBzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXBhYmlsaXRpZXM7XG5cbnZhciBSdW50aW1lQ2FwYWJpbGl0aWVzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSdW50aW1lQ2FwYWJpbGl0aWVzKHN0b3JhZ2VNYW5hZ2VyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJ1bnRpbWVDYXBhYmlsaXRpZXMpO1xuXG4gICAgaWYgKCFzdG9yYWdlTWFuYWdlcikgdGhyb3cgbmV3IEVycm9yKCdUaGUgUnVudGltZSBDYXBhYmlsaXRpZXMgbmVlZCB0aGUgc3RvcmFnZU1hbmFnZXInKTtcbiAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyID0gc3RvcmFnZU1hbmFnZXI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhcyBhIHByb21pc2UgUnVudGltZUNhcGFiaWxpdGllcyBqc29uIG9iamVjdCB3aXRoIGFsbCBhdmFpbGFibGUgY2FwYWJpbGl0aWVzIG9mIHRoZSBydW50aW1lLlxuICAgKiBJZiBpdCB3YXMgbm90IHlldCBwZXJzaXN0ZWQgaW4gdGhlIFN0b3JhZ2UgTWFuYWdlciBpdCBjb2xsZWN0cyBhbGwgcmVxdWlyZWQgaW5mbyBmcm9tIHRoZSBwbGF0Zm9ybSBhbmQgc2F2ZXMgaW4gdGhlIHN0b3JhZ2UgbWFuYWdlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoUnVudGltZUNhcGFiaWxpdGllcywgW3tcbiAgICBrZXk6ICdnZXRSdW50aW1lQ2FwYWJpbGl0aWVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UnVudGltZUNhcGFiaWxpdGllcygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIFByb21pc2UuYWxsKFtfdGhpcy5fZ2V0RW52aXJvbm1lbnQoKV0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXG4gICAgICAgICAgdmFyIGNhcGFiaWxpdGllcyA9IHt9O1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLl9nZXRFbnZpcm9ubWVudCgpczogJywgX3RoaXMuX2dldEVudmlyb25tZW50KCkpO1xuXG4gICAgICAgICAgcmVzdWx0LmZvckVhY2goZnVuY3Rpb24gKGNhcGFiaWxpdHkpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY2FwYWJpbGl0aWVzLCBjYXBhYmlsaXR5KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKCdjYXBhYmlsaXRpZXM6ICcsIGNhcGFiaWxpdGllcyk7XG4gICAgICAgICAgX3RoaXMuc3RvcmFnZU1hbmFnZXIuc2V0KCdjYXBhYmlsaXRpZXMnLCAnMScsIGNhcGFiaWxpdGllcyk7XG5cbiAgICAgICAgICByZXNvbHZlKGNhcGFiaWxpdGllcyk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJucyBhcyBhIHByb21pc2UgYSBib29sZWFuIGFjY29yZGluZyB0byBhdmFpbGFibGUgY2FwYWJpbGl0aWVzLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpc0F2YWlsYWJsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQXZhaWxhYmxlKGNhcGFiaWxpdHkpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgX3RoaXMyLnN0b3JhZ2VNYW5hZ2VyLmdldCgnY2FwYWJpbGl0aWVzJykudGhlbihmdW5jdGlvbiAoY2FwYWJpbGl0aWVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0NhcGFiaWxpdHkgJyArIGNhcGFiaWxpdHkgKyAnIGlzIGF2YWlsYWJsZT8gJywgY2FwYWJpbGl0aWVzLmhhc093blByb3BlcnR5KGNhcGFiaWxpdHkpICYmIGNhcGFiaWxpdGllc1tjYXBhYmlsaXR5XSk7XG4gICAgICAgICAgaWYgKGNhcGFiaWxpdGllcy5oYXNPd25Qcm9wZXJ0eShjYXBhYmlsaXR5KSAmJiBjYXBhYmlsaXRpZXNbY2FwYWJpbGl0eV0pIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaGFzIG9jY3VyZWQgd2hpbGUgY2hlY2tpbmcgY2FwYWJpbGl0eSwgcmVhc29uOicsIGVycm9yKTtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGl0IHJlZnJlc2hlcyBwcmV2aW91c2x5IGNvbGxlY3RlZCBjYXBhYmlsaXRpZXMgYW5kIHVwZGF0ZXMgdGhlIHN0b3JhZ2UgbWFuYWdlclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgX3RoaXMzLmdldFJ1bnRpbWVDYXBhYmlsaXRpZXMoKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBvcmdhbml6ZSB0aGUgY29kZSBpbiBzZXBhcmF0ZWQgZmlsZXNcblxuICB9LCB7XG4gICAga2V5OiAnX2dldEVudmlyb25tZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldEVudmlyb25tZW50KCkge1xuICAgICAgLy8gVE9ETzogdGhpcyBzaG91bGQgYmUgbW9yZSBlZmZlY3RpdmUgYW5kIGNoZWNrIHRoZSBlbnZpcm9ubWVudFxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBub2RlOiAhISEod2luZG93ICYmIG5hdmlnYXRvcilcbiAgICAgICAgfTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbm9kZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSdW50aW1lQ2FwYWJpbGl0aWVzO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSdW50aW1lQ2FwYWJpbGl0aWVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1J1bnRpbWVDYXBhYmlsaXRpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

/******/ });
});