
 //Definition for a binary tree node.
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
//  var isCousins = function(root, x, y) {
//   const queue = [[root]]
//   while(queue.length > 0) { 
//     const cur = queue.shift()
//     const children = []
//     let xIndex = -1, yIndex = -1
//     for (let i = 0; i < cur.length; i++) {
//       const node = cur[i]
//       if (!node) continue
//       if (node.val === x) {
//         xIndex = i
//       }
//       if (node.val === y) {
//         yIndex = i
//       }
//       children.push(node.left)
//       children.push(node.right)
//     }
//     if (xIndex >= 0 && yIndex >= 0 && Math.abs(xIndex - yIndex) > 1) {
//       return true
//     } else {
//       xIndex =  -1 , yIndex = -1
//     }
//    if (children.length > 0)  queue.push(children)
//   }
//   return false
// };

var isCousins = function(root, x, y) {
  // x 的信息
  let x_parent = null, x_depth = null, x_found = false;
  // y 的信息
  let y_parent = null, y_depth = null, y_found = false;
  
  // 用来判断是否遍历到 x 或 y 的辅助函数
  const update = (node, parent, depth) => {
      if (node.val === x) {
          [x_parent, x_depth, x_found] = [parent, depth, true];
      } else if (node.val === y) {
          [y_parent, y_depth, y_found] = [parent, depth, true];
      }
  }

  q = [[root, 0]];
  update(root, null, 0);

  while (q.length) {
      const [node, depth] = q.shift()
      if (node.left){
          q.push([node.left, depth + 1]);
          update(node.left, node, depth + 1);
      }
      if (node.right) {
          q.push([node.right, depth + 1]);
          update(node.right, node, depth + 1);
      }
      
      if (x_found && y_found) {
          break;
      }
  }

  return x_depth === y_depth && x_parent !== y_parent;
};

const node = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, new TreeNode(5)))
console.log(isCousins(node, 4, 5))
