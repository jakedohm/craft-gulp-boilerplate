// Requirements for Gulp Tasks
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
const autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

// Compiling of LESS into CSS
gulp.task('lessToCleanCSS', function () {
	// Run processes on all .less files in the /less folder, unless they are prefixed with an _ (underscore).
	return gulp.src([
    	'!public/assets/less/**/_*.less',
    	'public/assets/less/**/*.less'
    ])
    // Compile Less into CSS
	.pipe(less())
	// Automatically add compatibility prifixes for the last 2 versions, and IE8 and IE9.
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'ie 8', 'ie 9'],
        cascade: false
    }))
    // Completely minimize CSS
    .pipe(cleanCSS({compatibility: 'ie8'}))
    // Send compiled, auto-prefixed, minimized CSS to the /css file.
	.pipe(gulp.dest('public/assets/css'))
});

// Watch all files in the /less folder, and if any of them change (are saved) run the task lessToCleanCSS.
gulp.task('less-watch', ['lessToCleanCSS'], function (){
  gulp.watch('public/assets/less/**/*.less', ['lessToCleanCSS']);
});