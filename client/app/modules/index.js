'use strict';

require('./bp.about');
require('./bp.contact');
require('./bp.home');

angular.module('bp.modules', [
  'bp.about',
  'bp.contact',
  'bp.home'
]);
