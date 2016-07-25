'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ContextApp = require('./ContextApp');

var _ContextApp2 = _interopRequireDefault(_ContextApp);

var _urijs = require('urijs');

var _urijs2 = _interopRequireDefault(_urijs);

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

var domain = 'rethink.ptinovacao.pt';
var registry = {};

var window4Node = {};

// const threads = require('threads');
// const config  = threads.config;
// const spawn   = threads.spawn;

// Set base paths to thread scripts
// config.set({
//   basepath: {
//     // browser: 'http://myserver.local/thread-scripts',
//     node: __dirname
//   }
// });
// console.log(__dirname);
var child = require('child_process');
registry.runtime = child.fork(__dirname + '/core.js');

var buildMsg = function buildMsg(hypertyComponent, msg) {
  return {
    runtimeHypertyURL: msg.body.runtimeHypertyURL,
    status: msg.body.status,
    instance: hypertyComponent.instance,
    name: hypertyComponent.name
  };
};

var runtimeProxy = {

  requireHyperty: function requireHyperty(hypertyDescriptor) {
    return new Promise(function (resolve, reject) {
      registry.runtime.on('message', function (msg) {

        console.log('------------------- Message from runtime core child  -------------------------'.green);
        // console.log('message is :', msg);

        if (msg.to === 'runtime:loadedHyperty') {
          console.log('runtime:loadedHyperty is OK');
          resolve(buildMsg(_ContextApp2.default.getHyperty(msg.body.runtimeHypertyURL), msg));
        }
      });
      console.log('registry.runtime.send'.green);
      registry.runtime.send({ to: 'core:loadHyperty', body: { descriptor: hypertyDescriptor } });
    });
  },

  requireProtostub: function requireProtostub(domain) {
    registry.runtime.send({ to: 'core:loadStub', body: { domain: domain } });
  }
};

//
var RethinkNode = {
  install: function install() {
    var _this = this;

    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var domain = _ref.domain;
    var runtimeURL = _ref.runtimeURL;
    var development = _ref.development;


    return new Promise(function (resolve, reject) {

      var runtime = _this.getRuntime(runtimeURL, domain, development);
      // console.log(runtime);

      registry.runtime.send({ do: 'install runtime core', data: window4Node });
      registry.runtime.on('message', function (msg) {
        console.log('------------------- In parent Process  -------------------------'.green);
        console.log('\n--> message recieved from child process core.js');
        // console.log('message is :', msg);
        if (msg.to === 'runtime:installed') {
          console.log('\n Runtime installed with success\n');
          resolve(runtimeProxy);
        }
      });
      registry.runtime.on('error', function (error) {
        console.error('runtime core install failed:', error);
        registry.runtime.kill();
        reject(error);
      });
      registry.runtime.on('exit', function () {
        console.log('runtime core exited.');
        registry.runtime.kill();
      });

      // console.log(registry);
      _ContextApp2.default.create(registry.runtime);
    });
  },

  getRuntime: function getRuntime(runtimeURL, domain, development) {
    if (!!development) {
      runtimeURL = runtimeURL || 'http://' + domain + '/.well-known/runtime/Runtime'; //`https://${domain}/resources/descriptors/Runtimes.json`
      domain = domain || new _urijs2.default(runtimeURL).host();
      // console.log('runtimeURL is ', runtimeURL);
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