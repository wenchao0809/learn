/**
 * 4. 寻找两个正序数组的中位数
给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

 

示例 1：

输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
示例 2：

输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
示例 3：

输入：nums1 = [0,0], nums2 = [0,0]
输出：0.00000
示例 4：

输入：nums1 = [], nums2 = [1]
输出：1.00000
示例 5：

输入：nums1 = [2], nums2 = []
输出：2.00000
 

提示：

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
 

进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
 */

/**
 * 普通解法 双指针和归并 复杂度都是O(m+n)
 */

/**
 * 二分查找， 复杂度 log(m+n)
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  const mid = Math.ceil((m + n) / 2)
  return (m + n) % 2 === 0 ? (findKthNumber(nums1, nums2, mid) + findKthNumber(nums1, nums2, mid + 1)) / 2 : findKthNumber(nums1, nums2, mid)
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
function findKthNumber(nums1, nums2, k) {
  const m = nums1.length
  const n = nums2.length
  if (m === 0) return nums2[k - 1]
  if (n === 0) return nums1[k - 1]
  if (k === 1) return Math.min(nums1[0], nums2[0])
  let nums1Start = 0, nums2Start = 0
  while (k > 1) {
    const mid = Math.floor(k / 2) 
    const compareIndex = mid - 1
    if (nums1Start >= m) {
      nums2Start += k - 1
      break
    } else if (nums2Start >= n) {
      nums1Start += k - 1
      break
    } else if (mid + nums1Start > m) {
      if (nums1[m - 1] > nums2[nums2Start + compareIndex]) {
        nums2Start += mid
      } else {
        nums1Start += mid
        k -= m
        continue
      }
    } else if (mid + nums2Start > n) {
      if (nums2[n - 1] > nums1[nums1Start + compareIndex]) {
        nums1Start += mid
      } else {
        nums2Start += mid
        k -= n
        continue
      }
    } else {
      if (nums1[nums1Start + compareIndex] > nums2[nums2Start + compareIndex]) {
        nums2Start += mid
      } else {
        nums1Start += mid
      }
    }
    k -= mid
  }
  if (nums1Start >= m) return  nums2[nums2Start]
  if (nums2Start >= n) return nums1[nums1Start]
  return  Math.min(nums1[nums1Start], nums2[nums2Start])
}

console.log(findMedianSortedArrays([1,3], [2, 2, 5, 6]))
console.log(findMedianSortedArrays([], [2, 2, 5, 6]))
console.log(findMedianSortedArrays([1, 3], []))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
console.log(findMedianSortedArrays([0,0,0,0,0], [-1,0,0,0,0,0,1]))
console.log(findMedianSortedArrays([1], [2, 3, 4]))
console.log(findMedianSortedArrays([1], [2, 3, 4, 5, 6]))