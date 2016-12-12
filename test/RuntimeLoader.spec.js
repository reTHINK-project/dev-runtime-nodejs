import chai from 'chai'
import rethink from '../demo/demo'

let expect = chai.expect

describe('Service framework', function() {
  describe('Require Hyperty', function() {
    xit('should returns required hyperty', function(done) {
      let runtime = rethink.default.install({domain:'hybroker.rethink.ptinovacao.pt', development: true})
      .then(function(runtime) {
        let hyperty = runtime.requireHyperty('aaa')

        expect(hyperty).to.not.be.undefined;
        done()
      })
    })
  }),

  describe('Require ProtoStub', function(){
  })
})
