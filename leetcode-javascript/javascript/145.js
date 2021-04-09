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
  return [...postorder(root.left), ...postorder(root.right), root.val]
}
const node = new TreeNode(5, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6))

/**
 * 
 * @param {TreeNode} root 
 */
function postorderFor(root) {
  let stack = []
  let vals = []
  let node = root
  let prev = null

  while (node || stack.length > 0) {
    while (node) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    if (node.right === null || node.right === prev) {
      vals.push(node.value)
      prev = node
      node = null
    } else {
      stack.push(node)
      node = node.right
    }
  }
  return vals
}

console.log(postorder(node))