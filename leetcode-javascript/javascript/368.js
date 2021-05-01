/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  const l = nums.length
  // 初始为1
  const dp = (new Array(l)).fill(1)
  let maxsize = dp[0]
  let maxValue = nums[0]
  nums.sort((a, b) => a -b)
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      // 题目中说「没有重复元素」很重要
      if (nums[i] % nums[j] === 0) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    }
    if (dp[i] > maxsize) {
      maxsize = dp[i]
      maxValue = nums[i]
    }
  }
  // 反推
  let res = [maxValue]
  --maxsize
  while(maxsize > 0) {
    for (let i = 0; i < l; i++) {
      if (dp[i] === maxsize && maxValue % nums[i] === 0) {
        res.unshift(nums[i])
        maxValue = nums[i]
        break
      }
    }
    --maxsize
  }
  return res
};

// console.log(largestDivisibleSubset([2]))
// console.log(largestDivisibleSubset([5,9,18,54,108,540,90,180,360,720]))
// console.log(largestDivisibleSubset([2,4,7,8,9,12,16,18]))
console.log(largestDivisibleSubset([4,8,10,240]))