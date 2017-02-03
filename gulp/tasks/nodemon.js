var gulp        = require('gulp');
var nodemon     = require('gulp-nodemon');
var config      = require('../../gulp.config').nodemon;

gulp.task('nodemon', function (cb) {
  var started = false;
  return nodemon({
    script: config.script
  }).on('start', function () {
    if (!started) {
      cb();
      started = true; 
    } 
  });
});