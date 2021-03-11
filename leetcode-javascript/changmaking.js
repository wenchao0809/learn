/**
 * 凑零问题
 * @param {Array} moneys
 * @param {number} n
 * @returns {number}
 */
function changeMaking(moneys, n) {
  let dp = new Array(n+1)
  dp.fill(n+1)
  dp[0] = 0
  let m = moneys.length
  let count = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < m; j++) {
      if (i < moneys[j]) continue
      if (i == n) console.log(count++)
      dp[i] = Math.min(dp[i], 1 + dp[i - moneys[j]])
    }
  }
  return (dp[n] === Number.MAX_SAFE_INTEGER) ? -1 : dp[n]
}

console.log(changeMaking([1, 2, 5], 5))

