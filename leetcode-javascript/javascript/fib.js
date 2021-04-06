/**
 * 
 * @param {number} n
 * @returns {number} 
 */
function fib(n) {
  // const dp = []
  let pre2 = 0
  let pre = 1
  let r = 0
  for (let i = 2; i <=n; i++) {
    r = BigInt(pre + pre2)
    pre2 = BigInt(pre)
    pre = BigInt(pre)
  }
  return BigInt(re)
}
Number.MAX_SAFE_INTEGER
console.log(fib2(45))

function fib(n) {
  let pre = 0n
  let cur = 1n
  if (n === 0) return pre
  if (n === 1) return cur
  for (let i = 2; i <= n; i++) {
    let sum = BigInt(pre + cur)
    pre = BigInt(cur)
    cur = sum
  }
  return cur
}
function fib2(n) {
  if (n == 1) return 0
  if (n === 2) return 1
  return fib(n - 1) + fib(n - 2)
}