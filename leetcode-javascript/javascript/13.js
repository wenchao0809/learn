/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = new Map([
    ["M", 1000], 
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["X", 10],
    ["V", 5],
    ["I", 1]
  ])
  let i = 1, sum = 0, pre = map.get(s[0])
  while (i < s.length) {
    const value = map.get(s[i])
    if (pre < value) {
     sum -= pre
    } else {
     sum += pre
    }
    pre = value
    i++
  }
  return sum += pre
};

console.log(romanToInt("III"))