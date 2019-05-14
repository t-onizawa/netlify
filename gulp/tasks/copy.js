// require
const config = require('../config.js');
const gulp = require('gulp');
const plumber = require('gulp-plumber');

// src
const src =  config.path.src.copyAry;

/**
 * TASK
 */
gulp.task('copy', () => {
    return gulp.src(src, { since: gulp.lastRun('copy')})
        .pipe(plumber({
            errorHandler: function(err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(gulp.dest(config.path.dist));
});