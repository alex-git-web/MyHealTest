
const { task, src, dest, watch, parallel, series } = require('gulp');
const { existsSync } = require( 'fs');
const clean = require('gulp-clean');
const sass = require('gulp-sass')(require('sass'));
const { init, write } = require('gulp-sourcemaps');
const sassGlob = require('gulp-sass-glob');
// const changed = require('gulp-changed');

task('clean', function (done) {
	if (existsSync("./src/build/")) {
		return src('./src/build/', { read: false })
			.pipe(clean({ force: true }))
	}
	done()
});

task('sass', function () {
	return src('./src/scss/**/*.scss')
		// .pipe(changed('./build/css/'))
		.pipe(init())
		.pipe(sassGlob())
		.pipe(sass().on('error', sass.logError))
		.pipe(write())
		.pipe(dest('./src/build/css/'))
});

task('fonts', function () {
	return src('./src/fonts/**/*')
		// .pipe(changed('./build/fonts/'))
		.pipe(dest('./src/build/fonts/'))
});


task('watch', function () {
	watch('./src/scss/**/*.scss', parallel('sass'));
});

exports.default = series(
	'clean',
	parallel('sass', 'fonts'),
	parallel('watch')
);



