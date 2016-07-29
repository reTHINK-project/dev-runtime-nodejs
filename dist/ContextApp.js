'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sandbox = require('./runtime-core/dist/sandbox');

var _minibus = require('./runtime-core/dist/minibus');

var _minibus2 = _interopRequireDefault(_minibus);

var _eval2 = require('eval');

var _eval3 = _interopRequireDefault(_eval2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(myApp) {
  console.log('\n****** In ContextApp ******'.green);
  process._miniBus = new _minibus2.default();
  process._miniBus._onPostMessage = function (msg) {
    console.log('--> process miniBus message sent'.blue, msg);
    myApp.send(msg);
  };

  myApp.on('message', function (event) {
    // console.log('\n received message: runtime:loadedHyperty', event);
    if (event.to.startsWith('runtime:loadedHyperty')) return;

    process._miniBus._onMessage(event);
  });

  process._registry = new _sandbox.SandboxRegistry(process._miniBus);
  process._registry._create = function (url, sourceCode, config) {
    var activate = (0, _eval3.default)(sourceCode, true);
    console.log('activate-->'.red);
    return activate(url, process._miniBus, config);
  };
} /**
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
;

function getHyperty(hypertyDescriptor) {
  console.log('#### in getHyperty'.blue);
  return process._registry.components[hypertyDescriptor];
};

exports.default = { create: create, getHyperty: getHyperty };