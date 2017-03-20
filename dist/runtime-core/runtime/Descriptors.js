'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../utils/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Descriptors = function () {
  function Descriptors(runtimeURL, catalogue, runtimeConfiguration) {
    _classCallCheck(this, Descriptors);

    if (!runtimeURL) throw Error('The descriptor need to know the runtime url to be used');
    if (!catalogue) throw Error('The descriptor needs the catalogue instance');
    if (!runtimeConfiguration) throw Error('The descriptor needs the runtime configuration');

    this.runtimeConfiguration = runtimeConfiguration;
    this.runtimeURL = runtimeURL;
    this.catalogue = catalogue;
  }

  _createClass(Descriptors, [{
    key: 'getHypertyDescriptor',
    value: function getHypertyDescriptor(hypertyURL) {
      return this.catalogue.getHypertyDescriptor(hypertyURL);
    }
  }, {
    key: 'getStubDescriptor',
    value: function getStubDescriptor(stubURL) {
      var _this = this;

      return new Promise(function (resolve, reject) {

        var dividedURL = (0, _utils.divideURL)(stubURL);
        var domain = dividedURL.domain;
        var protostub = dividedURL.identity;
        var protoStubURL = void 0;

        var originDividedURL = (0, _utils.divideURL)(_this.runtimeURL);
        var originDomain = originDividedURL.domain;

        if (!domain) {
          domain = idpProxyURL;
        }

        if (!protostub) {
          protostub = 'default';
        } else {
          protostub = protostub.substring(protostub.lastIndexOf('/') + 1);
        }

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
        return _this.catalogue.getStubDescriptor(protoStubURL).then(function (result) {

          resolve(result);
        }).catch(function (error) {

          console.log('Error: ', error);

          protostub = domain;
          domain = originDomain;

          var resource = (0, _utils.getConfigurationResources)(_this.runtimeConfiguration, 'catalogueURLs', 'protocolstub');
          protoStubURL = resource.prefix + domain + resource.suffix + protostub;

          console.log('Fallback -> Load Protocolstub for domain, ' + domain + ' : ', protostub);
          return _this.catalogue.getStubDescriptor(protoStubURL);
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

      return new Promise(function (resolve, reject) {

        var dividedURL = (0, _utils.divideURL)(idpProxyURL);
        var domain = dividedURL.domain;
        var idpproxy = dividedURL.identity;

        var originDividedURL = (0, _utils.divideURL)(_this2.runtimeURL);
        var originDomain = originDividedURL.domain;

        if (!domain) {
          domain = idpProxyURL;
        }

        if (domain === originDomain || !idpproxy) {
          idpproxy = 'default';
        } else {
          idpproxy = idpproxy.substring(idpproxy.lastIndexOf('/') + 1);
        }

        var resource = (0, _utils.getConfigurationResources)(_this2.runtimeConfiguration, 'catalogueURLs', 'idpProxy');

        idpProxyURL = resource.prefix + domain + resource.suffix + idpproxy;
        console.log('Load Idp Proxy for domain, ' + domain + ' : ', idpProxyURL);
        return _this2.catalogue.getIdpProxyDescriptor(idpProxyURL).then(function (result) {

          resolve(result);
        }).catch(function () {

          idpproxy = domain;
          domain = originDomain;

          idpProxyURL = (0, _utils.buildURL)(_this2.runtimeConfiguration, 'catalogueURLs', 'idpProxy', idpproxy);

          console.log('Load Idp Proxy for domain, ' + domain + ' : ', idpProxyURL);
          return _this2.catalogue.getIdpProxyDescriptor(idpProxyURL);
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