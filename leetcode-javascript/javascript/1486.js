/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  let res = 0
  for (let i = 0; i < n; i++) {
    res ^= (2 * i + start)
  }
  return res
};

// 复杂度O(1)
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  let s = start >> 1, e = n & start & 1;
  let ret = sumXor(s - 1) ^ sumXor(s + n - 1);
  return ret << 1 | e;
};

const sumXor = (x) => {
  if (x % 4 === 0) {
      return x;
  }
  if (x % 4 === 1) {
      return 1;
  }
  if (x % 4 === 2) {
      return x + 1;
  }
  return 0;
}
