export default {
  baseSrc: './app',
  baseDist: './dist',
  src: {
    styles: './app/scss',
    svgsprite: './app/svg-sprite',
    images: './app/images',
    scripts: './app/scripts',
    static: './app/data',
    includes: './app/_includes',
    fonts: './app/fonts',
  },
  dist: {
    styles: './dist/css',
    images: './dist/images',
    scripts: './dist/js',
    static: './dist/data',
    fonts: './dist/fonts',
  },
  inline: {
    styles: '/css',
    images: '/images'
  }
};