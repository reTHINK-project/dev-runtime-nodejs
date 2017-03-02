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
let child = require('child_process');
let colors = require('colors');
let cleanExit = function() { process.exit() };

export default class SandboxWorker extends Sandbox{
  constructor(script) {
    super(script);
    console.log('-------------------------------------------- in Sandbox Worker ----------------------------------'.red);
    this.type = SandboxType.NORMAL;
    let _this = this;
    this.worker = child.fork(script);
    if (!!this.worker) {
      this.worker.on('message', function(e) {
              _this._onMessage(e);
      });
      this.worker.send('');
    } else {
      throw new Error('Your environment does not support worker \n', e);
    }

    this.worker.on('exit', function(msg) {
      console.log('child process exit SandboxWorker stopped');
      this.worker.exit();
      this.worker.kill();
    });

    this.worker.on('error', function(msg) {
      console.log('child process error  SandboxWorker stopped');
      this.worker.exit();
      this.worker.kill();
    });
  }

  _onPostMessage(msg) {
    // console.log('\n Sent message by Sandbox Worker is:\n'.red, msg);
    this.worker.send(msg);
  }
}
