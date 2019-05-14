const config = require('../config.js');
const gulp = require('gulp');
const browserSync = require('browser-sync');

/**
 * TASK
 */
gulp.task('watch', (done) => {
    gulp.watch(config.path.src.html, gulp.task('html'));
    gulp.watch(config.path.src.css, gulp.task('css'));
    gulp.watch(config.path.src.js, gulp.task('js'));
    gulp.watch(config.path.src.img, gulp.task('img'));
    gulp.watch(config.path.src.copyAry, gulp.task('copy'));
    gulp.watch(config.path.ignore.html, gulp.task('html-all'));

    gulp.watch([
        config.path.src.html,
        config.path.src.js,
        config.path.src.img,

        config.path.ignore.html,
    ], gulp.task('reload'));

    done();
});
