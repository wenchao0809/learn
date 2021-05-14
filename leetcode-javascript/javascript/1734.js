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
// 官方解
var decode2= function(encoded) {
  const n = encoded.length + 1;
  let total = 0;
  for (let i = 1; i <= n; i++) {
      total ^= i;
  }
  let odd = 0;
  for (let i = 1; i < n - 1; i += 2) {
      odd ^= encoded[i];
  }
  const perm = new Array(n).fill(0);
  perm[0] = total ^ odd;
  for (let i = 0; i < n - 1; i++) {
      perm[i + 1] = perm[i] ^ encoded[i];
  }
  return perm;
};

console.log(decode([3,1]))