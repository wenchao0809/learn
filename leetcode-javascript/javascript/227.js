/**
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

整数除法仅保留整数部分。

 

示例 1：

输入：s = "3+2*2"
输出：7
示例 2：

输入：s = " 3/2 "
输出：1
示例 3：

输入：s = " 3+5 / 2 "
输出：5
 

提示：

1 <= s.length <= 3 * 105
s 由整数和算符 ('+', '-', '*', '/') 组成，中间由一些空格隔开
s 表示一个 有效表达式
表达式中的所有整数都是非负整数，且在范围 [0, 231 - 1] 内
题目数据保证答案是一个 32-bit 整数

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/basic-calculator-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
  // 去除空格
  s = s.replace(/\s/g, '').replace('/\(-/g', '(0-')
  const numbs = []
  numbs[0] = 0
  const ops = []
  const numRe = /^(\d+)/
  const operateRe = /^[\+\-\*\/]/
  const leftBracketRe = /^\(/
  const rightBracketRe = /^\)/
  const opsProfit = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '%': 2,
    '(': Number.MAX_SAFE_INTEGER,
    ')': Number.MAX_SAFE_INTEGER
  }
  while(s) {
    let match
    if (numRe.test(s)) {
      match = s.match(numRe)
      numbs.push(match[1])
      s = advace(s, match[1].length)
    } else if (operateRe.test(s)) {
      if (ops.length !== 0 && !leftBracketRe.test(top(ops))) {
        while (opsProfit[top(ops)] >= opsProfit[s[0]]) {
          calc(numbs, ops)
        }
      }
      ops.push(s[0])
      s = advace(s, 1)
    } else if(leftBracketRe.test(s)) {
      // 左括号
      ops.push(s[0])
      s = advace(s, 1)
    } else if(rightBracketRe.test(s)) {
      // 右括号计算当前括号内内容
      while(!leftBracketRe.test(top(ops))) {
       calc(numbs, ops)
      }
      ops.pop()
      s = advace(s, 1)
    }
  }
  while(top(ops)) {
    calc(numbs, ops)
  }
  return numbs.pop()
};
/**
 * 
 * @param {any[]} s 
 * @returns 
 */
function top(s) {
  return s[s.length - 1]
}
/**
 * 
 * @param {any[]} nums 
 * @param {string[]} ops 
 * @returns 
 */
function calc(nums, ops) {
  const b = Number(nums.pop())
  const a = Number(nums.pop())
  const o = ops.pop()
  let r
  switch (o) {
    case '+':
      r = a + b
      break
    case '-':
      r = a - b
      break
    case '*':
      r = a * b
      break
    case '/':
      r =   Math.floor(a / b)
      break
    case '%':
      r = a % b
      break
    default:
      break
  }
  nums.push(r)
}

function advace(s, n) {
  return s.slice(n)
}

console.log(calculate("-3+(2+2*2)"))
// console.log(calculate(" 3+5 / 2 "))
// console.log(calculate('-3-2*5'))
console.log(calculate('(2 -1)*3*(3-1)'))
// console.log(calculate("1*2-3/4+5*6-7*8+9/10"))
console.log(calculate("282-1*2*13-30-2*2*2/2-95/5*2+55+804+3024"))