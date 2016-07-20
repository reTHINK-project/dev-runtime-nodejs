'use strict';

var _sandbox = require('runtime-core/dist/sandbox');

var _minibus = require('runtime-core/dist/minibus');

var _minibus2 = _interopRequireDefault(_minibus);

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
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/
var _miniBus = new _minibus2.default();

process.on('message', function (msg) {
    console.log('--------------------------- Inside ContextServiceProvider : Received message is :----------------------------:\n ', msg);
    _miniBus.postMessage(msg);
    this.send(msg);
});

process.on('message', function (event) {
    console.log('---------------------------- Received 2 nd event is :--------------------------------------------------------\n', event);
    _miniBus._onMessage(event.data);
});

var _registry = new _sandbox.SandboxRegistry(_miniBus);
console.log(' *** SandboxRegistry created ***');
_registry._create = function (url, sourceCode, config) {
    // eval.apply(_miniBus, [sourceCode]);
    return activate(url, _miniBus, config);
};