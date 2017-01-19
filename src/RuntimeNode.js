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

let Promise = require('es6-promise');


import app from './ContextApp';
import URI from 'urijs';
let domain = 'localhost';
let coreRuntime = {};

let colors = require('colors');

let child = require('child_process');
coreRuntime  = child.fork(__dirname + '/core.js');

let buildMsg = (hypertyComponent, msg) => {

  console.log('hyperty:', hypertyComponent, msg);

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
      coreRuntime.on('message', function(msg) {
        console.log('---- Message from runtime core ----'.green);
        console.log('Hyperty loaded :\n'.green);

        if (msg.to === 'runtime:loadedHyperty') {
          resolve(buildMsg(app.getHyperty(msg.body.runtimeHypertyURL), msg));
        }
      });
      // console.log('coreRuntime .send'.green);
      coreRuntime.send({to:'core:loadHyperty', body:{descriptor: hypertyDescriptor}});
    });
  },

  requireProtostub: (domain)=> {
    coreRuntime.send({to:'core:loadStub', body:{domain: domain}});
  }
};

//
let RethinkNode = {
  install: function({domain, runtimeURL, development}={}) {
    return new Promise((resolve, reject)=> {

      let runtime = this.getRuntime(runtimeURL, domain, development);
      // console.log(runtime);
      coreRuntime.send({do:'install runtime core'});
      coreRuntime.on('message', function(msg) {
        // console.log('------------------- In parent Process  -------------------------'.green);
        // console.log('\n--> message recieved from child process core.js'.green);
        // console.log('message is :', msg);
        if (msg.to === 'runtime:installed') {
          console.log('\n Runtime installed with success\n'.blue);
          resolve(runtimeProxy);
        }
      });

      coreRuntime.on('error', function(error) {
        console.error('runtime core install failed:', error);
        coreRuntime .kill();
        reject(error);
      });

      coreRuntime.on('exit', function() {
        console.log('runtime core exited.');
        coreRuntime.kill();
      });

      app.createContextApp(coreRuntime);
    });
  },

  getRuntime(runtimeURL, domain, development) {
    if (!!development) {
      runtimeURL = runtimeURL || 'http://' + domain + '/.well-known/runtime/Runtime';
      domain = domain || new URI(runtimeURL).host();
    } else {
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
