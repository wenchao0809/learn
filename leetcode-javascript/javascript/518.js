/**
 * 518. 零钱兑换 II
给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。 

难度中等

示例 1:

输入: amount = 5, coins = [1, 2, 5]
输出: 4
解释: 有四种方式可以凑成总金额:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
示例 2:

输入: amount = 3, coins = [2]
输出: 0
解释: 只用面额2的硬币不能凑成总金额3。
示例 3:

输入: amount = 10, coins = [10] 
输出: 1
 

注意:

你可以假设：

0 <= amount (总金额) <= 5000
1 <= coin (硬币面额) <= 5000
硬币种类不超过 500 种
结果符合 32 位符号整数
 */
/**
 * dp[i] 表示和为i的组合数
 * 确定边界dp[0] = 1， 0 只有一种组合就是都不选
 * 解题思路我自己的理解以 5 和 [1, 2, 5]为例 假设dp[i]为amount为i的组合数
 * 我们假设当前选择了一个元素 1 则有dp[5] = dp[(5 - 1)] = d[4] 因为我们已经选择了1所以dp[4]的组合数就是dp[5]
 * 同理当选择 2时 dp[5] = dp[(5 - 2)] = dp[3]
 * 当选择 5时 dp[5] = dp[5-5] = dp[0] 
 * 由此可推出 dp[i] += dp[i - coin]以此可以自底向上推到出全部结果
 * 千万别这样想 dp[5] = dp[4] + dp[3] + dp[0] 这样会有很多重复的组合，因为程序的计算是动态， 只有选定了前置条件这个dp[i] += dp[i-coin]才成立
 * 简单的把最终结果加起来是不正确的
 * 
 * @param {number} amount 
 * @param {number[]} coins 
 * @returns {number}
 */
function change(amount, coins) {
  const dp = new Array(amount + 1)
  dp.fill(0)
  dp[0] = 1
  for(let coin of coins) {
    for(let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin]
    }
  }
  return dp[amount]
}

function waysToChange(n) {
  return change(n, [1, 2, 5])
}
// console.log(change(0, []))

console.log(waysToChange(5))