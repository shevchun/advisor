##Requirements
* node ^16.13.0
* npm ^8.7.0

##You must be globally installed *gulp*
To set the type in the console `npm install gulp -g`

## Install dependencies, and check if it works

* cd 'project'
* npm install
* npm start / gulp

## Gulp tasks

* **gulp** - default task which runs the project with the initial settings with browsersync and Livereload

* **gulp build** - default task which runs the project with the initial settings without browsersync and Livereload

* **gulp svg-sprite** - run task which takes a bunch of SVG files, optimizes them and bakes them into SVG sprites of several types

* **gulp clean** - run task which remove *dist* folder