/**
 * 从外向内查找
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const l = s.length
  let r = ''
  for (let i = 0; i < l; i++) {
    // 从前往后暴力查找
    let t = l - 1, k = i, j = t
    while (k < j) {
      if (s[k] === s[j]) {
        k++, j--
      } else {
        k = i
        t--
        j = t 
      }
    }
    const temp = s.substring(i, t + 1)
    if (temp.length > r.length) r = temp
  }
  return r
};

/**
 * 从中间向外扩散 复杂度 O(n2)
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome2 = function(s) {
  const n = s.length
  let res = ''
  for (let i = 0; i < n; i++) {
    let l = i, r =  i
    while(l >= 0 && r < n) {
      // 避免越界
      if (l > 0 && s[l - 1] === s[r + 1]) {
        // 对称回文
        l--
        r++
      } else if (r < n - 1 && s[r + 1] === s[i] && l === i) {
        // 相邻回文
        r++
      } else {
        break
      }
    }
    const temp = s.substring(l, r + 1)
    if (temp.length > res.length) res = temp
  }
  return res
};

console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome2("babad"))
console.log(longestPalindrome2("cbbd"))
console.log(longestPalindrome2("babad"))
console.log(longestPalindrome2('bb'))
console.log(longestPalindrome2("aacabdkacaa"))