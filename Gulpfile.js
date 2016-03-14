var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify'),
    minifyCss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util');
​
​
var sassOptions = {
  style: "compressed"
};
​
gulp.task('sass', function() {
  gulp.src('./sass/app.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(gulp.dest("dist"));
});
​
gulp.task('scripts', function() {
  return gulp.src(['./js/utility.js', './js/app.js'])
    .pipe(concat('main.js'))
    .pipe(minify().on('error', gutil.log))
    .pipe(gulp.dest('./dist'));
});
​
gulp.task('default', function() {
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
  gulp.watch('./assets/js/**/*.js', ['scripts']);
});