
 //Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
 }
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDiffInBST = function(root) {
  let ans = Number.MAX_SAFE_INTEGER, pre = -1;
  const dfs = (root) => {
      if (root === null) {
          return;
      }
      dfs(root.left);
      if (pre == -1) {
          pre = root.val;
      } else {
          ans = Math.min(ans, root.val - pre);
          pre = root.val;
      }
      dfs(root.right);
  }
  dfs(root);
  return ans;
};


var minDiffInBST2 = function(root) {
  let ans = Number.MAX_SAFE_INTEGER, pre = -1;
  let stack = []
  let node = root
  while(stack.length > 0 || node) {
    while(node) {
      stack.push(node)
      node = node.left
    }
    let cur = stack.pop()
    if (pre === -1) {
      pre = cur.val
    } else {
      ans = Math.min(ans, cur.val - pre)
      pre = cur.val
    }
    if (cur.right) node = cur.right
  }
  return ans;
};
// 中序遍历非递归
function dfs(root) {
  let stack = []
  let node = root, pre = null
  while(node) {
    stack.push(node)
    node = node.left
  }

  while(stack.length > 0) {
    const cur = stack.pop()
    if (cur.left && cur.left !== pre) {
      stack.push(cur)
      stack.push(cur.left)
    } else if (cur.right) {
      stack.push(cur.right)
      console.log(cur.val)
      pre = cur
    } else {
      console.log(cur.val)
      pre = cur
    }
  }
}
// 中序遍历非递归
function dfs2(root) {
  let stack = []
  let node = root
  while(stack.length > 0 || node) {
    while(node) {
      stack.push(node)
      node = node.left
    }
    let cur = stack.pop()
    console.log(cur.val)
    if (cur.right) node = cur.right
  }
}

const node = new TreeNode(27, null, new TreeNode(34, null, new TreeNode(58, new TreeNode(50, new TreeNode(44)))))
console.log(minDiffInBST2(node))
console.log(minDiffInBST(node))

console.log(dfs2(node))