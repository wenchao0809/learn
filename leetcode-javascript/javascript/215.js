// 第k大的元素
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 function findKthLargest( a,  K ) {
  const n = a.length
//     write code here
  function quickSort(a) {
      return sort(a, 0, n - 1)
  }
  const index = n - K
  function sort(a, lo, hi) {
//         if (hi <= lo) return
      let j = partition(a, lo, hi)
      if (j === index) {
          return a[j]
      } else if (j < index) {
          return sort(a, j + 1, hi)
      } else {
          return sort(a, lo, j - 1)
      }
  }
  function partition(a, lo, hi) {
      let v = a[lo], i = lo, j = hi + 1
      while(true) {
          while(a[++i] < v) if (i === hi) break
          while(a[--j] > v) if (j === lo) break
          if (i >= j) break
          exch(a, i, j)
      }
      exch(a, lo, j)
      return j
  }
  function exch(a, i, j) {
      const temp = a[i]
      a[i] = a[j]
      a[j] = temp
  }
  return quickSort(a)
}