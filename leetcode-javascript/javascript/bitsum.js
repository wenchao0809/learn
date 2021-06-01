/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function getSum(a, b) {
  if (b === 0) {
    return a
  }
  let sum = carry = 0
  sum = a ^ b
  carry = (a & b) << 1
  return getSum(sum, carry)
}

function getSubtraction(a, b) {
  return getSum(a, ~b + 1)
}

function getMultiplication(a, b) {
  let sum = 0
  while (b > 0) {
    sum = getSum(sum, a)
    --b
  }
  return sum
}

function getDivision(a, b) {
  let isNegative = false
  if (a < 0 && b > 0 || b < 0 && a > 0) isNegative = true
  a = Math.abs(a)
  b = Math.abs(b)
  let max = 2 ** 31
  let quotient = 0
  while (a >= b) {
    a = getSubtraction(a, b)
   ++quotient
  }
  if (isNegative)  quotient = -quotient
  return quotient > max - 1 || quotient < -max ? max - 1 : quotient
}
// console.log(getSubtraction(3, 4))
// console.log(getSum(2, 2))
// console.log(getMultiplication(2, 5))

console.log(getDivision(7, -3))