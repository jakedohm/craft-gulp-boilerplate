// Requirements for Gulp Tasks
var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
const autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

// Compiling of SASS into CSS
gulp.task('sassToCleanCSS', function () {
	// Run processes on all .scss files in the /sass folder, unless they are prefixed with an _ (underscore).
	return gulp.src([
    	'!public/assets/sass/**/_*.scss',
    	'public/assets/sass/**/*.scss'
    ])
    // Compile SASS into CSS
	.pipe(sass())
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

// Watch all files in the /sass folder, and if any of them change (are saved) run the task sassToCleanCSS.
gulp.task('sass-watch', ['sassToCleanCSS'], function (){
  gulp.watch('public/assets/sass/**/*.scss', ['sassToCleanCSS']);
});