'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; // jshint browser:true, jquery: true
// jshint varstmt: true

var _rethink = require('runtime-browser/bin/rethink');

var _rethink2 = _interopRequireDefault(_rethink);

var _utils = require('./utils/utils');

var _config = require('../config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.KJUR = {};

var domain = _config2.default.domain;
var runtimeLoader = void 0;

_rethink2.default.install(_config2.default).then(function (result) {

  runtimeLoader = result;
  console.log(result);

  return getListOfHyperties(domain);
}).then(function (hyperties) {

  var $dropDown = $('#hyperties-dropdown');

  hyperties.forEach(function (key) {
    var $item = $(document.createElement('li'));
    var $link = $(document.createElement('a'));

    // create the link features
    $link.html(key);
    $link.css('text-transform', 'none');
    $link.attr('data-name', key);
    $link.on('click', loadHyperty);

    $item.append($link);

    $dropDown.append($item);
  });

  $('.preloader-wrapper').remove();
  $('.card .card-action').removeClass('center');
  $('.hyperties-list-holder').removeClass('hide');
}).catch(function (reason) {
  console.error(reason);
});

function getListOfHyperties(domain) {

  var hypertiesURL = 'https://catalogue.' + domain + '/.well-known/hyperty/';
  if (_config2.default.development) {
    hypertiesURL = 'https://' + domain + '/.well-known/hyperty/Hyperties.json';
  }

  return new Promise(function (resolve, reject) {
    $.ajax({
      url: hypertiesURL,
      success: function success(result) {
        var response = [];
        if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') {
          Object.keys(result).forEach(function (key) {
            response.push(key);
          });
        } else if (typeof result === 'string') {
          response = JSON.parse(result);
        }
        resolve(response);
      },
      fail: function fail(reason) {
        reject(reason);
        notification(reason, 'warn');
      }

    });
  });
}

function loadHyperty(event) {
  event.preventDefault();

  var hypertyName = $(event.currentTarget).attr('data-name');
  var hypertyPath = 'hyperty-catalogue://catalogue.' + domain + '/.well-known/hyperty/' + hypertyName;

  var $el = $('.main-content .notification');
  addLoader($el);

  runtimeLoader.requireHyperty(hypertyPath).then(hypertyDeployed).catch(hypertyFail);
}

function hypertyDeployed(hyperty) {

  var $el = $('.main-content .notification');
  removeLoader($el);

  // Add some utils
  (0, _utils.serialize)();

  var $mainContent = $('.main-content').find('.row');

  var template = '';
  var script = '';

  switch (hyperty.name) {
    case 'HypertyConnector':
      template = 'hyperty-connector/HypertyConnector';
      script = 'hyperty-connector/demo.js';
      break;

    case 'HypertyChat':
      template = 'hyperty-chat/HypertyChat';
      script = 'hyperty-chat/demo.js';
      break;

    case 'HelloWorldObserver':
      template = 'hello-world/helloWorld';
      script = 'hello-world/helloObserver.js';
      break;

    case 'HelloWorldReporter':
      template = 'hello-world/helloWorld';
      script = 'hello-world/helloReporter.js';
      break;

    case 'GroupChat':
      template = 'group-chat/groupChat';
      script = 'group-chat/groupChat.js';
      break;

    case 'Location':
      template = 'location/location';
      script = 'location/location.js';
      break;

    case 'RoomUIObserver':
      template = 'room-ui/room';
      script = 'room-ui/roomObserver.js';
      break;

    case 'RoomUIReporter':
      template = 'room-ui/room';
      script = 'room-ui/roomReporter.js';
      break;

    case 'UserStatus':
      template = 'user-status/UserStatus';
      script = 'user-status/user-status.js';
      break;
  }

  if (!template) {
    throw Error('You must need specify the template for your example');
  }

  (0, _utils.getTemplate)(template, script).then(function (template) {
    var html = template();
    $mainContent.html(html);

    if (typeof hypertyLoaded === 'function') {
      hypertyLoaded(hyperty);
    } else {
      var msg = 'If you need pass the hyperty to your template, create a function called hypertyLoaded';
      console.info(msg);
      notification(msg, 'warn');
    }
  });
}

function hypertyFail(reason) {
  console.error(reason);
  notification(reason, 'error');
}

function addLoader(el) {

  var html = '<div class="preloader preloader-wrapper small active">' + '<div class="spinner-layer spinner-blue-only">' + '<div class="circle-clipper left">' + '<div class="circle"></div></div><div class="gap-patch"><div class="circle"></div>' + '</div><div class="circle-clipper right">' + '<div class="circle"></div></div></div></div>';

  el.addClass('center');
  el.append(html);
}

function removeLoader(el) {
  el.find('.preloader').remove();
  el.removeClass('center');
}

function notification(msg, type) {

  var $el = $('.main-content .notification');
  var color = type === 'error' ? 'red' : 'black';

  removeLoader($el);
  $el.append('<span class="' + color + '-text">' + msg + '</span>');
}

// runtimeCatalogue.getHypertyDescriptor(hyperty).then(function(descriptor) {
//   console.log(descriptor);
// }).catch(function(reason) {
//   console.error('Error: ', reason);
// });