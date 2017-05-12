const gulp = require('gulp');
const postcss = require('gulp-postcss');
const pug = require('gulp-pug');
const cssnano = require('cssnano');
const lost = require('lost');
const cssnext = require('postcss-cssnext');
const browserSync = require('browser-sync').create();

let paths = {
    stylesSrc: './src/styles/**/*.css',
    stylesDest: './dest/styles',
    viewsSrc: './src/views/**/*.pug',
    viewsDest: '.'
}

let plugins = [
    cssnext(),
    //cssnano(),
    lost()
];

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('styles', () => {
    return gulp.src(paths.stylesSrc)
        .pipe(postcss(plugins))
        .pipe(gulp.dest(paths.stylesDest));
});

gulp.task('views', () => {
    return gulp.src(paths.viewsSrc)
        .pipe(pug())
        .pipe(gulp.dest(paths.viewsDest));
});

gulp.task('watch', () => {
    gulp.watch(paths.stylesSrc, ['styles'])
        .on('change', browserSync.reload)
        .on('error', swallowError);
    gulp.watch(paths.viewsSrc, ['views'])
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
