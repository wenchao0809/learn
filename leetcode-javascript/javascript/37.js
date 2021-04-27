//  Definition for a binary tree node.
 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }
 

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const queue = []
  if (!root) return "[]"
  queue.push(root)
  const values = []
  while(queue.length > 0) {
    const node = queue.shift()
    if (node) {
      values.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    } else {
      values.push('null')
    }
  } 
  return `[${values.join(',')}]`
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  data = data.substring(1, data.length - 1)
  if (!data) return null
  let a = data.split(',')
  const queue = []
  const root = new TreeNode(a[0])
  queue.push(root)
  let i = 1
  while(queue.length > 0 && i < a.length) {
    const node = queue.shift()
    if (a[i] !== 'null') {
      node.left = new TreeNode(a[i])
      queue.push(node.left)      
    }
    ++i
    if (a[i] !== 'null') {
      node.right = new TreeNode(a[i])
      queue.push(node.right)      
    }
    ++i
  }
  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
const tree = new TreeNode(1)
tree.left = new TreeNode(2)
console.log(serialize(tree))
const decodeTree = deserialize("['1', '2', 'null', 'null', 'null']")
console.log(decodeTree)