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
const methods = {GET: 'get', POST: 'post', DELETE: 'delete', UPDATE: 'update'};

import https from 'https';

class Request {

  constructor() {

    console.log('Node http Request');
    let _this = this;

    Object.keys(methods).forEach(function(method) {
      _this[methods[method]] = function(url) {
        return new Promise(function(resolve, reject) {
          _this._makeLocalRequest(methods[method], url).then(function(result) {
            resolve(result);
          }).catch(function(reason) {
            reject(reason);
          });
        });
      };
    });
  }

  _makeLocalRequest(method, url) {
    console.log('HTTPS Request:', method, url);
    return new Promise(function(resolve, reject) {
      // TODO: Check why the url have localhost and undefined like a protocol
      // check the RuntimeUA
      let protocolmap = {
        'hyperty-catalogue://': 'https://',
        'https://': 'https://'
      };

      let usedProtocol;

      let foundProtocol = false;
      for (let protocol in protocolmap) {
        if (url.slice(0, protocol.length) === protocol) {
          console.log("exchanging " + protocol + " with " + protocolmap[protocol]);
          url = protocolmap[protocol] + url.slice(protocol.length, url.length);
          usedProtocol = protocolmap[protocol];
          foundProtocol = true;
          break;
        }
      }

      if(!foundProtocol) {
        throw new Error(' Invalid protocol of url:', url);
      }

      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
      let req = https.get(url, (response) => {
        console.log('statusCode:', response.statusCode);
        let body = '';
        response.on('data', (data) => {
          body += data;
        });

        response.on('end', () => {
          resolve(body.toString('utf8'));
        });

      });

      req.end();
      req.on('error', (e) => {
        console.error('Error:', e);
        reject(e);
      });

    });
  }

}

export default Request;
