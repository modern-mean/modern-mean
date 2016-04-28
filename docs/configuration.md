#Configuring Installed Modules
Modules installed via npm in modern-mean come with many configuration options that are toggled via environment variables.  You can view all the configuration options for a module in the <a href="https://github.com/modern-mean/core-material/blob/master/server/config">server config directory</a> of any submodule.

* <a href="https://github.com/modern-mean/core-material/blob/master/server/config/config.js">core-material config</a>
* <a href="https://github.com/modern-mean/users-material/blob/master/server/config/config.js">users-material config</a>

##Runtime configurations
You can easily set configuration options at runtime by including the environment variable before the gulp task.  The following command will change the database to coolbeans and set mongoose debug ONLY for the time the script is executing.
```sh
MEAN_CORE_MONGOOSE_DB=coolbeans MEAN_CORE_MONGOOSE_DEBUG=true gulp
```

##Persistent configurations
To persist your configuration changes, you should add the environment variables to the proper runtime environment in the <a href="https://github.com/modern-mean/modern-mean/blob/master/tasks/gulp/environments.js">gulp environment file</a>.  For example, if you want to enable mongoose debugging always in development add the environment variable to the development function:
```sh
function debug(done) {
  all();

  //Core
  process.env.NODE_ENV = 'development';
  process.env.MEAN_CORE_WINSTON_LEVEL = 'silly';
  process.env.MEAN_CORE_LIVERELOAD = 'true';

	//Adding Persistent configuration for development
	process.env.MEAN_CORE_MONGOOSE_DEBUG = 'true';

  //Users
  process.env.MEAN_USERS_WINSTON_LEVEL = 'silly';
  process.env.MEAN_USERS_SEED = 'true';

  return done();
}
```

##Next
<a href="runtime.md">Running Modern-Mean</a>
