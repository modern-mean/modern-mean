#Gulp tasks
The debug gulp task will output the most information that is possible.
```sh
gulp debug
```

#Console Logging
Most modules will are developed to easily enable debug logging on the client and server side.  The client side logging feature is based on the <a href="https://docs.angularjs.org/api/ng/service/$log">angular $log service</a> and the backend user the <a href="https://github.com/winstonjs/winston">Winston node module</a>.  We use the NPM log levels as defined by winston { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }

##Frontend Console Logging
Configuration of the frontend client logging is in the <a href="https://github.com/modern-mean/modern-mean-core-material/blob/master/client/config/core.client.config.constants.js">core constants file</a>.  By default they are all turned on.  You can turn off any level of debugging you want by setting the values to false.

##Backend Console Logging
Backend logging configuration is located in the appropriate <a href="https://github.com/modern-mean/core-material/blob/master/server/config/config.js">configuration file for the module</a> you are running. You should not update these files directly.  Instead set the appropriate environment variable in the <a href="https://github.com/modern-mean/modern-mean/blob/master/tasks/gulp/environments.js">gulp environment function in the main modern-mean package</a>.


##Backend Runtime logging
You can also enable logging at runtime by adding the environment variable before the gulp command
```sh
MEAN_CORE_WINSTON_LEVEL=silly gulp
```
