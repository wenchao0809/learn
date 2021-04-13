/**
 * 
 * @param {string} p 
 */
function buildNext(p) {
  const m = p.length
  const N = []
  let t = N[0] = -1
  let j = 0
  while (j < m -1) {
    if (0 > t || p[j] === p[t]) {
      j++
      t++
      // 根据已知信息如果p[j] !== t[i] 如果p[j] === p[t]则p[t]必然失配t[i]所以这次比较可以优化
      N[j] = p[j] !== p[t] ? t : N[t]
    } else {
      t = N[t]
    }
  }
  return N
}
/**
 * kmp字符串模式匹配
 * @param {string} t 
 * @param {string} p 
 */
function match(t, p) {
  let N = buildNext(p)
  let i = 0
  let j = 0
  const n = t.length
  const m = p.length
  while(j < m && i < n) {
    if (0 > j || t[i] === p[j]) {
      i++
      j++
    } else {
      j = N[j]
    }
  }
  return j === m ? i - j : -1
}

export function indexOf(s, fromIndex = 0) {
  fromIndex = 0 > fromIndex  
    ? this.length + fromIndex > 0
      ? this.length + fromIndex
      : 0
    : fromIndex
  console.log(fromIndex)
  const i = match(this.slice(fromIndex), s)
  return i > 0 ? fromIndex + i : i
}
