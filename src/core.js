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

// function returnHyperty(source, hyperty) {
//   source.postMessage({to: 'runtime:loadedHyperty', body: hyperty}, '*');
// }

// function searchHyperty(runtime, descriptor) {
//   let hyperty = undefined;
//   let index = 0;
//   while (!hyperty && index < runtime.registry.hypertiesList.length) {
//     if (runtime.registry.hypertiesList[index].descriptor === descriptor)
//         hyperty = runtime.registry.hypertiesList[index];
//
//     index++;
//   }
//
//   return hyperty;
// }
module.exports = function(input, done) {

  console.log('************* in core.js *********************');
  let parameters = 'http://www.google.com';// URL of the current browser page
  // hyperty-catalogue://hybroker.rethink.ptinovacao.pt/.well-known/runtime/Runtime

  let runtimeURL = 'https://localhost/.well-known/runtime/';///.well-known/runtime/MyRuntime
  let development = parameters.development === 'true';
  let catalogue = RuntimeFactory.createRuntimeCatalogue(development);
  console.log('#ici');
  catalogue.getRuntimeDescriptor(runtimeURL)
    .then(function(descriptor) {
        done({data:'runtime:installed', body:{}}, '*');
        let sourcePackageURL = descriptor.sourcePackageURL;
        if (sourcePackageURL === '/sourcePackage') {
          return descriptor.sourcePackage;
        }

        return catalogue.getSourcePackageFromURL(sourcePackageURL);
      }).catch(function(error) {
        console.error(error);
        done({data:'runtime:installed', body:{}}, '*');
      });

  // .then(function(sourcePackage) {
  // done('Awesome thread script may run in browser and node.js!');

  // eval.apply(window, [sourcePackage.sourceCode]);
  //
  // let runtime = new Runtime(RuntimeFactory, window.location.host);
  // window.addEventListener('message', function(event) {
  //     if (event.data.to === 'core:loadHyperty') {
  //       let descriptor = event.data.body.descriptor;
  //       let hyperty = searchHyperty(runtime, descriptor);
  //
  //       if (hyperty) {
  //         returnHyperty(event.source, {runtimeHypertyURL: hyperty.hypertyURL});
  //       }else {
  //         runtime.loadHyperty(descriptor)
  //             .then(returnHyperty.bind(null, event.source));
  //       }
  //     }else if (event.data.to === 'core:loadStub') {
  //       runtime.loadStub(event.data.body.domain);
  //     }
  //   }, false);
  // parent.postMessage({to:'runtime:installed', body:{}}, '*');
  // });

};
