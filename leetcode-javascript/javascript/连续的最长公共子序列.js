function LCS( str1 ,  str2 ) {
  // write code here
  // dp[i][j] 表示以str1[i]和str2[j]为结尾的的最长字串
  // 当str[i] === str[j]时 有dp[i][j] = dp[i-1][j-1] + str[i]
  // 当不等时dp[i][j] = ''这个要仔细想一下， str[i] !== str[j]自然的以str[i]和str[j]为结尾的公共子串为空
  const m = str1.length, n = str2.length
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(''));
  let max = ''
  for (let i = 1; i < m + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
          if (str1[i - 1] === str2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1] + str2[j - 1]
          } else {
              dp[i][j] = ''
          }
          if (dp[i][j].length > max.length) max = dp[i][j]
      }
  }
  return max
}