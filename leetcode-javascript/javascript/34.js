//  Definition for a binary tree node.
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
 
 
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
 var pathSum = function(root, target) {
  if (!root) {
    return []
  } else if (target - root.val === 0 && !root.left && !root.right ) {
    return [[root.val]]
  } else  {
    const left = pathSum(root.left, target - root.val).map(item => (item.unshift(root.val), item) )
    const ritht = pathSum(root.right, target - root.val).map(item => (item.unshift(root.val), item))
    return left.concat(ritht)
  }
};

/**
 * 迭代写法
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
 var pathSum = function(root, target) {
  if (!root) return []
  const res = []
  // 模拟递归栈 需要保存三个变量分别是 当前节点 目标值 当前路径已经遍历的值
  const stack = [[root, target, []]]
  while (stack.length > 0) {
    const [node, t, values] = stack.pop()
    const next = t - node.val
    if (next === 0 && !node.left && !node.right) {
      // 遍历到叶子节点并且next === 0 说明当前路径符合要求
      values.push(node.val)
      res.push(values)
    } else {
      if (node.right) stack.push([node.right, next,  [...values, node.val]])
      if (node.left) stack.push([node.left, next, [...values, node.val]])
    }
  }
  return res
};