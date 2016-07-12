
let rethink = require('./RuntimeUAStub');
// console.log('-------------rethink is', rethink);
// var Sandbox = require('runtime-core').sandbox;
// var MiniBus = require('runtime-core').minibus;
//
// console.log('Sandbox: ', Sandbox);
// console.log('MiniBus: ', MiniBus);

let express = require('express');
var path = require('path');
let log4js = require('log4js');
let domain = 'apizee.jam';
let logger = log4js.getLogger('server');
let app = express();
const hypertyURI = (domain, hyperty) => `http://catalogue.${domain}/.well-known/hyperty/${hyperty}`;

log4js.configure({
  appenders: [{ type: 'console' }],
  levels: {
      server:  'DEBUG'
    }
});

app.use(log4js.connectLogger(logger, {
  level: 'auto'
}));
app.set('trust proxy', 1);
app.use(express.static(path.resolve(__dirname, '../static/')));
app.listen(80);

let runtime = rethink.default.install({
  domain: domain,
  development: true
}).then((runtime) => {
  console.log('houra ! runtime loaded', runtime);
  console.log('\nloading hyperty :', hypertyURI(domain, 'UserStatus'));
  runtime.requireHyperty(hypertyURI(domain, 'UserStatus')).then((userStatusHyperty) => {
    console.log('userStatusHyperty', userStatusHyperty);
  }).catch((reason) => {
    console.log('Error:', reason);
  });
}).catch((e) => {
  console.error('aie !', e);
});
