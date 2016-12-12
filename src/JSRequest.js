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

'use strict';
class JSRequest {
  constructor() {
    this.client = require('request');
    console.log('Node http Request');
    let _this = this;
    Object.keys(methods).forEach(function(method) {
      _this[methods[method]] = function(url, options) {
        return new Promise(function(resolve, reject) {
          this.client.makeLocalRequest(methods[method].toUpperCase(), url, options).then(function(result) {
            resolve(result);
          }).catch(function(reason) {
            reject(reason);
          });
        });
      };
    });
  }

  makeLocalRequest(method, url, options) {
    let _this = this;
    console.log('HTTPS Request:', method, url, options);
    return new Promise(function(resolve, reject) {
      // TODO: Check why the url have localhost and undefined like a protocol
      // check the RuntimeUA
      url = this.client.urlMapping(url);
      console.log('mappin is done *******************', url);
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
      if( method === 'GET') {
        this.client.get( url, (err, response, statusCode) => {
          console.log('statusCode: ', statusCode);
          if(err) {
            console.error('[makeLocalRequest GET method ] Error :', err);
          }
          callback(response, statusCode); // TODO: getBody()
        });
      }
    });
  }


  urlMapping(url) {
    let protocolmap = {
      'hyperty-catalogue://': 'https://',
      'https://': 'https://',
      'localhost://':'https://',
      'hyperty-catalogue':'https://',
      'undefined://':'https://',
      'http://':'http://'
    }
    let foundProtocol = false;
    for (let protocol in protocolmap) {
      if (url.slice(0, protocol.length) === protocol) {
        console.log("exchanging " + protocol + " with " + protocolmap[protocol]);
        url = protocolmap[protocol] + url.slice(protocol.length, url.length);
        console.log('url is : ', url);
        foundProtocol = true;
        break;
      }
    }
    if(!foundProtocol) {
      throw new Error(' Invalid protocol of url:', url);
    }
    return url;
  }

  get(url, callback) {
    console.log('HTTPS Request:', url);
    let urlMap = this.client.urlMapping(url);
    this.client.get({
      url: urlMap
    }, function(err, response, body) {
      if (err) {
        console.error('error is get response : ', err)
        callback(err, null, null);
      }
      console.log('response.statusCode is :', response.statusCode);
      callback(null, body, response.statusCode);
    });
  }

  put(url, message, callback) {
    this.client.put({
      headers: { 'content-type': 'application/json' },
      url: url,
      body: message
    }, function(err, response, body) {
      if (err) {
        callback(err, null, null);
      }
      callback(null, body, response.statusCode);
    });
  }

  del(url, callback) {
    this.client.del({
      url: url
    }, function(err, response, body) {
      if (err) {
        callback(err, null, null);
      }
      callback(null, body, response.statusCode);
    });
  }
}
module.exports = JSRequest;
