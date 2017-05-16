// version: 0.1.0
// date: Tue May 16 2017 15:19:02 GMT+0200 (CEST)
// licence: 
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

var _RuntimeNode = require('/dist/RuntimeNode');

var _RuntimeNode2 = _interopRequireDefault(_RuntimeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');
var path = require('path');

// let rethink = require('./RuntimeNode.js');


// let domain = 'hysmart.rethink.ptinovacao.pt';
var domain = 'localhost';
var hypertyURI = function hypertyURI(domain, hyperty) {
  return 'https://catalogue.' + domain + '/.well-known/hyperty/' + hyperty;
};

var runtime = _RuntimeNode2.default.default.install({
  domain: domain,
  development: true
}).then(function (runtime) {
  console.log('\n loading hyperty :'.green, hypertyURI(domain, 'NodeHyperty'));
  runtime.requireHyperty(hypertyURI(domain, 'NodeHyperty')).then(function (NodeHyperty) {
    console.log('Hyperty loaded :\n'.green);
    console.log('NodeHyperty -->\n'.blue, NodeHyperty);
    // ..... here we can manipulate hyperty instance
    // note : before trying this make sure that the reTHINK toolkit is up running for node with the command(in dev-hyperty-toolkit) :npm run start:node
    //
  }).catch(function (reason) {
    console.log('Error:', reason);
  });
}).catch(function (e) {
  console.error('aie !', e);
});
