
 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
  }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const queue = [root]
  const vals = []
  if (!root) return vals
  while (queue.length > 0) {
    const node = queue.shift()
    vals.push(node.val)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return vals
};

console.log(preorderTraversal(new TreeNode(3, new TreeNode(1), new TreeNode(2))))