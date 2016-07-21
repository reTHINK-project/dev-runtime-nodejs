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

export default class SandboxWorker extends Sandbox{
  constructor(script) {
    super(script);
    console.log('-------------------------------------------- in Sandbox Worker ----------------------------------');
    this.type = SandboxType.NORMAL;
    this._worker = child.fork(__dirname + '/ContextServiceProvider.js');
    console.log('-----  this._worker ::\n',   this._worker);

    // console.log();

    this._worker.on('message', function(msg) {
      console.log('Received messages by SandBox worker :', msg);
      // console.log('message is :', msg);

    });

    console.log('----------------- Sandbox worker created -------------------------');

    // this._worker.send();
    this._worker.send({});

    // eventEmitter.emit('');
    // } else {
    //   throw new Error('Your environment does not support worker \n', e);
    // }
  }

  _onPostMessage(msg) {
    this._worker.send(msg);
    // eventEmitter.emit('event', 'msg');

  }
}

// import { Sandbox, SandboxType } from 'runtime-core/dist/sandbox';
// import MiniBus from 'runtime-core/dist/minibus';
// let child = require('child_process');
//
// export default class SandboxWorker extends Sandbox{
//   constructor(script) {
//     super(script);
//     console.log('-------------------------------------------- in Sandbox Worker ----------------------------------');
//     this.type = SandboxType.NORMAL;
//     let _worker = child.fork(__dirname + '/ContextServiceProvider.js');
//     console.log(' \n _worker is ------------------::', _worker);
//     console.log('\n  this::--------------',   this);
//
//     if (!!_worker) {
//       _worker.on('message', function(e) {
//           console.log('Received messages by SandBox worker :', e);
//           // console.log('message is :', msg);
//           this._onMessage(e.data);
//
//         });
//
//       console.log('-----------------Sandbox worker created -------------------------');
//
//       _worker.send({});
//
//     // eventEmitter.emit('');
//     } else {
//       throw new Error('Your environment does not support worker \n', e);
//     }
//   }
//
//   _onPostMessage(msg) {
//     _worker.send({msg});
//     // eventEmitter.emit('event', 'msg');
//
//   }
// }
