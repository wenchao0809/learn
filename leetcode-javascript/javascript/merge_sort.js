/**
 * 递归 自顶向下
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
 * 非递归 自底向上
 * @param {number[]} nums 
 * @returns {number[]} 
 */
function mergeSort2(nums) {
  const l = nums.length
  for (let sz = 1; sz < l; sz = sz + sz) {
    for (let lo = 0; lo < l - sz; lo += sz + sz) {
      a = merge(nums.slice(lo, lo + sz), nums.slice(lo + sz, Math.min(lo + sz + sz, l)))
      nums.splice(lo, a.length, ...a)
    }
  }
  return nums
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

/**
 * 原地归并
 * let aux = 
 */
 function merge2(a, lo, mid, hi) {
  let aux = [...a] // 复制 a到 aux
  let i = lo, j = mid + 1
  for (let k = lo; k <= hi; k++) {
    if (i > mid) {
      a[k] = aux[j++]
    } else if (j > hi) {
      a[k] = aux[i++]
    } else if (aux[j] < aux[i]) {
      a[k] = aux[j++]
    } else {
      a[k] = aux[i++]
    }
  }
}
/**
 * 
 * @param {number[]} nums 
 */
function mergeSort3(nums) {
  sort(nums, 0, nums.length - 1)
  return nums
}
/**
 * 
 * @param {number[]} nums 
 * @param {number} lo 
 * @param {number} hi 
 */
function sort(nums, lo, hi) {
  if (hi <= lo) return
  const mid = Math.floor((lo + hi) / 2) 
  sort(nums, lo, mid)
  sort(nums, mid + 1, hi)
  merge2(nums, lo, mid, hi)
}
// console.log(mergeSort([2, 1, 6, 4, 3, 0, -1, -3]))
// console.log(mergeSort2([2, 1, 6, 4, 3, 0, -1, -3]))
console.log(mergeSort3([2, 1, 6]))