'use strict';

var pck        = require('../../package.json');
var gulp       = require('gulp');
var seq        = require('gulp-sequence');
var fs         = require('fs');
var path       = require('path');
var Brify      = require('browserify');
var buffer     = require('vinyl-buffer');
var source     = require('vinyl-source-stream');
var babelify   = require('babelify');
var livereload = require('./livereload');

const PATH_TO_COMMON = path.resolve(__dirname, '../../app/js/common.js');
const COMMON_DEPS = Object.keys(pck.dependencies);

gulp.task('browserify', seq(
  ['browserify:bundle', 'browserify:before:common'],
  'browserify:common'
));

gulp.task('browserify:bundle', function() {
  var common = new Brify();
  var stream = common
    .add('./app/js/bundle');

  COMMON_DEPS.forEach(dep => stream.external(dep));

  return stream
    .transform(babelify.configure({optional: 'runtime'}))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/js/'))
    .pipe(livereload());
});

gulp.task('browserify:before:common', (done) => {
  var fileContents = `'use strict';
${makeRequireCalls(COMMON_DEPS)}
`
  fs.writeFile(PATH_TO_COMMON, fileContents, done);
});

function makeRequireCalls(deps = []) {
  var code = '';
  deps.forEach(dep => {code += `require('${dep}');\n`});
  return code;
}

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
