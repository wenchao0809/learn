/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
  let stack = []
  let pre = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < preorder.length; i++) {
    const cur = preorder[i]
    if (cur < pre) return false
    while(stack.length > 0 && stack[stack.length - 1] < cur) {
      pre = stack.pop()
    }
    stack.push(cur)
  }
  return true
};