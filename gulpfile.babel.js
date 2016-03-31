import gulp from 'gulp'
import nodemon from 'gulp-nodemon'
import eslint from 'gulp-eslint'
import rename from 'gulp-rename'
import loopbackAngular from 'gulp-loopback-sdk-angular'

gulp.task('lint', () => gulp
  .src([
    'client/**/*.js',
    'common/**/*.js',
    'server/**/*.js'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
)

gulp.task('loopback', () => gulp
  .src('./server/server.js')
  .pipe(loopbackAngular())
  .pipe(rename('lb-services.js'))
  .pipe(gulp.dest('./client/lib'))
)

gulp.task('serve', () => nodemon({
  exec: 'babel-node',
  script: 'server/server.js',
  ext: 'js json',
  watch: [ 'server/', 'common/' ],
  tasks: [ 'lint' ]
}))

gulp.task('default', [ 'lint', 'loopback', 'serve' ])
