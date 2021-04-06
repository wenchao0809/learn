/**
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

 

示例 1：


输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
示例 2：

输入：n = 1
输出：[[1]]

来源：力扣（LeetCode）
 * @param {*} n 
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
   let t = 0
   let l = 0
   let b = n - 1
   let r = n - 1
   let matrix = new Array(n)
   for (let i = 0; i < n; i++) matrix[i] = new Array(n)
   let count = 1
   while(true) {
    for (let i = l; i <= r; ++i) matrix[t][i] = count++
    if (++t > b) break
    for (let i = t; i <= b; ++i) matrix[i][r] = count++
    if (--r < l) break
    for (let i = r; i >= l; i--) matrix[b][i] = count++
    if (--b < t) break
    for (let i = b; i >= t; --i) matrix[i][l] = count++
    if (++l > r) break
   }
   return matrix
};

console.log(generateMatrix(5))