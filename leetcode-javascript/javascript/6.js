/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows == 1) return s;
  const l = s.length, rows = new Array(Math.min(l, numRows)).fill('')
  let curRow = 0, goDown = false
  for (let c of s) {
    rows[curRow] += c
    if (curRow === 0 || curRow === numRows - 1) goDown = !goDown  
    curRow += goDown ? 1 : -1;
  }
  return rows.join('')
};

console.log(convert('AB', 1) === 'AB')

console.log(convert("PAYPALISHIRING", 3) === 'PAHNAPLSIIGYIR')

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert2 = function(s, numRows) {
  if (numRows == 1) return s;
  const l = s.length
  let ret = '', cycleLen = 2 *  numRows - 2
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < l; j += cycleLen) {
      ret += s[j + i]
      if (i != 0 && i != numRows - 1 && j + cycleLen - i < n)
        // 当不是第一行和最后一行时需要处理中间元素
        ret += s[j + cycleLen - i];
    }
  }
  return ret
};

console.log(convert2("PAYPALISHIRING", 3))
