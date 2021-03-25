/**
 * 给你一个嵌套的整型列表。请你设计一个迭代器，使其能够遍历这个整型列表中的所有整数。

列表中的每一项或者为一个整数，或者是另一个列表。其中列表的元素也可能是整数或是其他列表。

 

示例 1:

输入: [[1,1],2,[1,1]]
输出: [1,1,2,1,1]
解释: 通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,1,2,1,1]。
示例 2:

输入: [1,[4,[6]]]
输出: [1,4,6]
解释: 通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,4,6]。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/flatten-nested-list-iterator
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// class NestedIterator {
//   constructor(nestedList) {
//     this.originList = nestedList
//     this.i = 0
//     this.flatList = this.__travse(nestedList)
//   }

//   __travse(list) {
//     let a = []
//     for (let item of list) {
//       Array.isArray(item) ? a = a.concat(this.__travse(item)) : a.push(item)
//     }
//     return a
//   }
//   hasNext() {
//     return this.i < this.flatList.length
//   }
//   next() {
//     return this.flatList[this.i++]
//   }
// }
/**
 * 
 * @param {number[]} nestedList 
 */
function NestedIterator(nestedList) {
  this.originList = nestedList
  this.i = 0
  this.flatList = []
  this.__travse(nestedList)
}

NestedIterator.prototype.__travse = function (list) {
  let a = []
  for (let item of list) {
    item.isInteger() ? this.__travse(item) : a.push(item)
  }
  return a
}
NestedIterator.prototype.hasNext = function () {
  return this.i < this.flatList.length
}

NestedIterator.prototype.next = function () {
  return this.flatList[this.i++]
}
// let it = new NestedIterator([1,[4,[6]]])

// console.log(it.hasNext() ? it.next() : '')
// console.log(it.hasNext() ? it.next() : '')
// console.log(it.hasNext() ? it.next() : '')
// console.log(it.hasNext() ? it.next() : null)

var i = new NestedIterator([[1,1],2,[1,1]])
a = [];
while (i.hasNext()) a.push(i.next())
console.log(a)