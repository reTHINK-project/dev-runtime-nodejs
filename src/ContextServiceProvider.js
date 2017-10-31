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
 * Context Service Provider CSP that Loads and activates CSP Protostub to the CSP messaging node services
 **/

import { Sandbox, SandboxRegistry } from 'runtime-core/dist/sandbox';
import MiniBus from 'runtime-core/dist/minibus';
import _eval from 'eval';

process._miniBus = new MiniBus();

process._miniBus._onPostMessage = (msg) => {
  process.send(msg);
};

 // global EventListener on the IPC communication channel between the Context Service Provider CSP and the RuntimeNode for messages sent from the coreRuntime
process.on('message', (msg) => {
  process._miniBus._onMessage(msg);
});

process._registry = new SandboxRegistry(process._miniBus);
process._registry._create = (url, sourceCode, config) => {
  try {

    let activate = _eval(sourceCode, true);

    console.log('TYPEOF:', typeof(activate), typeof(activate.default));

    if (typeof(activate) === 'function') {
      return activate(url, process._miniBus, config);
    } else if (typeof(activate.default) === 'function') {
      return activate.default(url, process._miniBus, config);
    }

  } catch (reason) {
    console.log('ERROR while activating the ProtoStub or IDP Proxy on the CSP, reason:'.red);
    console.log(reason);
  }
};
