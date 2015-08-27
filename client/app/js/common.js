'use strict';
//
// Changes in this file are not covered by gulp.watch
// rebundle manually (this is on purpose)

// ugly bootstrap patch
window.jQuery = require('jquery');

// REQUIRE_START
require('angular');
require('angular-strap');
require('angular-ui-router');
require('bootstrap');
require('jquery');
require('ng.config');
// REQUIRE_END
