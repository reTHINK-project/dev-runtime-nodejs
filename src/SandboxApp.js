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


//global : Its a global namespace object
// hince we use global instead of window

import { Sandbox, SandboxType } from 'runtime-core/dist/sandbox';
import MiniBus from 'runtime-core/dist/minibus';

const EventEmitter = require('events').EventEmitter;
// // create an instance of the EventEmitter object
const eventEmitter = new EventEmitter();

export default class SandboxApp extends Sandbox{
  constructor() {
    console.log('########### in Sandbox App');
    super();

    // myEmitter.on('event', () => {
    //   console.log('an event occurred!');
    // });
    // myEmitter.emit('event');

    this.type = SandboxType.NORMAL;
    process.on('message', (e) => {
      // if (!!!this)

      // THIS IS A REFERENCE TO SANDBOX
      console.log('e.source is ::', e);
      console.log('this is :::', this);
      this.origin = e.form;

      if (e.to.startsWith('core:'))
          return;

      this._onMessage(e);
    });

    // process.on('message', function(msg) {
    //     console.log('----SandboxApp recieved message---------- message is:', e);
    //     if (!!!this.origin)
    //     console.log('e.source is ::', msg);
    //     this.origin = process;
    //
    //     if (e.to.startsWith('core:'))
    //         return;
    //
    //     this._onMessage(msg);
    //   });
  }

  _onPostMessage(msg) {
    console.log('SandboxApp postMessage message');
    this.origin.postMessage(msg, '*');
  }
}
