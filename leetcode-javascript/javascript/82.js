
function ListNode(val, next) {
       this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
  }
  /**
   * 
   * @param {ListNode} head 
   */
var deleteDuplicates = function(head) {
  if (!head) return head
  let dummy = new ListNode(0, head)
  let cur = dummy

  while(cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      const val = cur.next.val
      while(cur.next && cur.next.val === val) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return dummy.next
};

let list = new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3)))))

// console.log(deleteDuplicates(list))/

console.log(deleteDuplicates(new ListNode(1, new ListNode(1))))