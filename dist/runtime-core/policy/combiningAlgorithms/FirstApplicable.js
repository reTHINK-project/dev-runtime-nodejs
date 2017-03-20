'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
* @author Ana Caldeira <ana.caldeira@tecnico.ulisboa.pt>
* @classdesc Class to combine the authorization decisions that result from rules evaluation.
*/
var FirstApplicable = function () {
  function FirstApplicable() {
    _classCallCheck(this, FirstApplicable);
  }

  _createClass(FirstApplicable, [{
    key: 'combine',


    /**
    * Given an array of individual authorisation decisions, returns the first one different from 'Not Applicable', either positive or negative.
    * @param    {boolean[]}     decisions
    * @returns  {boolean}
    */
    value: function combine(decisions) {
      for (var i in decisions) {
        if (decisions[i] !== 'Not Applicable') {
          return decisions[i];
        }
      }
      return 'Not Applicable';
    }
  }]);

  return FirstApplicable;
}();

exports.default = FirstApplicable;