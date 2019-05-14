// require
const config = require('../config.js');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');

/**
 * TASK
 */
gulp.task('img', () => {
    return gulp.src([config.path.src.img], { since: gulp.lastRun('img')})
        .pipe(plumber({
            errorHandler: function(err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(gulp.dest(config.path.dist))
        .pipe(browserSync.stream());
});