"use strict";

import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import ngAnnotate from 'gulp-ng-annotate';
import filter from 'gulp-filter';
import debug from 'gulp-debug';
import rename from 'gulp-rename';
import ginject from 'gulp-inject';
import stripDebug from 'gulp-strip-debug';
import del from 'del';
import babel from 'gulp-babel';


function modules() {
  let angular = filter(['**/angular.js'], { restore: true });
  let bootloader = filter(['**/bootloader.js'], { restore: true });
  let applicationJS = filter(['**/application.js'], { restore: true });
  let applicationCSS = filter(['**/application.css'], { restore: true });
  let vendorJS = filter(['**/vendor.js'], { restore: true });
  let vendorCSS = filter(['**/vendor.css'], { restore: true });
  let templates = filter(['**/templates.js'], { restore: true });

  return gulp.src(['./modules/*/dist/client/**/*.{js,css}'])
          .pipe(angular)
          .pipe(rename('angular.js'))
          .pipe(angular.restore)
          .pipe(bootloader)
          .pipe(rename('bootloader.js'))
          .pipe(bootloader.restore)
          .pipe(applicationJS)
          .pipe(concat('application.js'))
          .pipe(applicationJS.restore)
          .pipe(templates)
          .pipe(concat('templates.js'))
          .pipe(templates.restore)
          .pipe(vendorJS)
          .pipe(concat('vendor.js'))
          .pipe(vendorJS.restore)
          .pipe(applicationCSS)
          .pipe(concat('application.css'))
          .pipe(applicationCSS.restore)
          .pipe(vendorCSS)
          .pipe(concat('vendor.css'))
          .pipe(vendorCSS.restore)
          .pipe(gulp.dest('./public/dist'));
}
modules.displayName = 'modules';
gulp.task(modules);

function images() {
  return gulp.src(['./modules/*/dist/client/img/**/*'])
          .pipe(rename(function (path) {
            let dir = path.dirname.split('/');
            path.dirname = dir[0];
            if (dir.length > 3) {
              let i;
              for(i = 4; i < dir.length; i += 1) {
                path.dirname += '/' + dir[i];
              }
            }
            return path;
          }))
          .pipe(gulp.dest('./public/dist/img'));
}
modules.displayName = 'images';
gulp.task(images);

function inject() {
  return gulp.src('modules/modern-mean-core-material/dist/server/views/index.server.view.html')
    .pipe(ginject(gulp.src(['public/dist/angular.js', 'public/dist/bootloader.js', 'public/dist/**/*.{js,css}'], {read: false}), {
      ignorePath: '/public'
    }))
    .pipe(gulp.dest('modules/modern-mean-core-material/dist/server/views/'));
}
inject.displayName = 'inject';
gulp.task(inject);

function clean() {
  return del([
    './public/dist'
  ]);
}
inject.displayName = 'clean';
gulp.task(clean);


export {
  modules,
  images,
  clean,
  inject
};
