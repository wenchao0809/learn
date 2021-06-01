const PENDING = 1
const FULFILLED = 2
const REJECTED = 3

function noop() {}
function isFunction(fn) {
  return typeof fn === 'function'
}
const resolvePromise = (promise2, x, resolve, reject) => {
  // 自己等待自己完成是错误的实现，用一个类型错误，结束掉 promise  Promise/A+ 2.3.1
  if (promise2 === x) { 
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  // Promise/A+ 2.3.3.3.3 只能调用一次
  let called;
  // 后续的条件要严格判断 保证代码能和别的库一起使用
  if ((typeof x === 'object' && x != null) || typeof x === 'function') { 
    try {
      // 为了判断 resolve 过的就不用再 reject 了（比如 reject 和 resolve 同时调用的时候）  Promise/A+ 2.3.3.1
      let then = x.then;
      if (typeof then === 'function') {
        // 不要写成 x.then，直接 then.call 就可以了 因为 x.then 会再次取值，Object.defineProperty  Promise/A+ 2.3.3.3
        then.call(x, y => { // 根据 promise 的状态决定是成功还是失败
          if (called) return;
          called = true;
          // 递归解析的过程（因为可能 promise 中还有 promise） Promise/A+ 2.3.3.3.1
          resolvePromise(promise2, y, resolve, reject); 
        }, r => {
          // 只要失败就失败 Promise/A+ 2.3.3.3.2
          if (called) return;
          called = true;
          reject(r);
        });
      } else {
        // 如果 x.then 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.3.4
        resolve(x);
      }
    } catch (e) {
      // Promise/A+ 2.3.3.2
      if (called) return;
      called = true;
      reject(e)
    }
  } else {
    // 如果 x 是个普通值就直接返回 resolve 作为结果  Promise/A+ 2.3.4  
    resolve(x)
  }
}

class MyPromise {
  // 1 pending 2 fulfilled 3 rejected
  #state = PENDING
  #value
  #reason
  #fufilledCallbacks = []
  #rejectCallbacks = []
  /**
   * 
   * @param {any} value 
   * @returns {MyPromise}
   */
  static resolve(value) {
    return new MyPromise((resolve) => resolve(value))
  }
  /**
   * 
   * @param {any} reason 
   * @returns {MyPromise}
   */
  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason))
  }
  /**
   * 
   * @param {any[]} it 
   * @returns {MyPromise}
   */
  static all(it) {}
  /**
   * 
   * @param {any[]} it 
   * @returns { MyPromise }
   */
  static allSettled(it) {}
  /**
   * 
   * @param {any[]} it 
   * @returns { MyPromise }
   */
  static any(it) {}
  /**
   * 
   * @param {any[]} it 
   * @returns { MyPromise }
   */
  static race(it) {}

  #resolve(value) {
    this.#state = FULFILLED
    this.#value = value
    while(this.#fufilledCallbacks.length > 0) {
      this.#fufilledCallbacks.forEach(fn => fn(value))
    }
  }
  #reject(reason) {
    this.#state = REJECT
    this.#reason = reason
    while(this.#rejectCallbacks.length > 0) {
      this.#fufilledCallbacks.forEach(fn => fn(reason))
    }
  }

  /**
   * 
   * @param {Function} resolver 
   */
  constructor(resolver) {
    if (typeof resolver !== 'function') {
      throw new Error(`resolver ${resolver} is not a function`)
    }
    try {
      resolver(this.#resolve.bind(this), this.#reject.bind(this))
    } catch (error) {
      this.#reject(error)
    }
  }
  then(onFulfilled, onRejected) {
    //解决 onFufilled，onRejected 没有传值的问题
    //Promise/A+ 2.2.1 / Promise/A+ 2.2.5 / Promise/A+ 2.2.7.3 / Promise/A+ 2.2.7.4
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    //因为错误的值要让后面访问到，所以这里也要跑出个错误，不然会在之后 then 的 resolve 中捕获
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
    // 每次调用 then 都返回一个新的 promise  Promise/A+ 2.2.7
    return this.#handle(onFulfilled, onRejected)
  }
  #handle(onFulfilled, onRejected) {
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED && isFunction(onFulfilled)) {
        //Promise/A+ 2.2.2
        //Promise/A+ 2.2.4 --- setTimeout
        setTimeout(() => {
          try {
            //Promise/A+ 2.2.7.1
            let x = onFulfilled(this.value);
            // x可能是一个proimise
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            //Promise/A+ 2.2.7.2
            reject(e)
          }
        }, 0);
      }

      if (this.status === REJECTED && isFunction(onRejected)) {
        //Promise/A+ 2.2.3
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e)
          }
        }, 0);
      }

      if (this.status === PENDING) {
        isFunction(onFulfilled) && this.#fufilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e)
            }
          }, 0);
        });

        isFunction(onRejected) && this.#rejectCallbacks.push(()=> {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0);
        });
      }
    });
  
    return promise2;
  }
  catch(onRejected) {
    this.#handle(_, onRejected)
  }
  finally(onFinally) {
    return this.then(
      (value) => Promise.resolve(onFinally()).then(()=>value),
      (reason) => Promise.resolve(onFinally()).then(()=>{throw reason}))
  }
  retry() {}

}



// export default MyPromise

const p = new MyPromise()
console.log(p._state)