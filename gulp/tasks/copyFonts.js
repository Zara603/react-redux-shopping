var gulp = require("gulp");
var config = require("../../gulp.config").fonts;

gulp.task("copy-fonts", function() {
  gulp.src(config.src + "/**/*.{ttf,woff,eof,svg,eot,json,otf}")
  .pipe(gulp.dest(config.dest));
});