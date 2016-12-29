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
*
*/

import { Sandbox, SandboxType } from 'runtime-core/dist/sandbox';
import MiniBus from 'runtime-core/dist/minibus';
let child = require('child_process');

export default class SandboxApp extends Sandbox {
  constructor() {
    super();
    console.log('---------------------- Sandbox App -----------------------'.green);

    this.type = SandboxType.NORMAL;
    let _this = this;

    process.on('message', function(msg)  {
        console.log('SandboxApp Received message  is :\n'.green, msg);

        if (msg.hasOwnProperty('to') && msg.to.startsWith('core:'))
          return;

        _this._onMessage(msg);
    });

    process.on('error', function(error){
      console.error('[SandboxApp]- Error:'.red, error);
      throw error;
    });
  }

  _onPostMessage(msg) {
    console.log('SandboxApp postMessage to runtimeNode ContextApp: '.green);
    process.send(msg);
  }
}
