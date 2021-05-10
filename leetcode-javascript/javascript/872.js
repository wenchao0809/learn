//  Definition for a binary tree node.
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
 
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const leafs1 = []
  const leafs2 = []
  getleafs(root1, leafs1)
  getleafs(root2, leafs2)
  const l1 = leafs1.length
  if (l1 !== leafs2.length) return false
  return leafs1.toString() === leafs2.toString()
};
/**
 * @param {TreeNode} root
 * @param {number[]} leafs
 * 
 */
function getleafs (root, leafs) {
  if (!root.left && !root.right) {
    leafs.push(root.val)
  }
  if (root.left) getleafs(root.left, leafs)
  if (root.right) getleafs(root.right, leafs)
}

