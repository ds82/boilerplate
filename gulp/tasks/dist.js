'use strict';

var gulp = require('gulp');

gulp.task('dist:fonts', function() {
  return gulp
    .src(['./node_modules/bootstrap/fonts/**/*'])
    .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('dist', ['dist:fonts'], function() {});
