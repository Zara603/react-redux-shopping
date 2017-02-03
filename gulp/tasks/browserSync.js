var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../../gulp.config').browserSync;

gulp.task('browserSync', ['nodemon'], function() {
  browserSync.init(null, config);
});
