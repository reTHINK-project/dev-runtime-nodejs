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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SandboxWorker = require('./SandboxWorker');

var _SandboxWorker2 = _interopRequireDefault(_SandboxWorker);

var _SandboxApp = require('./SandboxApp');

var _SandboxApp2 = _interopRequireDefault(_SandboxApp);

var _Request = require('./Request');

var _Request2 = _interopRequireDefault(_Request);

var _atob2 = require('atob');

var _atob3 = _interopRequireDefault(_atob2);

var _RuntimeCatalogue = require('./service-framework/RuntimeCatalogue.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let SandboxWorker = require('./SandboxWorker');
// let SandboxApp = require('./SandboxApp');
// let Request = require('./Request');

var RuntimeFactory = Object.create({
  createSandbox: function createSandbox() {
    return new _SandboxWorker2.default(__dirname + './ContextServiceProvider.js');
  },
  createAppSandbox: function createAppSandbox() {
    return new _SandboxApp2.default();
  },
  createHttpRequest: function createHttpRequest() {
    var request = new _Request2.default();
    return request;
  },
  atob: function atob(b64) {
    return (0, _atob3.default)(b64);
  },
  createRuntimeCatalogue: function createRuntimeCatalogue(development) {
    if (!this.catalogue) this.catalogue = development || new _RuntimeCatalogue.RuntimeCatalogueLocal(this);

    return this.catalogue;
  }
});

// import {RuntimeCatalogueLocal, RuntimeCatalogue} from 'service-framework/dist/RuntimeCatalogue.js';
exports.default = RuntimeFactory;