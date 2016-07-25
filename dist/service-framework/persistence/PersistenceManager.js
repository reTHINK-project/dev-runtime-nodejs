'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// import localStorage from 'universal-localstorage';
//
// class PersistenceManager {
//   constructor() {
//     console.log('asdasdasdsa');
//   }
//
//   set(key, version, value) {
//     localStorage.setItem(key, JSON.stringify({version: version, value: value}));
//   }
//
//   get(key) {
//     try {
//       return JSON.parse(localStorage.getItem(key)).value;
//     } catch (e) {
//       // return undefined
//     }
//   }
//
//   getVersion(key) {
//     try {
//       return JSON.parse(localStorage.getItem(key)).version;
//     } catch (e) {
//       // return undefined
//     }
//   }
//
//   delete(key) {
//     localStorage.removeItem(key);
//   }
// }

var persistenceManager = {
  set: function set(key, version, value) {
    localStorage.setItem(key, JSON.stringify({ version: version, value: value }));
  },

  get: function get(key) {
    try {
      return JSON.parse(localStorage.getItem(key)).value;
    } catch (e) {
      // return undefined
    }
  },

  getVersion: function getVersion(key) {
    try {
      return JSON.parse(localStorage.getItem(key)).version;
    } catch (e) {
      // return undefined
    }
  },

  delete: function _delete(key) {
    localStorage.removeItem(key);
  }
};

console.log('Persistence:', persistenceManager);

exports.default = persistenceManager;