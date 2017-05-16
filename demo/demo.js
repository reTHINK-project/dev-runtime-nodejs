let fs = require('fs');
let path = require('path');

let rethink = require('runtime-nodejs/dist/RuntimeNode.js');

// import rethink from './RuntimeNode';

// let domain = 'hysmart.rethink.ptinovacao.pt';
let domain = 'localhost';
const hypertyURI = (domain, hyperty) => `https://catalogue.${domain}/.well-known/hyperty/${hyperty}`;

let runtime = rethink.install({
  domain: domain,
  development: true
}).then((runtime) => {
  console.log('\n loading hyperty :'.green, hypertyURI(domain, 'NodeHyperty'));
  runtime.requireHyperty(hypertyURI(domain, 'NodeHyperty'))
    .then((NodeHyperty) => {
      console.log('Hyperty loaded :\n'.green);
      console.log('NodeHyperty -->\n'.blue, NodeHyperty);
      // ..... here we can manipulate hyperty instance
      // note : before trying this make sure that the reTHINK toolkit is up running for node with the command(in dev-hyperty-toolkit) :npm run start:node
      //

    }).catch((reason) => {
      console.log('Error:', reason);
    });
}).catch((e) => {
  console.error('aie !', e);
});
