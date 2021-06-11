
// const { co } = require('./co')

function run(fn) {
  var gen = fn();
  return new Promise((resolve, reject) => {
    onFulfilled()

    /**
     * @param {Mixed} res
     * @return {Promise}
     * @api private
     */
    function onFulfilled(res) {
      let ret
      try {
        ret = gen.next(res)
      } catch (error) {
        reject(error)
      }
      next(ret)
      return null
    }
    /**
     * Get the next value in the generator,
     * return a promise.
     *
     * @param {Object} ret
     * @return {Promise}
     * @api private
     */
    function next(ret) {
      if (ret.done) return resolve(ret.value);
      ret.value.then(onFulfilled, onRejected);
    }
    /**
     * @param {Error} err
     * @return {Promise}
     * @api private
     */
    function onRejected(err) {
      var ret;
       try {
         ret = gen.throw(err);
       } catch (e) {
         return reject(e);
       }
       next(ret);
    }
  })
}

function* fn() {
  try {
    let a = yield Promise.resolve(1)
    console.log(a)
    let b = yield Promise.reject(2)
    console.log(b)
    let c = yield Promise.resolve(3)
    console.log(c)
    console.log(a, b, c)
    return 10
  } catch (error) {
    console.log('发生错误', error)
  }
  
}
try {
  run(fn)
} catch (error) {
  console.log(error)
}
