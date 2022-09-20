import gulp, { src } from 'gulp';
import paths from '../paths'; 
import cached from 'gulp-cached';

export default function fonts() {
  return src(`${paths.src.fonts}/**/*`)
      .pipe(cached())
      .pipe(gulp.dest(paths.dist.fonts));
}
