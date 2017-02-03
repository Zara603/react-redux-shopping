var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var less         = require('gulp-less');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config       = require('../../gulp.config').less;
var path = require('path');
var concat = require('gulp-concat');

gulp.task('less', function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: config.paths
    }))
    .pipe(concat(config.outputName))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
