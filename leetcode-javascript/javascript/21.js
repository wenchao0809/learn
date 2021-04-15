
//  Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const dumy = new ListNode(-101)
  node = dumy
  while(l1 || l2) {
    const temp
    if (l1 && (l1.val < l2.val || !l2)) {
      temp = l1
      l1 = l1.next
    } else {
      temp = l2
      l2 = l2.next
    }
    node.next = temp
    node = temp
  } 
  return dumy.next
};

console.log