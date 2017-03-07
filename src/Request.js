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
const methods = {GET: 'get', POST: 'post'};

let fetch = require('node-fetch');


class Request {
  constructor() {
    let _this = this
    console.log('Node http Request');
    Object.keys(methods).forEach((method) => {
      _this[methods[method]] = (url, options) => {
        return new Promise((resolve, reject) => {
          _this.makeLocalRequest(method, url, options).then(function(result) {
            resolve(result)
          }).catch((reason) => {
            reject(reason)
          });
        });
      };
    });
  }

  /**
   * handling request methods
   * @returns {text<string>}
   **/
  makeLocalRequest(method, url, options) {
    let _this =this
    console.log('HTTPS Request:'.yellow, method, url, options);

    return new Promise(function(resolve, reject) {
      let urlMap = _this.mapProtocol(url);

      console.log('Mapped url is '.yellow, urlMap,'method is:'.green, method);
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

      if(method === 'GET') {
        // handle GET method
        fetch(urlMap).then((res) => {
          console.log('statusCode is: '.green,  res.status)
          return res.text()
        }).then((body)=> {
          resolve(body.toString('utf8'))
        }).catch((err) => {
          console.error('Error occured on GET method of url:'.red , urlMap, ' reason :'.red, err);
        });

      } else if(method === 'POST') {
        let postOptions = {
          method: 'POST',
/*          headers: { 
            'Content-Type': 'application/json',
            'cache-control': 'no-cache',
          },*/
          body: options
        };

        fetch(urlMap, postOptions).then((res) => {
          console.log('statusCode is: '.green,  res.status)
          return res.text()
        }).then((body) => {
          resolve(body.toString('utf8'))
        }).catch((error) => {
          console.error('Error occured on POST method of url:',urlMap, 'with options:', options, 'reason :', err);
        });
      }
    });
  }

 /**
  * @returns {variable<string>}
  **/
  mapProtocol(url) {
    let protocolmap = {
      'localhost://': 'https://',
      'undefined://': 'https://',
      'hyperty-catalogue://': 'https://',
      'https://': 'https://',
      'http://': 'https://'
    }

    let foundProtocol = false
    for (let protocol in protocolmap) {
      if (url.slice(0, protocol.length) === protocol) {
        url = protocolmap[protocol] + url.slice(protocol.length, url.length)
        foundProtocol = true
        break
      }
    }

    if (!foundProtocol) {
      throw new Error('Invalid protocol of url: ' + url)
    }
    return url
  }
}

export default Request;
