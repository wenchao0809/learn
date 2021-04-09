/**
 * 剑指 Offer 33. 二叉搜索树的后序遍历序列
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。

 

参考以下这颗二叉搜索树：

     5
    / \
   2   6
  / \
 1   3
示例 1：

输入: [1,6,3,2,5]
输出: false
示例 2：

输入: [1,3,2,6,5]
输出: true
 

提示：

数组长度 <= 1000
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
} 
/**
 * 后续遍历递归
 * @param {TreeNode} root 
 * @returns {number[]}
 */
function postorder(root) {
  let res = []
  if (!root) return res
  return [...verifyPostorder(root.left), ...verifyPostorder(root.right), root.val]
}
const node = new TreeNode(5, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6))

/**
 * 
 * @param {TreeNode} root 
 */
function postorderFor(root) {
  let nodes = []
  let vals = []
  let node = root
}
/**
 * 
 * @param {Number[]} root 
 * @returns {Boolean}
 */
function verifyPostorder(root) {
  return verify(root, 0, root.length - 1)
}
/**
 * 
 * @param {Number[]} root 
 * @param {Number} i 
 * @param {Number} j 
 */
function verify(root, i, j) {
  if (i >= j) return true
  let p = i
  while (root[p] < root[j]) ++p
  let m = p - 1
  while (root[p] > root[j]) ++p
  return p === j && verify(root, i, m) && verify(root, m + 1, j - 1)
}


console.log(verifyPostorder([1,6,3,2,5]))
console.log(verifyPostorder([1,3,2,6,5]))