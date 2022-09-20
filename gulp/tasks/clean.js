import gulp from 'gulp';
import del from 'del';
import paths from '../paths';


gulp.task('clean', (done) => {
  del.sync(`${paths.baseDist}`)
  done()
})
