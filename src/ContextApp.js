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
import { Sandbox, SandboxRegistry } from 'runtime-core/dist/sandbox';
import MiniBus from 'runtime-core/dist/minibus';
import _eval from 'eval';

//  The contextApp is complmentary module to the  RuntimeNode that creates the Context where the Hyperty will be deployed 
//  The contextApp handls communiocation between the Hyperty and the coreRuntime

function createContextApp(coreRuntime) {

  process._miniBus = new MiniBus();
  process._miniBus._onPostMessage = function(msg) {
      // onPostMessage on the miniBus will be sent to coreRuntime 
      coreRuntime.send(msg);
};
// EventListener on the IPC communication channel between the coreRuntime and the RuntimeNode for messages sent from the coreRuntime
coreRuntime.on('message', function(event) {
    if (event.to.startsWith('runtime:loadedHyperty'))
        return;

    // _onMessage received on the coreRuntime miniBus
    process._miniBus._onMessage(event);
  });

  process._registry = new SandboxRegistry(process._miniBus);
  process._registry._create = function(url, sourceCode, config) {
    try {
      let activate = _eval(sourceCode, true);
      return activate.default(url, process._miniBus, config);
    } catch (error) {
      console.log('ERROR:', error);
    }

  };
};

function getHyperty(hypertyDescriptor) {
  console.log('Get Hyperty:', hypertyDescriptor, process._registry.components);
  return process._registry.components[hypertyDescriptor];
};

export default { createContextApp, getHyperty };
