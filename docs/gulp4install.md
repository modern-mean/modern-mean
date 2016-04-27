#Gulp 4 Install
This guide will help you with Gulp 4.

##Gulp Error
If you receive the error below you need to update the gulp-cli to 4.0
```sh
[14:45:51] Requiring external module babel-core/register
[14:45:51] CLI version 3.9.0
[14:45:51] Local version 4.0.0-alpha.2
```

##Gulp 4 CLI Installation
Gulp 4 requires a new CLI that is not compatible with 3.9 and needs to be installed globally.  
```sh
# uninstall previous Gulp installation, if any
npm uninstall gulp -g
npm uninstall gulp-cli -g

# install Gulp 4 CLI tools globally from 4.0 GitHub branch
npm install gulpjs/gulp-cli#4.0 -g
```

##Gulp 4 CLI Removal
If you do not have nvm and need to remove gulp 4 to run additional projects follow the steps below
```sh
# uninstall previous Gulp installation, if any
npm uninstall gulpjs/gulp-cli -g

# install Gulp 3.9 CLI tools globally
npm install gulp-cli -g
```
