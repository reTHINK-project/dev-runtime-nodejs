// version: 0.1.0
// date: Wed Jul 12 2017 16:04:05 GMT+0100 (WEST)
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
		module.exports = factory(require("node-fetch"));
	else if(typeof define === 'function' && define.amd)
		define("Request", ["node-fetch"], factory);
	else if(typeof exports === 'object')
		exports["Request"] = factory(require("node-fetch"));
	else
		root["Request"] = factory(root["node-fetch"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_10__) {
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioqKioiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDZlN2E1NTI5MGFiYmNiYjQ0ODVlPzgyN2IqKioqKioiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiP2U5MDUqIiwid2VicGFjazovLy8uL3NyYy9SZXF1ZXN0LmpzPzczYTkqIl0sIm5hbWVzIjpbIm1ldGhvZHMiLCJHRVQiLCJQT1NUIiwiZmV0Y2giLCJyZXF1aXJlIiwiUmVxdWVzdCIsIl90aGlzIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwibWV0aG9kIiwidXJsIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibWFrZUxvY2FsUmVxdWVzdCIsInRoZW4iLCJyZXN1bHQiLCJjYXRjaCIsInJlYXNvbiIsInllbGxvdyIsInVybE1hcCIsIm1hcFByb3RvY29sIiwiZ3JlZW4iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCIsInJlcyIsInN0YXR1cyIsInRleHQiLCJib2R5IiwidG9TdHJpbmciLCJlcnIiLCJlcnJvciIsInJlZCIsInBvc3RPcHRpb25zIiwicHJvdG9jb2xtYXAiLCJmb3VuZFByb3RvY29sIiwicHJvdG9jb2wiLCJzbGljZSIsImxlbmd0aCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7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OlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibm9kZS1mZXRjaFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlJlcXVlc3RcIiwgW1wibm9kZS1mZXRjaFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZXF1ZXN0XCJdID0gZmFjdG9yeShyZXF1aXJlKFwibm9kZS1mZXRjaFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVxdWVzdFwiXSA9IGZhY3Rvcnkocm9vdFtcIm5vZGUtZmV0Y2hcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmU3YTU1MjkwYWJiY2JiNDQ4NWUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibm9kZS1mZXRjaFwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA3IiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuY29uc3QgbWV0aG9kcyA9IHtHRVQ6ICdnZXQnLCBQT1NUOiAncG9zdCd9O1xuXG5sZXQgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5cblxuY2xhc3MgUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICBjb25zb2xlLmxvZygnTm9kZSBodHRwIFJlcXVlc3QnKTtcbiAgICBPYmplY3Qua2V5cyhtZXRob2RzKS5mb3JFYWNoKChtZXRob2QpID0+IHtcbiAgICAgIF90aGlzW21ldGhvZHNbbWV0aG9kXV0gPSAodXJsLCBvcHRpb25zKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgX3RoaXMubWFrZUxvY2FsUmVxdWVzdChtZXRob2QsIHVybCwgb3B0aW9ucykudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgICAgIH0pLmNhdGNoKChyZWFzb24pID0+IHtcbiAgICAgICAgICAgIHJlamVjdChyZWFzb24pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoYW5kbGluZyByZXF1ZXN0IG1ldGhvZHNcbiAgICogQHJldHVybnMge3RleHQ8c3RyaW5nPn1cbiAgICoqL1xuICBtYWtlTG9jYWxSZXF1ZXN0KG1ldGhvZCwgdXJsLCBvcHRpb25zKSB7XG4gICAgbGV0IF90aGlzID10aGlzXG4gICAgY29uc29sZS5sb2coJ0hUVFBTIFJlcXVlc3Q6Jy55ZWxsb3csIG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGxldCB1cmxNYXAgPSBfdGhpcy5tYXBQcm90b2NvbCh1cmwpO1xuXG4gICAgICBjb25zb2xlLmxvZygnTWFwcGVkIHVybCBpcyAnLnllbGxvdywgdXJsTWFwLCdtZXRob2QgaXM6Jy5ncmVlbiwgbWV0aG9kKTtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQgPSAnMCdcblxuICAgICAgaWYobWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAvLyBoYW5kbGUgR0VUIG1ldGhvZFxuICAgICAgICBmZXRjaCh1cmxNYXApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGF0dXNDb2RlIGlzOiAnLmdyZWVuLCAgcmVzLnN0YXR1cylcbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKVxuICAgICAgICB9KS50aGVuKChib2R5KT0+IHtcbiAgICAgICAgICByZXNvbHZlKGJvZHkudG9TdHJpbmcoJ3V0ZjgnKSlcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VyZWQgb24gR0VUIG1ldGhvZCBvZiB1cmw6Jy5yZWQgLCB1cmxNYXAsICcgcmVhc29uIDonLnJlZCwgZXJyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0gZWxzZSBpZihtZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICBsZXQgcG9zdE9wdGlvbnMgPSB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4vKiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ2NhY2hlLWNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgICAgICAgIH0sKi9cbiAgICAgICAgICBib2R5OiBvcHRpb25zICYmIG9wdGlvbnMuYm9keSA/IG9wdGlvbnMuYm9keSA6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCh1cmxNYXAsIHBvc3RPcHRpb25zKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnc3RhdHVzQ29kZSBpczogJy5ncmVlbiwgIHJlcy5zdGF0dXMpXG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KClcbiAgICAgICAgfSkudGhlbigoYm9keSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoYm9keS50b1N0cmluZygndXRmOCcpKVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cmVkIG9uIFBPU1QgbWV0aG9kIG9mIHVybDonLHVybE1hcCwgJ3dpdGggb3B0aW9uczonLCBvcHRpb25zLCAncmVhc29uIDonLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gLyoqXG4gICogQHJldHVybnMge3ZhcmlhYmxlPHN0cmluZz59XG4gICoqL1xuICBtYXBQcm90b2NvbCh1cmwpIHtcbiAgICBsZXQgcHJvdG9jb2xtYXAgPSB7XG4gICAgICAnbG9jYWxob3N0Oi8vJzogJ2h0dHBzOi8vJyxcbiAgICAgICd1bmRlZmluZWQ6Ly8nOiAnaHR0cHM6Ly8nLFxuICAgICAgJ2h5cGVydHktY2F0YWxvZ3VlOi8vJzogJ2h0dHBzOi8vJyxcbiAgICAgICdodHRwczovLyc6ICdodHRwczovLycsXG4gICAgICAnaHR0cDovLyc6ICdodHRwczovLydcbiAgICB9XG5cbiAgICBsZXQgZm91bmRQcm90b2NvbCA9IGZhbHNlXG4gICAgZm9yIChsZXQgcHJvdG9jb2wgaW4gcHJvdG9jb2xtYXApIHtcbiAgICAgIGlmICh1cmwuc2xpY2UoMCwgcHJvdG9jb2wubGVuZ3RoKSA9PT0gcHJvdG9jb2wpIHtcbiAgICAgICAgdXJsID0gcHJvdG9jb2xtYXBbcHJvdG9jb2xdICsgdXJsLnNsaWNlKHByb3RvY29sLmxlbmd0aCwgdXJsLmxlbmd0aClcbiAgICAgICAgZm91bmRQcm90b2NvbCA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWZvdW5kUHJvdG9jb2wpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwcm90b2NvbCBvZiB1cmw6ICcgKyB1cmwpXG4gICAgfVxuICAgIHJldHVybiB1cmxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlcXVlc3QuanMiXSwic291cmNlUm9vdCI6IiJ9