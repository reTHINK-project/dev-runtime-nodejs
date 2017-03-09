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

import SandboxWorker from './SandboxWorker';
import SandboxApp from './SandboxApp';
import Request from './Request';
import atob from 'atob';

import StorageManager from 'service-framework/dist/StorageManager';
import { RuntimeCatalogue } from 'service-framework/dist/RuntimeCatalogue';
import PersistenceManager from 'service-framework/dist/PersistenceManager';

import { LocalStorage } from 'node-localstorage';
import Dexie from 'dexie';
import setGlobalVars from 'indexeddbshim';

import RuntimeCapabilities from './RuntimeCapabilities';


let createStorageManager = () => {
  // global.window= global;
  // setGlobalVars(global.window);
  // window.shimIndexedDB.__useShim();
  // cwindow.shimIndexedDB.__debug(true);
  let indexeddB = {};
  setGlobalVars(indexeddB);
  let {indexedDB, IDBKeyRange } = indexeddB;
  let storageName = 'cache';

  const db = new Dexie(storageName, {
    indexedDB: indexedDB,
    IDBKeyRange: IDBKeyRange
  });

  storageManager = new StorageManager(db, storageName);
  return storageManager;
};

let storageManager = createStorageManager();

let RuntimeFactory = Object.create({
    createSandbox(capabilities) {
      return new Promise((resolve, reject)  => {

        let capability = 'node';
        let SandboxCapabilities = {};

        this.capabilitiesManager.isAvailable(capability).then((result) => {
          if(result) {
            SandboxCapabilities = { "node": true };
            resolve(new SandboxWorker(__dirname + '/ContextServiceProvider.js'));
          } else {


          }
         }).catch((reason) => {
           console.error('[createSandbox ], Error occured while creating Sandbox, reason : ', reason);
           reject(reason);
        });

        // resolve(new SandboxWorker(__dirname + '/ContextServiceProvider.js'));
      });
    },

    createAppSandbox() {
      return new SandboxApp(__dirname + '/ContextApp.js');
    },

    createHttpRequest() {
      let request = new Request();
      return request;
    },

    atob(b64) {
      return atob(b64);
    },

    persistenceManager() {
      let localStorage = new LocalStorage('./scratch');
      return new PersistenceManager(localStorage);
    },

    storageManager() {
      return storageManager;
    },

    createRuntimeCatalogue() {
      this.catalogue = new RuntimeCatalogue(this);
      return this.catalogue;
    },

    runtimeCapabilities() {
      this.capabilitiesManager = new RuntimeCapabilities(storageManager);
      return  this.capabilitiesManager;
    }

});

export default RuntimeFactory;
