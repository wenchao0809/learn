/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b)
  const l = nums.length
  const res = []
  for (let i = 0; i < l; i++) {
    // 相邻元素不能相等 相等会重复
    if (i > 0 && nums[i] === nums[i - 1]) continue
    const threeSums = threeSum(nums, i + 1, target - nums[i])
    for (let item of threeSums) {
      res.push([nums[i], ...item])
    }
  }
  return res
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {start} target
 * @return {number[][]}
 */
 var threeSum = function(nums, start, target) {
  const l = nums.length
  // nums.sort((a, b) => a - b)
  const res = []
  for (let i = start; i < l; i++) {
    // 相邻元素不能相等 相等会重复
    if (i > start && nums[i] === nums[i - 1]) continue
    // 每次重置k
    let k = l - 1
    t = target - nums[i]
    for (let j = i + 1; j < l; j++) {
      // 第二轮循环相邻元素不能相等
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      // 保持 j 在k 左侧
      while (j < k && nums[j] + nums[k] > t) k-- 
      // 如果j == k还没找到说明不存在
      if (j === k) break
      if (nums[j] + nums[k] === t) {
        res.push([nums[i], nums[j], nums[k]])
      }
    }
  }
  return res
};

const res = fourSum([2, 2, 2, 2], 8)
console.log(res.toString())