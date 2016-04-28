#Overriding Installed Modules
One of the core goals of the modern-mean project is to override modules not update them.  This allows for updates to the core modules without causing merge conflicts in your code.  We have built out a simple <a href="https://github.com/modern-mean/core-override-material">module that demonstrates how to override the core-material module</a> and will reference it in this documentation.

##Client Side
Modules built by modern-mean will always allow you to easily override the views and controllers of the module.  Since we use UI-Router nested views this is fairly easy to accomplish in the run() function of a submodule.  We recommend that every application build with Modern-Mean include a module for overriding the core functionality.  You will no doubt want to change things in the header and navigation menus.

###Override in Angular Run
Here is how we are overriding the header, navigation, and homepage in the angular run command.  

* <a href="https://github.com/modern-mean/core-override-material/blob/master/client/run/override.client.run.override.js">Override Run</a>

Notice how we are just getting the root state and changing the views to the new views in our override module.  This can be done for ANY state that is in modern-mean.  You could also change the look of the user state by doing the same override.

###What can I override?
You should be able to override almost anything in the application.  If you want to change views just look in the <a href="https://github.com/modern-mean/core-material/blob/master/client/config/core.client.config.routes.js">routes file</a> of the module you want to override, finde the name of the state, get the state in the overriding module and change the views and controllers.

##Server Side
Server side overriding is a bit more limited.  Overriding on the server side is generally done by setting the <a href="configure_modules.md">configuration variables</a> on the server side.  However, there are ways to add additional things to the server.

###Express middleware/configuration
The express application is passed to your module.js init function on the server side.  This means that you can do any sort of additional express configuration or add middleware in this function.  Our <a href="https://github.com/modern-mean/core-override-material/blob/master/server/override.module.js">override module demonstrates how to add middleware via your submodule</a>.


##Next
<a href="customize.md">Customizing modules</a>
