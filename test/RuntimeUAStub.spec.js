import chai from 'chai'
import RuntimeNode from '../src/RuntimeNode'
import rethink from '../demo/demo'

let expect = chai.expect

describe('RuntimeNode', function(){
    describe('getRuntime', function(){
        it('should return default runtime path and domain  if it is in production mode and receives a domain', function(){
            let runtime = RuntimeNode.getRuntime("", "localhost",  false)
            expect(runtime.url).to.equal("https://catalogue.localhost/.well-known/runtime/default", "PRODUCTION & DOMAIN")
            expect(runtime.domain).to.equal("localhost")
        })

        it('should return default runtime path and domain  if it is in develop mode and receives a domain', function(){
            let runtime = RuntimeNode.getRuntime("", "localhost", true)
            expect(runtime.domain).to.equal("localhost")
            expect(runtime.url).to.equal("hyperty-catalogue://catalogue.localhost/.well-known/runtime/Runtime", "DEVELOP & DOMAIN")
        })

        it('should return default runtime path and domain if it is in production mode and receives a runtimeURL', function(){
            let runtime = RuntimeNode.getRuntime("https://catalogue.localhost/.well-known/runtime/default", "", false)
            expect(runtime.url).to.equal("https://catalogue.localhost/.well-known/runtime/default")
            expect(runtime.domain).to.equal("localhost")
        })

        it('should return default runtime path and domain if it is in develop mode and receives a runtimeURL', function(){
            let runtime = RuntimeNode.getRuntime("https://localhost/resources/descriptores/Runtimes.json", "", true)
            expect(runtime.url).to.equal("https://localhost/resources/descriptores/Runtimes.json")
            expect(runtime.domain).to.equal("localhost")
        })
    })

    describe('close', ()=>{
        xit('should desregister all hyperties', function(done){
            let runtime = rethink.install({domain:'localhost', development: true})
                .then(function(runtime){
                    runtime.requireHyperty('hyperty-catalogue://localhost/.well-known/hyperty/Connector')
                        .then((hyperty)=>{
                            runtime.close().then(res=>{
                                expect(res).to.be.true;
                                done()
                            })
                        })
                })
        })
    })
})
