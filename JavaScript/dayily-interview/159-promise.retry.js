
/**
 * Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 rejec
 * @param {(resolve, reject) => any} fn 执行函数
 * @param {number} max 最大尝试次数
 * @param {number} interval 尝试间隔 
 * @param {number} count 函数内部统计 
 */
export function retry(fn, max = 1, interval = 1000, count = 0) {
  --max
  ++count
  return new Promise((resolve, reject) => {
    const wrapResolve = (res) => {
      resolve(res)
    }
    const wrapReject = (error) => {
      if (max >= 0) {
        setTimeout(() => {
          console.log(`第${count}次重试`)
          resolve(retry(fn, max, interval, count))
        }, interval)
      } else {
        reject(error)
      }
    }
    fn(wrapResolve, wrapReject)
  })
}

Promise.retry = retry
