'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SandboxType = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _SandboxRegistry = require('../sandbox/SandboxRegistry');

var _SandboxRegistry2 = _interopRequireDefault(_SandboxRegistry);

var _MiniBus2 = require('../bus/MiniBus');

var _MiniBus3 = _interopRequireDefault(_MiniBus2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import MessageFactory from '../../resources/MessageFactory';

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
var SandboxType = exports.SandboxType = { APP: 'app', NORMAL: 'normal', WINDOW: 'window' };

/**
 * @author micaelpedrosa@gmail.com
 * Base class to implement external sandbox component
 */

var Sandbox = function (_MiniBus) {
  (0, _inherits3.default)(Sandbox, _MiniBus);

  function Sandbox(capabilities) {
    (0, _classCallCheck3.default)(this, Sandbox);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Sandbox.__proto__ || (0, _getPrototypeOf2.default)(Sandbox)).call(this));

    var _this = _this2;

    if (capabilities) {
      _this.capabilities = capabilities;
    }

    // Add Message Factory
    // let messageFactory = new MessageFactory();
    // _this.messageFactory = messageFactory;
    return _this2;
  }

  /**
   * Deploy an instance of the component into the sandbox.
   * @param  {string} componentSourceCode Component source code (Hyperty, ProtoStub, etc)
   * @param  {URL} componentURL Hyperty, ProtoStub, or any other component address.
   * @param  {Config} configuration Config parameters of the component
   * @return {Promise<string>} return deployed if successful, or any other string with an error
   */


  (0, _createClass3.default)(Sandbox, [{
    key: 'deployComponent',
    value: function deployComponent(componentSourceCode, componentURL, configuration) {

      var _this = this;

      // let messageFactory = _this.messageFactory;

      return new _promise2.default(function (resolve, reject) {
        //FLOW-OUT: deploy message for the internal SandboxRegistry -> _onDeploy
        var deployMessage = {
          type: 'create', from: _SandboxRegistry2.default.ExternalDeployAddress, to: _SandboxRegistry2.default.InternalDeployAddress,
          body: { url: componentURL, sourceCode: componentSourceCode, config: configuration }
        };

        //send message into the sandbox internals and wait for reply
        _this.postMessage(deployMessage, function (reply) {
          if (reply.body.code === 200) {
            //is this response complaint with the spec?
            resolve('deployed');
          } else {
            reject(reply.body.desc);
          }
        });
      });
    }

    /**
     * Remove the instance of a previously deployed component.
     * @param  {URL} componentURL Hyperty, ProtoStub, or any other component address.
     * @return {Promise<string>} return undeployed if successful, or any other string with an error
     */

  }, {
    key: 'removeComponent',
    value: function removeComponent(componentURL) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        //FLOW-OUT: un-deploy message for the internal SandboxRegistry -> _onRemove
        var removeMessage = {
          type: 'delete', from: _SandboxRegistry2.default.ExternalDeployAddress, to: _SandboxRegistry2.default.InternalDeployAddress,
          body: { url: componentURL }
        };

        //send message into the sandbox internals and wait for reply
        _this.postMessage(removeMessage, function (reply) {
          if (reply.body.code === 200) {
            //is this response complaint with the spec?
            resolve('undeployed');
          } else {
            reject(reply.body.desc);
          }
        });
      });
    }

    /**
    * Matches Sandbox capabilities against provided capabilities. Used to check if sandbox provides all required capabilities
    * @param  {RuntimeCapabilities} constraints set of RuntimeCapabilities to match with.
    * @return {boolean} return true if constraints are matched false otherwise
     */

  }, {
    key: 'matches',
    value: function matches(constraints) {
      var _this = this;

      var filtered = (0, _keys2.default)(constraints).filter(function (key) {
        return !(_this.capabilities[key] && _this.capabilities[key] === constraints[key]);
      });

      if (filtered.length === 0) {
        return true;
      } else {
        return !constraints[filtered];
      }
    }
  }]);
  return Sandbox;
}(_MiniBus3.default);

exports.default = Sandbox;