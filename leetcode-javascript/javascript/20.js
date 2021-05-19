/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const left = ['(', '{', '[']
  const stack = []
  for (let c of s) {
    if (left.includes(c)) {
      stack.push(c)
    } else {
      const l = stack.length
      if (c === ')' && stack[l - 1] !== '(' || c === ']' && stack[l - 1] !== '[' || c === '}' && stack[l - 1] !== '{') {
        return false
      }
      stack.pop()
    }
  }
  return stack.length === 0
};

console.log(isValid("()[]{}"))