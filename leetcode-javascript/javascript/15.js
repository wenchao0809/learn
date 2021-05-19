/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const l = nums.length
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < l; i++) {
    // 相邻元素不能相等 相等会重复
    if (i > 0 && nums[i] === nums[i - 1]) continue
    // 每次重置k
    let k = l - 1, tartget = -nums[i]
    for (let j = i + 1; j < l; j++) {
      // 第二轮循环相邻元素不能相等
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      // 保持 j 在k 左侧
      while (j < k && nums[j] + nums[k] > tartget) k-- 
      // 如果j == k还没找到说明不存在
      if (j === k) break
      if (nums[j] + nums[k] === tartget) {
        res.push([nums[i], nums[j], nums[k]])
      }
    }
  }
  return res
};

const res = threeSum([-1,0,1,2,-1,-4])
console.log(res)