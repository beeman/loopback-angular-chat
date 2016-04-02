import gulp from 'gulp'
import nodemon from 'gulp-nodemon'
import eslint from 'gulp-eslint'
import rename from 'gulp-rename'
import loopbackAngular from 'gulp-loopback-sdk-angular'

const debugEnabled = process.env.DEBUG_API
const apiUrl = process.env.API_URL || 'http://0.0.0.0:3000/api'
const exec = debugEnabled ? 'babel-node --debug' : 'babel-node'

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
  .pipe(loopbackAngular({ apiUrl }))
  .pipe(rename('lb-services.js'))
  .pipe(gulp.dest('./client/lib'))
)

gulp.task('serve', () => nodemon({
  exec,
  script: 'server/server.js',
  watch: [ 'server/', 'common/' ],
  ext: 'js json',
  tasks: [ 'lint' ]
}))

gulp.task('default', [ 'lint', 'loopback', 'serve' ])
