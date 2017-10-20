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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioqKioqIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwZDU5Y2RkYjljYWRlMzczMzA4Zj81ZjhhKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvUnVudGltZUNhcGFiaWxpdGllcy5qcz80NDUzKiJdLCJuYW1lcyI6WyJSdW50aW1lQ2FwYWJpbGl0aWVzIiwic3RvcmFnZU1hbmFnZXIiLCJFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYWxsIiwiX2dldEVudmlyb25tZW50IiwidGhlbiIsInJlc3VsdCIsImNhcGFiaWxpdGllcyIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiY2FwYWJpbGl0eSIsIk9iamVjdCIsImFzc2lnbiIsInNldCIsImNhdGNoIiwiZXJyb3IiLCJnZXQiLCJoYXNPd25Qcm9wZXJ0eSIsImdldFJ1bnRpbWVDYXBhYmlsaXRpZXMiLCJub2RlIiwid2luZG93IiwibmF2aWdhdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBOztJQUVNQSxtQjtBQUVILCtCQUFZQyxjQUFaLEVBQTRCO0FBQUE7O0FBQzNCLFFBQUksQ0FBQ0EsY0FBTCxFQUFxQixNQUFNLElBQUlDLEtBQUosQ0FBVSxrREFBVixDQUFOO0FBQ3JCLFNBQUtELGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs2Q0FLeUI7QUFBQTs7QUFDdkIsYUFBTyxJQUFJRSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDRixnQkFBUUcsR0FBUixDQUFZLENBQUMsTUFBS0MsZUFBTCxFQUFELENBQVosRUFBc0NDLElBQXRDLENBQTJDLFVBQUNDLE1BQUQsRUFBWTs7QUFFckQsY0FBSUMsZUFBZSxFQUFuQjtBQUNBQyxrQkFBUUMsR0FBUixDQUFZLDJCQUFaLEVBQXlDLE1BQUtMLGVBQUwsRUFBekM7O0FBRUFFLGlCQUFPSSxPQUFQLENBQWUsVUFBQ0MsVUFBRCxFQUFnQjtBQUM3QkMsbUJBQU9DLE1BQVAsQ0FBY04sWUFBZCxFQUE0QkksVUFBNUI7QUFDRCxXQUZEOztBQUlBSCxrQkFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCRixZQUE5QjtBQUNBLGdCQUFLVCxjQUFMLENBQW9CZ0IsR0FBcEIsQ0FBd0IsY0FBeEIsRUFBd0MsR0FBeEMsRUFBNkNQLFlBQTdDOztBQUVBTixrQkFBUU0sWUFBUjtBQUNELFNBYkQsRUFhR1EsS0FiSCxDQWFTLFVBQUNDLEtBQUQsRUFBVztBQUNsQmQsaUJBQU9jLEtBQVA7QUFDRCxTQWZEO0FBZ0JELE9BakJNLENBQVA7QUFrQkQ7O0FBRUQ7Ozs7Ozs7Z0NBSVlMLFUsRUFBWTtBQUFBOztBQUN0QixhQUFPLElBQUlYLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDOUIsZUFBS0gsY0FBTCxDQUFvQm1CLEdBQXBCLENBQXdCLGNBQXhCLEVBQXdDWixJQUF4QyxDQUE2QyxVQUFDRSxZQUFELEVBQWtCO0FBQzdEQyxrQkFBUUMsR0FBUixDQUFZLGdCQUFnQkUsVUFBaEIsR0FBNkIsaUJBQXpDLEVBQTRESixhQUFhVyxjQUFiLENBQTRCUCxVQUE1QixLQUEyQ0osYUFBYUksVUFBYixDQUF2RztBQUNBLGNBQUlKLGFBQWFXLGNBQWIsQ0FBNEJQLFVBQTVCLEtBQTJDSixhQUFhSSxVQUFiLENBQS9DLEVBQXlFO0FBQ3ZFVixvQkFBUSxJQUFSO0FBQ0QsV0FGRCxNQUVPO0FBQ0xBLG9CQUFRLEtBQVI7QUFDRDtBQUNGLFNBUEQsRUFPR2MsS0FQSCxDQU9TLFVBQUNDLEtBQUQsRUFBVztBQUNsQlIsa0JBQVFRLEtBQVIsQ0FBYyxzREFBZCxFQUFzRUEsS0FBdEU7QUFDQWQsaUJBQU9jLEtBQVA7QUFDRCxTQVZEO0FBV0QsT0FaTSxDQUFQO0FBYUQ7O0FBRUQ7Ozs7Ozs2QkFHUztBQUFBOztBQUNQLGFBQU8sSUFBSWhCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsZUFBS2lCLHNCQUFMLEdBQThCZCxJQUE5QixDQUFtQ0osT0FBbkMsRUFBNENjLEtBQTVDLENBQWtEYixNQUFsRDtBQUNELE9BRk0sQ0FBUDtBQUdEOztBQUVEOzs7O3NDQUNrQjtBQUNoQjtBQUNBLFVBQUk7QUFDRixlQUFPO0FBQ0xrQixnQkFBTSxDQUFDLENBQUMsRUFBRUMsVUFBVUMsU0FBWjtBQURILFNBQVA7QUFHRCxPQUpELENBSUUsT0FBTU4sS0FBTixFQUFhO0FBQ2IsZUFBTztBQUNMSSxnQkFBTTtBQURELFNBQVA7QUFHRDtBQUNGOzs7Ozs7a0JBR1l2QixtQiIsImZpbGUiOiJSdW50aW1lQ2FwYWJpbGl0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJSdW50aW1lQ2FwYWJpbGl0aWVzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJ1bnRpbWVDYXBhYmlsaXRpZXNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiUnVudGltZUNhcGFiaWxpdGllc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDBkNTljZGRiOWNhZGUzNzMzMDhmIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG4vLyBUT0RPOiBpbXBvcnQgYW5kIGV4dGVuZCB0aGUgY2xhc3Mgb2YgdGhlIHNlcnZpY2UtZnJhbWV3b3JrXG4vLyBzZXJ2aWNlLWZyYW1ld29yay9kaXN0L1J1bnRpbWVDYXBhYmlsaXRpZXM7XG5cbmNsYXNzIFJ1bnRpbWVDYXBhYmlsaXRpZXMge1xuXG4gICBjb25zdHJ1Y3RvcihzdG9yYWdlTWFuYWdlcikge1xuICAgIGlmICghc3RvcmFnZU1hbmFnZXIpIHRocm93IG5ldyBFcnJvcignVGhlIFJ1bnRpbWUgQ2FwYWJpbGl0aWVzIG5lZWQgdGhlIHN0b3JhZ2VNYW5hZ2VyJyk7XG4gICAgdGhpcy5zdG9yYWdlTWFuYWdlciA9IHN0b3JhZ2VNYW5hZ2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYXMgYSBwcm9taXNlIFJ1bnRpbWVDYXBhYmlsaXRpZXMganNvbiBvYmplY3Qgd2l0aCBhbGwgYXZhaWxhYmxlIGNhcGFiaWxpdGllcyBvZiB0aGUgcnVudGltZS5cbiAgICogSWYgaXQgd2FzIG5vdCB5ZXQgcGVyc2lzdGVkIGluIHRoZSBTdG9yYWdlIE1hbmFnZXIgaXQgY29sbGVjdHMgYWxsIHJlcXVpcmVkIGluZm8gZnJvbSB0aGUgcGxhdGZvcm0gYW5kIHNhdmVzIGluIHRoZSBzdG9yYWdlIG1hbmFnZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdD59XG4gICAqL1xuICBnZXRSdW50aW1lQ2FwYWJpbGl0aWVzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBQcm9taXNlLmFsbChbdGhpcy5fZ2V0RW52aXJvbm1lbnQoKV0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuXG4gICAgICAgIGxldCBjYXBhYmlsaXRpZXMgPSB7fTtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuX2dldEVudmlyb25tZW50KClzOiAnLCB0aGlzLl9nZXRFbnZpcm9ubWVudCgpKTtcblxuICAgICAgICByZXN1bHQuZm9yRWFjaCgoY2FwYWJpbGl0eSkgPT4ge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oY2FwYWJpbGl0aWVzLCBjYXBhYmlsaXR5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2NhcGFiaWxpdGllczogJywgY2FwYWJpbGl0aWVzKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlTWFuYWdlci5zZXQoJ2NhcGFiaWxpdGllcycsICcxJywgY2FwYWJpbGl0aWVzKTtcblxuICAgICAgICByZXNvbHZlKGNhcGFiaWxpdGllcyk7XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYXMgYSBwcm9taXNlIGEgYm9vbGVhbiBhY2NvcmRpbmcgdG8gYXZhaWxhYmxlIGNhcGFiaWxpdGllcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBpc0F2YWlsYWJsZShjYXBhYmlsaXR5KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLnN0b3JhZ2VNYW5hZ2VyLmdldCgnY2FwYWJpbGl0aWVzJykudGhlbigoY2FwYWJpbGl0aWVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDYXBhYmlsaXR5ICcgKyBjYXBhYmlsaXR5ICsgJyBpcyBhdmFpbGFibGU/ICcsIGNhcGFiaWxpdGllcy5oYXNPd25Qcm9wZXJ0eShjYXBhYmlsaXR5KSAmJiBjYXBhYmlsaXRpZXNbY2FwYWJpbGl0eV0pO1xuICAgICAgICBpZiAoY2FwYWJpbGl0aWVzLmhhc093blByb3BlcnR5KGNhcGFiaWxpdHkpICYmIGNhcGFiaWxpdGllc1tjYXBhYmlsaXR5XSkge1xuICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBoYXMgb2NjdXJlZCB3aGlsZSBjaGVja2luZyBjYXBhYmlsaXR5LCByZWFzb246JywgZXJyb3IpO1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogaXQgcmVmcmVzaGVzIHByZXZpb3VzbHkgY29sbGVjdGVkIGNhcGFiaWxpdGllcyBhbmQgdXBkYXRlcyB0aGUgc3RvcmFnZSBtYW5hZ2VyXG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuZ2V0UnVudGltZUNhcGFiaWxpdGllcygpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRPRE86IG9yZ2FuaXplIHRoZSBjb2RlIGluIHNlcGFyYXRlZCBmaWxlc1xuICBfZ2V0RW52aXJvbm1lbnQoKSB7XG4gICAgLy8gVE9ETzogdGhpcyBzaG91bGQgYmUgbW9yZSBlZmZlY3RpdmUgYW5kIGNoZWNrIHRoZSBlbnZpcm9ubWVudFxuICAgIHRyeSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBub2RlOiAhISEod2luZG93ICYmIG5hdmlnYXRvcilcbiAgICAgIH07XG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZTogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUnVudGltZUNhcGFiaWxpdGllcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SdW50aW1lQ2FwYWJpbGl0aWVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==