/**
 * 173. 二叉搜索树迭代器
实现一个二叉搜索树迭代器类BSTIterator ，表示一个按中序遍历二叉搜索树（BST）的迭代器：
BSTIterator(TreeNode root) 初始化 BSTIterator 类的一个对象。BST 的根节点 root 会作为构造函数的一部分给出。指针应初始化为一个不存在于 BST 中的数字，且该数字小于 BST 中的任何元素。
boolean hasNext() 如果向指针右侧遍历存在数字，则返回 true ；否则返回 false 。
int next()将指针向右移动，然后返回指针处的数字。
注意，指针初始化为一个不存在于 BST 中的数字，所以对 next() 的首次调用将返回 BST 中的最小元素。

你可以假设 next() 调用总是有效的，也就是说，当调用 next() 时，BST 的中序遍历中至少存在一个下一个数字。

 

示例：


输入
["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
[[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
输出
[null, 3, 7, true, 9, true, 15, true, 20, false]

解释
BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
bSTIterator.next();    // 返回 3
bSTIterator.next();    // 返回 7
bSTIterator.hasNext(); // 返回 True
bSTIterator.next();    // 返回 9
bSTIterator.hasNext(); // 返回 True
bSTIterator.next();    // 返回 15
bSTIterator.hasNext(); // 返回 True
bSTIterator.next();    // 返回 20
bSTIterator.hasNext(); // 返回 False
 

提示：

树中节点的数目在范围 [1, 105] 内
0 <= Node.val <= 106
最多调用 105 次 hasNext 和 next 操作
 

进阶：

你可以设计一个满足下述条件的解决方案吗？next() 和 hasNext() 操作均摊时间复杂度为 O(1) ，并使用 O(h) 内存。其中 h 是树的高度。
 */

class TreeNode {
  /**
   * 
   * @param {Number} val 
   * @param {TreeNode} left 
   * @param {TreeNode} right 
   */
  constructor(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
  }
}

class  BSTIterator {
  /**
   * 
   * @param {TreeNode} root 
   */
  constructor(root) {
    this.root = root
    this.flatArray = root ? this.ldr(root) : []
    this.index = 0
  }
  /**
   * 
   * @param {TreeNode} root 
   * @returns {Number[]} 
   */
  ldr(root) {
    if (!root) return []
    return [...this.ldr(root.left), root.val, ...this.ldr(root.right)]
  }
  /**
   * 
   * @returns {Number}
   */
  next() {
    return this.flatArray[this.index++]
  }
  /**
   * @returns {Boolean}
   */
  hasNext() {
    return this.index < this.flatArray.length
  }
}

/**
 * 根据上面的遍历顺序，我们得出迭代的思路：

构造方法：一路到底，把根节点和它的所有左节点放到栈中；
调用 next() 方法：弹出栈顶的节点；
如果它有右子树，则对右子树一路到底，把它和它的所有左节点放到栈中。
。
时间复杂度：均摊复杂度是 O(1)O(1)，调用 next() 方法的时候，如果栈顶元素有右子树，则把所有右边节点即其所有左孩子全部放到了栈中，下次调用 next() 的时候，直接访问栈顶就可以了，均摊之后时间复杂度是 O(1)O(1)。
空间复杂度：O(h)O(h)，h 为数的高度，因为栈中只保留了左节点，栈中元素最多的时候，就是树的高度。

 */

class  BSTIterator2 {
  /**
   * 
   * @param {TreeNode} root 
   */
  constructor(root) {
    this.root = root
    this.flatArray = []
    this.travseLeft(root) 
  }
  /**
   * 
   * @param {TreeNode} root 
   * @returns {Number[]} 
   */
  travseLeft(root) {
    if (!root) return
    this.flatArray.push(root)
    this.travseLeft(root.left)
  }
  /**
   * 
   * @returns {Number}
   */
  next() {
    if (!this.hasNext()) {
      return
    }
   const head = this.flatArray.pop()
   if (head.right) this.travseLeft(head.right)
   return head.val
  }
  /**
   * @returns {Boolean}
   */
  hasNext() {
    return this.flatArray.length > 0
  }
}

const it = new BSTIterator2(new TreeNode(7, new TreeNode(3), new TreeNode(15, new TreeNode(9), new TreeNode(20))))
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
