
//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val;
   this.next = next || null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
  if (!head) return null
  let slow = head, fast = head
  let i = 1
  while(fast) {
    i > k && (slow = slow.next)
    fast = fast.next
    i++
  }
  return slow
};
const node = new ListNode(1, new ListNode(2, new ListNode(3)))
console.log(getKthFromEnd(node, 2))