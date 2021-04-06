/**
 * 
 * 给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。



上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的直方图，在这种情况下，可以接 6 个单位的水（蓝色部分表示水）。 感谢 Marcos 贡献此图。

示例:

输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6

 */
/**思路
 * 对于下标 i，水能到达的最大高度等于下标 i 两边的最大高度的最小值，下标 i 处能接的水的量等于下标 i 处的水能到达的最大高度减去 height[i]

 * 
 */


/**
 * 暴力解法
 * @param {number[]} height 
 * @returns {number}
 */
function trap(height) {
  let c = 0
  const l = height.length
  for (let i = 0; i  < l; i++) {
    let leftMax = height[i]
    let rightMax = height[i]
    // 向左
    let j = i - 1
    while (j >= 0) {
      if (height[j] > leftMax) leftMax = height[j]
      j--
    } 
    // 向右
    j = i + 1 
    while (j < height.length) {
      if (height[j] > rightMax) rightMax = height[j]
      j++
    }
    c += Math.min(leftMax, rightMax) - height[i]
  }
  return c
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))

/**
 * 动态规划
 */
/**
 * 
 * @param {number[]} height 
 */
function trap2(height) {
  let total = 0
  const l = height.length
  const leftMax = new Array(l)
  const rightMax = new Array(l)
  // 初始化
  leftMax[0] = height[0]
  rightMax[l - 1] = height[l - 1]
  // 从后向前求rightMax
  let i = l - 2
  while (i >= 0) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1])
    i--
  }
  // 从前向后求leftMax
  i = 1
  while(i < l) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1])
    i++
  }
  // 遍历数组
  for (i = 0; i < l; i++) {
    total += Math.min(leftMax[i], rightMax[i]) - height[i]
  }
  return total
}

console.log(trap2([0,1,0,2,1,0,1,3,2,1,2,1]))

/**
 * 双指针解法
 * @param {number[]} height 
 */
function trap3(height) {
  const l = height.length
  let left = 0;
  let right = l - 1
  let leftMax = 0,
      rightMax = 0
  let total = 0
  while (left < right) {
    if (height[left] > leftMax) leftMax = height[left]
    if (height[right] > rightMax) rightMax = height[right]
    if (rightMax > leftMax) {
      total += leftMax - height[left]
      left++
    } else {
      total += rightMax - height[right]
      right--
    }
  }
  return total
}

console.log(trap3([0,1,0,2,1,0,1,3,2,1,2,1]))