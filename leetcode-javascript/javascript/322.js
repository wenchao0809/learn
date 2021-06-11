/**
 * 
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

你可以认为每种硬币的数量是无限的。

 

示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
示例 2：

输入：coins = [2], amount = 3
输出：-1
示例 3：

输入：coins = [1], amount = 0
输出：0
示例 4：

输入：coins = [1], amount = 1
输出：1
示例 5：

输入：coins = [1], amount = 2
输出：2
 

提示：

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/coin-change
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
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
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < m; j++) {
      if (i < moneys[j]) continue
      dp[i] = Math.min(dp[i], 1 + dp[i - moneys[j]])
    }
  }
  return (dp[n] === Number.MAX_SAFE_INTEGER) ? -1 : dp[n]
}

var coinChange = function changeMaking(moneys, n) {
  // 最小的硬币为1因此dp[i] <= n + 1当moneys只有一个1时需要n个硬币才能凑齐
  let dp = new Array(n + 1)
  dp.fill(n + 1)
  // 很自然dp[0]为0因为需要0个硬币
  dp[0] = 0
  let m = moneys.length
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < m; j++) {
      if (i < moneys[j]) continue
      dp[i] = Math.min(dp[i],  dp[i - moneys[j]] + 1)
    }
  }
  return dp[n] === n + 1 ? -1 : dp[n]
}


console.log(coinChange([1, 2, 5], 5))

