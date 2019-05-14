// require
const config = require('../config.js');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');

/**
 * TASK
 */
gulp.task('js', () => {
    return gulp.src([config.path.src.js], { since: gulp.lastRun('js')})
        .pipe(plumber({
            errorHandler: function(err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(gulp.dest(config.path.dist))
        .pipe(browserSync.stream());
});