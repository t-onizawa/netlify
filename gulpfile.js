const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp/tasks', {recurse: true});

/**
 * default
 */
gulp.task('default',
    gulp.series(
        gulp.parallel('html', 'css', 'js', 'img', 'copy', 'server'),
        gulp.parallel('watch')
    )
);

/**
 * build
 */
gulp.task('build',
    gulp.series(
        gulp.parallel('html', 'css', 'js', 'img', 'copy'),
    )
);