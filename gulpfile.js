var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var eslint = require('gulp-eslint')

gulp.task('lint', function () {
  gulp.src(['server/**/*.js', 'common/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})

gulp.task('serve', function () {
  nodemon({
    exec: 'babel-node',
    script: 'server/server.js',
    ext: 'js json',
    watch: ['server/', 'common/'],
    tasks: ['lint']
  })
})

gulp.task('default', ['lint', 'serve'])
