'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var localStorage = void 0;
if (typeof window === 'undefined') {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./uls-scratch');
} else if (typeof window.localStorage === 'undefined' || typeof window.sessionStorage === 'undefined') {
  localStorage = require('./rem-localstorage');
} else {
  localStorage = window.localStorage;
}
exports.default = localStorage;