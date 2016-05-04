'use strict';

import gulp from 'gulp';
import chalk from 'chalk';
import nodemon from 'gulp-nodemon';
import debug from 'gulp-debug';
import forever from 'forever';
import livereload from 'gulp-livereload';
import lodash from 'lodash';
import * as build from './build';
import path from 'path';
import { exec } from 'child_process';

let nodemonInstance;

function start(done) {
  nodemonInstance = nodemon({
    //TODO this is hacky because i am in a hurry
    script: '*/modern-mean-core-material/dist/server/app/server.js',
    watch: ['noop'],
  });
  return done();
}
start.displayName = 'Nodemon Start Server';

function restart(done) {
  nodemonInstance.restart();
  return nodemonInstance.on('start', function () {
    return done();
  });
}
restart.displayName = 'nodemon:restart';

function watchClient(done) {
  let watchFiles = ['./modules/*/client/**/*', '!**/*.constants.js', '!**/*.values.js'];
  livereload.listen();
  let watcher = gulp.watch(watchFiles);
  watcher.on('change', function(filepath, stats) {
    let pathArr = filepath.split('/');
    let modulePath = pathArr[0] + '/' + pathArr[1];
    let gulpFile = './' + modulePath + '/gulpfile.babel.js';
    exec('gulp --gulpfile ' + gulpFile + ' client', function(error, stdout, stderr) {
      console.log(stdout);
      gulp.series(gulp.parallel(build.modules, build.images), build.inject, restart, livereloadChanged)();
    });
  });

  return done();
}
watchClient.displayName = 'Serve::Watch::Client';

function watchServer(done) {
  let watchFiles = ['./modules/*/server/**/*'];
  let watcher = gulp.watch(watchFiles);
  watcher.on('change', function(filepath, stats) {
    let pathArr = filepath.split('/');
    let modulePath = pathArr[0] + '/' + pathArr[1];
    let gulpFile = './' + modulePath + '/gulpfile.babel.js';
    exec('gulp --gulpfile ' + gulpFile + ' server', function(error, stdout, stderr) {
      console.log(stdout);
      gulp.series(build.inject, restart)();
    });
  });

  return done();

}
watchServer.displayName = 'Serve::Watch::Server';

function livereloadChanged(done) {
  setTimeout(function () {
    livereload.changed('Restart Client');
  }, 2000);
  return done();
}
livereloadChanged.displayName = 'Serve::LiveReload::Changed';

function terminalClear(done) {
  console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
  if (done) {
    return done();
  }
}
/*
function startForever(done) {
  let config = mergeEnvironment();

  forever.startDaemon('./build/core/server/app/server.js', config.serve.forever);
  console.log(chalk.yellow.bold('ModernMean Production server running as Forever Daemon'));
  console.log(chalk.yellow.bold('You can now use any forever command line options'));
  console.log(chalk.yellow.bold('https://github.com/foreverjs/forever'));
  return done();


}
*/

let watch = {
  all: gulp.parallel(watchClient, watchServer),
  client: watchClient,
  server: watchServer
}

export {
  start,
  restart,
  watch,
  terminalClear as clear
  //startForever as forever
};
