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

import app from './ContextApp';
import URI from 'urijs';
let domain = 'localhost';
let registry = {};
let window4Node = {};

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
    return new Promise((resolve, reject)=> {
        let loaded = (e)=> {
                if (e.data.to === 'runtime:loadedHyperty') {
                  console.log('runtime:loadedHyperty is OK');
                  resolve(buildMsg(app.getHyperty(e.data.body.runtimeHypertyURL), e.data));
                }
              };
        console.log('registry.runtime.send');
        registry.runtime.send({to:'core:loadHyperty', body:{descriptor: hypertyDescriptor}}, '*');
      });
  },

  requireProtostub: (domain)=> {
    registry.runtime.send({to:'core:loadStub', body:{domain: domain}}, '*');
  }
};

let RethinkNode = {
    install: function({domain, runtimeURL, development}={}) {
        return new Promise((resolve, reject)=> {
            let runtime = this.getRuntime(runtimeURL, domain, development);
            registry.runtime = spawn('core.js');
            registry.runtime
            .send({do:'install runtime core', data:window4Node})
            .on('message', (e)=> {
              console.log('------------------- In parent Process  -------------------------');
              console.log('\n------message recieved from child process core.js--');
              console.log('message is :', e);
              if (e.data === 'runtime:installed') {
                console.log('\nRuntime installed with success\n');
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
            // console.log(process);
            console.log(registry);
            app.create(registry.runtime);
          });
      },

    getRuntime(runtimeURL, domain, development) {
      if (!!development) {
        runtimeURL = runtimeURL || 'http://' + domain + '/.well-known/runtime/Runtime';//`https://${domain}/resources/descriptors/Runtimes.json`
        domain = domain || new URI(runtimeURL).host();
        console.log('runtimeURL is ', runtimeURL);
      }else {
        runtimeURL = runtimeURL || 'http://${domain}/.well-known/runtime/default';
        domain = domain || new URI(runtimeURL).host().replace('catalogue.', '');
      }

      return {
          url: runtimeURL,
          domain: domain
        };
    }
  };
export default RethinkNode;
