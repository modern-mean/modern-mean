'use strict';

import gulp from 'gulp';
import * as serve from 'modern-mean-serve-gulp/dist';

//Environment variables for all environments
function all() {
  process.env.MM_CORE_VIEWS = __dirname + '/node_modules/modern-mean-core-material/dist/server/views';
}

//Environment variables for debug environment
function debug(done) {
  all();

  process.env.NODE_ENV = 'development';
  process.env.MM_WINSTON_LEVEL = 'debug';
  process.env.MM_CORE_LIVERELOAD = 'true';
  process.env.MM_CORE_ANGULAR_DEBUG = 'true';

  return done();
}

//Environment variables for development environment
function development(done) {
  all();

  process.env.NODE_ENV = 'development';
  process.env.MM_WINSTON_LEVEL = 'info';
  process.env.MM_CORE_LIVERELOAD = 'true';

  return done();
}

function production(done) {
  all();

  process.env.NODE_ENV = 'production';
  process.env.MM_WINSTON_CONSOLE = 'false';
  process.env.MM_CORE_ANGULAR_INFO = 'false';

  return done();
}

//Gulp clean
let clean = gulp.series(serve.clean);
clean.displayName = 'clean';
gulp.task(clean);

//Run task
let run = gulp.series(serve.clean, serve.modules.install, serve.modules.build, gulp.parallel(serve.modules.application, serve.modules.images), serve.modules.inject, serve.nodemon.start, serve.watch.all);
run.displayName = 'run';

//Gulp Default
let defaultTask = gulp.series(development, run);
defaultTask.displayName = 'default';
gulp.task(defaultTask);

//Gulp Debug
let debugTask = gulp.series(debug, run);
debugTask.displayName = 'debug';
gulp.task(debugTask);

//Gulp Debug
let inject = gulp.series(serve.modules.inject);
inject.displayName = 'inject';
gulp.task(inject);
