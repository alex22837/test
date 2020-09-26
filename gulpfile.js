const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass-complete', function(){
	return gulp.src('./app/sass/**/*.sass')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error',sass.logError))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./app/css/'))
	})

gulp.task('watch', function(){
	gulp.watch('./app/sass/**/*.sass', gulp.series('sass-complete'))
})