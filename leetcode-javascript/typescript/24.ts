
 // Definition for singly-linked list.
 class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
    }
 }
 

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) return head
  let node : ListNode | null = head, newHead = head.next, pre = null
  while(node && node.next) {
    const temp = node.next
    if (pre) {
      pre.next = temp
    }
    node.next = node.next.next
    temp.next = node
    pre = node
    node = node.next
  }
  return newHead || head
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
console.log(swapPairs(head))
// console.log(swapPairs(null))
// console.log(swapPairs(new ListNode(1)))