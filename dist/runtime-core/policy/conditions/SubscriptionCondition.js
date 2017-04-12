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

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _Condition2 = require('./Condition');

var _Condition3 = _interopRequireDefault(_Condition2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @author Ana Caldeira <ana.caldeira@tecnico.ulisboa.pt>
* @classdesc Class to represent a subscription condition and evaluate its applicability.
*/
var SubscriptionCondition = function (_Condition) {
  (0, _inherits3.default)(SubscriptionCondition, _Condition);

  /**
  * Creates a new SubscriptionCondition.
  * @class
  * @param  {string}  attribute
  * @param  {string}  operator
  * @param  {*}       params
  */
  function SubscriptionCondition(attribute, operator, params) {
    (0, _classCallCheck3.default)(this, SubscriptionCondition);
    return (0, _possibleConstructorReturn3.default)(this, (SubscriptionCondition.__proto__ || (0, _getPrototypeOf2.default)(SubscriptionCondition)).call(this, attribute, operator, params));
  }

  /**
  * Verifies if the subscription condition is applicable to the message. First, verifies if the message is of the subscription type; second, verifies if the message is from a remote runtime to guarantee that the subscription is being validated in the destination runtime; third, verifies if the subscription preference is met.
  * @param  {Object}    context   environment where the Policy Engine is being used
  * @param  {Object}    message
  */


  (0, _createClass3.default)(SubscriptionCondition, [{
    key: 'isApplicable',
    value: function isApplicable(context, message) {
      var isSubscription = message.type === 'subscribe';
      var isFromRemoteSM = context.isFromRemoteSM(message.from);
      if (isSubscription & isFromRemoteSM) {
        return (0, _get3.default)(SubscriptionCondition.prototype.__proto__ || (0, _getPrototypeOf2.default)(SubscriptionCondition.prototype), 'isApplicable', this).call(this, context, message);
      } else {
        return false;
      }
    }
  }]);
  return SubscriptionCondition;
}(_Condition3.default); /**
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

exports.default = SubscriptionCondition;