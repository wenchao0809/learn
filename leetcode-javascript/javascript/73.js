/**
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

进阶：

一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
你能想出一个仅使用常量空间的解决方案吗？
 

示例 1：


输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
输出：[[1,0,1],[0,0,0],[1,0,1]]
示例 2：


输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

提示：

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/set-matrix-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 
 * 解题思路利用原数组第一行第一列存储状态
 * 再新建两个标记存储第一行第一列的状态
 */

 /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let m = matrix.length
  let n = matrix[0].length
  // 标记第一行
  let column = false
  // 标记第一行
  let row = false
  // init c
  for (let i = 0; i < m; i++) {
    if (!matrix[i][0]) {
      column = true
      break
    }
  }
  // init row
  for (let j = 0; j < n; j++) {
    if (!matrix[0][j]) {
      row = true
      break
    }
  }
  // init 
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (!matrix[i][j]) {
        matrix[i][0] = matrix[0][j]  = 0
      }
    }
  }
  // reset from second
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (!matrix[i][0] || !matrix[0][j]) {
        matrix[i][j] = 0
      }
    }
  }
  // reset first row
  if (row) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0
    }
  }
  // reset first column
  if (column) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0
    }
  }
  return matrix
};

// console.log(setZeroes([
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1]
// ]))
/**
 * 
 * @param {number[][]} matrix 
 * @returns {number[][]}
 */
function setZeroes2(matrix) {
  const m = matrix.length
  const n = matrix[0].length
  let flag_clo0 = false
  for (let i = 0; i < m; i++) {
    if (!matrix[i][0]) flag_clo0 = true
    for (let j = 1; j < n; j++) {
      if (!matrix[i][j]) {
        matrix[i][0] = matrix[0][j] = 0
      }
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (!matrix[i][0] || !matrix[0][j]) matrix[i][j] = 0
    }
  }
  if (flag_clo0) {
    for (let i = 0; i < m; i++) matrix[i][0] = 0
  }
  return matrix
}
console.log(setZeroes2([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))