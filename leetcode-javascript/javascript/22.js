/**
 * @param {number} n
 * @return {string[]}
  */
var generateParenthesis = function(n) {
  const res = []
  const total = 2 * n  - 1
  /**
   * 
   * @param {string[]} r 
   * @param {number} n 
   */
  function dfs(r, n) {
    const temp = []
    for (let t of r) {
      temp.push(t + '(')
      temp.push(t + ')')
    }
    r.length = 0
    r.push(...temp)
    if (n > 1) {
      dfs(r, n - 1)
    }
  }
  const all = ['(']
  dfs(all, total)
  for (let item of all) {
    if (isValid(item)) res.push(item)
  }
  return res
};

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


/**
 * 
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  let res = [];
   const help = (cur, left, right) => {
     if (cur.length === 2 * n) {
       res.push(cur);
       return;
     }
     if (left < n) {
       help(cur + "(", left + 1, right);
     }
     if (right < left) {
       help(cur + ")", left, right + 1);
     }
   };
   help("", 0, 0);
   return res;
 };
console.log(generateParenthesis(2))