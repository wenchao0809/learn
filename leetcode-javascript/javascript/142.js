
 // Definition for singly-linked list.
 function ListNode(val) {
    this.val = val;
    this.next = null;
 }
 

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || !head.next) return null
  const map = new Map()
  let node = head
  while (node) {
    if (map.get(node)) {
      return node
    }
    map.set(node, true)
    node = node.next
  }
  return null
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle2 = function(head) {
  if (!head || !head.next) return null
  let slow = head, fast = head
  while (fast) {
    if (!fast.next) {
      return null
    }
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      let ptr = head
      while (ptr !== slow) {
        ptr = ptr.next
        slow = slow.nex
      }
      return ptr
    }
  }
  return null
};
