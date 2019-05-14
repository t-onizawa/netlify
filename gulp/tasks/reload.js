// require
const config = require('../config.js');
const gulp = require('gulp');
const browserSync = require('browser-sync');

/**
 * TASK
 */
let timer = null;
gulp.task('reload', (done) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        browserSync.reload();
        done();
    },300);
});