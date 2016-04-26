function all() {

}

function debug(done) {
  all();

  //Core
  process.env.NODE_ENV = 'development';
  process.env.MEAN_CORE_WINSTON_LEVEL = 'silly';
  process.env.MEAN_CORE_LIVERELOAD = 'true';

  //Users
  process.env.MEAN_USERS_WINSTON_LEVEL = 'silly';
  process.env.MEAN_USERS_SEED = 'true';

  return done();
}

function development(done) {
  all();

  //Core
  process.env.NODE_ENV = 'development';
  process.env.MEAN_CORE_WINSTON_LEVEL = 'info';
  process.env.MEAN_CORE_LIVERELOAD = 'true';

  //Users
  process.env.MEAN_USERS_WINSTON_LEVEL = 'info';
  process.env.MEAN_USERS_SEED = 'true';

  return done();
}

function test(done) {
  all();
  //Core
  process.env.NODE_ENV = 'test';
  process.env.MEAN_CORE_WINSTON_CONSOLE = 'false';
  process.env.MEAN_CORE_WINSTON_FILE = 'false';

  //Users
  process.env.MEAN_USERS_WINSTON_CONSOLE = 'false';
  process.env.MEAN_USERS_WINSTON_FILE = 'false';

  return done();
}

function production(done) {
  all();
  //Core
  process.env.NODE_ENV = 'production';
  process.env.MEAN_CORE_WINSTON_CONSOLE = 'false';

  //Users
  process.env.MEAN_USERS_WINSTON_CONSOLE = 'false';

  return done();
}

export { debug, development, test, production };
