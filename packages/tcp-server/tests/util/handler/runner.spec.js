/* eslint-disable func-names */
/* eslint-disable no-shadow */
/* eslint no-unused-expressions:"off" */
const Runner = require('../../../lib/util/handler/runner');

describe('middleware', () => {
  const req = {};
  const res = {};

  const fn1 = function (req, res, next) {
    this.foo = true;
    next();
  };

  const fn2 = function (req, res, next) {
    this.bar = true;
    next();
  };

  const fn3 = function (req, res, next) {
    this.baz = true;
    next();
  };

  const fn4 = function (req, res, next) {
    setTimeout(() => {
      this.bar = false;
      next();
    }, 50);
  };

  const fn5 = function (req, res, next) {
    next(new Error('test error'));
  };

  test('basic test with 0 middleware', done => {
    const mw = new Runner(req, res);
    mw.run(req, res, function () {
      expect(this.foo).toBeUndefined();
      expect(this.bar).toBeUndefined();
      expect(this.baz).toBeUndefined();
      done();
    });
  });

  test('basic test with 1 middleware', done => {
    const mw = new Runner(req, res);

    mw.use(fn1);
    mw.run(req, res, function () {
      expect(this.foo).toEqual(true);
      expect(this.bar).toBeUndefined();
      expect(this.baz).toBeUndefined();
      done();
    });
  });

  test('basic test with 2 middleware', done => {
    const obj = {};
    const mw = new Runner(req, res);
    mw.setContext(obj);

    mw.use([fn1, fn2]);
    mw.run(req, res, () => {
      expect(obj.foo).toEqual(true);
      expect(obj.bar).toEqual(true);
      expect(obj.baz).toBeUndefined();
      done();
    });
  });

  test('basic test with timer middleware', done => {
    const mw = new Runner(req, res);
    mw.use([fn1, fn2]);
    mw.use(fn3);
    mw.use(fn4);

    const startTime = Date.now();
    mw.run(req, res, function () {
      expect(this.foo).toEqual(true);
      expect(this.bar).toEqual(false);
      expect(this.baz).toEqual(true);
      expect(Date.now() - startTime).toBeGreaterThanOrEqual(50);
      expect(Date.now() - startTime).toBeLessThanOrEqual(100);
      done();
    });
  });

  test('basic test with error middleware', done => {
    const mw = new Runner(req, res);

    mw.use(fn1);
    mw.use(fn5);
    mw.use(fn2);
    mw.use(fn3);

    mw.run(req, res, function (err) {
      expect(err.toString().includes('test error')).toEqual(true);
      expect(this.foo).toEqual(true);
      expect(this.bar).toBeUndefined();
      expect(this.baz).toBeUndefined();
      done();
    });
  });
});
