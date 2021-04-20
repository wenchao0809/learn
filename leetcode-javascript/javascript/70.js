/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

  let prepre = 1, pre = 2, i = 3
  while (i < n + 1) {
    const p = pre
    pre = pre + prepre
    prepre = p
    i++
  }
  return pre
};

console.log(climbStairs(3))
console.log(climbStairs(2))
console.log(climbStairs(4))
console.log(climbStairs(5))