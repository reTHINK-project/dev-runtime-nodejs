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
/**
 * Node.js child process (simultaneously is a parent process of ContextServiceProvider sandbox)
 * used as an isolated sandbox to load the Hyperty runtime aka coreRuntime
 **/
'use strict';

var _urijs = require('urijs');

var _urijs2 = _interopRequireDefault(_urijs);

var _RuntimeFactory = require('./RuntimeFactory');

var _RuntimeFactory2 = _interopRequireDefault(_RuntimeFactory);

var _eval2 = require('eval');

var _eval3 = _interopRequireDefault(_eval2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domain = 'localhost';
var runtimeURL = 'https://catalogue.' + domain + '/.well-known/runtime/Runtime';
var catalogue = _RuntimeFactory2.default.createRuntimeCatalogue();

// returnHyperty givent the runtimeHypertyURL,
// Sends message ='loadedHyperty' to the the parent process RuntimeNode throught IPC channel

function returnHyperty(hyperty) {
  process.send({ to: 'runtime:loadedHyperty', body: hyperty });
}

// while loading the protocolStub search hyperty in the runtime registry
function searchHyperty(runtime, descriptor) {
  var hyperty = undefined;
  var index = 0;
  while (!hyperty && index < runtime.registry.hypertiesList.length) {
    if (runtime.registry.hypertiesList[index].descriptor === descriptor) hyperty = runtime.registry.hypertiesList[index];
    index++;
  }
  console.log('Hyeprty founded!'.green);
  return hyperty;
}

// Install runtime on the core Sandbox
function runtimeReady(runtime) {
  // coreRuntime global EventListener for anty incoming message
  process.on('message', function (msg) {
    console.log('Message Received on runtime-core: \n'.blue, msg);

    if (msg.to === 'core:loadHyperty') {
      var descriptor = msg.body.descriptor;
      var hyperty = searchHyperty(runtime, descriptor);
      if (hyperty) {
        returnHyperty({ runtimeHypertyURL: hyperty.hypertyURL });
      } else {
        runtime.loadHyperty(descriptor).then(returnHyperty).catch(function (error) {
          console.error('Error while loading Hyperty, reason: ', error);
        });
      }
    } else if (msg.to === 'core:loadStub') {
      runtime.loadStub(msg.body.domain);
    }
  }, false);

  console.log('--> sending to Main process RuntimeNode'.orange);
  process.send({ to: 'runtime:installed', body: {} });
}

var runtimeDescriptor = void 0;

// Gets RuntimeDescriptor from the runtime catalogue
catalogue.getRuntimeDescriptor(runtimeURL).then(function (descriptor) {

  runtimeDescriptor = descriptor;

  if (descriptor.sourcePackageURL === '/sourcePackage') {
    return descriptor.sourcePackage;
  } else {
    return catalogue.getSourcePackageFromURL(descriptor.sourcePackageURL);
  }
}).then(function (sourcePackage) {
  var RuntimeUA = (0, _eval3.default)(sourcePackage.sourceCode, true);
  var runtime = new RuntimeUA(runtimeDescriptor, _RuntimeFactory2.default, domain);

  runtime.init().then(function () {

    runtimeReady(runtime);
  }).catch(function (reason) {
    console.log('Error init', reason);
  });
}).catch(function (reason) {
  console.error('Error getting the RuntimeDescriptor from the service framework catalogue, reason: ', reason);
});

// coreRuntime Process  error handling
process.on('warning', function (warning) {
  console.warn(warning.name);
  console.warn(warning.message);
  console.warn(warning.stack);
});

process.on('exit', function (msg) {
  console.log('child process core exited');
  process.exit();
  process.kill();
});

process.on('error', function (msg) {
  console.warn('child process error core stopped');
  process.exit();
  process.kill();
});

process.on('SIGINT', function () {
  console.warn('Received SIGINT. all Node Sub-Process are exited');
  process.exit();
  process.kill();
}); // to catch crtl-c

process.on('SIGTERM', function () {
  console.warn('Received SIGTERM. core Press Control-D to exit.');
  process.exit();
  process.kill();
}); // to catch kill