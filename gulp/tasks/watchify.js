var gulp           = require('gulp');
var browserifyTask = require('./js');

gulp.task('watchify', function() {
  console.log(' watchify')
  // Start browserify task with devMode === true
  return browserifyTask(true);
});
