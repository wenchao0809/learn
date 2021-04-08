/**
 * 7. 整数反转
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。
 

示例 1：

输入：x = 123
输出：321
示例 2：

输入：x = -123
输出：-321
示例 3：

输入：x = 120
输出：21
示例 4：

输入：x = 0
输出：0
 

提示：

-231 <= x <= 231 - 1
 */
/**
 * 
 * @param {number} num 
 */
function reverse(num) {
  if (num === 0) return num
  let re = ''
  if (num < 0) re += '-'
  num = Math.abs(num)
  while (num > 0) {
    const temp = num % 10
    num = Math.floor(num / 10)
    re += temp
  }
  re = parseInt(re)

  return re < - Math.pow(2, 31) || re > Math.pow(2, 31) - 1 ? 0 : re
}

console.log(reverse(4294967296))
console.log(reverse(-123))
console.log(reverse(123))
console.log(reverse(0))