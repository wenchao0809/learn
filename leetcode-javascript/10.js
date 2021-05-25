/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch1 = function(s, p) {
  return match(s, p, 0, 0)
};

var match1 = function(s, p, sStart, pStart) {
  let i = sStart, j = pStart, ls = s.length, lp = p.length
  while (i < ls || j < lp) {
    // 遇到匹配直接前进
    while (i < ls && (s[i] === p[j] || p[j] === '.')) {
      ++i
      ++j
    }
    if (i === ls && j === lp) break
    // 遇到*回溯到模式前一个字符
    if (p[j] === '*') {
      // 已经匹配了一个字符回退
      if (s[i - 1] === p[j-1] || p[j-1] === '.') --i
      while(i < ls && (s[i] === p[j - 1] || p[j - 1] === '.')) {
        // 分别尝试匹配 0 - n个
        if (match(s, p, i++, j + 1)) {
          return true
        }
      }
      ++j
    } else {
      if (p[j+1] === '*') {
        ++j
      } else {
        return false
      }
    }
  }
  return i === ls && j === lp
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
  return match(s, p, 0, 0)
};
/**
 * 
 * @param {string} s 
 * @param {string} p 
 * @param {number} sStart 
 * @param {number} pStart 
 */
function match(s, p, sStart, pStart) {
  if (pStart === p.length && sStart === s.length ) return true
  const first_match = (sStart < s.length) && (s[sStart] === p[pStart] || p[pStart] === '.');
  if (p[pStart + 1] === '*') {
    return match(s, p, sStart, pStart + 2) || (first_match && match(s, p, sStart + 1, pStart));
  } else {
    return first_match && match(s, p, sStart + 1, pStart + 1);
  }
}

console.log(isMatch('aab', 'c*a*b'))

console.log(isMatch('ab', '.*'))

console.log(isMatch("mississippi", "mis*is*p*."))

console.log(isMatch("mississippi", "mis*is*ip*."))

console.log(isMatch('aaa', 'a*a'))

console.log(isMatch("aaa", "ab*ac*a"))
console.log(isMatch("aaa", "ab*a*c*a"))

console.log(isMatch("a", "ab*"))

console.log(isMatch("ab", ".*.."))

console.log(isMatch('ab', '.*c'))

/**
 * 动态规划
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch3(s, p) {
  const m = s.length, n = p.length
  const dp = new Array(m+1)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(n + 1)
  }
  dp[0][0] = true
  function match(i, j) {
    // i === 0空字符串
    if (i === 0) return false
    if (p[j - 1] === '.') return true
    return s[i - 1] === p[j - 1]
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 状态转移
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2]
        if (match(i, j - 1)) {
          dp[i][j] = dp[i][j] || dp[i - 1][j]
        }
      } else {
        if (match(i, j)) {
          dp[i][j] = dp[i][j] || dp[i - 1][j - 1];
        } else {
          dp[i][j] = false
        }
      }
    }
  }
  return dp[m][n]
}

// console.log(isMatch3('ab', '.*c'))
// console.log(isMatch3('aab', 'c*a*b'))

// console.log(isMatch3('ab', '.*'))

// console.log(isMatch3("mississippi", "mis*is*p*."))

// console.log(isMatch3("mississippi", "mis*is*ip*."))

// console.log(isMatch3('aa', 'a'))

// console.log(isMatch3("aaa", "ab*ac*a"))
// console.log(isMatch3("aaa", "ab*a*c*a"))

// console.log(isMatch3("a", "ab*"))

// console.log(isMatch3("ab", ".*.."))

// console.log(isMatch3('', '.*'))