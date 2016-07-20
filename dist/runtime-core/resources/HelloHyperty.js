'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = activate;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HelloHyperty = function () {
  function HelloHyperty(hypertyURL, bus, configuration) {
    _classCallCheck(this, HelloHyperty);

    var _this = this;
    _this.bus = bus;
    _this.configuration = configuration;
    _this.hypertyURL = hypertyURL;

    _this.bus.addListener(hypertyURL, function (msg) {
      console.log('Hello Hyperty: ', msg);
    });
  }

  _createClass(HelloHyperty, [{
    key: 'sendMessage',
    value: function sendMessage() {

      var _this = this;

      _this.bus.postMessage({
        from: _this.hypertyURL,
        to: 'hyperty-runtime://sp1/WorldHyperty',
        body: {
          value: 'Hello from world hyperty instance'
        }
      });
    }
  }]);

  return HelloHyperty;
}();

function activate(hypertyURL, bus, configuration) {

  return {
    name: 'HelloHyperty',
    instance: new HelloHyperty(hypertyURL, bus, configuration)
  };
}