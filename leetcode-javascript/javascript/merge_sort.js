/**
 * 
 * @param {number[]} nums
 * @returns {number[]} 
 */
function mergeSort(nums) {
  if (nums.length <= 1) return nums
  const mid = Math.floor(nums.length / 2)
  const left = mergeSort(nums.slice(0, mid))
  const right = mergeSort(nums.slice(mid))
  return merge(left, right)
}
/**
 * 
 * @param {number[]} left 
 * @param {number[]} right 
 * @returns {number[]}
 */
function merge(left, right) {
  let r = []
  let i = 0, j = 0
  const l = left.length, rl = right.length

  while(true) {
    while(left[i] < right[j]) r.push(left[i++])
    while(right[j] < left[i]) r.push(right[j++])
    if (i >= l || j >= rl) break 
  }
  while(i < left.length) r.push(left[i++])
  while(j < right.length) r.push(right[j++])
  return r
}

console.log(mergeSort([2, 1, 6, 4, 3, 0, -1, -3]))