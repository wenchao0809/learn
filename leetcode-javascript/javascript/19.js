
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
 let slow = head, pre = null, fast = head, count = 0
 while (fast) {
   if (count === n) {
     pre = slow
     slow = slow.next
   }
   fast = fast.next
   if (count < n) count++
 }
 if (!pre) {
     // 只有一个节点的情况
   return slow.next
 }
 pre.next = slow.next
 return head
};