'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var livereload = require('gulp-livereload');

gulp.task('less', function() {
  return gulp
    .src('./app/less/style.less')
    .pipe(less({
    }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(livereload());
});
