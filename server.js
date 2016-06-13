
let rethink = require('./RuntimeUAStub');
console.log('-------------rethink is', rethink);
// var Sandbox = require('runtime-core').sandbox;
// var MiniBus = require('runtime-core').minibus;
//
// console.log('Sandbox: ', Sandbox);
// console.log('MiniBus: ', MiniBus);

let express = require('express');
var path = require('path');
let log4js = require('log4js');
log4js.configure({
  appenders: [{ type: 'console' }],
  levels: {
      server:  'DEBUG'
    }
});

let logger = log4js.getLogger('server');
let app = express();

app.use(log4js.connectLogger(logger, {
  level: 'auto'
}));

app.set('trust proxy', 1);
logger.info(require('path').resolve(__dirname + '/.well-known/runtime'));

// app.use(express.static(require('path').resolve(__dirname + './../.well-known/')));
app.use(express.static(path.join(__dirname, '/.well-known/runtime')));
app.listen(80);

let runtime = rethink.default.install('domain').then((runtime) => {
  console.log('houra !', runtime);
}).catch((e) => {
  console.error('aie !', e);
});
