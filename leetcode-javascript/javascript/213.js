var robRange = function(nums, start, end) {
  const l = end - start
  if (l === 0) return 0
  if (l === 1) return nums[start]
  if (l === 2) return Math.max(nums[start], nums[start + 1])
  let n1 = nums[start], n2 = Math.max(nums[start], nums[start + 1])
  let i = start + 3
  while(i <= end) {
    const tepm = n2
    n2 = Math.max(nums[i - 1] + n1, n2)
    n1 =  tepm
    i++
  }
  return n2
};
/**
 * 
 * @param {Number[]} nums 
 */
var rob = function(nums) {
  const l = nums.length
  if (l === 1) return nums[0]
  if (l === 2) return Math.max(nums[0], nums[1])
  // if (l === 3) return Math.max(nums[0], nums[1], nums[2])
  // 三种情况
  // k = l - 1 当选择k时因为是个环就不能选第一个元素了 则有 nums[k] + rob(nums.slice(1, l - 2))
  // 当不选k时有两种情况
  // 第一种情况 不选第一个元素 即第k和第0个元素都不选 则有 robw(nums.slice(1, l - 1))
  // 第二种情况 选第一个元素 第k个不选， 第0个选 则有 nums[0] + robw(nums.slice(2, l - 1))
  // 求出三者最大值
  return Math.max(nums[l - 1] +  robRange(nums, 1, l - 2), robRange(nums, 1, l - 1), nums[0] + robRange(nums, 2, l - 1))
}

console.log(rob([1]))
// console.log(rob([2,7,9,3,1]))
 console.log(rob([4,1,2,7,5,3,1]))
