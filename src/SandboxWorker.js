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
import { Sandbox, SandboxType } from 'runtime-core/dist/sandbox';
import MiniBus from 'runtime-core/dist/minibus';

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

export default class SandboxWorker extends Sandbox{
  constructor(script) {
    super(script);

    this.type = SandboxType.NORMAL;
    if (!!Worker) {
      // this._worker = new Worker(script);
      this._worker = spawn(function(script) {
        console.log('Sandbox worker created');
      });
      this._worker.on('message', function(e) {
          this.on(e.data);
        }.bind(this));
      this._worker.send('');
    } else {
      throw new Error('Your environment does not support worker \n', e);
    }
  }

  _onPostMessage(msg) {
    this._worker.postMessage(msg);
  }
}
