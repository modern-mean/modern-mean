#Gulp Tasks
You can view all tasks in this project by executing
```sh
gulp --tasks
```

##Lint
```sh
gulp lint
```
Executes linting on all JS files.


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

##Other Gulp Tasks
<a href="gulptasks.md">All Gulp Tasks</a>

##Next
<a href="override.md">Overriding installed modules</a>
