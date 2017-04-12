'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = require('../utils/utils');

var _runtimeUtils = require('./runtimeUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Descriptors = function () {
  function Descriptors(runtimeURL, catalogue, runtimeConfiguration) {
    (0, _classCallCheck3.default)(this, Descriptors);

    if (!runtimeURL) throw Error('The descriptor need to know the runtime url to be used');
    if (!catalogue) throw Error('The descriptor needs the catalogue instance');
    if (!runtimeConfiguration) throw Error('The descriptor needs the runtime configuration');

    this.runtimeConfiguration = runtimeConfiguration;
    this.runtimeURL = runtimeURL;
    this.catalogue = catalogue;

    this.constraints = _runtimeUtils.runtimeUtils.runtimeCapabilities;
  }

  (0, _createClass3.default)(Descriptors, [{
    key: 'getHypertyDescriptor',
    value: function getHypertyDescriptor(hypertyURL) {
      return this.catalogue.getHypertyDescriptor(hypertyURL, true, this.constraints);
    }
  }, {
    key: 'getStubDescriptor',
    value: function getStubDescriptor(stubURL) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {

        var domain = void 0;
        var protostub = void 0;
        var protoStubURL = void 0;

        var originDividedURL = (0, _utils.divideURL)(_this.runtimeURL);
        var originDomain = originDividedURL.domain;

        if (stubURL.includes('://')) {
          var dividedURL = (0, _utils.divideURL)(stubURL);
          domain = dividedURL.domain;
          var path = dividedURL.identity;

          if (path) {
            protostub = path.substring(path.lastIndexOf('/') + 1);
          } else {
            protostub = 'default';
          }
        } else {
          protostub = 'default';
          domain = stubURL;
        }

        /*    if (!domain) {
              domain = stubURL;
            }
             if (!protostub) {
              protostub = 'default';
            } else {
              protostub = protostub.substring(protostub.lastIndexOf('/') + 1);
            }*/

        protoStubURL = (0, _utils.buildURL)(_this.runtimeConfiguration, 'catalogueURLs', 'protocolstub', protostub);
        if (domain !== _this.runtimeConfiguration.domain) {
          if (!stubURL.indexOf('https') || !stubURL.indexOf('hyperty-catalogue')) {
            protoStubURL = stubURL;
          } else {

            // TODO: check how to load form different configuration domain
            var resource = (0, _utils.getConfigurationResources)(_this.runtimeConfiguration, 'catalogueURLs', 'protocolstub');
            protoStubURL = resource.prefix + domain + resource.suffix + protostub;
          }
        }

        console.log('Load ProtocolStub for domain, ' + domain + ' : ', protoStubURL);
        return _this.catalogue.getStubDescriptor(protoStubURL, true, _this.constraints).then(function (result) {

          resolve(result);
        }).catch(function (error) {

          console.log('Error: ', error);

          protostub = domain;
          domain = originDomain;

          var resource = (0, _utils.getConfigurationResources)(_this.runtimeConfiguration, 'catalogueURLs', 'protocolstub');
          protoStubURL = resource.prefix + domain + resource.suffix + protostub;

          console.log('Fallback -> Load Protocolstub for domain, ' + domain + ' : ', protostub);
          return _this.catalogue.getStubDescriptor(protoStubURL, true, _this.constraints);
        }).then(function (result) {
          resolve(result);
        }).catch(function (reason) {
          reject(reason);
        });
      });
    }
  }, {
    key: 'getIdpProxyDescriptor',
    value: function getIdpProxyDescriptor(idpProxyURL) {
      var _this2 = this;

      return new _promise2.default(function (resolve, reject) {

        var domain = void 0;
        var idpproxy = void 0;

        var originDividedURL = (0, _utils.divideURL)(_this2.runtimeURL);
        var originDomain = originDividedURL.domain;

        if (idpProxyURL.includes('://')) {
          var dividedURL = (0, _utils.divideURL)(idpProxyURL);
          domain = dividedURL.domain;
          var path = dividedURL.identity;
          if (path) {
            idpproxy = path.substring(path.lastIndexOf('/') + 1);
          } else {
            idpproxy = 'default';
          }
        } else {
          idpproxy = 'default';
          domain = idpProxyURL;
        }

        var resource = (0, _utils.getConfigurationResources)(_this2.runtimeConfiguration, 'catalogueURLs', 'idpProxy');

        idpProxyURL = resource.prefix + domain + resource.suffix + idpproxy;
        console.log('Load Idp Proxy for domain, ' + domain + ' : ', idpProxyURL);
        return _this2.catalogue.getIdpProxyDescriptor(idpProxyURL, true, _this2.constraints).then(function (result) {

          resolve(result);
        }).catch(function () {

          idpproxy = domain;
          domain = originDomain;

          idpProxyURL = (0, _utils.buildURL)(_this2.runtimeConfiguration, 'catalogueURLs', 'idpProxy', idpproxy);

          console.log('Load Idp Proxy for domain, ' + domain + ' : ', idpProxyURL);
          return _this2.catalogue.getIdpProxyDescriptor(idpProxyURL, true, _this2.constraints);
        }).then(function (result) {
          resolve(result);
        }).catch(function (reason) {
          reject(reason);
        });
      });
    }
  }]);
  return Descriptors;
}();

exports.default = Descriptors;