#Building Tasks

##Module Check
```sh
gulp module:check
```
Verifys you don't have the some module in modules/ an node_modules.  Stops the gulp task if true.

##Install
```sh
gulp install
```
Executes bower install and npm install on ./modules/\*/{bower, package}.json.  By default if the bower_components directory exists it is skipped and if the node_modules directory exists it is skipped.  You can override with MEAN_BUILD_FORCE=true

##Build
```sh
gulp build
```
Spawns child processes to run gulp --gulpfile ./modules/\*/gulpfile.babel.js.  This builds the submodule.  It is executed every time you launch a runtime task.

##Modules
```sh
gulp modules
```
Builds the modules for runtime.  Does the client building and places files in /public.

#Runtime

##Development
```sh
gulp
```
The development task should be used when developing your modules.  It builds the server/client files and watches for changes in any of the files.  If a file changes it rebuilds the module that the change was made in and restarts the client with livereload.  Your environment will be running on port 8080 and you can visit localhost:8080 in your browser to see the application

##Debug
```sh
gulp debug
```
The debug task should be used when debugging your modules.  It is the same as development task but enables silly logging on the server side.
