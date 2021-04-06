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

/**
 * 双指针解法
 * 
 */

 var removeDuplicates2 = function(nums) {
  const n = nums.length;
  if (n <= 2) {
      return n;
  }
  let slow = 2, fast = 2;
  while (fast < n) {
      if (nums[slow - 2] != nums[fast]) {
          nums[slow] = nums[fast];
          ++slow;
      }
      ++fast;
  }
  return slow;
};

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))
console.log(removeDuplicates([1,1,2,2,3]))
console.log(removeDuplicates([1, 1, 1, 1]))