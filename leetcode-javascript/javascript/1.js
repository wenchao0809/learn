/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

 

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]
 

提示：

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
只会存在一个有效答案

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * 
 * @param {number[]} nums 
 * @param { number } target
 * @returns {number[]}
 */
function twoSum(nums, target) {
  let l = nums.length
  for (let i = 0; i < l; i++) {
    const num1 = nums[i]
    for (let j = i + 1; j < l; j++) {
      const num2 = nums[j]
      if (num1 + num2 === target) return [i, j]
    }
  }
}
/**
 * hash表
 * 
 */
 function twoSum2(nums, target) {
  let l = nums.length
  const map = new Map()
  for (let i = 0; i < l; i++) {
    map.set(nums[i], i)
  }
  for (let i = 0; i < l; i++) {
    const other = target - nums[i]
    if (map.has(other) && map.get(other) !== i) return [i, map.get(other)]
  }
}

console.log(twoSum2([3,2,4], 6))