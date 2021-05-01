/**
 * 
 * @param {string} s 
 * @returns 
 */
var numDecodings = function(s) {
  const l = s.length
  if (s[0] === '0') return 0
  if (l === 1) return 1
  if (s[0] > '2' && s[1] === '0') return 0
  let n1 = 1
  let n2 =  s[0] > '2' || s[0] === '2' && s[1] > '6' || s[1] === '0' ? n1 : 2
  let i = 2
  while (i < s.length) {
    if (s[i] === '0' && s[i - 1] === '0' || s[i] === '0' && s[i - 1] > '2') {
      n2 = 0
      break
    } else if (s[i] === '0' ) {
      let t = n2
      n2 = n1
      n1 = t
    } else if (s[i - 1] === '0' || s[i - 1] === '2' && s[i] > '6' || s[i - 1] > '2') {
      n1 = n2
    } else {
      let t = n2 
      n2 += n1
      n1 = t
    }
    ++i
  }
  return n2
};

// console.log(numDecodings('226'))
// console.log(numDecodings('2101'))
// console.log(numDecodings('123123'))
console.log(numDecodings('301'))
