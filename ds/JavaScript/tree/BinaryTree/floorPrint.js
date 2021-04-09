class TreeNode {
  constructor(value, left, right) {
    this.value = value
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}
/**
 * 
 * @param {TreeNode} head 
 */
function floorPrint(head) {
  const queue = [head]
  while(queue.length > 0) {
    const cur = queue.shift()
    console.log(cur.value)
    if (cur.left) queue.push(cur.left)
    if (cur.right) queue.push(cur.right)
  }
}

floorPrint(new TreeNode(2, new TreeNode(3), new TreeNode(4, new TreeNode(6), new TreeNode(7))))