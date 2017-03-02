/*jshint esnext: true */
import { expect } from 'chai';
import Sandbox from '../src/SandboxWorker';

let init, post, sendMessage;

describe('SandBoxBrowser', function(){
    before(function(){
        window._real_worker = window.Worker;
        window.Worker = function(){
            init = true;
            return {
                addEventListener: function(msg, callback) {
                                    sendMessage = callback; 
                                  },
                postMessage: function(msg) {
                    post = true;
                }
            };
        };
    });

    after(function(){
        window.Worker = window._real_worker;
    });

    beforeEach(function(){
        init = false;
        post = false;
        sendMessage = undefined;
    });

    it('should instantiate a web worker object', function(){
        let sandbox = new Sandbox();

        expect(init).to.be.true;
    });

    it('should send outside messages to web worker', function(){
        let sandbox = new Sandbox(); 
        
        sandbox.postMessage({header:{}});
        expect(post).to.be.true;
    });

    it('should receive inside messages from web worker', function(done){
        let sandbox = new Sandbox();
        sandbox.addListener('ua.me/mock', function(msg){
            done();
        });
        sendMessage({data: {to:'ua.me/mock'}});
    });
});
