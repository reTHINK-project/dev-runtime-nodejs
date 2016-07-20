'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = activate;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WorldHyperty = function () {
  function WorldHyperty(hypertyURL, bus, configuration) {
    _classCallCheck(this, WorldHyperty);

    console.log('World Hyperty Instance');

    var _this = this;
    _this.hypertyURL = 'hyperty-runtime://sp1/WorldHyperty'; //hypertyURL;
    _this.bus = bus;
    _this.configuration = configuration;

    _this.bus.addListener(_this.hypertyURL, function (msg) {
      console.log('World Hyperty: ', msg);
    });
  }

  _createClass(WorldHyperty, [{
    key: 'sendMessage',
    value: function sendMessage() {

      var _this = this;

      _this.bus.postMessage({
        from: _this.hypertyURL,
        to: 'hyperty-runtime://sp1/HelloHyperty',
        body: {
          value: 'Hello from world hyperty instance'
        }
      });
    }
  }]);

  return WorldHyperty;
}();

function activate(hypertyURL, bus, configuration) {

  return {
    name: 'WorldHyperty',
    instance: new WorldHyperty(hypertyURL, bus, configuration)
  };
}