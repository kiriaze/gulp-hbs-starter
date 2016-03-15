
var gulp       = require('gulp');
var cache      = require('gulp-cache');
var clean      = require('gulp-clean');
var concat     = require('gulp-concat');
var filesize   = require('gulp-filesize');
var handlebars = require('gulp-hb');
var plumber    = require('gulp-plumber');
var imagemin   = require('gulp-imagemin');
var sass       = require('gulp-sass');
var uglify     = require('gulp-uglify');
var uglifycss  = require('gulp-uglifycss');
var gutil      = require('gulp-util');
var browserify = require('gulp-browserify');
var watchify   = require('watchify');
var rename     = require('gulp-rename');

//

var config = {
  
  debugMode: true,

  srcPaths: {
    html: ['./app/**/*.html'],
    scss: ['./app/assets/scss/*.scss']
  },

  destPaths: {
    root: './dist',
    css: './dist/assets/css',
    js: './dist/assets/js',
    img: './dist/assets/img',
    fonts: 'dist/assets/fonts'
  },

  watchPaths: {
    html: ['app/**/*.html'],
    partials: ['./app/partials/**/*.{js,json,hbs}'],
    helpers: ['./app/assets/js/helpers/**/*.js'],
    data: ['./app/data/**/*.{js,json}'],
    scss: ['./app/assets/scss/**/*.scss'],
    js: ['./app/assets/js/**/*.js', './app/assets/!**/*.min.js', '!**/*.min.js'],
    libs: ['./app/assets/js/libs/**/*.js', './app/assets/!**/*.min.js'],
    images: ['./app/assets/img/**/*.+(png|jpg|jpeg|gif|svg)'],
    fonts: ['./app/assets/fonts/**/*']
  },

  options: {
    scss: {style: 'compressed'},
  }
};

// templates / partials

gulp.task('handlebars', function() {

  return gulp.src(config.watchPaths.html)
    .pipe(plumber({
          errorHandler: function (err) {
              console.log(err);
              this.emit('end');
          }
      }))
    .pipe(handlebars({
       partials: config.watchPaths.partials,
       helpers: config.watchPaths.helpers,
       data: config.watchPaths.data
    }))
    .pipe(gulp.dest(config.destPaths.root));
});

// sass

gulp.task('sass', function() {
  gulp.src(config.srcPaths.scss)
    .pipe(sass(config.options.scss).on('error', sass.logError))
    .pipe(uglifycss())
    .pipe(gulp.dest(config.destPaths.css))
    .pipe(filesize());
});

// js

gulp.task('concat-scripts', function(){
  return gulp.src(config.watchPaths.libs)
    .pipe(concat('plugins.min.js'))
    .pipe(gulp.dest(config.destPaths.js))
    .pipe(filesize());
});

gulp.task('scripts', ['concat-scripts'], function() {
  return gulp.src(config.watchPaths.js)
    .pipe(plumber({
          errorHandler: function (err) {
              console.log(err);
              this.emit('end');
          }
    }))
    .pipe(browserify({
      insertGlobals : true,
      debug : config.debugMode
    }))
    .pipe(uglify().on('error', gutil.log))
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest(config.destPaths.js))
    .pipe(filesize());
});

// images

gulp.task('images', function(){
  return gulp.src(config.watchPaths.images)
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest(config.destPaths.img))
});

// fonts

gulp.task('fonts', function() {
  return gulp.src(config.watchPaths.fonts)
  .pipe(gulp.dest(config.destPaths.fonts))
})

// clean

gulp.task('clean', function () {
  return gulp.src(config.destPaths.root, {read: false})
    .pipe(clean());
});

// build

gulp.task('rebuild', ['clean', 'handlebars', 'sass', 'concat-scripts', 'scripts', 'images', 'fonts'], function(){});

// default

gulp.task('default', function() {
  gulp.watch([config.watchPaths.html, config.watchPaths.partials, config.watchPaths.helpers, config.watchPaths.data, config.watchPaths.js], ['handlebars']);
  gulp.watch(config.watchPaths.scss, ['sass']);
  gulp.watch(config.watchPaths.js, ['scripts']);
  gulp.watch(config.watchPaths.libs, ['concat-scripts']);
  gulp.watch(config.watchPaths.images, ['images']);
  gulp.watch(config.watchPaths.fonts, ['fonts']);
});