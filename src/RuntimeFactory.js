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
import SandboxWorker from './SandboxWorker';
import SandboxApp from './SandboxApp';
import Request from './Request';

import {RuntimeCatalogueLocal, RuntimeCatalogue} from './RuntimeCatalogue.js';//FIXME
// import {RuntimeCatalogueLocal, RuntimeCatalogue} from './../service-framework/src/RuntimeCatalogue.js';
// import {RuntimeCatalogueLocal, RuntimeCatalogue} from './service-framework/src/RuntimeCatalogue.js';

// let SandboxWorker = require('./SandboxWorker');
// let SandboxApp = require('./SandboxApp');
// let Request = require('./Request');

const RuntimeFactory = Object.create({
  //
  // eventEmitter() {
  //   if ((this.eventEmitter === 'undefined') || (this.eventEmitter === null))
  //   {
  //     this.eventEmitter = new require('events').EventEmitter();
  //   }
  //   return this.eventEmitter;
  // },

  createSandbox() {
    console.log('#### in RuntimeFactory SandboxWorker');
    return new SandboxWorker('./ContextServiceProvider.js');
  },

  createAppSandbox() {
    console.log('###### in RuntimeFactory SandboxApp');
    return new SandboxApp();
  },

  createHttpRequest() {
    let request = new Request();
    return request;
  },
  createRuntimeCatalogue(development) {
    if (!this.catalogue)
        this.catalogue = development || new RuntimeCatalogueLocal(this);
    // this.catalogue = development ? new RuntimeCatalogueLocal(this) : new RuntimeCatalogue(this);

    return this.catalogue;
  },
  createRuntimeCatalogueRemote() {
    console.log('*HERE');
    let _this = this;
    let factory = {
      createHttpRequest: function() {
        return _this.createHttpRequest();
      }
    };

    return new RuntimeCatalogueLocal(factory);
  }

});

export default RuntimeFactory;
