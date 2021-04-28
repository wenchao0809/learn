/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  let left = Math.max(...weights)
  let right =  weights.reduce((p, n) => p + n, 0)
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    let need = 1, cur = 0
    for (let w of weights) {
      if ((cur += w) > mid ) {
        need++
        cur = w
      } 
    }
    if (need <= D) {
     right = mid
    } else {
     left = mid + 1
    }
  }
  return left
};

console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5))
console.log(shipWithinDays([3,2,2,4,1,4], 3))