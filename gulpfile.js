const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const connect = require('gulp-connect');
const cleanCSS = require('gulp-clean-css');


gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./less/'));
});

gulp.task('minify-css', function() {
  return gulp.src('./less/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: path.join(__dirname, 'public')
  });
});

gulp.task('watch', function() {
    gulp.watch('./less/**/*.less', ['less']);
    gulp.watch('./less/**/*.css', ['minify-css']);
})

gulp.task('default', ['less','minify-css', 'webserver', 'watch']);
