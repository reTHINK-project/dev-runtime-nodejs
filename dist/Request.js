'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var methods = { GET: 'get', POST: 'post', DELETE: 'delete', UPDATE: 'update' };

var Request = function () {
  function Request() {
    _classCallCheck(this, Request);

    console.log('Node http Request');

    var _this = this;

    Object.keys(methods).forEach(function (method) {

      _this[methods[method]] = function (url) {

        return new Promise(function (resolve, reject) {

          _this._makeLocalRequest(methods[method], url).then(function (result) {
            resolve(result);
          }).catch(function (reason) {
            reject(reason);
          });
        });
      };
    });
  }

  _createClass(Request, [{
    key: '_makeLocalRequest',
    value: function _makeLocalRequest(method, url) {
      console.log('HTTPS Request:', method, url);
      return new Promise(function (resolve, reject) {
        // TODO: Check why the url have localhost and undefined like a protocol
        // check the RuntimeUA
        var protocolmap = {
          'hyperty-catalogue://': 'https://',
          'https://': 'https://'
        };

        var usedProtocol = void 0;

        var foundProtocol = false;
        for (var protocol in protocolmap) {
          if (url.slice(0, protocol.length) === protocol) {
            // console.log("exchanging " + protocol + " with " + protocolmap[protocol]);
            url = protocolmap[protocol] + url.slice(protocol.length, url.length);
            usedProtocol = protocolmap[protocol];
            foundProtocol = true;
            break;
          }
        }

        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        var req = _https2.default.get(url, function (response) {
          console.log('statusCode:', response.statusCode);
          response.on('data', function (data) {
            var buffer = data.toString('utf8');

            console.log(buffer);

            var json = void 0;

            try {
              json = JSON.parse(buffer);
            } catch (error) {
              json = JSON.stringify(buffer);
            }

            resolve(json);
          });
        });

        req.end();

        req.on('error', function (e) {
          console.error('Error:', e);
          reject(e);
        });
      });
    }
  }]);

  return Request;
}();

exports.default = Request;