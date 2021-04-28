//  Definition for a binary tree node.
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  if (!root) return null
  const nums = inOrde(root)
  root = new TreeNode(-1)
  for (let num of nums) {
    root.right = new TreeNode(num)
  }
  return root.right
};
/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
function inOrde(root) {
  if (!root) return []
  return [...inOrde(root.left), root.val, ...inOrde(root.right)]
}

console.log(inOrde(new TreeNode(1)))

