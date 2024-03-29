import gulp, { src } from 'gulp';
import paths from '../paths';
import cached from 'gulp-cached';

export default function images() {
  return src(`${paths.src.images}/**/*.{png,jpg,gif,svg}`)
      .pipe(cached())
      .pipe(gulp.dest(paths.dist.images));
}
