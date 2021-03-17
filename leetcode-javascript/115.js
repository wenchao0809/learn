/**
 * 115. 不同的子序列
给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。

字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

题目数据保证答案符合 32 位带符号整数范围。

 

示例 1：

输入：s = "rabbbit", t = "rabbit"
输出：3
解释：
如下图所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
(上箭头符号 ^ 表示选取的字母)
rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^
示例 2：

输入：s = "babgbag", t = "bag"
输出：5
解释：
如下图所示, 有 5 种可以从 s 中得到 "bag" 的方案。 
(上箭头符号 ^ 表示选取的字母)
babgbag
^^ ^
babgbag
^^    ^
babgbag
^    ^^
babgbag
  ^  ^^
babgbag
    ^^^
 

提示：

0 <= s.length, t.length <= 1000
s 和 t 由英文字母组成
 */

// 题解

/**
 * 方法一：动态规划
假设字符串 ss 和 tt 的长度分别为 mm 和 nn。如果 tt 是 ss 的子序列，则 ss 的长度一定大于或等于 tt 的长度，即只有当 m \ge nm≥n 时，tt 才可能是 ss 的子序列。如果 m<nm<n，则 tt 一定不是 ss 的子序列，因此直接返回 00。

当 m \ge nm≥n 时，可以通过动态规划的方法计算在 ss 的子序列中 tt 出现的个数。

创建二维数组 \textit{dp}dp，其中 \textit{dp}[i][j]dp[i][j] 表示在 s[i:]s[i:] 的子序列中 t[j:]t[j:] 出现的个数。

上述表示中，s[i:]s[i:] 表示 ss 从下标 ii 到末尾的子字符串，t[j:]t[j:] 表示 tt 从下标 jj 到末尾的子字符串。

考虑动态规划的边界情况：

当 j=nj=n 时，t[j:]t[j:] 为空字符串，由于空字符串是任何字符串的子序列，因此对任意 0 \le i \le m0≤i≤m，有 \textit{dp}[i][n]=1dp[i][n]=1；

当 i=mi=m 且 j<nj<n 时，s[i:]s[i:] 为空字符串，t[j:]t[j:] 为非空字符串，由于非空字符串不是空字符串的子序列，因此对任意 0 \le j<n0≤j<n，有 \textit{dp}[m][j]=0dp[m][j]=0。

当 i<mi<m 且 j<nj<n 时，考虑 \textit{dp}[i][j]dp[i][j] 的计算：

当 s[i]=t[j]s[i]=t[j] 时，\textit{dp}[i][j]dp[i][j] 由两部分组成：

如果 s[i]s[i] 和 t[j]t[j] 匹配，则考虑 t[j+1:]t[j+1:] 作为 s[i+1:]s[i+1:] 的子序列，子序列数为 \textit{dp}[i+1][j+1]dp[i+1][j+1]；

如果 s[i]s[i] 不和 t[j]t[j] 匹配，则考虑 t[j:]t[j:] 作为 s[i+1:]s[i+1:] 的子序列，子序列数为 \textit{dp}[i+1][j]dp[i+1][j]。

因此当 s[i]=t[j]s[i]=t[j] 时，有 \textit{dp}[i][j]=\textit{dp}[i+1][j+1]+\textit{dp}[i+1][j]dp[i][j]=dp[i+1][j+1]+dp[i+1][j]。

当 s[i] \ne t[j]s[i] 

​	
 =t[j] 时，s[i]s[i] 不能和 t[j]t[j] 匹配，因此只考虑 t[j:]t[j:] 作为 s[i+1:]s[i+1:] 的子序列，子序列数为 \textit{dp}[i+1][j]dp[i+1][j]。

因此当 s[i] \ne t[j]s[i] 

​	
 =t[j] 时，有 \textit{dp}[i][j]=\textit{dp}[i+1][j]dp[i][j]=dp[i+1][j]。

由此可以得到如下状态转移方程：

\textit{dp}[i][j] = \begin{cases} \textit{dp}[i+1][j+1]+\textit{dp}[i+1][j], & s[i]=t[j]\\ \textit{dp}[i+1][j], & s[i] \ne t[j] \end{cases}
dp[i][j]={ 
dp[i+1][j+1]+dp[i+1][j],
dp[i+1][j],
​	
  
s[i]=t[j]
s[i] 

​	
 =t[j]
​	
 

最终计算得到 \textit{dp}[0][0]dp[0][0] 即为在 ss 的子序列中 tt 出现的个数。
 */

var numDistinct = function(s, t) {
  const m = s.length, n = t.length;
  if (m < n) {
      return 0;
  }
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) {
      dp[i][n] = 1;
  }
  for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
          if (s[i] == t[j]) {
              dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
          } else {
              dp[i][j] = dp[i + 1][j];
          }
      }
  }
  return dp[0][0];
};
