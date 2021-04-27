/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  let num = 0
  if (!root) return num
  if (root.val > high) {
    num += rangeSumBST(root.left, low, high)
  } else if (root.val < low) {
    num += rangeSumBST(root.right, low, high)
  } else {
    num += root.val
    num += rangeSumBST(root.left, low, high)
    num += rangeSumBST(root.right, low, high)
  }
  return num
};

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST2 = function(root, low, high) {
  let num = 0
  let stack = [root]
  while (stack.length > 0 ) {
    const node = stack.pop()
    if (!node) continue
    const val = node.val
    if (val > high) {
      stack.push(node.left)
    } else if (val < low) {
      stack.push(node.right)
    } else {
      num += val
      stack.push(node.left)
      stack.push(node.right)
    }
  }
  return num
};
// const tree = new TreeNode(10, new TreeNode(5, new TreeNode(3)), new TreeNode(15, new TreeNode(13), new TreeNode(18)))

console.log(rangeSumBST())