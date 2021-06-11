/**
 * 剑指 Offer 42. 连续子数组的最大和
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。

 

示例1:

输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 

提示：

1 <= arr.length <= 10^5
-100 <= arr[i] <= 100
 */
/**
 * 解题思路 dp[i] 为以nums[i]结尾的子数组的最大值
 * 如何求dp[i]?
 * 假如dp[i - 1] > 0 则有dp[i] = dp[i - 1] + nums[i]
 * 否则很容易就能推出 dp[i] = nums[i]
 * 如何降低空间复杂度 由于dp[i] 之和dp[i-1]和nums[i]相关我们可以直接利用原数组修改
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  for(let i = 1; i < nums.length; i++) {
      nums[i] += Math.max(nums[i - 1], 0)
  }
  return Math.max.apply(null, nums)
};