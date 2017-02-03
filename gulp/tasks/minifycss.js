var gulp      = require('gulp');
var config    = require('../../gulp.config').production.css;
var minifyCSS = require('gulp-minify-css');
var size      = require('gulp-filesize');
var concat = require('gulp-concat');

gulp.task('minify-css', ['less'], function() {
  return gulp.src(config.src)
    .pipe(minifyCSS({ keepBreaks:true }))
    .pipe(concat(config.outputName))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
