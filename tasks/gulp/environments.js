function all() {

}

function debug(done) {
  all();

  process.env.NODE_ENV = 'development';
  process.env.MEAN_WINSTON_LEVEL = 'debug';
  process.env.MEAN_CORE_LIVERELOAD = 'true'

  return done();
}

function development(done) {
  all();

  process.env.NODE_ENV = 'development';
  process.env.MEAN_WINSTON_LEVEL = 'info';
  process.env.MEAN_CORE_LIVERELOAD = 'true';

  return done();
}

function test(done) {
  all();

  process.env.NODE_ENV = 'test';
  process.env.MEAN_WINSTON_CONSOLE = 'false';
  process.env.MEAN_WINSTON_FILE = 'false';

  return done();
}

function production(done) {
  all();

  process.env.NODE_ENV = 'production';
  process.env.MEAN_WINSTON_CONSOLE = 'false';


  return done();
}

export { debug, development, test, production };
