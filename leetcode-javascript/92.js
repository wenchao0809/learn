/**
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 

示例 1：


输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
示例 2：

输入：head = [5], left = 1, right = 1
输出：[5]
 

提示：

链表中节点数目为 n
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
 

进阶： 你可以使用一趟扫描完成反转吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-linked-list-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// var reverseBetween = function(head, left, right) {
//   let node = head,
//       start = null,
//       end = null
//       leftNode = null,
//       rightNOde = null,
//       pre = null
//       count = 0
//   if (left === right) return head
//   while(count++ < right - 1) {
//     if (count === left) {
//       start = pre
//       leftNode = node
//       // 跳过本次循环
//       pre = node
//       node = node.next
//       continue

//     }
//     let temp = node.next
//     if(start) {
//       // 遍历到start开始反转
//       node.next = pre
//     }
//     pre = node
//     node = temp
//   }
//   if (end) {
//     end = node.next
//     leftNode.next = end
//   }
//   node.next = pre
//   if (start) {
//     start.next = node
//   }
//   return left == 1 ? node : head
// };

let start = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
let start1 = new ListNode(5, new ListNode(4), new ListNode(3))

var reverseBetween = function(head, left, right) {
  // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
  const dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let pre = dummyNode;
  // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
  // 建议写在 for 循环里，语义清晰
  for (let i = 0; i < left - 1; i++) {
      pre = pre.next;
  }

  // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) {
      rightNode = rightNode.next;
  }

  // 第 3 步：切断出一个子链表（截取链表）
  let leftNode = pre.next;
  let curr = rightNode.next;

  // 注意：切断链接
  pre.next = null;
  rightNode.next = null;

  // 第 4 步：同第 206 题，反转链表的子区间
  reverseLinkedList(leftNode);

  // 第 5 步：接回到原来的链表中
  pre.next = rightNode;
  leftNode.next = curr;
  return dummyNode.next;
};

const reverseLinkedList = (head) => {
  let pre = null;
  let cur = head;

  while (cur) {
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
  }
}

console.log(start)
console.log(reverseBetween(start, 1, 5))
console.log(reverseBetween(start1, 1, 3))
