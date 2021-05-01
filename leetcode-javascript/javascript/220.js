/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (k === 0) return false
  const l = nums.length
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; Math.abs(j  -  i) <= k; j++) {
      if (Math.abs(nums[j] - nums[i]) <= t) return true
    }
  }
  return false
};

console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0))
console.log(containsNearbyAlmostDuplicate([1,0,1,1], 1, 2))

console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3))