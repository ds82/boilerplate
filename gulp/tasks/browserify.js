'use strict';

var gulp   = require('gulp');
var Brify  = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var livereload = require('gulp-livereload');

gulp.task('browserify:bundle', function() {
  var common = new Brify();
  return common
    .add('./app/js/bundle')
    .transform(babelify.configure({optional: 'runtime'}))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/js/'))
    .pipe(livereload());
});

gulp.task('browserify:common', function() {
  var common = new Brify();
  return common
    .add('./app/js/common')
    .bundle()
    .pipe(source('common.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/js/'))
    .pipe(livereload());
});
