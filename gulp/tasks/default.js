import gulp from 'gulp';
import options from '../../options.json';
import paths from '../paths';

import html from './html'
import css from './scss'
import images from './images'
import livereload from './livereload'
import scripts from './scripts'
import filesMenu from './markup-menu'
import staticImages from './static'
import fonts from './fonts'
import svgSprite from './svg-sprite'


gulp.task('watch', () => {
  gulp.watch(`${paths.baseSrc}/**/*.html`, gulp.series(html));
  gulp.watch(`${paths.src.styles}/**/*.{scss,css}`, gulp.series(css));
  gulp.watch(`${paths.src.static}/**/*.{png,jpg,gif,svg,mp4,webm,mp3}`, gulp.series(staticImages));
  gulp.watch(`${paths.src.images}/**/*.{png,jpg,gif,svg}`, gulp.series(images));
  gulp.watch([`${paths.baseSrc}/*.${options.templateEngine}`], gulp.series(filesMenu));
  gulp.watch(`${paths.src.scripts}/**/*.js`, gulp.series(scripts));
  gulp.watch(`${paths.src.fonts}/**/*`, gulp.series(fonts));
  gulp.watch(`${paths.src.svgsprite}/*`, gulp.series(svgSprite));
})

gulp.task('default', gulp.series(
  html, css, staticImages, images, filesMenu, scripts, fonts, svgSprite,
  gulp.parallel('watch', livereload)
))