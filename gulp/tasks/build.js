var gulp = require('gulp');

// Run this to compress all the things!
gulp.task('build', ['clean'], function() {
  gulp.start(['copy-fonts', 'minify-css', 'minify-js']);
});
