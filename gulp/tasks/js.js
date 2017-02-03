/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   This task is set up to generate multiple separate bundles, from
   different sources, and to use Watchify when run from the default task.

   See browserify.bundleConfigs in gulp/config.js
*/

var path          = require('path');
var browserify    = require('browserify');
var browserSync   = require('browser-sync');
var watchify      = require('watchify');
var mergeStream   = require('merge-stream');
var buffer        = require('vinyl-buffer');
var bundleLogger  = require('../util/bundleLogger');
var handleErrors  = require('../util/handleErrors');
var gulp          = require('gulp');
var source        = require('vinyl-source-stream');
var _             = require('underscore');
var babelify      = require('babelify');
var config        = require('../../gulp.config').js;
var sourcemaps    = require('gulp-sourcemaps');
var webpackStream = require('webpack-stream');
var webpack       = require('webpack');
var plumber = require('gulp-plumber');

var browserifyTask = function(devMode) {

  var browserifyThis = function(bundleConfig) {
    function bundle () {
      return  gulp.src(bundleConfig.entries)
              .pipe(plumber())
              .pipe(webpackStream({
                watch: devMode,
                devtool: 'source-map',
                output: {
                  filename: bundleConfig.outputName
                },
                module: {
                  loaders: [{
                    test: /\.js$/,
                    include: path.join(__dirname, '../../public/js'),
                    exclude: /(node_modules|bower_components)/,
                    loaders: ['babel?presets[]=react,presets[]=es2015,cacheDirectory']
                  }]
                }
              }))
              .pipe(sourcemaps.init({ loadMaps: true }))
              .pipe(sourcemaps.write('./'))
              .pipe(gulp.dest(bundleConfig.dest))
    };
    return bundle();
  };

  // Start bundling with Browserify for each bundleConfig specified
  return mergeStream.apply(gulp, _.map(config.bundleConfigs, browserifyThis));

};

gulp.task('js', function() {
  return browserifyTask()
});

// Exporting the task so we can call it directly in our watch task, with the 'devMode' option
module.exports = browserifyTask;
