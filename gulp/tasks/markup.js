'use strict';

var config 		  = require('../config'),
	gulp          = require('gulp'),
	cp            = require('child_process'),
	browserSync   = require('browser-sync'),
	plugins	      = require('gulp-load-plugins')();

gulp.task('markup', function() {

	return gulp.src(config.watchPaths.html)
		.pipe(plugins.plumber({
			errorHandler: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(plugins.hb({
			partials: config.watchPaths.partials,
			helpers: config.watchPaths.helpers,
			data: config.watchPaths.data
		}))
		.pipe(gulp.dest(config.destPaths.root));
});

gulp.task('hb-rebuild', ['markup'], function () {
	browserSync.reload();
});

gulp.task('html', function() {
    return gulp.src(config.dist.root + '/**/*.html')
        .pipe(plugins.htmlmin({
        	collapseWhitespace: true,
            removeComments: true,
            conservativeCollapse: true,
            collapseBooleanAttributes: true,
            removeRedundantAttributes: true,
            minifyJS: true,
            minifyCSS: true
        }))
        .pipe(gulp.dest(config.dist.root))
});
