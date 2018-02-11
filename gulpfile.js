var gulp = require('gulp');
var sass = require('gulp-sass');

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');


gulp.task('styles', function() {
    gulp.src('assets/css/src/application.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('application.css'))
        .pipe(gulp.dest('./assets/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('assets/css/src/**/*.scss',['styles']);
});

