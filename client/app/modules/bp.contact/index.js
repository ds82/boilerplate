'use strict';

angular.module('bp.contact', ['ng.config', 'ui.router'])
  .config(ContactCfg);

ContactCfg.$inject = ['$configProvider', '$stateProvider'];
function ContactCfg($configProvider, $stateProvider) {
  const MODULE_URL = $configProvider.get('MODULE_URL');
  $stateProvider
    .state('contact', {
      url: '/contact',
      templateUrl: MODULE_URL + 'bp.contact/partials/contact.html'
    });
}
