const config = require('../config.js');
const gulp = require('gulp');
const browserSync = require('browser-sync');

/**
 * TASK
 */
gulp.task('server', (done) => {
    browserSync.init({
        server:  './',
        startPath: './page-list.html'
    });
    done();
});