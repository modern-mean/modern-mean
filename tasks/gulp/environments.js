function all() {

}

function debug(done) {
  all();

  process.env.NODE_ENV = 'development';
  process.env.MM_WINSTON_LEVEL = 'debug';
  process.env.MM_CORE_LIVERELOAD = 'true';
  process.env.MM_CORE_ANGULAR_DEBUG = 'true';

  return done();
}

function development(done) {
  all();

  process.env.NODE_ENV = 'development';
  process.env.MM_WINSTON_LEVEL = 'info';
  process.env.MM_CORE_LIVERELOAD = 'true';

  return done();
}

function test(done) {
  all();

  process.env.NODE_ENV = 'test';
  process.env.MM_WINSTON_CONSOLE = 'false';
  process.env.MM_WINSTON_FILE = 'false';
  process.env.MM_CORE_ANGULAR_DEBUG = 'true';

  return done();
}

function production(done) {
  all();

  process.env.NODE_ENV = 'production';
  process.env.MM_WINSTON_CONSOLE = 'false';

  process.env.MM_CORE_ANGULAR_INFO = 'false';


  return done();
}

export { debug, development, test, production };
