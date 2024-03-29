import browserSync from 'browser-sync';
import gutil from 'gulp-util';
import paths from '../paths';


export default function livereload() {
  browserSync.init({
    files: [{
      match: [`${paths.baseDist}/**/*`, '!./.idea/**/*'],
      fn: (event, file) => {
        /** Custom event handler **/
      },
      options: {
        ignored: '*.css.map'
      }
    }],
    open: 'local',
    reloadOnRestart: true,
    port: gutil.env.port || 3000,
    server: {
      baseDir: `${paths.baseDist}`,
      index: "index.html",
      directory: false
    },
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false
    },
    tunnel: !!gutil.env.tunnel
  })
}
