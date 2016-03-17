'use strict';

module.exports = {

	serverport: 3000,

	debugMode: true,

	srcPaths: {
		html: ['src/**/*.html'],
		scss: ['src/assets/scss/*.scss']
	},

	destPaths: {
		root: 'dist',
		css: 'dist/assets/css',
		js: 'dist/assets/js',
		img: 'dist/assets/img',
		fonts: 'dist/assets/fonts'
	},

	watchPaths: {
		html: ['src/**/*.html'],
		partials: ['src/partials/**/*.{js,json,hbs}'],
		helpers: ['src/assets/js/helpers/**/*.js'],
		data: ['src/data/**/*.{js,json}'],
		scss: ['src/assets/scss/**/*.scss'],
		js: [
			'src/assets/js/**/*.js',
			'src/assets/!**/*.min.js',
			'!**/*.min.js'
		],
		libs: [
			'src/assets/js/libs/**/*.js',
			'src/assets/!**/*.min.js'
		],
		images: ['src/assets/img/**/*.+(png|jpg|jpeg|gif|svg)'],
		fonts: ['src/assets/fonts/**/*']
	},

	options: {
		scss: {
			style: 'compressed'
		}
	},

	// Google pagespeed
	'URL'       : 'http://domain.com',
	'strategy'  : 'mobile',

	'gzip': {
		'src': 'src/**/*.{html,xml,json,css,js,js.map}',
		'dest': 'dist/',
		'options': {

		}
	},

	// gulp deploy
	// set options here
	'hostname': '',
	'username': '',
	'password': '',
	'destination': 'public_html',
	'exclude': [],

	// gh-pages default pushes to gh-pages branch.
	// remoteUrl: '', By default gulp-gh-pages assumes the current working directory is a git repository and uses its remote url. If your gulpfile.js is not in a git repository, or if you want to push to a different remote url ( username.github.io ), you can specify it. Ensure you have write access to the repository.
	// branch by default is gh-pages. set to master for username.github.io
	// set source to what dir you want to push to github
	'githubPages': {
		'remoteUrl'	: '',
		'branch'	: '',
		'source'	: 'dist/**/*'
	},

	'bowerDir' : 'src/assets/vendor' ,

	'images': {
		'src' : 'src/assets/images/**/*.{png,jpg,jpeg,gif,svg,ico}',
		'dest': 'dist/assets/images'
	},

	'video': {
		'src' : 'src/assets/video/**/*',
		'dest': 'dist/assets/video'
	},

	'fonts': {
		'src' : 'src/assets/fonts/**/*',
		'dest': 'dist/assets/fonts'
	},

	'src' : {
		'root' : 'src'
	},

	'dist': {
		'root'  : 'dist'
	},

	'styles': {
		'src' : 'src/assets/scss',
		'dest': 'dist/assets/css'
	},

	'scripts': {
		'src' : 'src/assets/js/**/*.js',
		'dest': 'dist/assets/js',
		'order': [
			'**/**/modernizr.js',
			'**/**/jquery.js',
			'**/**/jquery.validate.js',
			'**/**/*.js'
		]
	}

};
