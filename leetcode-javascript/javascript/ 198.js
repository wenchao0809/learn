/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const l = nums.length
  if (l === 1) return nums[0]
  if (l === 2) return Math.max(nums[0], nums[1])
  let n1 = nums[0], n2 = Math.max(nums[0], nums[1])
  let i = 3
  while(i <= l) {
    const tepm = n2
    n2 = Math.max(nums[i - 1] + n1, n2)
    n1 =  tepm
    i++
  }
  return n2
};

console.log(rob([0, 3, 1, 4]))