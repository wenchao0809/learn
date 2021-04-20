/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const l = nums.length
  if (l < 2) return l
  let s = 0, q = 1
  while(q < nums.length) {
    if (nums[s] === nums[q]) {
      nums.splice(s, 1)
    } else {
      ++s
      ++q
    }
  }
  return  nums.length
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))