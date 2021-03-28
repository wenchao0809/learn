/**
 * 二叉树中序遍历
 */

 class TreeNode {
  /**
   * 
   * @param {Number} val 
   * @param {TreeNode} left 
   * @param {TreeNode} right 
   */
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}
/**
 * 
 * @param {TreeNode} root 
 */
function inorderTraversal(root) {
  if (!root) return []
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};
/**
 * 
 * @param {TreeNode} root 
 * @returns {Number[]}
 */
function inorderTraversalLoop(root) {
  const stack = []
  const vals = []

  function traversalLeft(node) {
    if (!node) return
    while(node) {
      stack.push(node)
      node = node.left
    }
  }

  traversalLeft(root)
  while(stack.length > 0) {
    const cur = stack.pop()
    vals.push(cur.val)
    if (cur.right) traversalLeft(cur.right)
  }
  return vals
}

// console.log(inorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))))
// console.log(inorderTraversal(null))

console.log(inorderTraversalLoop(new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))))/
console.log(inorderTraversalLoop(null))