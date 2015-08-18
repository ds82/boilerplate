'use strict';

// require('./controller/controller');
// require('./directives/directives');

angular.module('bp.contact', ['ui.router'])
  .config(ContactCfg);

function ContactCfg($stateProvider) {
  $stateProvider
    .state('contact', {
      url: '/contact',
      templateUrl: 'js/modules/bp.contact/partials/contact.html'
    });
}
