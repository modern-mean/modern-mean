'use strict';

import gulp from 'gulp';
import * as build from './tasks/gulp/build';
import * as serve from './tasks/gulp/serve';


function setDevelopment(done) {
  process.env.NODE_ENV = 'development';
  return done();
}

function setTest(done) {
  process.env.NODE_ENV = 'test';
  return done();
}

function setProduction(done) {
  process.env.NODE_ENV = 'production';
  return done();
}

function link() {
  return gulp.src(['./node_modules/modern-mean-*'])
          .pipe(gulp.symlink('./modules'));
}
link.displayName = 'link';
gulp.task(link);

//Gulp Default
var defaultTask = gulp.series(build.clean, setDevelopment, gulp.parallel(build.modules, build.images), build.inject, serve.start, serve.watch.all);
defaultTask.displayName = 'default';
gulp.task(defaultTask);
