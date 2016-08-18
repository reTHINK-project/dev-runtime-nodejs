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
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
app.set('trust proxy', 1);
app.use(express.static(path.resolve(__dirname, '../static/')));
app.listen(8080);

var runtime = rethink.default.install({
  domain: domain,
  development: true
}).then(function (runtime) {
  console.log('houra ! runtime loaded', runtime);
  console.log('\n loading hyperty :', hypertyURI(domain, 'HelloWorldObserver'));
  var helloObserver = {};
  runtime.requireHyperty(hypertyURI(domain, 'HelloWorldObserver')).then(function (HelloWorldObserver) {
    console.log('HelloWorldObserver ->'.red, HelloWorldObserver);
    helloObserver = HelloWorldObserver;
    // runtime.requireHyperty(hypertyURI(domain, 'HelloWorldReporter'))
    //     .then((helloWorldReporter)=> {
    //         console.log('helloWorldReporter'.green, helloWorldReporter);
    //         console.log('helloObserver'.green, helloObserver);
    //         helloWorldReporter.instance.hello(helloObserver.runtimeHypertyURL)
    //             .then((helloObject)=> {
    //                 console.log('helloURL', helloObject);
    //               });
    //       });
  }).catch(function (reason) {
    console.log('Error:', reason);
  });
}).catch(function (e) {
  console.error('aie !', e);
});
