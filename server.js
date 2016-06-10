
let rethink = require('./RuntimeUAStub');
console.log('-------------rethink is', rethink);
// var Sandbox = require('runtime-core').sandbox;
// var MiniBus = require('runtime-core').minibus;
//
// console.log('Sandbox: ', Sandbox);
// console.log('MiniBus: ', MiniBus);

let runtime = rethink.default.install('domain').then((runtime) => {
  console.log('houra !', runtime);
}).catch((e) => {
  console.error('aie !', e);
});
