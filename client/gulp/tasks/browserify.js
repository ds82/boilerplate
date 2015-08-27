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

const REQUIRE_REGEXP = /\/\/ REQUIRE_START[\s\S]*\/\/ REQUIRE_END\n?/;

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
  var fileContents = `// REQUIRE_START
${makeRequireCalls(COMMON_DEPS)}// REQUIRE_END
`;
  readFile(PATH_TO_COMMON)
    .then(data => data.replace(REQUIRE_REGEXP, fileContents))
    .then(data => writeFile(PATH_TO_COMMON, data))
    .then(() => done())
    .catch(err => { console.log('error', err); done(); });
});

function readFile(file) {
  console.log('readFile');
  return new Promise(function(resolve, reject) {
    fs.readFile(file, (err, contents) => {
      console.log(err, contents);
      return (err) ? reject(err) : resolve(contents.toString());
    });
  });
}

function writeFile(file, data) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(file, data, (err) => {
      return (err) ? reject(err) : resolve(data);
    })
  });
}

function makeRequireCalls(deps = []) {
  var code = '';
  deps.forEach(dep => {code += `require('${dep}');\n`});
  return code;
}

gulp.task('browserify:common', function() {
  var common = new Brify();
  var stream = common
    .add('./app/js/common');

  COMMON_DEPS.forEach(dep => stream.require(dep));

  return stream
    .bundle()
    .pipe(source('common.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/js/'))
    .pipe(livereload());
});
