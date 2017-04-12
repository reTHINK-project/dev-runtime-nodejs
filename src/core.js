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

let fs = require('fs');
import URI from 'urijs';

// //FIXME https://github.com/reTHINK-project/dev-service-framework/issues/46
import RuntimeFactory from './RuntimeFactory';

import _eval from 'eval';



console.debug = console.log;

// let domain = 'hysmart.rethink.ptinovacao.pt';
let domain = 'localhost';

let runtimeURL = 'https://catalogue.' + domain + '/.well-known/runtime/Runtime';
let catalogue = RuntimeFactory.createRuntimeCatalogue();

function returnHyperty(hyperty) {
  process.send({to:'runtime:loadedHyperty', body: hyperty});
}

function searchHyperty(runtime, descriptor) {
  let hyperty = undefined;
  let index = 0;
  while (!hyperty && index < runtime.registry.hypertiesList.length) {
    if (runtime.registry.hypertiesList[index].descriptor === descriptor)
        hyperty = runtime.registry.hypertiesList[index];
    index++;
  }
  console.log('Hyeprty founded!'.green);
  return hyperty;
}

function runtimeReady(runtime) {

  process.on('message', function(msg) {
    console.log('Message Received on runtime-core: \n'.blue);

    if (msg.to === 'core:loadHyperty') {
      let descriptor = msg.body.descriptor;
      let hyperty = searchHyperty(runtime, descriptor);
      if (hyperty) {
        returnHyperty({runtimeHypertyURL: hyperty.hypertyURL});
      } else {
        runtime.loadHyperty(descriptor)
            .then(returnHyperty);
      }
    } else if (msg.to === 'core:loadStub') {
      runtime.loadStub(msg.body.domain);
    }
  }, false);

  console.log('--> sending to Main process RuntimeNode'.red);
  process.send({to:'runtime:installed', body:{}});

}

let runtimeDescriptor; 

catalogue.getRuntimeDescriptor(runtimeURL).then((descriptor) => {
  runtimeDescriptor = descriptor;

  if (descriptor.sourcePackageURL === '/sourcePackage') {
    return descriptor.sourcePackage;
  } else {
    return catalogue.getSourcePackageFromURL(descriptor.sourcePackageURL);
  }

}).then(function(sourcePackage) {
  
    // let runtime = new RuntimeUA(RuntimeFactory, domain); 
    let RuntimeUA = _eval(sourcePackage.sourceCode, true);
    let runtime = new RuntimeUA(runtimeDescriptor, RuntimeFactory, domain);

    runtime.init().then(() => {

      runtimeReady(runtime);

    }).catch((reason) => {
      console.log('Error init', reason);
    });



}).catch((error) => {
  console.log('Error: ', error);
});

process.on('exit', function(msg) {
   console.log('child process core exited');
   process.exit();
   process.kill();
});

process.on('error', function(msg) {
  console.log('child process error core stopped');
  process.exit();
  process.kill();
});


process.on('SIGINT', () => {
  console.log('Received SIGINT. all Node Sub-Process are exited');
  process.exit();
  process.kill();
}); // to catch crtl-c

process.on('SIGTERM', () => {
  console.log('Received SIGTERM. core Press Control-D to exit.');
  process.exit();
  process.kill();
}); // to catch kill 