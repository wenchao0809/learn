function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return arrayToBST(nums, 0, nums.length - 1)
};
/**
 * 
 * @param {number[]} nums 
 * @param {number} l 
 * @param {number} r 
 */
var arrayToBST = function(nums, l, r) {
  if (l > r) return null
  const mid = Math.ceil((l + r) / 2)
  const midVal = nums[mid]
  const node = new TreeNode(midVal)
  node.left = arrayToBST(nums, l, mid - 1)
  node.right = arrayToBST(nums, mid + 1, r)
  return node
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST2 = function(nums) {
  const l = nums.length
  if (l === 0) return null
  const stack = [[0, l - 1, null]]
  let root = null
  while (stack.length > 0) {
    const [l, r, parent] = stack.pop()
    if (l > r) continue
    const mid = Math.ceil((l + r) / 2)
    let tempNode = new TreeNode(nums[mid])
    if (!parent) {
      root = tempNode
    } else {
      parent.val > nums[r] ? parent.left = tempNode : parent.right = tempNode
    }
    stack.push([mid + 1, r, tempNode], [l, mid - 1, tempNode])
  }
  return root
};

const node = sortedArrayToBST2([-10,-3,0,5,9])
console.log(node)