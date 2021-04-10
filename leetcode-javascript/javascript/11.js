/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0, r = height.length - 1
  let area = 0
  while (l < r) {
    const t = Math.min(height[l], height[r]) * (r - l)
    if (t > area) area = t
    height[l] >= height[r] ? --r : ++l
  }
  return area
};

// console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// console.log(maxArea([1,1]))
console.log(maxArea([2,3,4,5,18,17,6]))