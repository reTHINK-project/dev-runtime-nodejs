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

var _StorageManager = require('service-framework/dist/StorageManager');

var _StorageManager2 = _interopRequireDefault(_StorageManager);

var _RuntimeCatalogue = require('service-framework/dist/RuntimeCatalogue');

var _PersistenceManager = require('service-framework/dist/PersistenceManager');

var _PersistenceManager2 = _interopRequireDefault(_PersistenceManager);

var _nodeLocalstorage = require('node-localstorage');

var _dexie = require('dexie');

var _dexie2 = _interopRequireDefault(_dexie);

var _indexeddbshim = require('indexeddbshim');

var _indexeddbshim2 = _interopRequireDefault(_indexeddbshim);

var _RuntimeCapabilities = require('./RuntimeCapabilities');

var _RuntimeCapabilities2 = _interopRequireDefault(_RuntimeCapabilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RuntimeFactory = Object.create({
  createSandbox: function createSandbox() {
    return new _SandboxWorker2.default(__dirname + '/ContextServiceProvider.js');
  },
  createAppSandbox: function createAppSandbox() {
    return new _SandboxApp2.default(__dirname + '/ContextApp.js');
  },
  createHttpRequest: function createHttpRequest() {
    var request = new _Request2.default();
    return request;
  },
  atob: function atob(b64) {
    return (0, _atob3.default)(b64);
  },
  persistenceManager: function persistenceManager() {
    var localStorage = new _nodeLocalstorage.LocalStorage('./scratch');
    return new _PersistenceManager2.default(localStorage);
  },
  storageManager: function storageManager() {

    global.window = global;
    (0, _indexeddbshim2.default)(global.window);
    window.shimIndexedDB.__useShim();
    // window.shimIndexedDB.__debug(true);

    var storageName = 'scratch';

    var db = new _dexie2.default(storageName, {
      indexedDB: window.indexedDB, // or the shim's version
      IDBKeyRange: window.IDBKeyRange // or the shim's version.
    });

    window.setTimeout(function () {
      // configurable Timeout for Multi-process access to database(Database_BUSY)
    }, 20);

    return new _StorageManager2.default(db, storageName);
  },
  createRuntimeCatalogue: function createRuntimeCatalogue() {
    this.catalogue = new _RuntimeCatalogue.RuntimeCatalogue(this);
    return this.catalogue;
  },
  runtimeCapabilities: function runtimeCapabilities(storageManager) {
    return new _RuntimeCapabilities2.default(storageManager);
  }
});

exports.default = RuntimeFactory;