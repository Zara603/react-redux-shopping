var gulp = require('gulp');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var config = require("../../gulp.config").images;

gulp.task('images', function () {
  return gulp.src(config.src)
    .pipe(cache(imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest(config.dest));
});
