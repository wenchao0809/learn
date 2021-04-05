/**
 *  给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

 

示例 1：
sss
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
示例 2：

输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
 

提示：

nums1.length == m + n
numxzzzs200
1 <= m + n <= 200
-109 <= nums1[i], nums2[i] <= 109

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  let j = 0
  for (let i = m; i < m + n; i++) {
    if (nums1[i] === 0) {
      nums1[i] = nums2[j++]
    }
  }
  return nums1
};

/**
 * 双指针
 */
 var merge = function(nums1, m, nums2, n) {
  let p1 = 0, p2 = 0;
  const sorted = new Array(m + n).fill(0);
  var cur;
  while (p1 < m || p2 < n) {
      if (p1 === m) {
          cur = nums2[p2++];
      } else if (p2 === n) {
          cur = nums1[p1++];
      } else if (nums1[p1] < nums2[p2]) {
          cur = nums1[p1++];
      } else {
          cur = nums2[p2++];
      }
      sorted[p1 + p2 - 1] = cur;
  }
  for (let i = 0; i != m + n; ++i) {
      nums1[i] = sorted[i];
  }
};

/**
 * 双向逆指针
 */
 var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1, p2 = n - 1;
  let tail = m + n - 1;
  var cur;
  while (p1 >= 0 || p2 >= 0) {
      if (p1 === -1) {
          cur = nums2[p2--];
      } else if (p2 === -1) {
          cur = nums1[p1--];
      } else if (nums1[p1] > nums2[p2]) {
          cur = nums1[p1--];
      } else {
          cur = nums2[p2--];
      }
      nums1[tail--] = cur;
  }
};
