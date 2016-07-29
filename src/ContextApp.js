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
// import { Sandbox, SandboxRegistry } from './runtime-core/dist/sandbox';
// import MiniBus from './runtime-core/dist/minibus';
// import _eval from 'eval';
//
// // require the EventEmitter from the events module
// // const EventEmitter = require('events').EventEmitter;
// // // create an instance of the EventEmitter object
// // const eventEmitter = new EventEmitter();
//
// // listen on event exporte from another core module
//
// function create(myApp) {
//   console.log('\n****** In ContextApp ******'.green);
//   process._miniBus = new MiniBus();
//   // process._miniBus._onPostMessage = function(msg) {
//   //     // myApp.send(msg, '*');
//   //     // myApp.send({do:'installed hyperty'});
//   //     console.log('process miniBus message sent');
//   //     process._miniBus.postMessage(msg);
//   //     // eventEmitter.emit(msg);
//   //
//   //   };
//
//   process.on('message', function(event) {
//     console.log('msg');
//     if (event.to.startsWith('runtime:loadedHyperty'))
//     console.log('\n received message: runtime:loadedHyperty');
//     return;
//
//     process._miniBus._onMessage(event);
//   });
//   // //
//   process._registry = new SandboxRegistry(process._miniBus);
//   process._registry._create = function(url, sourceCode, config) {
//           let activate = _eval(sourceCode, true);
//           console.log('activate');
//           return activate(url, process._miniBus, config);
//         };
// };
//
// function getHyperty(hypertyDescriptor) {
//   console.log('#### in getHyperty'.blue);
//   return process._registry.components[hypertyDescriptor];
// };
//
// export default { create, getHyperty };
import { Sandbox, SandboxRegistry } from './runtime-core/dist/sandbox';
import MiniBus from './runtime-core/dist/minibus';
import _eval from 'eval';
let EventEmitter = require('events').EventEmitter;
let emitter = new EventEmitter();
var colors = require('colors');

process._miniBus = new MiniBus();

process._miniBus._onPostMessage = function(msg) {
  console.log('--------------------------- Inside ContextApp : Received message is :----------------------------:msg\n '.green);
  // process.miniBus.postMessage(msg);
  process.send(msg);
};

process.on('message', function(msg) {
    console.log('--------------------------- Inside ContextApp : Received message is :----------------------------:\n msg'.green);

    // miniBus.postMessage(msg);
    console.log('miniBus.postMessage(msg): Post is Done :msg\n '.green);
    process._miniBus._onMessage(msg);

    // console.log('--> message sent from ContextServiceProvider '.green, msg);
    // this.send(msg);
  });

process._registry = new SandboxRegistry(process._miniBus);
console.log(' ************ SandboxRegistry created is : \n'.green, process._registry);

process._registry._create = function(url, sourceCode, config) {
    console.log('------------------ registry._create -----------------------'.green);
    // _eval(miniBus, [sourceCode]);
    // eval.apply(process.miniBus, [sourceCode]);
    let activate = _eval(sourceCode, true);
    console.log(activate);
    return activate(url, process._miniBus, config);
  };
