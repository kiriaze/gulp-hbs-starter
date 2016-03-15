'use strict';

var config       = require('../config'),
	gulp         = require('gulp'),
	// gulp-load-plugins will only load plugins prefixed with gulp
	plugins	     = require('gulp-load-plugins')(),
	browserSync  = require('browser-sync');

// Image tasks
gulp.task('images', function() {
	return gulp.src(config.images.src)
		.pipe(plugins.changed(config.images.dest)) // Ignore unchanged files
		.pipe(plugins.imagemin({
			progressive: true,
      		interlaced: true
		})) // Optimize
		.pipe(gulp.dest(config.images.dest))
		.pipe(browserSync.reload({stream:true}))
});
