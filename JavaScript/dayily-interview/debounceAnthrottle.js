/**
 * 
 * @param {Function} fn 
 * @param {number} timeout 
 */
function debounce(fn, timeout) {
  let timeoutId
  return function(...args) {
    let that = this
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
     fn.apply(that, args)
   }, timeout);
  }
}

/**
 * 
 * @param {Function} fn 
 * @param {number} timeout 
 */
function throttle(fn, timeout) {
  let timeId
  return function(...args) {
    let that = this
    if (timeId) return
    timeId = setTimeout(() => {
      fn.apply(that, args)
      timeId = null
    }, timeout);
  }
}