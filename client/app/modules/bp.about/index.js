'use strict';

angular.module('bp.about', ['ng.config', 'ui.router'])
  .config(AboutCfg);

AboutCfg.$inject = ['$configProvider', '$stateProvider'];
function AboutCfg($configProvider, $stateProvider) {
  const MODULE_URL = $configProvider.get('MODULE_URL');
  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: MODULE_URL + 'bp.about/partials/about.html'
    });
}
