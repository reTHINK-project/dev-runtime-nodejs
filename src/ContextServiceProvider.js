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
import { Sandbox, SandboxRegistry } from './runtime-core/dist/sandbox';
import MiniBus from './runtime-core/dist/minibus';
import _eval from 'eval';
let EventEmitter = require('events').EventEmitter;
let emitter = new EventEmitter();
var colors = require('colors');

process.miniBus = new MiniBus();

process.miniBus._onPostMessage = function(msg) {
  console.log('--------------------------- Inside ContextServiceProvider : Received message is :----------------------------:\n '.green, msg);
  // process.miniBus.postMessage(msg);
  process.send(msg);
};

process.on('message', function(msg) {
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

process.registry = new SandboxRegistry(process.miniBus);
console.log(' ************ SandboxRegistry created is : \n'.green, process.registry);

process.registry._create = function(url, sourceCode, config) {
    // _eval([sourceCode], true);
    console.log('------------------ registry._create -----------------------'.green);
    // _eval(miniBus, [sourceCode]);
    _eval(sourceCode, true);
    // return activate(url, miniBus, config);
  };
