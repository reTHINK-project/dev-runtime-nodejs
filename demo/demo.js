let fs = require('fs');



let rethink = require('runtime-nodejs/dist/RuntimeNode.js');

// import rethink from './RuntimeNode'; //ES6

let domain = 'localhost';
const hypertyURI = (domain, hyperty) => `https://catalogue.${domain}/.well-known/hyperty/${hyperty}`;
const runtimeURL = 'https://catalogue.' + domain + '/.well-known/runtime/Runtime';

let runtime = rethink.default.install({
  domain: domain,
  runtimeURL,
  development: true
}).then((runtime) => {
  console.log('--> Demo loading hyperty :'.green, hypertyURI(domain, 'NodeHyperty'));
  runtime.requireHyperty(hypertyURI(domain, 'NodeHyperty')).then((NodeHyperty) => {
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
