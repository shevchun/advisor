import gulp, { src } from 'gulp';
import paths from '../paths';
import cached from 'gulp-cached';
import multiDest from 'gulp-multi-dest';
import util from 'gulp-util';


export default function staticImages() {
  return src(`${paths.src.static}/**/*.{png,jpg,gif,svg,mp4,webm,mp3}`)
    .pipe(cached())
    .pipe(util.env.oc ? multiDest([paths.dist.static, '../image/data']) : gulp.dest(paths.dist.static));
}
