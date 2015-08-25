'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('lr-server', () => livereload.listen());

module.exports = livereload;
