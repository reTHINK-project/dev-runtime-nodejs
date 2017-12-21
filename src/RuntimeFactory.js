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

require('indexeddbshim')(global);

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

import WebCrypto from 'node-webcrypto-ossl';

let RuntimeFactory = Object.create({
    createSandbox(capabilities) {
      return new Promise((resolve, reject)  => {

        let capability = 'node';
        let SandboxCapabilities = {};

        this.capabilitiesManager.isAvailable(capability).then((result) => {
          if(result) {
            SandboxCapabilities = { "node": true };
            resolve(new SandboxWorker( '../dist/ContextServiceProvider.js'));
          } else {


          }
         }).catch((reason) => {
           console.error('[createSandbox ], Error occured while creating Sandbox, reason : ', reason);
           reject(reason);
        });
      });
    },

    createAppSandbox() {
      return new SandboxApp( '../dist/ContextApp.js');
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

		storageManager(name, schemas) {

			if (!this.databases) { this.databases = {}; }
			if (!this.storeManager) { this.storeManager = {}; }

			// Using the implementation of Service Framework
			// Dexie is the IndexDB Wrapper
			if (!this.databases.hasOwnProperty(name)) {

				global.shimIndexedDB.__useShim();
				global.shimIndexedDB.__setConfig({checkOrigin: false});

				this.databases[name] = new Dexie(name, {
					indexedDB: global.indexedDB,
					IDBKeyRange: global.IDBKeyRange
				})

			}

			if (!this.storeManager.hasOwnProperty(name)) {
				this.storeManager[name] = new StorageManager(this.databases[name], name, schemas);
			}

			return this.storeManager[name];
		},

    createRuntimeCatalogue() {
      this.catalogue = new RuntimeCatalogue(this);
      return this.catalogue;
    },

		runtimeCapabilities() {

			if (!this.capabilitiesManager) {
				let storageManager = this.storageManager('capabilities');
				this.capabilitiesManager = new RuntimeCapabilities(storageManager);
			}

			return this.capabilitiesManager;
		},

    createWebcrypto() {
      return new WebCrypto();
    }

});

export default RuntimeFactory;
