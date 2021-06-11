/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  const t = 2 ** 31
  const min = 0 - t, max = t - 1
  let r = 0
  s = s.trim()
  //处理符号位
  let isNegative = false
  const first = s[0]
  if (first === '-') {
    isNegative = true
    s = s.slice(1)
  } else if (first === '+') {
    s = s.slice(1)
  } else if (isNaN(Number(first))) {
    return 0
  }
  let i = 0
  while(!isNaN(Number(s[i]))&& s[i] !== ' ') ++i
  s = s.slice(0, i)
  let l = s.length
  for (i = 0; i < l; i++) {
    r += Number(s[i]) * Math.pow(10, l - (i + 1))
  }
  if (isNegative) r = 0 - r
  if (r < min) {
    r = min
  } else if (r > max) {
    r = max
  }
  return r
};

// console.log(myAtoi("   -42"))

console.log(myAtoi("4193 with words"))
console.log(myAtoi("a788"))