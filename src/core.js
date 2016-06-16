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
import URI from 'urijs';
//FIXME https://github.com/reTHINK-project/dev-service-framework/issues/46
import RuntimeFactory from './RuntimeFactory';
let domain = 'localhost';

function returnHyperty(source, hyperty) {
  done({data:'runtime:loadedHyperty', body: hyperty}, '*');
  // source.postMessage({to: 'runtime:loadedHyperty', body: hyperty}, '*');
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

module.exports = function(input, done) {

  console.log('\n------------------- In child thread core.js  --------------------');
  let parameters = 'http://' + domain + '/.well-known/runtime/Runtime';
  // runtimeURL = 'https://catalogue.<domain>/.well-known/runtime/Runtime' || '<domain>'

  let runtimeURL = 'http://' + domain + '/.well-known/runtime/Runtime';//.well-known/runtime/MyRuntime
  let development = parameters.development === 'true';
  let catalogue = RuntimeFactory.createRuntimeCatalogue(development);

  catalogue.getRuntimeDescriptor(runtimeURL)
    .then(function(descriptor) {
        let descriptorRef = JSON.parse(descriptor);
        let sourcePackageURL = descriptorRef.Runtime.sourcePackageURL;
        if (sourcePackageURL === '/sourcePackage') {
          return descriptorRef.Runtime.sourcePackage;
        }
        return catalogue.getSourcePackageFromURL(sourcePackageURL);
      })
//TODO load hyperty
   .then(function(sourcePackage) {
    // eval.apply(window, [sourcePackage.sourceCode]);
    // let runtime = new Runtime(RuntimeFactory, window.location.host);
    // window.addEventListener('message', function(event) {
    //     if (event.data.to === 'core:loadHyperty') {
    //       let descriptorRef = event.data.body.descriptorRef;
    //       let hyperty = searchHyperty(runtime, descriptorRef);
    //
    //       if (hyperty) {
    //         returnHyperty(event.source, {runtimeHypertyURL: hyperty.hypertyURL});
    //       }else {
    //         runtime.loadHyperty(descriptorRef)
    //             .then(returnHyperty.bind(null, event.source));
    //       }
    //     } else if (event.data.to === 'core:loadStub') {
    //       runtime.loadStub(event.data.body.domain);
    //     }
    //   }, false);
    done({data:'runtime:installed', body:{}}, '*');
  });
};
