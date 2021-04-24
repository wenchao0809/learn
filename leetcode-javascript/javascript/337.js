/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(nums, target) {
  let res = []
  for (let i = 0; i < nums.length; ++i) {
    const t = target - nums[i]
    if (t > 0) {
      let d 
      if ((d = combinationSum(nums, target - nums[i])).length > 0) {
        for (let n of d) {
          n.unshift(nums[i])
          res.push(n)
        } 
      }
    }  else if (t === 0) {
      res.push([nums[i]])
    }
  }
  return  res
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4d = function(nums, target) {
  return combinationSum(nums, target).length
};

// console.log(combinationSum4([1, 2, 3], 4))
// console.log(combinationSum4([9], 3))
/**
 * 动态规划
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const l = nums.length
  const dp = (new Array(target + 1)).fill(0)
  dp[0] = 1
  let i = 1
  while(i <= target) {
    for (let j = 0; j < l; j++) {
      if (nums[j] <= i) {
        dp[i] += dp[i - nums[j]]
      }
    }
    ++i
  }
  return dp[target]
};
console.log(combinationSum4([4, 2, 1], 32))