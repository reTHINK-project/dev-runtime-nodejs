'use strict';

var _RuntimeNode = require('./RuntimeNode');

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

var runtime = _RuntimeNode2.default.install({
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