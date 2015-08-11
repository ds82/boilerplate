'use strict';

var fs   = require('fs');
var path = require('path');
var gulp = require('gulp');
var livereload = require('gulp-livereload');

var files = fs.readdirSync(path.join(__dirname, 'tasks'));

files
  .filter(function(file) { return !!file.match(/\.js$/); })
  .forEach(function(file) { require('./tasks/' + file); });

gulp.task('default', [
  'dist',
  'browserify:common',
  'browserify:bundle',
  'less'
]);

gulp.task('watch', ['lr-server'], function() {
  gulp.watch(['./app/js/**/*.js', '!./app/js/common.js'], ['browserify:bundle']);
  gulp.watch('./app/js/common.js', ['browserify:common']);
  gulp.watch('./app/**/*.html', livereload.reload);
  gulp.watch('./app/less/*.less', ['less']);
});

gulp.task('lr-server', () => livereload.listen());
