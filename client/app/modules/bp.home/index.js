'use strict';

angular.module('bp.home', ['ng.config', 'ui.router'])
  .config(HomeCfg);

HomeCfg.$inject = ['$configProvider', '$stateProvider'];
function HomeCfg($configProvider, $stateProvider) {
  const MODULE_URL = $configProvider.get('MODULE_URL');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: MODULE_URL + 'bp.home/partials/home.html'
    });
}
