(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('../modules');

angular.module('app', ['ui.router', 'bp.modules']).constant('APP_NAME', 'boilerplate').controller('AppCtrl', AppCtrl).config(AppCfg);

AppCtrl.$inject = ['APP_NAME'];
function AppCtrl(APP_NAME) {
  var vm = this;

  vm.APP_NAME = APP_NAME;
}

function AppCfg($urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
}

},{"../modules":6}],2:[function(require,module,exports){
'use strict';

require('./app.js');

},{"./app.js":1}],3:[function(require,module,exports){
'use strict';

// require('./controller/controller');
// require('./directives/directives');

angular.module('bp.about', ['ui.router']).config(AboutCfg);

function AboutCfg($stateProvider) {
  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'modules/bp.about/partials/about.html'
  });
}

},{}],4:[function(require,module,exports){
'use strict';

// require('./controller/controller');
// require('./directives/directives');

angular.module('bp.contact', ['ui.router']).config(ContactCfg);

function ContactCfg($stateProvider) {
  $stateProvider.state('contact', {
    url: '/contact',
    templateUrl: 'modules/bp.contact/partials/contact.html'
  });
}

},{}],5:[function(require,module,exports){
'use strict';

// require('./controller/controller');
// require('./directives/directives');

angular.module('bp.home', ['ui.router']).config(HomeCfg);

function HomeCfg($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'modules/bp.home/partials/home.html'
  });
}

},{}],6:[function(require,module,exports){
'use strict';

require('./bp.about');
require('./bp.contact');
require('./bp.home');

angular.module('bp.modules', ['bp.about', 'bp.contact', 'bp.home']);

},{"./bp.about":3,"./bp.contact":4,"./bp.home":5}]},{},[2]);
