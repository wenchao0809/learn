function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * 
 * @param {ListNode} head 
 * @returns {ListNode}
 */
var deleteDuplicates = function(head) {
  let cur = head
  while(cur && cur.next) {
    if (cur.val === cur.next.val) {
      let val = cur.val
      while(cur.next && cur.next.val == val) {
        cur.next = cur.next.next
      }
    }
    cur = cur.next
  }
  return head
};


// var deleteDuplicates = function(head) {
//   if (!head) {
//       return head;
//   }

//   let cur = head;
//   while (cur.next) {
//       if (cur.val === cur.next.val) {
//           cur.next = cur.next.next;
//       } else {
//           cur = cur.next;
//       }
//   }
//   return head;
// };


let list = new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3)))))

// console.log(deleteDuplicates(list))
// console.log(deleteDuplicates(new ListNode(1, new ListNode(1))))
console.log(deleteDuplicates(new ListNode(2, new ListNode(1, new ListNode(1)))))