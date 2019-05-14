// require
const config = require('../config.js');
const gulp = require('gulp');
const ejs = require('gulp-ejs');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');

/**
 * TASK
 */

const htmlBuild = (allFlag) => {
    const lastRun = allFlag ? {} : { since: gulp.lastRun('html')};
  return  gulp.src([config.path.src.html, '!' + config.path.ignore.html], lastRun)
      .pipe(plumber({
          errorHandler: function(err) {
              console.log(err);
              this.emit('end');
          }
      }))
      .pipe(ejs({
          indent: function(text, depth) {
              var output = '';

              text.split('\n').forEach(function(line, num) {

                  // To avoid indenting the first line
                  if ( num >= 0 ) {
                      for(var i= 0; i < depth; i++) {
                          line = '    ' + line +  '\n';
                      }
                  } else {

                  }
                  output += line;
              });
              output = output.replace(/^\n/gm, '');
              return output;
          }
      }, {}, config.setting.html.template.options))
      .pipe(gulp.dest(config.path.dist))
      .pipe(browserSync.stream());
};
gulp.task('html', () => {
    return htmlBuild();
});

gulp.task('html-all', () => {
    return htmlBuild(true);
});