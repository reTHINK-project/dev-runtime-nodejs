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
  var observerHypertyURL = 'https://catalogue.' + domain + '/.well-known/hyperty/NodeHypertyObserver';
  var reporterHyperty;
  var observerHyperty;
  var initialData = {};
  var schemaURL = 'https://catalogue.' + domain + '/.well-known/dataschema/Connection';
  var dataObjectReporters;
  var dataObjectObservers = [];
  var nrOfDataObjRepObs = 20;
  var nrOfChanges = 20;

  var createNReporters = function(hyperty, N) {
    return new Promise(function(resolve,reject) {

      var i = 0;
      var promises = [];
      for (i = 0; i < N; i++) {
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
            dataObjectReporters = dors;
            resolve(dors);
          });
    });
  };

  subscribeNReporters = function(N) {
    return new Promise(function(resolve,reject) {
      var count = 0;
      var i;
      for (i = 0; i < N; i++) {
        console.log('newInviteObserver:', i);
        dataObjectReporters[i].inviteObservers([observerHyperty.identityManager.hypertyURL]);
      }
      console.log('ObservHyperty:', observerHyperty);
      observerHyperty.syncher.onNotification((notifyEvent) => {
        //console.log('on-create-notify: ', notifyEvent);

        notifyEvent.ack();

        observerHyperty.syncher.subscribe(schemaURL, notifyEvent.url, true, false).then((doo) => {
          count++;
          dataObjectObservers.push(doo);
          if (count == N) {
            console.log('dataObjectObserver:', count, doo);
            return resolve(true);
          }

        });
      });
    });

  };

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
      expect(createNReporters(reporterHyperty, nrOfDataObjRepObs)).to.be.fulfilled
      .and.eventually.to.be.an('array')
      .lengthOf(nrOfDataObjRepObs)
      .and.notify(done);
    });

  });

  describe('Nodejs Data Objects subscribed', function() {

    it('should load and install an Observer hyperty', function(done) {
      expect(rethink.requireHyperty(observerHypertyURL).then(function(result) {
        console.log('hyperty observer URL', result.instance.identityManager.hypertyURL);
        observerHyperty = result.instance;
        return result;
      }).catch(function(err) {
        console.log('error->', err);
      })).to.be.fulfilled
      .and.eventually.have.all.keys('name', 'runtimeHypertyURL', 'instance', 'status')
      .and.notify(done);
    });

    it('should subcribe all dataObjects Reporter created before', function(done) {
      this.timeout(150 * nrOfDataObjRepObs);
      expect(subscribeNReporters(nrOfDataObjRepObs)).to.be.fulfilled
      .and.eventually.to.be.true
      .and.notify(done);
    });

    it('Change each DataObjectReporter one time and notify Observers', function(done) {

      var count = 0;
      for (i = 0; i < nrOfDataObjRepObs; i++) {
        dataObjectObservers[i].onChange('*', (changeEvent) => {
          expect(changeEvent).to.contain.all.keys({ cType: 'add', oType: 'object', field: 'test', data: ['a', 'b', 'c'] });
          count++;
          if (count == nrOfDataObjRepObs) {
            console.log('All changes done!');
            done();
          }
        });
      }
      var i;
      for (i = 0; i < nrOfDataObjRepObs; i++) {
        dataObjectReporters[i].data.test = ['a', 'b', 'c'];
      }

    });

    it('Change Ntimes DataObjectReporters and notify Observers', function(done) {
      this.timeout(15 *  nrOfDataObjRepObs * nrOfChanges);
      var count = 0;
      for (i = 0; i < nrOfDataObjRepObs; i++) {
        dataObjectObservers[i].onChange('*', (changeEvent) => {
          count++;
          if (count == nrOfDataObjRepObs * nrOfChanges) {
            console.log('All changes done!');
            done();
          }
        });
      }
      var i;
      var j;
      for (i = 0; i < nrOfDataObjRepObs; i++) {
        for (j = 0; j < nrOfChanges; j++) {
          dataObjectReporters[i].data.test = ['a', 'b', 'c', j];
        }
      }
    });

  });

});
