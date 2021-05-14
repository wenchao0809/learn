/**
 * 102. 二叉树的层序遍历
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

 

示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
 */

class TreeNode {
  constructor(value, left, right) {
    this.value = value === undefined ? 0 : value
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
} 
/**
 * 
 * @param {TreeNode} root 
 * @returns {number[][]}
 */
function levelOrder(root) {
  if(!root) return [``]
  const queue = [[root]]
  const res = []
  while (queue.length > 0) {
    const nodes = queue.shift()
    const valuse = []
    const child = []
    for (let item of nodes) {
      valuse.push(item.value)
      if (item.left) child.push(item.left)
      if (item.right) child.push(item.right)
    }
    if (child.length > 0) queue.push(child)
    res.push(valuse)
  }
  return res
};

// 官方解实现的更优雅点
var levelOrder = function(root) {
  const ret = [];
  if (!root) {
      return ret;
  }

  const q = [];
  q.push(root);
  while (q.length !== 0) {
      const currentLevelSize = q.length;
      ret.push([]);
      for (let i = 1; i <= currentLevelSize; ++i) {
          const node = q.shift();
          ret[ret.length - 1].push(node.val);
          if (node.left) q.push(node.left);
          if (node.right) q.push(node.right);
      }
  }
      
  return ret;
};

console.log(levelOrder(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))))