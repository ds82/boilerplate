'use strict';

require('./modules');

angular.module('app', ['ui.router', 'bp.modules'])
  .constant('APP_NAME', 'boilerplate')
  .controller('AppCtrl', AppCtrl)
  .config(AppCfg);

AppCtrl.$inject = ['APP_NAME'];
function AppCtrl(APP_NAME) {
  var vm = this;

  vm.APP_NAME = APP_NAME;
}

function AppCfg($urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
}
