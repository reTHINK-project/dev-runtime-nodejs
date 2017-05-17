'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ContextApp = require('./ContextApp');

var _ContextApp2 = _interopRequireDefault(_ContextApp);

var _urijs = require('urijs');

var _urijs2 = _interopRequireDefault(_urijs);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
* distributed under the Liceruntimense is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

var Promise = require('es6-promise');

var domain = 'localhost';
var coreRuntime = {};

coreRuntime = _child_process2.default.fork('../dist/core.js');

var buildMsg = function buildMsg(hypertyComponent, msg) {
  console.log('hypertyComponent is :', hypertyComponent, msg);
  return {
    runtimeHypertyURL: msg.body.runtimeHypertyURL,
    status: msg.body.status,
    instance: hypertyComponent.instance,
    name: hypertyComponent.name
  };
};

/**
* Returns as a promise Hyperty object with all its informations.
* @returns {Promise<object>}
**/
var runtimeProxy = {
  requireHyperty: function requireHyperty(hypertyDescriptor) {
    var reuseAddress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    return new Promise(function (resolve, reject) {
      coreRuntime.on('message', function (msg) {
        console.log('---- Message from runtime core ----'.green);
        console.log('Hyperty loaded :\n'.green);

        if (msg.to === 'runtime:loadedHyperty') {
          resolve(buildMsg(_ContextApp2.default.getHypertyBy(msg.body.runtimeHypertyURL), msg));
        }
      });
      // console.log('coreRuntime .send'.green);
      coreRuntime.send({ to: 'core:loadHyperty', body: { descriptor: hypertyDescriptor, reuseAddress: reuseAddress } });
    });
  },

  requireProtostub: function requireProtostub(domain) {
    coreRuntime.send({ to: 'core:loadStub', body: { domain: domain } });
  }
};

/**
* Returns as a promise Hyperty runtime object.
* @returns {Promise<object>}
**/
var RethinkNode = {
  install: function install() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        domain = _ref.domain,
        runtimeURL = _ref.runtimeURL,
        development = _ref.development;

    return new Promise(function (resolve, reject) {
      var runtime = _this.getRuntime(runtimeURL, domain, development);
      coreRuntime.send({ do: 'install runtime core' });
      coreRuntime.on('message', function (msg) {
        if (msg.to === 'runtime:installed') {
          console.log('\n Runtime installed with success\n'.blue);
          resolve(runtimeProxy);
        }
      });

      coreRuntime.on('error', function (error) {
        console.error('runtime core install failed:', error);
        coreRuntime.kill();
        reject(error);
      });

      coreRuntime.on('exit', function () {
        console.log('runtime core exited.');
        coreRuntime.kill();
      });

      _ContextApp2.default.createContextApp(coreRuntime);
    });
  },

  getRuntime: function getRuntime(runtimeURL, domain, development) {
    if (!!development) {
      runtimeURL = runtimeURL || 'http://' + domain + '/.well-known/runtime/Runtime';
      domain = domain || new _urijs2.default(runtimeURL).host();
    } else {
      runtimeURL = runtimeURL || 'http://${domain}/.well-known/runtime/default';
      domain = domain || new _urijs2.default(runtimeURL).host().replace('catalogue.', '');
    }
    return {
      url: runtimeURL,
      domain: domain
    };
  }
};
exports.default = RethinkNode;