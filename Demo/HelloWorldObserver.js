let fs = require('fs');
let rethink = require('./RuntimeUAStub');
// let express = require('express');
var path = require('path');
// let log4js = require('log4js');
let domain = 'hysmart.rethink.ptinovacao.pt';
// let logger = log4js.getLogger('server');
// let app = express();
const hypertyURI = (domain, hyperty) => `https://catalogue.${domain}/.well-known/hyperty/${hyperty}`;

/*log4js.configure({
  appenders: [{ type: 'console' }],
  levels: {
      server:  'DEBUG'
    }
});

app.use(log4js.connectLogger(logger, {
  level: 'auto'
}));*/

// app.set('trust proxy', 1);

// app.use(express.static(path.resolve(__dirname, '../static/')));

/*app.use('/', devMiddleware);

function getResources(type) {
  var raw;
  switch (type) {
    case 'runtime':
      raw = JSON.parse(fs.readFileSync('./static/resources/descriptors/Runtimes.json', 'utf8'));
      break;
    case 'hyperty':
      raw = JSON.parse(fs.readFileSync('./static/resources/descriptors/Hyperties.json', 'utf8'));
      break;
    case 'idp-proxy':
      raw = JSON.parse(fs.readFileSync('./static/resources/descriptors/IDPProxys.json', 'utf8'));
      break;
    case 'protocolstub':
      raw = JSON.parse(fs.readFileSync('./static/resources/descriptors/ProtoStubs.json', 'utf8'));
      break;
    case 'dataschema':
      raw = JSON.parse(fs.readFileSync('./static/resources/descriptors/DataSchemas.json', 'utf8'));
      break;
  }

  return raw;
}

function filterResource(resource, key) {
  return Object.keys(resource).filter(function(a) {
    return resource[a].cguid === key;
  })[0];
}

function devMiddleware(req, res, next) {

  console.log('DEV middleware: ', req.originalUrl);

  var paths;
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.originalUrl.includes('.well-known')) {
    var path = req.originalUrl;
    var pathIndex = path.indexOf('.well-known');
    if (pathIndex !== -1) { path = path.substr(pathIndex - 1); }
    paths = path.split('/');
    var type = paths[2];
    var resource = paths[3];

    if (req.originalUrl.includes('index.html') || req.originalUrl.includes('.js')) {
      if (req.originalUrl.includes('index.html')) {
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.end(fs.readFileSync('node_modules/runtime-browser/bin/index.html', 'utf8'));
      } else {
        res.writeHeader(200, {'Content-Type': 'application/javascript'});
        res.end(fs.readFileSync('node_modules/runtime-browser/bin/' + resource, 'utf8'));
      }

    } else if (req.originalUrl.includes('sourcepackage')) {
      var cguid = Number(paths[3]);
      var idType = cguid.toString().substring(0, 1);
      var sourcePackage;
      var selectedObject;
      var resourceObject;

      switch (idType) {
        case '1':
          resourceObject = getResources('hyperty');
          selectedObject = filterResource(resourceObject, cguid);
          sourcePackage = resourceObject[selectedObject].sourcePackage;
          break;

        case '2':
          resourceObject = getResources('dataschema');
          selectedObject = filterResource(resourceObject, cguid);
          sourcePackage = resourceObject[selectedObject].sourcePackage;
          break;

        case '3':
          sourcePackage = getResources('runtime');
          selectedObject = filterResource(resourceObject, cguid);
          sourcePackage = resourceObject[selectedObject].sourcePackage;
          break;

        case '4':
          resourceObject = getResources('protocolstub');
          selectedObject = filterResource(resourceObject, cguid);
          sourcePackage = resourceObject[selectedObject].sourcePackage;
          break;
        case '5':
          sourcePackage = getResources('idp-proxy');
          selectedObject = filterResource(resourceObject, cguid);
          sourcePackage = resourceObject[selectedObject].sourcePackage;
          break;
      }

      res.writeHeader(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(sourcePackage));

    } else {

      var raw = getResources(type);

      res.writeHeader(200, {'Content-Type': 'application/json'});
      if (resource) {

        if (req.originalUrl.includes('cguid')) {
          res.end(JSON.stringify(Number(raw[resource].cguid), '', 2));
        } else if (req.originalUrl.includes('version')) {
          res.end(JSON.stringify(Number(raw[resource].version), '', 2));
        } else {
          res.end(JSON.stringify(raw[resource], '', 2));
        }

      } else {
        var listOfResources = [];
        for (var key in raw) {
          if (raw.hasOwnProperty(key)) {
            listOfResources.push(key);
          }
        }
        res.end(JSON.stringify(listOfResources, '', 2));
      }
    }
  }

  next();

}*/

let runtime = rethink.default.install({
  domain: domain,
  development: true
}).then((runtime) => {
  console.log('runtime loaded !'.green);
  console.log('\n loading hyperty :', hypertyURI(domain, 'NodeHyperty'));
  runtime.requireHyperty(hypertyURI(domain, 'NodeHyperty'))
      .then((NodeHyperty) => {
        console.log('NodeHyperty ->'.red, NodeHyperty);
        let world = NodeHyperty;

        // ..... here we can manipulate hyperty instance
        console.log('world'.green, world);

      }).catch((reason) => {
    console.log('Error:', reason);
  });
}).catch((e) => {
  console.error('aie !', e);
});