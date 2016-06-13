'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

var _minibus = require('runtime-core/dist/minibus');

var _minibus2 = _interopRequireDefault(_minibus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RuntimeLoader = function () {
  function RuntimeLoader(installerFactory, runtimeURL) {
    _classCallCheck(this, RuntimeLoader);

    if (!installerFactory) throw Error('You need specify the Core Factory');
    if (!runtimeURL) throw Error('You need specify the runtime url will be loaded');

    var _this = this;
    _this._minibus = new _minibus2.default();
    _this._installerFactory = installerFactory;
    _this._runtimeURL = runtimeURL;

    _this.isInstalled = false;
  }

  _createClass(RuntimeLoader, [{
    key: 'install',
    value: function install() {
      var _this = this;

      return new Promise(function (resolve, reject) {

        console.info('Installing the runtime ', _this._runtimeURL);
        _this._installerFactory.install(_this._minibus, _this._runtimeURL).then(function (success) {
          console.info('runtime installed with success');
          _this.isInstalled = true;
          resolve(success);
        }).catch(function (reason) {
          _this.isInstalled = false;
          console.error('runtime installation fail');
          reject(reason);
        });
      });
    }

    /**
     * Load hyperty from runtime core
     * @param  {URL.HypertyCatalogueURL} hypertyDescriptorURL hyperty catalogue URL
     * @return {Promise.<String>} hyperty deploy status
     */

  }, {
    key: 'requireHyperty',
    value: function requireHyperty(hypertyDescriptorURL) {

      var _this = this;

      if (!_this.isInstalled) throw Error('The runtime is not installed or is in installing process');

      var from = 'app:requireHyperty';

      // TODO: change the messages to this:
      // from: <AppSandboxURL>/app
      // to: hyperty-runtime://<runtime-instance-identitifier>/runtime-ua
      // <runtime-instance-identitifier> should be generated wen the runtimeUA is instantiated;
      // body.resource = 'hyperty' || 'protostub'
      // body.value = <hypertyDescriptorURL> || <domain>;

      return new Promise(function (resolve, reject) {

        var msg = {
          from: from,
          to: 'core:loadHyperty',
          body: {
            value: {
              descriptor: hypertyDescriptorURL
            }
          }
        };

        _this._minibus._onMessage(msg);

        _this._minibus.addListener(from, function (msg) {
          if (!msg.body.hasOwnProperty('code')) {
            var hypertyURL = msg.body.value.runtimeHypertyURL;
            var hypertyComponent = window.components[hypertyURL];
            var hyperty = {
              runtimeHypertyURL: hypertyURL,
              status: msg.body.value.status,
              instance: hypertyComponent.instance,
              name: hypertyComponent.name
            };

            resolve(hyperty);
          } else {
            reject(msg.body.value);
          }
        });
      });
    }

    /**
     * Load proto stub from runtime core
     * @param  {URL.URL}     domain          domain
     * @return {Promise.<String>} hyperty deploy status
     */

  }, {
    key: 'requireProtostub',
    value: function requireProtostub(domain) {
      var _this = this;
      var from = 'app:requireProtostub';

      return new Promise(function (resolve, reject) {

        var msg = {
          from: from,
          to: 'core:loadStub',
          body: {
            value: {
              domain: domain
            }
          }
        };

        _this._minibus._onMessage(msg);
        _this._minibus.addListener(from, function (msg) {
          if (!msg.body.hasOwnProperty('code')) {
            var protostubURL = msg.body.value.runtimeProtoStubURL;
            var protostubComponent = window.components[protostubURL];
            var protostub = {
              runtimeProtostubURL: protostubURL,
              status: msg.body.value.status,
              instance: protostubComponent.instance,
              name: protostubComponent.name
            };

            resolve(protostub);
          } else {
            reject(msg.body.value);
          }
        });
      });
    }
  }]);

  return RuntimeLoader;
}();

exports.default = RuntimeLoader;