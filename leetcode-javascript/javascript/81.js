/**
 * 每次mid有三种况
 * 1， num[l] == num[mid] == num[r]此时无法判断递增区间 l++ r--
 * 2, mid落在 上半部分递增区间
 * 3， mid 落在下半部分递增区间
 * 
 * @param {number[]} nums 
 * @param {number} target 
 */
 function search(nums, target) {
  const n = nums.length
  if (n === 0) return false 
  if (n === 1) return nums[0] === target
  let l = 0, r = n - 1
  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] === target) {
      return true;
    }
    if (nums[l] === nums[mid] && nums[mid] === nums[r]) {
      ++l
      --r
    } else if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && nums[mid] > target) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[n - 1]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return false
};
/**
 * 
 * @param {number[]} nums 
 * @param {number} lo 
 * @param {number} hi 
 * @param {number} target 
 * @returns {boolean}
 */
function binarySearch(nums, lo, hi, target) {
  const mid = Math.floor((lo + hi) / 2)
  if (nums[mid] === target) return true
  return nums[mid] >= target ? binarySearch(nums, lo, mid, target) : binarySearch(nums, mid + 1, hi, target)
}

console.log(search([4,5,6,6,7,0,1,2,4,4], 4))
// console.log(search([4,5,6,6,7,0,1,2,4,4], 6))
// console.log(search([1, 1], 1))
// console.log(search([2,5,6,0,0,1,2], 0))
// console.log(search([2,2,2,3,2,2,2], 3))

