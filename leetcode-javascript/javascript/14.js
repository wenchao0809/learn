/**
 * 14. 最长公共前缀
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

 

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 

提示：

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成
通过次数496,251提交次数1,261,527
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const l = strs.length
  if (l === 0) return ''
  if (l === 1) return strs[0]
  let common = strs[0]
  for (let i = 1; i < l; i++) {
    if (common === '') break
    const il = Math.min(common.length, strs[i].length)
    let temp = '', str = strs[i]
    for (let j = 0; j < il; j++) {
      if (common[j] === str[j]) {
        temp += common[j]
      } else {
        break
      }
    }
    common = temp
  }
  return common
};
console.log(longestCommonPrefix(["flower","flow","flight"]))

// 二分解法
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix2 = function(strs) {
  const l = strs.length
  let low = 0, high = Number.MAX_SAFE_INTEGER, minStr = '', common = ''
  // 遍历查找最小字符串
  for (let i = 0; i < l; i++) {
    const sl = strs[i].length
    if (sl < high) {
      high = sl
      minStr = strs[i]
    }
  }
  // 直接返回
  if (high === 0) return common
  while(low < high) {
    let mid = ((high - low + 1) >> 1) + low
    if (check(strs, minStr.substring(0, mid))) {
      low = mid
    } else {
      high = mid - 1
    }
  }
  return minStr.substring(0, low)
};
/**
 * 
 * @param {string[]} strs 
 * @param {string} common 
 * @return {boolean}
 */
function check(strs, common) {
  let res = true
  for (let str of strs) {
    if (!str.startsWith(common)) {
      res = false
      break
    }
  }
  return res
}

// console.log(longestCommonPrefix2(["flower","flow","flight"]))
console.log(longestCommonPrefix2(["reflower","flow","flight"]))
// console.log(longestCommonPrefix2(["a"]))