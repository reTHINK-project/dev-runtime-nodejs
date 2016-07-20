'use strict';

var rethink = require('./RuntimeUAStub');
// console.log('-------------rethink is', rethink);
// var Sandbox = require('runtime-core').sandbox;
// var MiniBus = require('runtime-core').minibus;
//
// console.log('Sandbox: ', Sandbox);
// console.log('MiniBus: ', MiniBus);

var express = require('express');
var path = require('path');
var log4js = require('log4js');
var domain = 'hybroker.rethink.ptinovacao.pt';
var logger = log4js.getLogger('server');
var app = express();
var hypertyURI = function hypertyURI(domain, hyperty) {
  return 'http://catalogue.' + domain + '/.well-known/hyperty/' + hyperty;
};

log4js.configure({
  appenders: [{ type: 'console' }],
  levels: {
    server: 'DEBUG'
  }
});

app.use(log4js.connectLogger(logger, {
  level: 'auto'
}));
app.set('trust proxy', 1);
app.use(express.static(path.resolve(__dirname, '../static/')));
app.listen(80);

var runtime = rethink.default.install({
  domain: domain,
  development: true
}).then(function (runtime) {
  console.log('houra ! runtime loaded', runtime);
  console.log('\nloading hyperty :', hypertyURI(domain, 'UserStatus'));
  runtime.requireHyperty(hypertyURI(domain, 'UserStatus')).then(function (userStatusHyperty) {
    console.log('userStatusHyperty', userStatusHyperty);
  }).catch(function (reason) {
    console.log('Error:', reason);
  });
}).catch(function (e) {
  console.error('aie !', e);
});
