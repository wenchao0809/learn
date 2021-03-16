/**
 * 
 * 331. 验证二叉树的前序序列化
序列化二叉树的一种方法是使用前序遍历。当我们遇到一个非空节点时，我们可以记录下这个节点的值。如果它是一个空节点，我们可以使用一个标记值记录，例如 #。

     _9_
    /   \
   3     2
  / \   / \
 4   1  #  6
/ \ / \   / \
# # # #   # #
例如，上面的二叉树可以被序列化为字符串 "9,3,4,#,#,1,#,#,2,#,6,#,#"，其中 # 代表一个空节点。

给定一串以逗号分隔的序列，验证它是否是正确的二叉树的前序序列化。编写一个在不重构树的条件下的可行算法。

每个以逗号分隔的字符或为一个整数或为一个表示 null 指针的 '#' 。

你可以认为输入格式总是有效的，例如它永远不会包含两个连续的逗号，比如 "1,,3" 。

示例 1:

输入: "9,3,4,#,#,1,#,#,2,#,6,#,#"
输出: true
示例 2:

输入: "1,#"
输出: false
示例 3:

输入: "9,#,#,1"
输出: false
通过次数21,759提交次数45,555
 */

var isValidSerialization = function(preorder) {
  let tree = preorder.split(',')
  // c初始值设为1因为根节点要计数2
  if (tree[0] === '#' && tree.length > 1) return false
  let c = 1
  for (let n of tree) {
    c += n !== '#' ? 1 : (-1)
    if(c < 0) return false
  }
  return c === 0
};

var isValidSerialization = function(preorder) {
  let tree = preorder.split(',')
  // c初始值设为1为根节点占位
  let c = 1
  for (let i = 0; i < tree.length; i++) {
    c += tree[i] !== '#' ? 1 : (-1)
    if(c < 0 || (c === 0 && i < tree.length -1)) return false
  }
  return c === 0
};

// console.log(isValidSerialization("7,2,#,2,#,#,#,6,#"))
// console.log(isValidSerialization("#"))
// console.log(isValidSerialization("#,#,3,5,#"))
// console.log(isValidSerialization("#,7,6,9,#,#,#"))

var isValidSerialization2 = function(preorder) {
  let tree = preorder.split(',')
  // c初始值设为1为根节点占位
  const stack = []
  stack[0] = 1
  for (let i = 0; i < tree.length; i++) {
    if (stack.length === 0) return false
    subStack(stack)
    // 栈顶小于0直接返回false
    if (topStack(stack) === 0) stack.pop()
    if (tree[i] !== '#') stack.push(2)
  }
  return stack.length === 0
};
function subStack(s) {
  s[s.length - 1] = topStack(s) - 1
}
function topStack(s) {
  return s[s.length - 1]
}

console.log(isValidSerialization2("7,2,#,2,#,#,#,6,#"))
console.log(isValidSerialization2("#"))
console.log(isValidSerialization2("#,#,3,5,#"))
console.log(isValidSerialization2("#,7,6,9,#,#,#"))
console.log(isValidSerialization("1,#,#,#,#"))