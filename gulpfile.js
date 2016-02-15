var gulp       = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),

    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    nano         = require('gulp-cssnano'),

    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),

    plumber = require('gulp-plumber');

// Watcher
gulp.task('watch', function () {
    gulp.watch('./style/sass/**/*.scss', ['sass']);
    //gulp.watch('./js/app/**/*.js', ['uglify']);
});


// SASS
gulp.task('sass', function () {
    return gulp.src('./style/sass/**/*.scss')

    .pipe(plumber())

    .pipe(sourcemaps.init())

    .pipe(sass())

    .pipe(autoprefixer({
        browsers: ['last 2 version']
    }))

    .pipe(nano())

    .pipe(sourcemaps.write('.'))

    .pipe(plumber.stop())

    .pipe(gulp.dest('./style/css/'));
});

// Run the initial tasks, then set to watch status
gulp.task('default', ['sass', 'watch']);
