'use strict';

var gulp = require('gulp');
var livereload = require('./livereload');

gulp.task('watch', ['build', 'lr-server'], function() {
  gulp.watch([
    './app/js/**/*.js',
    './app/modules/**/*.js',
    '!./app/js/common.js'
  ], ['browserify:bundle']);
  gulp.watch('./app/js/common.js', ['browserify:common']);
  gulp.watch('./app/**/*.html', livereload.reload);
  gulp.watch('./app/less/*.less', ['less']);
});

