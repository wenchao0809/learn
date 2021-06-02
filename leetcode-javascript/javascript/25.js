
 //Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }


/**
 * 
 * @param {ListNode} root 
 * @returns {ListNode} 
 */
 function reverseList(root) {
  let cur = root, pre = null
  while(cur) {
    const temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head) return head
  let newHead = null, pre = null, slow = head, fast = head, count = 1
  while(fast) {
    if (count === k) {
      const next = fast.next
      // 断开后续节点
      fast.next = null
      reverseList(slow)
      if (!newHead) newHead = fast
      if (pre) pre.next = fast
      pre = slow
      // 重置指针
      slow = fast = next
      count = 1
      continue
    }
    fast = fast.next
    ++count
  }
  if (count <= k && !fast) {
    // 连接上不足k未翻转的剩余节点
    if (pre) pre.next = slow
  }
  return newHead || head
};