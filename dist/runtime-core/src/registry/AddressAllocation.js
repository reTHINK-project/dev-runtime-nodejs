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
// import MessageFactory from '../../resources/MessageFactory';

/**
 * Class will ask to the message node for addresses
 */

var AddressAllocation = function () {
  /* private
  _url: URL
  _bus: MiniBus
  */

  /**
   * Create an Address Allocation
   * @param  {URL.URL}      url - url from who is sending the message
   * @param  {MiniBus}      bus - MiniBus used for address allocation
   */

  function AddressAllocation(url, bus) {
    _classCallCheck(this, AddressAllocation);

    var _this = this;

    // let messageFactory = new MessageFactory();
    //
    // _this._messageFactory = messageFactory;
    _this._url = url;
    _this._bus = bus;
  }

  /**
   * get the URL value
   * @return {string} The url value;
   */


  _createClass(AddressAllocation, [{
    key: 'create',


    /**
     * Ask for creation of a number of Hyperty addresses, to the domain message node.
     * @param  {Domain} domain - Domain of the message node.
     * @param  {number} number - Number of addresses to request
     * @returns {Promise<HypertyURL>}  A list of HypertyURL's
     */
    value: function create(domain, number) {
      var _this = this;

      // let messageFactory = _this._messageFactory;

      var msg = {
        type: 'create', from: _this._url, to: 'domain://msg-node.' + domain + '/hyperty-address-allocation',
        body: { value: { number: number } }
      };

      // TODO: Apply the message factory
      // The msg-node-vertx should be changed the body field to receive
      // the following format body: {value: {number: number}} because
      // the message is generated in that way by the message factory;
      // let msg = messageFactory.createMessageRequest(_this._url, 'domain://msg-node.' + domain + '/hyperty-address-allocation', '', {number: number});

      return new Promise(function (resolve, reject) {

        // TODO: change this response Message using the MessageFactory
        _this._bus.postMessage(msg, function (reply) {
          if (reply.body.code === 200) {
            resolve(reply.body.value.allocated);
          } else {
            reject(reply.body.desc);
          }
        });
      });
    }

    /**
    * Send a request to the domain message node, to deallocate one or more addresses
    * @param  {Domain} domain - Domain of the message node.
    * @param  {addresses} addresses to request the deallocation
    * @returns {Promise}  the response by the message node
    */

  }, {
    key: 'delete',
    value: function _delete(domain, addresses) {
      var _this = this;

      var message = {
        type: 'delete', from: _this._url, to: 'domain://msg-node.' + domain + '/hyperty-address-allocation',
        body: { childrenResources: addresses }
      };

      return new Promise(function (resolve, reject) {

        _this._bus.postMessage(message, function (reply) {
          console.log('reply', reply);
          if (reply.body.code === 200) {
            resolve(reply.body.code);
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

  return AddressAllocation;
}();

exports.default = AddressAllocation;