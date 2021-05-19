/**
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

console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("babad"))