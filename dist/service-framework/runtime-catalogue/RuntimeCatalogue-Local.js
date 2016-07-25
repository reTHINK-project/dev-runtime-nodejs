'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = function() {
  function defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor);
    } } return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor;
  };
}();

var _utils = require('../utils/utils');

var _RuntimeCatalogue2 = require('./RuntimeCatalogue');

var _RuntimeCatalogue3 = _interopRequireDefault(_RuntimeCatalogue2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _possibleConstructorReturn(self, call) {
  if (!self) { throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called'); } return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var RuntimeCatalogueLocal = function(_RuntimeCatalogue) {
  _inherits(RuntimeCatalogueLocal, _RuntimeCatalogue);

  function RuntimeCatalogueLocal(runtimeFactory) {
    _classCallCheck(this, RuntimeCatalogueLocal);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(RuntimeCatalogueLocal).call(this, runtimeFactory));
  }

  /**
   * Get a Catalogue Data Object (Descriptor) from a URL, and construct it using the provided function
   * @param {String} descriptorURL - e.g. mydomain.com/.well-known/hyperty/MyHyperty
   * @param {function} createFunc - e.g. _createHyperty
   * @returns {Promise}
   */

  _createClass(RuntimeCatalogueLocal, [{
    key: 'getDescriptor',
    value: function getDescriptor(descriptorURL, createFunc) {
      var _this = this;

      return new Promise(function(resolve, reject) {

        var resourceURL = '';
        var dividedURL = (0, _utils.divideURL)(descriptorURL);
        var type = dividedURL.type;
        var domain = dividedURL.domain;
        var identity = dividedURL.identity;
        var resource = '';

        if (!domain) {
          domain = descriptorURL;
        }

        if (identity) {
          identity = identity.substring(identity.lastIndexOf('/') + 1);
        }

        // type + '://' + domain + '/resources/descriptors/Hyperties.json'
        // type + '://' + domain + '/resources/descriptors/Runtimes.json'
        // type + '://' + domain + '/resources/descriptors/IDPProxys.json'
        // type + '://' + domain + '/resources/descriptors/ProtoStubs.json'
        // type + '://' + domain + '/resources/descriptors/DataSchemas.json'

        console.log('DescriptorURL:', descriptorURL);

        if (descriptorURL.includes('hyperty')) {
          resource = 'Hyperties';
          // resourceURL = type + '://' + domain + '/resources/descriptors/Hyperties.json';
          resourceURL = 'https://raw.githubusercontent.com/reTHINK-project/dev-hyperty-toolkit/develop/resources/descriptors/Hyperties.json';
        }

        if (descriptorURL.includes('protocolstub') || descriptorURL.includes('ProtoStubs')) {
          resource = 'ProtoStubs';
          // resourceURL = type + '://' + domain + '/resources/descriptors/ProtoStubs.json';
          resourceURL = 'https://raw.githubusercontent.com/reTHINK-project/dev-hyperty-toolkit/develop/resources/descriptors/ProtoStubs.json';
        }

        if (descriptorURL.includes('runtime')) {
          resource = 'Runtimes';
          // resourceURL = type + '://' + domain + '/resources/descriptors/Runtimes.json';
          resourceURL = 'https://raw.githubusercontent.com/reTHINK-project/dev-hyperty-toolkit/develop/resources/descriptors/Runtimes.json';
        }

        if (descriptorURL.includes('idp-proxy')) {
          resource = 'IDPProxys';
          resourceURL = type + '://' + domain + '/resources/descriptors/IDPProxys.json';
        }

        if (descriptorURL.includes('dataschema')) {
          resource = 'DataSchemas';
          resourceURL = type + '://' + domain + '/resources/descriptors/DataSchemas.json';
        }

        _this.httpRequest.get(resourceURL).then(function(descriptor) {

          try {
            _this[resource] = JSON.parse(descriptor);
          } catch (e) {
            _this[resource] = descriptor;
          }

          if (!_this[resource].hasOwnProperty(identity)) {
            reject('The ' + identity + ' is not available on ' + resource);
          }

          var result = _this[resource][identity];

          if (result.ERROR) {
            // TODO handle error properly
            reject(result);
          } else {
            // FIXME hotfix for unparsed arrays (e.g. hypertyType), will be fixed in Catalogue 1.1.0
            for (var key in result) {
              try {
                result[key] = JSON.parse(result[key]);
              } catch (e) {
                // do nothing
              }
            }

            // console.log('creating descriptor based on: ', result);
            var _descriptor = createFunc(_this, result);

            // persistenceManager.set(descriptorURL, descriptor.version, result);
            // console.log('created descriptor object:', hyperty);
            resolve(_descriptor);
          }
        }).catch(function(reason) {
          reject(reason);
        });
      });
    }
  }]);

  return RuntimeCatalogueLocal;
}(_RuntimeCatalogue3.default);

exports.default = RuntimeCatalogueLocal;
