"use strict";

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
* @author micaelpedrosa@gmail.com
* Sequencial processor of methods. Similar to how Sequential Promise's work, but better fit for message processing.
* Normal use for this, is to intercept all messages with configured handlers, and act accordingly.
*/
var Pipeline = function () {
  /* public
    handlers: ((PipeContext) => void)[]
    onFail: (error) => void
  */

  function Pipeline(_onFail) {
    _classCallCheck(this, Pipeline);

    var _this = this;

    _this.handlers = [];
    _this.onFail = _onFail;
  }

  /**
   * Insert a message in the pipeline queue. All messages are wrapped with a PipeContext.
   * @param  {Message} msg       Message for the queue
   * @param  {Callback} onDeliver When message is finished processing from all handlers, it will be delivered in this callback.
   */


  _createClass(Pipeline, [{
    key: "process",
    value: function process(msg, onDeliver) {
      var _this = this;

      if (_this.handlers.length > 0) {
        var iter = new Iterator(_this.handlers);
        iter.next(new PipeContext(_this, iter, msg, onDeliver));
      } else {
        onDeliver(msg);
      }
    }
  }]);

  return Pipeline;
}();

/**
* @author micaelpedrosa@gmail.com
* Wrapper around a message that adds actions that can be fired by any interceptor handler.
* The Pipeline is asynchronous, so an handler should always call an action, the default one is "next()"
*/


var PipeContext = function () {
  /* private
    _inStop: boolean
     _pipeline: Pipeline
    _iter: Iterator
    _msg: Message
  */

  function PipeContext(pipeline, iter, msg, onDeliver) {
    _classCallCheck(this, PipeContext);

    var _this = this;

    _this._inStop = false;

    _this._pipeline = pipeline;
    _this._iter = iter;
    _this._msg = msg;
    _this._onDeliver = onDeliver;
  }

  _createClass(PipeContext, [{
    key: "next",


    /**
     * Proceed to the next interceptor handler, unless there was an error. If it's the last one, proceed to onDeliver handler.
     */
    value: function next() {
      var _this = this;

      if (!_this._inStop) {
        if (_this._iter.hasNext) {
          _this._iter.next(_this);
        } else {
          _this._onDeliver(_this._msg);
        }
      }
    }

    /**
     * Proceed directly to the onDeliver handler, unless there was an error.
     */

  }, {
    key: "deliver",
    value: function deliver() {
      var _this = this;
      if (!_this._inStop) {
        _this._inStop = true;
        _this._onDeliver(_this._msg);
      }
    }

    /**
     * Mark the context with an error and proceed to the onFail handler.
     * @param  {[type]} error [description]
     */

  }, {
    key: "fail",
    value: function fail(error) {
      var _this = this;

      if (!_this._inStop) {
        _this._inStop = true;
        if (_this._pipeline.onFail) {
          _this._pipeline.onFail(error);
        }
      }
    }
  }, {
    key: "pipeline",
    get: function get() {
      return this._pipeline;
    }
  }, {
    key: "msg",
    get: function get() {
      return this._msg;
    },
    set: function set(inMsg) {
      this._msg = inMsg;
    }
  }]);

  return PipeContext;
}();

var Iterator = function () {
  /* private
    _index: number
    _array: []
  */

  function Iterator(array) {
    _classCallCheck(this, Iterator);

    this._index = -1;
    this._array = array;
  }

  _createClass(Iterator, [{
    key: "hasNext",
    get: function get() {
      return this._index < this._array.length - 1;
    }
  }, {
    key: "next",
    get: function get() {
      this._index++;
      return this._array[this._index];
    }
  }]);

  return Iterator;
}();

exports.default = Pipeline;