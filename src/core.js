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

let domain = 'hybroker.rethink.ptinovacao.pt';

let parameters = 'http://catalogue.' + domain + '/.well-known/runtime/NodeRuntime';
let runtimeURL = 'http://catalogue.' + domain + '/.well-known/runtime/NodeRuntime';//.well-known/runtime/MyRuntime
let development = parameters.development === 'true';
let catalogue = RuntimeFactory.createRuntimeCatalogue(development);

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
  return hyperty;
}

console.log('\n------------------- In child thread core.js  --------------------'.green);
catalogue.getRuntimeDescriptor(runtimeURL)
  .then(function(descriptor) {
      let descriptorRef = descriptor;
      let sourcePackageURL = descriptorRef.sourcePackageURL;
      if (sourcePackageURL === '/sourcePackage') {
        return descriptorRef.sourcePackage;
      }
      return catalogue.getSourcePackageFromURL(sourcePackageURL);
    })

 .then(function(sourcePackage) {
  try {

    let RuntimeUA = _eval(sourcePackage.sourceCode, true);
    let runtime = new RuntimeUA(RuntimeFactory, domain);

    process.on('message', function(msg) {
      console.log('Message Received on runtime-core'.blue, msg);
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
        console.log('domain is :'.green, msg.body.domain);
        runtime.loadStub(msg.body.domain);
      }
    }, false);
    console.log('--> sending to Main process');
    process.send({to:'runtime:installed', body:{}});
  } catch (e) {
    console.log('error is ', e);
  }
});
