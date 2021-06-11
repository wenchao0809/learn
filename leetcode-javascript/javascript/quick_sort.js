/**
 * 
 * @param {number[]} nums 
 * @returns {number[]}
 */
function quickSort(nums) {
  sort(nums, 0, nums.length - 1)
}
/**
 * 
 * @param {number[]} nums 
 * @param {number} lo 
 * @param {number} hi 
 */
function sort(nums, lo, hi) {
  if (hi <= lo) return
  let j = partition(nums, lo, hi)
  sort(nums, 0, j - 1)
  sort(nums, j + 1, hi)
}

/**
 * 
 * @param {number[]} nums 
 * @param {number} lo 
 * @param {number} hi
 * @returns {number} 
 */
function partition(nums, lo, hi) {
  let i = lo, j = hi + 1
  let pivot = Math.floor(Math.random() * (hi - lo + 1) + lo);
  exch(nums, pivot, lo)
  const v = nums[lo]
  while (true) {
    while (nums[++i] < v) if (i === hi) break
    while (nums[--j] > v) if (j === lo) break
    if (i >= j) break
    exch(nums, i, j)
  }
  // 经过以上循环 i处的元素一定 nums[i] >= v, nums[j] <= j， 所以将v 和nums[j]交换能够保证结果正确
  exch(nums, lo, j) // 放置v
  return j
}
/**
 * 
 * @param {number[]} a 
 * @param {number} i1 
 * @param {number} i2 
 * 
 */
function exch(a, i1, i2) {
  const temp = a[i1]
  a[i1] = a[i2]
  a[i2] = temp
}

let  a = [2, 9, 4, 3, 1]
quickSort(a)
console.log(a)