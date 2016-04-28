#Quick Start Guide
This guide will help you get Modern MEAN running

##Requirements
1. MongoDB
2. NodeJS v5.8
3. NPM
4. Bower
5. Gulp 4

##Node Support
You can find the most up to date information on what node versions we support by looking at our <a href="https://github.com/trainerbill/modern-mean/blob/master/.travis.yml#L3">travis builds.</a>

###NVM Install(\*nix users)
If you are on a \*nix system then it is in your best interest to install and use <a href="https://github.com/creationix/nvm">NVM</a> to quickly switch between node versions. It will make your life easier on all of your other node projects

###NVM Install a node versions
Once NVM is installed you can install a working node version from the list above.  Example:
```sh
nvm install 5.8
nvm use 5.8
```

###Non NVM users
You will need to <a href="https://nodejs.org/docs/v0.5.8/">download and install</a> node 5.8.

##Gulp 4 CLI installation
Gulp 4 CLI is required to use modern-mean.  It is currently available in alpha form and must be installed globally.  This means that if you are not using NVM then it will not play nice with other Node projects that use Gulp.
```sh
# uninstall previous Gulp installation, if any
npm uninstall gulp -g
npm uninstall gulp-cli -g

# install Gulp 4 CLI tools globally from 4.0 GitHub branch
npm install gulpjs/gulp-cli#4.0 -g
```
This will install Gulp 4 CLI globally so any other node projects using gulp 3.9 will not work.  <a href="gulp4install.md">Take a look at our gulp 4 documentation to switch back to gulp 3.9.</a>

##Modern MEAN installation
You need to clone the main modern-mean package.  This is only a build process and file structure.
```sh
git clone https://github.com/modern-mean/modern-mean.git
cd modern-mean
npm install
```

##Core Installation
Next you need to install a core package.  Currently material design is the only core package but we may support bootstrap and others at a later time.
```sh
npm install modern-mean/core-material
```

###(Optional) User Installation
If you want the user module you can install it now
```sh
npm install modern-mean/users-material
```

##Link the modules
Now you need to link the installed modules so the main package knows to build them.
```sh
gulp link
```

##Modern MEAN Runtime
```sh
gulp
```
Or any other gulp run task.  For more information on gulp tasks visit the <a href="gulptasks.md">gulp tasks documentation</a>

##Next
<a href="configuration.md">Configuring installed modules</a>
