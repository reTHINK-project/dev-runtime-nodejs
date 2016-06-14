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
* distributed under the Liceruntimense is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

// global replaces window

import app from './ContextApp';
import URI from 'urijs';

let registry = {};

// let app = require('./ContextApp');
// let URI = require('urijs');
//import { create as createIframe } from './iframe';

const threads = require('threads');
const config  = threads.config;
const spawn   = threads.spawn;

// Set base paths to thread scripts
config.set({
  basepath: {
    // browser: 'http://myserver.local/thread-scripts',
    node: __dirname
  }
});
console.log(__dirname);
let buildMsg = (hypertyComponent, msg) => {
        return {
          runtimeHypertyURL: msg.body.runtimeHypertyURL,
          status: msg.body.status,
          instance: hypertyComponent.instance,
          name: hypertyComponent.name
        };
      };

let runtimeProxy = {
  requireHyperty: (hypertyDescriptor)=> {
    // return new Promise((resolve, reject)=> {
    //     let loaded = (e)=> {
    //         if (e.data.to === 'runtime:loadedHyperty') {
    //           resolve(buildMsg(app.getHyperty(e.data.body.runtimeHypertyURL), e.data));
    //         }
    //       };
    //     registry.runtime.send({to:'core:loadHyperty', body:{descriptor: hypertyDescriptor}}, '*');
    //   });
  },

  requireProtostub: (domain)=> {
    registry.runtime.send({to:'core:loadStub', body:{domain: domain}}, '*');
  }
};

let RethinkBrowser = {
    install: function({domain, runtimeURL, development}={}) {
        return new Promise((resolve, reject)=> {
            //let runtime = this.getRuntime(runtimeURL, domain, development);
            registry.runtime = spawn('core.js');
            console.log('#1');
            registry.runtime
            .send({do:'Something'})
            .on('message', (e)=> {
              // console.log('---------core.js replied:', e.data);
              if (e.data === 'runtime:installed') {
                resolve(runtimeProxy);

              }
            })
            .on('error', function(error) {
              console.error('runtime core install failed:', error);
              registry.runtime.kill();
              reject(error);
            })
            .on('exit', function() {
              console.log('runtime core exited.');
              registry.runtime.kill();
            });

            // app.create(registry);
          });
      },

    getRuntime(runtimeURL, domain, development) {
      if (!!development) {
        runtimeURL = runtimeURL || 'hyperty-catalogue://catalogue.' + domain + '/.well-known/runtime/Runtime';//`https://${domain}/resources/descriptors/Runtimes.json`
        domain = domain || new URI(runtimeURL).host();
      }else {
        runtimeURL = runtimeURL || `https://catalogue.${domain}/.well-known/runtime/default`;
        domain = domain || new URI(runtimeURL).host().replace('catalogue.', '');
      }

      return {
          url: runtimeURL,
          domain: domain
        };
    }
  };
export default RethinkBrowser;
