'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataObjectObserver = exports.DataObjectReporter = exports.Syncher = undefined;

require('object.observe');

require('array.observe');

var _Syncher = require('./syncher/Syncher');

var _Syncher2 = _interopRequireDefault(_Syncher);

var _DataObjectReporter = require('./syncher/DataObjectReporter');

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = require('./syncher/DataObjectObserver');

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Syncher = _Syncher2.default;
exports.DataObjectReporter = _DataObjectReporter2.default;
exports.DataObjectObserver = _DataObjectObserver2.default; // polyfills
// Removed because the compatibility of runtime-nodejs
// import 'mutationobserver-shim';