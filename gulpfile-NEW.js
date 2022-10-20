var config = {
	nodeDir: "/home/vlad/webdev/node_modules/",
};

////////////////////////////////////////////////////////////

// Load all the modules from Node Modules folder (package.json)
const gulp = require(config.nodeDir + "gulp");
const plumber = require(config.nodeDir + "gulp-plumber");
const autoprefixer = require(config.nodeDir + "gulp-autoprefixer");
const rename = require(config.nodeDir + "gulp-rename");
const include = require(config.nodeDir + "gulp-include");
const sass = require(config.nodeDir + "gulp-sass")(require(config.nodeDir + "node-sass"));
const sourcemaps = require(config.nodeDir + "gulp-sourcemaps");
var terser = require(config.nodeDir + "gulp-terser");
const browserSync = require(config.nodeDir + "browser-sync").create();

////////////////////////////////////////////////////////////

var themeDir = "./";

////////////////////////////////////////////////////////////

// BrowserSync
var browserSyncOptions = {
  baseDir: "./",
  watchTask: true,
  host: "myadvisor.local",
  proxy: "myadvisor.local",
};

////////////////////////////////////////////////////////////

// Default error handler
var onError = function (err) {
  console.log("An error occured:", err.message);
  this.emit("end");
};

////////////////////////////////////////////////////////////

// JS to watch
var jsFiles = ["./app/scripts/*.js"];

// Sass files to watch
var cssFiles = "./app/*/*.scss";

// Images to watch
var imgSRC = "assets/images/src/**/*",
  imgDEST = "assets/images/";

// Automatically reloads the page when files changed
var browserSyncWatchFiles = ["./**/*.min.js", "./**/*.php"];

////////////////////////////////////////////////////////////

// Scripts - JS
function jsScripts(done) {
  return gulp
    .src("./app/scripts/index.js")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      include({
        extensions: "js",
        hardFail: true,
        includePaths: [themeDir],
      })
    )

    .pipe(rename({ basename: "reptile", suffix: "-min" }))
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/js"))
    .pipe(browserSync.reload({ stream: true }));
  done();
}

////////////////////////////////////////////////////////////

// Styles - SASS
function sassStyles(done) {
  return gulp
    .src("./app/scss/index.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        // errLogToConsole: true,
        //  precision: 8,
        noCache: true,
        includePaths: [config.nodeDir],
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename({ basename: "reptile" }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
  done();
}


////////////////////////////////////////////////////////////

// Starts browser-sync task for starting the server.
function browserSynced(done) {
  browserSync.init(browserSyncWatchFiles, browserSyncOptions);
  done();
}

////////////////////////////////////////////////////////////

// Start the livereload server and watch files for change
function watchFiles() {
  gulp.watch(jsFiles, jsScripts);
  gulp.watch(cssFiles, sassStyles);

}

const watch = gulp.series(browserSynced, watchFiles);

exports.default = watch;
