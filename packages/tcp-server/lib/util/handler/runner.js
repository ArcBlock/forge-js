const noop = function() {};

/**
 * Utility to run stack of middleware sequetially
 *
 * NOTE: errors thrown by any middleware will be passed through to the final callback
 */
class HandlerRunner {
  /**
   * save req and res as context
   */
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  /**
   * force binding for middleware executing context
   *
   * @param {object} context
   * @return this
   */
  setContext(context) {
    this.context = context;
    return this;
  }

  /**
   * Add function or array of functions to the execution stack.
   *
   * @param {array|function} fn - function or array of functions.
   * @throws {Error} call stack is halted on the error middleware
   * @return this
   */
  use(fn) {
    if (Array.isArray(fn)) {
      fn.forEach(f => this.use(f));
      return this;
    }

    /* istanbul ignore if */
    if (typeof fn !== 'function') {
      throw new TypeError('HandlerRunner.use requires arguments to be function');
    }

    const instance = this;
    const { req, res } = this;

    // replace #run with a wrapper in which calls itself first and then the `fn`
    instance.run = (function(req, res, stack) {
      return function(_req, _res, next = noop) {
        stack(req, res, function(err) {
          if (err) {
            return next.call(instance.context || instance, err);
          }
          fn.call(
            instance.context || instance,
            _req,
            _res,
            next.bind(instance.context || instance)
          );
        });
      };
    })(req, res, instance.run);

    return instance;
  }

  /**
   * Run stack of middlewares.
   *
   * @param {function} done - main function which will be executed at the end.
   * @return function execution.
   */
  run(req, res, done) {
    return done();
  }
}

module.exports = HandlerRunner;
