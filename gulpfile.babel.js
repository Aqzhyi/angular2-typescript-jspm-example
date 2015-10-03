import gulp from 'gulp'
import gulploadplugins from 'gulp-load-plugins'

let plugins = gulploadplugins()

let tsProject = plugins.typescript.createProject('./tsconfig.json')

gulp.task('watch', () => {
  gulp.watch('./src/**/*.ts', ['build'])
})

gulp.task('build', (done) => {
  return gulp.src('./src/**/*.ts')
  .pipe(plugins.plumberNotifier())
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.typescript(tsProject))
  // .pipe(plugins.babel({
  //   modules: 'umd'
  // }))
  .pipe(plugins.sourcemaps.write())
  .pipe(gulp.dest('./dist'))
})
