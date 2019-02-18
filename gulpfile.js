let gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');


sass.compiler = require('node-sass');


gulp.task('default', () => {
  return gulp.src('sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
      }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', () => {
  gulp.watch('sass/**/*.sass', gulp.parallel('default'))
})