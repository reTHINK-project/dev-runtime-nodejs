'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SandboxType = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SandboxRegistry = require('../sandbox/SandboxRegistry');

var _SandboxRegistry2 = _interopRequireDefault(_SandboxRegistry);

var _MiniBus2 = require('../bus/MiniBus');

var _MiniBus3 = _interopRequireDefault(_MiniBus2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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

var SandboxType = exports.SandboxType = { APP: 'app', NORMAL: 'normal' };

/**
 * @author micaelpedrosa@gmail.com
 * Base class to implement external sandbox component
 */

var Sandbox = function (_MiniBus) {
  _inherits(Sandbox, _MiniBus);

  function Sandbox() {
    _classCallCheck(this, Sandbox);

    var _this2 = _possibleConstructorReturn(this, (Sandbox.__proto__ || Object.getPrototypeOf(Sandbox)).call(this));

    var _this = _this2;

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


  _createClass(Sandbox, [{
    key: 'deployComponent',
    value: function deployComponent(componentSourceCode, componentURL, configuration) {

      var _this = this;

      // let messageFactory = _this.messageFactory;

      return new Promise(function (resolve, reject) {
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

      return new Promise(function (resolve, reject) {
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
  }]);

  return Sandbox;
}(_MiniBus3.default);

exports.default = Sandbox;