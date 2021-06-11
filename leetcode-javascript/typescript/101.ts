
 //Definition for a binary tree node.
 class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
     }
 }
function isSymmetric(root: TreeNode | null): boolean {
  return check(root, root)
};

function check(q: TreeNode, p: TreeNode): boolean {
  if (!q && !p) return true
  if (!q || !p) return false
  return q.val === p.val && check(p.left, q.right) && check(p.right, q.left)
}
const node = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)))
console.log(isSymmetric(node))

function isSymmetric2(root: TreeNode | null): boolean {
  const queue = [root, root]
  while(queue.length > 0) {
    const left = queue.shift()
    const right = queue.shift()
    if (!left && !right) continue
    if (!left || !right) return false
    if (left.val !== right.val) return false
    queue.push(left.left, right.right)
    queue.push(left.right, right.left)
  }
  return true
};
console.log(isSymmetric2(node))