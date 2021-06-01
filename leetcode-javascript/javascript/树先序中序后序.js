/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 * 
 * @param root TreeNode类 the root of binary tree
 * @return int整型二维数组
 */
 function threeOrders( root ) {
  // write code here
  
  function preOrder(root) {
      if (!root) return []
      return [root.val, ...preOrder(root.left), ...preOrder(root.right)]
  }
  function preOrderFor(root) {
      const stack = [root]
      const res = []
      if (!root) return res
      while(stack.length > 0) {
          const node = stack.pop()
          res.push(node.val)
          if (node.right) stack.push(node.right)
          if (node.left) stack.push(node.left)
      }
      return res
  }
  function inOrder(root) {
      if (!root) return []
      return [...inOrder(root.left), root.val, ...inOrder(root.right)]
  }
  function inOrderFor(root) {
      const stack = []
      const res = []
      let node = root
      if (!root) return res
      function travseLeft(node) {
         while(node) {
              stack.push(node)
              node = node.left
          }
      }
      travseLeft(root)
      while (stack.length > 0) {
          const node = stack.pop()
          res.push(node.val)
          if (node.right) travseLeft(node.right)
      }
      return res
  }
  function postOrder(root) {
      if (!root) return []
      return [...postOrder(root.left), ...postOrder(root.right), root.val]
  }
  
  function postOrderFor(root) {
      const stack = []
      const res = []
      let node = root
      if (!root) return res
      function travseLeft(node) {
         while(node) {
              stack.push(node)
              node = node.left
          }
      }
      travseLeft(root)
      let pre 
      while (stack.length > 0) {
          const node = stack.pop()
          if (node.right !== null && node.right !== pre) {
              stack.push(node)
              travseLeft(node.right)
          } else {
              res.push(node.val)
              pre = node
          }
      }
      return res
  }
  return [preOrderFor(root), inOrderFor(root), postOrderFor(root)]
}