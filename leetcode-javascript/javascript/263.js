/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
  if (n === 1) return true
  if (n <= 0) return false
  if (n % 2 == 0) {
    return isUgly(n / 2)
  } else if (n % 3 === 0) {
    return isUgly( n / 3)
  } else if (n % 5 == 0) {
    return isUgly(n / 5)
  } else {
    return false
  }
};
/**
 * 官方
 * @param {Number} n 
 * @returns 
 */
var isUgly = function(n) {
  if (n <= 0) {
      return false;
  }
  const factors = [2, 3, 5];
  for (const factor of factors) {
      while (n % factor === 0) {
          n /= factor;
      }
  }
  return n == 1;
};

console.log(isUgly(-2147483648))
console.log(isUgly2(-2147483648))