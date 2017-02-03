/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp     = require('gulp');
var config   = require('../../gulp.config');
var util     = require('gulp-util');

var tasks = ['build', 'watchify'];
console.log(' watch')
if (util.env.browserSync) tasks.push('browserSync');

gulp.task('watch', tasks, function() {
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
  gulp.watch(config.less.watchPath, ['less']);
  gulp.watch(config.images.src, ['images']);
});
