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
import { Sandbox, SandboxRegistry } from 'runtime-core/dist/sandbox';
import MiniBus from 'runtime-core/dist/minibus';
import _eval from 'eval';
var colors = require('colors');

let _miniBus = new MiniBus();

process.on('message', function(msg) {
    console.log('--------------------------- Inside ContextServiceProvider : Received message is :----------------------------:\n '.green, msg);

    _miniBus.postMessage(msg);
    console.log(' _miniBus.postMessage(msg); Post is Done :\n '.green, _miniBus);
    console.log('--> message sent from ContextServiceProvider  to SandboxWorker'.green);
    this.send({msg});
  });

process.on('event', function(event) {
    console.log('---------------------------- ContextServiceProvider : Received 2nd event   is :--------------------------------------------------------\n'.green, event.data);
    _miniBus._onMessage(event.data);
  });

let _registry = new SandboxRegistry(_miniBus);
console.log(' ************ SandboxRegistry created is : \n'.green, _registry);

_registry._create = function(url, sourceCode, config) {
    _eval([sourceCode], true);
    console.log('------------------ _registry._create -----------------------'.green);

    // eval.apply(_miniBus, [sourceCode]);
    return activate(url, _miniBus, config);
  };
