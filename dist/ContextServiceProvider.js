'use strict';

var _sandbox = require('./runtime-core/dist/sandbox');

var _minibus = require('./runtime-core/dist/minibus');

var _minibus2 = _interopRequireDefault(_minibus);

var _eval2 = require('eval');

var _eval3 = _interopRequireDefault(_eval2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = require('events').EventEmitter; /**
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

var emitter = new EventEmitter();
var colors = require('colors');

process.miniBus = new _minibus2.default();

process.miniBus._onPostMessage = function (msg) {
  console.log('--------------------------- Inside ContextServiceProvider : Received message is :----------------------------:\n '.green, msg);
  // process.miniBus.postMessage(msg);
  process.send(msg);
};

process.on('message', function (msg) {
  console.log('--------------------------- Inside ContextServiceProvider : Received message is :----------------------------:\n '.green, msg);

  // miniBus.postMessage(msg);
  process.miniBus._onMessage(msg);
  console.log('miniBus.postMessage(msg): Post is Done :\n '.green, process.miniBus);
  console.log('--> message sent from ContextServiceProvider  to SandboxWorker'.green);
  // this.send(msg);
});

// process.on('message', function(event) {
//     console.log('---------------------------- ContextServiceProvider : Received 2nd event   is :--------------------------------------------------------\n'.green, event);
//     miniBus._onMessage(event);
//   });

process.registry = new _sandbox.SandboxRegistry(process.miniBus);
console.log(' ************ SandboxRegistry created is : \n'.green, process.registry);

process.registry._create = function (url, sourceCode, config) {
  // _eval([sourceCode], true);
  console.log('------------------ registry._create -----------------------'.green);
  // _eval(miniBus, [sourceCode]);
  (0, _eval3.default)(sourceCode, true);
  // return activate(url, miniBus, config);
};