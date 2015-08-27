'use strict';

// configure app before angular is loaded
var $config = require('ng.config');
$config.$.set('MODULE_URL', 'modules/');

// load modules
require('../modules');

angular.module('app', ['ng.config', 'ui.router', 'bp.modules'])
  .constant('APP_NAME', 'boilerplate')
  .controller('AppCtrl', AppCtrl)
  .config(AppCfg);

AppCfg.$inject = ['$urlRouterProvider'];
function AppCfg($urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
}

AppCtrl.$inject = ['APP_NAME'];
function AppCtrl(APP_NAME) {
  var vm = this;

  vm.APP_NAME = APP_NAME;
}


