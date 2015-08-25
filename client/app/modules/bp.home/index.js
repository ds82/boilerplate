'use strict';

// require('./controller/controller');
// require('./directives/directives');

angular.module('bp.home', ['ui.router'])
  .config(HomeCfg);

function HomeCfg($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'modules/bp.home/partials/home.html'
    });
}
