'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.divideURL = divideURL;
exports.emptyObject = emptyObject;
exports.deepClone = deepClone;
exports.removePathFromURL = removePathFromURL;
exports.getUserURLFromEmail = getUserURLFromEmail;
exports.getUserEmailFromURL = getUserEmailFromURL;
exports.convertToUserURL = convertToUserURL;
exports.isDataObjectURL = isDataObjectURL;
exports.isLegacy = isLegacy;
exports.isURL = isURL;
exports.isUserURL = isUserURL;
exports.isHypertyURL = isHypertyURL;
exports.getConfigurationResources = getConfigurationResources;
exports.buildURL = buildURL;
exports.generateGUID = generateGUID;
exports.getUserIdentityDomain = getUserIdentityDomain;
exports.isBackendServiceURL = isBackendServiceURL;
exports.divideEmail = divideEmail;
exports.assign = assign;
exports.splitObjectURL = splitObjectURL;
exports.checkAttribute = checkAttribute;
exports.parseAttributes = parseAttributes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/
/**
 * Support module with some functions will be useful
 * @module utils
 */

/**
 * @typedef divideURL
 * @type Object
 * @property {string} type The type of URL
 * @property {string} domain The domain of URL
 * @property {string} identity The identity of URL
 */

/**
 * Divide an url in type, domain and identity
 * @param  {URL.URL} url - url address
 * @return {divideURL} the result of divideURL
 */
