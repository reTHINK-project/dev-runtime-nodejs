'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = require('../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Core IdentityManager interface
* Class to allow applications to search for Identities registered in runtime-core
*/
var IdentityManager = function () {

  /**
  * To initialise the IdentityManager, which will provide the support for hyperties to
  * query about identities registered
  * @param  {String}          hypertyURL            hypertyURL
  * @param  {String}          runtimeURL            runtimeURL
  * @param  {MessageBus}          msgbus                msgbus
  */
  function IdentityManager(hypertyURL, runtimeURL, msgBus) {
    (0, _classCallCheck3.default)(this, IdentityManager);

    var _this = this;
    _this.messageBus = msgBus;

    _this.domain = (0, _utils.divideURL)(hypertyURL).domain;
    _this.hypertyURL = hypertyURL;
    _this.runtimeURL = runtimeURL;
  }

  /**
  * Function to query the runtime registry about the identity to which the hyperty was associated
  * @param {String}       type (Optional)         type of user info required
  * @param {String}       hypertyURL (Optional)   hypertyURL to search for
  * @return {Promise}     userURL       userURL associated to the hyperty
  */


  (0, _createClass3.default)(IdentityManager, [{
    key: 'discoverUserRegistered',
    value: function discoverUserRegistered(type, hypertyURL) {
      var _this = this;
      var activeHypertyURL = void 0;

      // if any type of search is selected query for that type, otherwise query for default user info
      var searchType = type ? type : '.';

      if (!hypertyURL) {
        activeHypertyURL = _this.hypertyURL;
      } else {
        activeHypertyURL = hypertyURL;
      }

      var msg = {
        type: 'read', from: activeHypertyURL, to: _this.runtimeURL + '/registry/', body: { resource: searchType, criteria: activeHypertyURL }
      };

      return new _promise2.default(function (resolve, reject) {

        _this.messageBus.postMessage(msg, function (reply) {

          var userURL = reply.body.resource;

          if (userURL && reply.body.code === 200) {
            resolve(userURL);
          } else {
            reject('code: ' + reply.body.code + ' No user was not found');
          }
        });
      });
    }
  }]);
  return IdentityManager;
}(); /**
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


exports.default = IdentityManager;