const gulp = require('gulp');
const postcss = require('gulp-postcss');
const pug = require('gulp-pug');
const cssnano = require('cssnano');
const lost = require('lost');
const cssnext = require('postcss-cssnext');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('styles', () => {
    let plugins = [
        cssnext(),
        //cssnano(),
        lost()
    ];
    return gulp.src('./src/styles/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest/styles'));
});

gulp.task('views', () => {
    return gulp.src('./src/views/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('.'));
});

gulp.task('watch', () => {
    gulp.watch('src/styles/*.css', ['css'])
        .on('change', browserSync.reload)
        .on('error', swallowError);
    gulp.watch(['index.html', '404.html'])
        .on('change', browserSync.reload)
        .on('error', swallowError);
});

const swallowError = () => {
    console.log(error.toString());
    this.emit('end');
}

gulp.task('build', ['browser-sync', 'styles', 'views']);

gulp.task('serve', ['build', 'watch']);

gulp.task('default', ['serve']);
