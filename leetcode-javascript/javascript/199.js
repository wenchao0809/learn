
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
 
/**
 * 层序遍历每次返回最右端节点
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return []
  let res = [], queue = [[root]]
  while (queue.length > 0) {
    const cur = queue.shift()
    res.push(cur[cur.length - 1].val)
    const child = []
    for (let item of cur) {
      if (item.left) child.push(item.left)
      if (item.right) child.push(item.right)
    }
    if (child.length > 0) queue.push(child)
  }
  return res
};