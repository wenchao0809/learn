/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function(encoded) {
  const l = encoded.length + 1
  // p0 ^ p1 ^ ... ^ pn
  const total = (new Array(l + 1)).fill(0).reduce((p, n, i) => p ^ i , 0)
  // p1 ^ p2 ... ^pn
  const p1n = encoded.reduce((p, n, i) => (i % 2 === 1 ? p ^ n : p),  0)
  // 一个元素
  let p0 = total ^ p1n
  const p = [p0]
  for (let i = 0; i < l - 1; i++) {
    p.push(p0 ^= encoded[i])
  }
  return p
};

console.log(decode([3,1]))