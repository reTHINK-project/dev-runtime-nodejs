'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _Bus2 = require('./Bus');

var _Bus3 = _interopRequireDefault(_Bus2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @author micaelpedrosa@gmail.com
* Message BUS Interface is an extension of the Bus
* It is used mainly in the internal sandbox routing.
*/
var MiniBus = function (_Bus) {
  (0, _inherits3.default)(MiniBus, _Bus);

  function MiniBus() {
    (0, _classCallCheck3.default)(this, MiniBus);
    return (0, _possibleConstructorReturn3.default)(this, (MiniBus.__proto__ || (0, _getPrototypeOf2.default)(MiniBus)).call(this));
  }

  /**
   * Post a message for routing. Message is routed directly to the external routing _onPostMessage.
   * @param  {Message} inMsg            JSON with mandatory Message structure {id, type, from, to}
   * @param  {Callback} responseCallback Optional callback if a response is expected from the request. A response will be always sent, even if it is a "Timeout".
   * @return {number}                  the Message id
   */


  (0, _createClass3.default)(MiniBus, [{
    key: 'postMessage',
    value: function postMessage(inMsg, responseCallback) {
      var _this = this;

      _this._genId(inMsg);
      _this._responseCallback(inMsg, responseCallback);

      //always send to external (to core MessageBus)
      _this._onPostMessage(inMsg);

      return inMsg.id;
    }

    //internal method used when a message is received by an external routing system

  }, {
    key: '_onMessage',
    value: function _onMessage(msg) {
      var _this = this;

      if (!_this._onResponse(msg)) {
        var itemList = _this._subscriptions[msg.to];
        if (itemList) {
          _this._publishOn(itemList, msg);
          if (!msg.to.startsWith('hyperty')) {
            _this._publishOnDefault(msg);
          }
        } else {
          _this._publishOnDefault(msg);
        }
      }
    }
  }]);
  return MiniBus;
}(_Bus3.default); /**
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


exports.default = MiniBus;