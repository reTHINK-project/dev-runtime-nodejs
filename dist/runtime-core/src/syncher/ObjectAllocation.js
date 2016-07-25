'use strict';

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
var ObjectAllocation = function () {
  /* private
  _url: URL
  _bus: MiniBus
  */

  /**
   * Create an Object Allocation
   * @param  {URL.URL}      url - url from who is sending the message
   * @param  {MiniBus}      bus - MiniBus used for address allocation
   */
  function ObjectAllocation(url, bus) {
    _classCallCheck(this, ObjectAllocation);

    var _this = this;

    _this._url = url;
    _this._bus = bus;
  }

  /**
   * get the URL value
   * @return {string} The url value;
   */


  _createClass(ObjectAllocation, [{
    key: 'create',


    /**
     * Ask for creation of a number of Object addresses, to the domain message node.
     * @param  {Domain} domain - Domain of the message node.
     * @param  {number} number - Number of addresses to request
     * @returns {Promise<ObjectURL>}  A list of ObjectURL's
     */
    value: function create(domain, scheme, number) {
      var _this = this;

      //FLOW-OUT: message sent to msg-node ObjectAllocationManager component
      var msg = {
        type: 'create', from: _this._url, to: 'domain://msg-node.' + domain + '/object-address-allocation',
        body: { scheme: scheme, value: { number: number } }
      };

      return new Promise(function (resolve, reject) {
        _this._bus.postMessage(msg, function (reply) {
          if (reply.body.code === 200) {
            resolve(reply.body.value.allocated);
          } else {
            reject(reply.body.desc);
          }
        });
      });
    }
  }, {
    key: 'url',
    get: function get() {
      return this._url;
    }
  }]);

  return ObjectAllocation;
}();

exports.default = ObjectAllocation;