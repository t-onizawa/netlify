// require
const config = require('../config.js');
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');

/**
 * TASK
 */
gulp.task('css', () => {
    return gulp.src([config.path.src.css], { since: gulp.lastRun('css')})
        .pipe(plumber({
            errorHandler: function(err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sass(config.setting.css.compiler.options))
        .pipe(autoprefixer({
            browsers: config.setting.css.browsers,
            cascade: false
        }))
        .pipe(gulp.dest(config.path.dist))
        .pipe(browserSync.stream());
});