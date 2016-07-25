'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sandbox = require('./runtime-core/dist/sandbox');

var _minibus = require('./runtime-core/dist/minibus');

var _minibus2 = _interopRequireDefault(_minibus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require the EventEmitter from the events module
// const EventEmitter = require('events').EventEmitter;
// // create an instance of the EventEmitter object
// const eventEmitter = new EventEmitter();

// listen on event exporte from another core module

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
function create(myApp) {
  console.log('\n****** In ContextApp ******');
  process.miniBus = new _minibus2.default();
  process.miniBus._onPostMessage = function (msg) {
    // myApp.send(msg, '*');
    myApp.send({ do: 'installed hyperty' });
    console.log('process miniBus message sent');
    // eventEmitter.emit(msg);
  };

  process.on('message', function (event) {
    console.log('msg');
    if (event.to.startsWith('runtime:loadedHyperty')) console.log('\n received message: runtime:loadedHyperty');
    return;

    // process.miniBus._onMessage(event);
  }, false);
  // //
  process.registry = new _sandbox.SandboxRegistry(process.miniBus);
  process.registry._create = function (url, sourceCode, config) {
    eval.apply(process.registry, [sourceCode]);
    return activate(url, process.miniBus, config);
  };
};

function getHyperty(hypertyDescriptor) {
  console.log('#### in getHyperty');
  return process.registry.components[hypertyDescriptor];
};

exports.default = { create: create, getHyperty: getHyperty };