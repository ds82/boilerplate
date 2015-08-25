'use strict';

// require('./controller/controller');
// require('./directives/directives');

angular.module('bp.about', ['ui.router'])
  .config(AboutCfg);

function AboutCfg($stateProvider) {
  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'modules/bp.about/partials/about.html'
    });
}
