'use strict';

var gulp = require('gulp');
var lint = require('gulp-eslint');

gulp.task('lint', () => {
  return gulp.src(['./app/**/*.js', './gulp/**/*.js', './server/**/*.js'])
    .pipe(lint())
    .pipe(lint.format());
});