function divideURL(url) {

  function recurse(value) {
    var regex = /([a-zA-Z-]*)(:\/\/(?:\.)?|:)([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi;
    var subst = '$1,$3,$4';
    var parts = value.replace(regex, subst).split(',');
    return parts;
  }

  var parts = recurse(url);

  // If the url has no scheme
  if (parts[0] === url && !parts[0].includes('@')) {

    var _result = {
      type: '',
      domain: url,
      identity: ''
    };

    console.warn('[DivideURL] DivideURL don\'t support url without scheme. Please review your url address', url);

    return _result;
  }

  // check if the url has the scheme and includes an @
  if (parts[0] === url && parts[0].includes('@')) {
    var scheme = parts[0] === url ? 'smtp' : parts[0];
    parts = recurse(scheme + '://' + parts[0]);
  }

  // if the domain includes an @, divide it to domain and identity respectively
  if (parts[1].includes('@')) {
    parts[2] = parts[0] + '://' + parts[1];
    parts[1] = parts[1].substr(parts[1].indexOf('@') + 1);
  } /*else if (parts[2].includes('/')) {
    parts[2] = parts[2].substr(parts[2].lastIndexOf('/')+1);
    }*/

  var result = {
    type: parts[0],
    domain: parts[1],
    identity: parts[2]
  };

  return result;
}

/**
 * Check if an Object is empty
 * @param  {Object} object Object to be checked
 * @return {Boolean}       status of Object, empty or not (true|false);
 */
function emptyObject(object) {
  return (0, _keys2.default)(object).length > 0 ? false : true;
}

/**
 * Make a COPY of the original data
 * @param  {Object}  obj - object to be cloned
 * @return {Object}
 */
function deepClone(obj) {
  //TODO: simple but inefficient JSON deep clone...
  if (obj) return JSON.parse((0, _stringify2.default)(obj));
}

function removePathFromURL(url) {
  var splitURL = url.split('/');
  return splitURL[0] + '//' + splitURL[2] + '/' + splitURL[3];
}

/**
 * Obtains the user URL that corresponds to a given email
 * @param  {string} userEmail The user email
 * @return {URL.URL} userURL The user URL
 */
function getUserURLFromEmail(userEmail) {
  var indexOfAt = userEmail.indexOf('@');
  return 'user://' + userEmail.substring(indexOfAt + 1, userEmail.length) + '/' + userEmail.substring(0, indexOfAt);
}

/**
 * Obtains the user email that corresponds to a given URL
 * @param  {URL.URL} userURL The user URL
 * @return {string} userEmail The user email
 */
function getUserEmailFromURL(userURL) {
  var url = divideURL(userURL);
  return url.identity.replace('/', '') + '@' + url.domain; // identity field has '/exampleID' instead of 'exampleID'
}

/**
 * Check if the user identifier is already in the URL format, if not, convert to URL format
 * @param  {string}   identifier  user identifier
 * @return {string}   userURL    the user URL
 */
function convertToUserURL(identifier) {

  // check if the identifier is already in the url format
  if (identifier.substring(0, 7) === 'user://') {
    var dividedURL = divideURL(identifier);

    //check if the url is well formated
    if (dividedURL.domain && dividedURL.identity) {
      return identifier;
    } else {
      throw 'userURL with wrong format';
    }

    //if not, convert the user email to URL format
  } else {
    return getUserURLFromEmail(identifier);
  }
}

function isDataObjectURL(url) {
  var schemasToIgnore = ['domain-idp', 'runtime', 'domain', 'hyperty'];
  var splitURL = url.split('://');
  var urlSchema = splitURL[0];

  return schemasToIgnore.indexOf(urlSchema) === -1;
}

function isLegacy(url) {
  if (url.split('@').length > 1) {
    return true;
  } else {
    return false;
  }
}

function isURL(url) {
  return url.split('/').length >= 3;
}

function isUserURL(url) {
  return divideURL(url).type === 'user';
}

function isHypertyURL(url) {
  return divideURL(url).type === 'hyperty';
}

/**
 * get information relative each component configured on runtime configuration;
 * @param  {object} configuration object with all configuration
 * @param  {string} component     string with the component to get the configuration, like, runtimeURLS, catalogueURLs, msgNodeURL, domainRegistryURL;
 * @param  {string} resource      type of resource to get, like, catalogue, runtimeUA, protocolstub, idpProxy
 * @return {object}               return an object with all configurations;
 */
function getConfigurationResources(configuration, component, resource) {
  var objectResource = configuration[component];
  var resourceType = objectResource[resource];

  return resourceType;
}

/**
 * Build a full url with the runtime configuration;
 * @param  {object} configuration object with all configuration
 * @param  {string} component     string with the component to get the configuration, like, runtimeURLS, catalogueURLs, msgNodeURL, domainRegistryURL;
 * @param  {string} resource      type of resource to get, like, catalogue, runtimeUA, protocolstub, idpProxy
 * @param  {string} type          resource to get, like a hyperty name or protocolstub name;
 * @param  {boolean} useFallback  if true the function will check if have a fallback url;
 * @return {string}               partial url to contact the resource;
 */
function buildURL(configuration, component, resource, type) {
  var useFallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  var objectResource = configuration[component];
  var url = void 0;

  if (!objectResource.hasOwnProperty(resource)) {
    throw Error('The configuration ' + (0, _stringify2.default)(objectResource, '', 2) + ' don\'t have the ' + resource + ' resource you are looking for');
  }

  var resourceType = objectResource[resource];

  if (type) {
    url = resourceType.prefix + configuration.domain + resourceType.suffix + type;
    if (resourceType.hasOwnProperty('fallback') && useFallback) {
      if (resourceType.fallback.indexOf('%domain%')) {
        url = resourceType.fallback.replace(/(%domain%)/g, configuration.domain) + type;
      } else {
        url = resourceType.fallback + type;
      }
    }
  } else {
    url = resourceType.prefix + configuration.domain + resourceType.suffix;
  }

  // console.log(url);

  return url;
}

/**
 * Generate a Global Unique ID
 *
 * @returns String;
 */
function generateGUID() {

  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function getUserIdentityDomain(url) {
  var dividedURL = divideURL(url);
  var splitedDomain = dividedURL.domain.split('.');
  var splitedLength = splitedDomain.length;
  if (splitedLength == 1) {
    return splitedDomain[splitedLength - 1];
  }
  var domain = splitedDomain[splitedLength - 2] + '.' + splitedDomain[splitedLength - 1];
  return domain;
}

/**
 * Check if URL is from a backend service
 * @param  {string} url     URL to be processed
 * @return {boolean}
 */

function isBackendServiceURL(url) {
  var dividedURL = divideURL(url);
  var splitedDomain = dividedURL.domain.split('.');
  var backendSchemes = ['domain', 'global', 'domain-idp']; // should be defined in the runtime configuration
  var backendSubDomains = ['registry', 'msg-node']; // should be defined in the runtime configuration
  var subDomain = void 0;

  if (splitedDomain.length > 1) {
    subDomain = splitedDomain[0];
  }

  if (subDomain && backendSubDomains.indexOf(subDomain)) {
    return true;
  }

  if (dividedURL.type) {
    return backendSchemes.indexOf(dividedURL.type) !== -1;
  }

  return false;
}

function divideEmail(email) {
  var indexOfAt = email.indexOf('@');

  var result = {
    username: email.substring(0, indexOfAt),
    domain: email.substring(indexOfAt + 1, email.length)
  };

  return result;
}

function assign(obj, keyPath, value) {

  if (!obj) obj = {};
  if (typeof keyPath === 'string') keyPath = parseAttributes(keyPath);

  var lastKeyIndex = keyPath.length - 1;

  for (var i = 0; i < lastKeyIndex; ++i) {
    var key = keyPath[i];
    if (!(key in obj)) {
      obj[key] = {};
    }

    obj = obj[key];
  }

  obj[keyPath[lastKeyIndex]] = value;
}

function splitObjectURL(dataObjectURL) {
  console.info('[utils - splitObjectURL]: ', dataObjectURL);

  var splitedURL = dataObjectURL.split('/');
  var url = splitedURL[0] + '//' + splitedURL[2] + '/' + splitedURL[3];
  var resource = splitedURL[5];

  var result = {
    url: url,
    resource: resource
  };

  console.info('[utils - splitObjectURL]: ', result);

  return result;
}

function checkAttribute(path) {

  var regex = /((([a-zA-Z]+):\/\/([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})\/[a-zA-Z0-9\.]+@[a-zA-Z0-9]+(\-)?[a-zA-Z0-9]+(\.)?[a-zA-Z0-9]{2,10}?\.[a-zA-Z]{2,10})(.+(?=.identity))?/gm;

  var list = [];
  var final = [];
  var test = path.match(regex);

  if (test == null) {
    final = path.split('.');
  } else {
    var m = void 0;
    while ((m = regex.exec(path)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach(function (match, groupIndex) {
        if (groupIndex === 0) {
          list.push(match);
        }
      });
    }
    var result = void 0;
    list.forEach(function (url) {

      result = path.replace(url, '*-*');
      final = result.split('.').map(function (item) {

        if (item === '*-*') {
          return url;
        }

        return item;
      });
    });
  }

  console.log('[RuntimeCore.Utils.checkAttribute]', final);
  return final;
}

function parseAttributes(path) {
  var regex = /([0-9a-zA-Z][-\w]*):\/\//g;

  var string3 = 'identity';

  if (!path.includes('://')) {
    return path.split('.');
  } else {
    var string1 = path.split(regex)[0];

    var array1 = string1.split('.');

    var string2 = path.replace(string1, '');

    if (path.includes(string3)) {

      var array2 = string2.split(string3 + '.');

      console.log('array2 ' + array2);

      string2 = array2[0].slice('.', -1);

      array2 = array2[1].split('.');

      array1.push(string2, string3);

      array1 = array1.concat(array2);
    } else {
      array1.push(string2);
    }

    return array1.filter(Boolean);
  }
}