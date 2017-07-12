var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

chai.config.truncateThreshold = 0;

var expect = chai.expect;

chai.use(chaiAsPromised);
chai.use(sinonChai);

var rethinkNode  = require('../dist/RuntimeNode.js');
var core = require('../dist/core.js');

var descriptors = require('./resources/descriptors.js');

describe('RuntimeNodeJS installation', function() {
  var rethink;
  var domain = 'localhost';
  var runtimeURL = 'https://catalogue.' + domain + '/.well-known/runtime/Runtime';
  var reporterHypertyURL = 'https://catalogue.' + domain + '/.well-known/hyperty/NodeHyperty';
  var reporterHyperty;
  var initialData = {};
  var schemaURL = 'https://catalogue.' + domain + '/.well-known/dataschema/Connection';


  var createNReporters = function(hyperty, N) {
    return new Promise(function(resolve,reject){

      var i = 0;
      var promises = [];
      for(i = 0; i < N; i++) {
        promises.push(hyperty.syncher.create(schemaURL, [], initialData, true, false));
      }

      Promise.all(promises).then(function(dors) {
            dors.forEach(function(dor) {
              //console.log('on-create-reply', dor);
              dor.onRead((event) => {
                //console.log('on-read');
                event.accept();
              });
              dor.onSubscription((subscribeEvent) => {
                //console.log('on-resources: ', subscribeEvent);
                subscribeEvent.accept();
              });
            });
            resolve(dors);
      });
    });
  }

  it('should install runtime-nodejs', function(done) {

    console.log('log->', rethinkNode.default, core);

    expect(rethinkNode.default.install({
      domain: domain,
      runtimeURL,
      development: true
    }).then(function(result) {
      rethink = result;
      return rethink;
    })).to.be.fulfilled
    .and.eventually.have.all.keys('requireHyperty', 'requireProtostub')
    .and.notify(done);
  });

  describe('Data Objects created / sec', function() {

    it('should load and install a Reporter hyperty', function(done) {
      expect(rethink.requireHyperty(reporterHypertyURL).then(function(result) {
        reporterHyperty = result.instance;
        return result;
      }).catch(function(err) {
        console.log('error->', err);
      })).to.be.fulfilled
      .and.eventually.have.all.keys('name', 'runtimeHypertyURL', 'instance', 'status')
      .and.notify(done);
    });

    it('should generate 20 Objects for reporterHyperty', function(done) {
      var nrOfReporters = 50;
      expect(createNReporters(reporterHyperty,nrOfReporters)).to.be.fulfilled
      .and.eventually.to.be.an('array')
      .lengthOf(nrOfReporters)
      .and.notify(done);
    });

  });

});
