import { expect } from 'chai';
import Sandbox from '../src/SandboxApp';

describe('SandboxApp Integration Tests', function(){
    it('should manage messages with internal components - send and receive', function(done){
        this.timeout(0);
        var sandbox = new Sandbox();

        setTimeout(()=>{
            sandbox.postMessage({to:'sandbox://internal',type:'create', body: { config:'', url: 'ua.me', sourceCode: '(function (url, miniBus, config){ 2+2; })'} }, function(msg){
                    done();
                });
        }, 1200);
    });

    it('should create components', function(done){
        this.timeout(0);
        var sandbox = new Sandbox();
        window.doneTest = function(){ done() }
        setTimeout(()=>{
            sandbox.postMessage({to:'sandbox://internal',type:'create', body: { config:'', url: 'ua.me', sourceCode: '(function (url, miniBus, config){ window.doneTest() })'}} );
        }, 1200);
    });

});
