/**
 * 
 * @param {number[]} nums 
 * @returns {number}
 */
function removeDuplicates(nums) {
  let cur = nums[0], seens = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== cur) {
      cur = nums[i]
      seens = 1
    } else {
      ++seens
    }
    if (seens > 2) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))
console.log(removeDuplicates([1,1,2,2,3]))
console.log(removeDuplicates([1, 1, 1, 1]))