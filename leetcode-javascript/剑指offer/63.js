/**
 * 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？

 

示例 1:

输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
示例 2:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 

限制：

0 <= 数组长度 <= 10^5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
// 暴力
function maxProfit(prices) {
  const lenth = prices.length
  const mid = Math.floor(lenth / 2)
  if (lenth < 2) return 0
  if (lenth === 2) return prices[1] - prices[0] > 0 ? prices[1] - prices[0] : 0
  const left = maxProfit(prices.slice(0, mid))
  const right = maxProfit(prices.slice(mid))
  const midnum = merge(prices.slice(0, mid), prices.slice(mid))
  return Math.max(left, right, midnum) 
}

function merge(left, right) {
  let max  = 0
  for (let r of right) {
    for(let l of left) {
      max = (r - l) > max ? r -l : max
    }
  }
  return max
}

// 解题思路动态规划
/**
 * 
 * @param {*} prices 
 * @returns 
 */

 /**解题思路：
 设共有 nn 天，第 aa 天买，第 bb 天卖，则需保证 a < ba<b ；可推出交易方案数共有：
 (n - 1) + (n - 2) + \cdots + 2 + 1 = n(n - 1) / 2
 (n−1)+(n−2)+⋯+2+1=n(n−1)/2
 
 因此，暴力法的时间复杂度为 O(n^2)O(n 
 2
  ) 。考虑使用动态规划降低时间复杂度，以下按照流程解题。
 动态规划解析：
 状态定义： 设动态规划列表 dpdp ，dp[i]dp[i] 代表以 prices[i]prices[i] 为结尾的子数组的最大利润（以下简称为 前 ii 日的最大利润 ）。
 转移方程： 由于题目限定 “买卖该股票一次” ，因此前 ii 日最大利润 dp[i]dp[i] 等于前 i - 1i−1 日最大利润 dp[i-1]dp[i−1] 和第 ii 日卖出的最大利润中的最大值。
 前 i 日最大利润 = \max(前 (i-1) 日最大利润, 第 i 日价格 - 前 i 日最低价格)
 前i日最大利润=max(前(i−1)日最大利润,第i日价格−前i日最低价格)
 
 dp[i] = \max(dp[i - 1], prices[i] - \min(prices[0:i]))
 dp[i]=max(dp[i−1],prices[i]−min(prices[0:i]))
 
 初始状态： dp[0] = 0dp[0]=0 ，即首日利润为 00 ；
 返回值： dp[n - 1]dp[n−1] ，其中 nn 为 dpdp 列表长度。
 
 
 效率优化：
 时间复杂度降低： 前 ii 日的最低价格 \min(prices[0:i])min(prices[0:i]) 时间复杂度为 O(i)O(i) 。而在遍历 pricesprices 时，可以借助一个变量（记为成本 costcost ）每日更新最低价格。优化后的转移方程为：
 dp[i] = \max(dp[i - 1], prices[i] - \min(cost, prices[i])
 dp[i]=max(dp[i−1],prices[i]−min(cost,prices[i])
 
 空间复杂度降低： 由于 dp[i]dp[i] 只与 dp[i - 1]dp[i−1] , prices[i]prices[i] , costcost 相关，因此可使用一个变量（记为利润 profitprofit ）代替 dpdp 列表。优化后的转移方程为：
 profit = \max(profit, prices[i] - \min(cost, prices[i])
 profit=max(profit,prices[i]−min(cost,prices[i])
 
 复杂度分析：
 时间复杂度 O(N)O(N) ： 其中 NN 为 pricesprices 列表长度，动态规划需遍历 pricesprices 。
 空间复杂度 O(1)O(1) ： 变量 costcost 和 profitprofit 使用常数大小的额外空间。
 */
function maxProfit2(prices) {
  let cost = Number.MAX_SAFE_INTEGER
  let profit = 0
  for (let price of prices) {
    cost = Math.min(price, cost)
    profit = Math.max(profit, price - cost)
  }
  return profit
}
console.log(maxProfit2([2, 4, 3]))