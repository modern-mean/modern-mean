'use strict';

import gulp from 'gulp';
import * as build from './tasks/gulp/build';
import * as serve from './tasks/gulp/serve';
import * as environments from './tasks/gulp/environments';

function link() {
  return gulp.src(['./node_modules/modern-mean-*'])
          .pipe(gulp.symlink('./modules'));
}
link.displayName = 'link';
gulp.task(link);


//Gulp Default
let defaultTask = gulp.series(build.clean, environments.development, build.moduleCheck, build.installModules, build.buildModules, gulp.parallel(build.modules, build.images), build.inject, serve.start, serve.watch.all);
defaultTask.displayName = 'default';
gulp.task(defaultTask);

//Gulp Debug
let debugTask = gulp.series(build.clean, environments.debug, build.moduleCheck, build.installModules, build.buildModules, gulp.parallel(build.modules, build.images), build.inject, serve.start, serve.watch.all);
debugTask.displayName = 'debug';
gulp.task(debugTask);
