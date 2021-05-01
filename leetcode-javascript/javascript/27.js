/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0
  while ( i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      continue
    }
    ++i
  }
  return nums.length
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  let l = 0, r = nums.length - 1
  while (true) {
    while (nums[l] !== val && l <= r) ++l
    while (nums[r] === val && l < r) --r
    if (l >= r) break
    let t = nums[l]
    nums[l] = nums[r]
    nums[r] = t
  }
  return l
};
console.log(removeElement([1, 1, 1, 2, 1, 2], 2))
console.log(removeElement([], 2))