let gulp        = require('gulp');
let browserSync = require('browser-sync');
let sass        = require('gulp-sass');
let jade        = require('gulp-jade');
let prefix      = require('gulp-autoprefixer');


let messages = {
    reload: '<span style="color: grey">Gulp:</span> $ reload'
};


gulp.task('reload', () => {
    browserSync.notify(messages.reload);
    browserSync.reload();
});


gulp.task('browser-sync', ['sass', 'reload'], () => {
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
    });
});


gulp.task('sass', () => {
    return gulp.src('assets/main.scss')
        .pipe(sass({
            includePaths: ['stylesheets'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets'));
});


gulp.task('jade', () => {
  return gulp.src('assets/index.jade')
  .pipe(jade())
  .pipe(gulp.dest('./'));
});


gulp.task('watch', () => {
    gulp.watch('assets/**/*.scss', ['sass']);
    gulp.watch('assets/**/*.jade', ['jade']);
    gulp.watch(['index.html', '404.html', 'assets/index.js'], ['reload']);
});


gulp.task('default', ['browser-sync', 'sass', 'jade', 'watch']);
