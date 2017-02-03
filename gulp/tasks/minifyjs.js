var gulp    = require('gulp');
var config  = require('../../gulp.config').production.js;
var size    = require('gulp-filesize');
var uglify  = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('minify-js', ['js'], function() {
  config.map(function(bundle) {
    return gulp.src(bundle.src)
      .pipe(concat(bundle.outputName))
      .pipe(uglify())
      .pipe(gulp.dest(bundle.dest))
      .pipe(size());
  });
});
