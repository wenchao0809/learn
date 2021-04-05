function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var rotateRight = function(head, k) {
  if(!head) return head
  let count = 0
  let cur = head
    // 末端
  let pre = null
  while(cur) {
    count++
    pre = cur
    cur = cur.next
  }
  // 头节点位置
  let mod = k % count
  mod = count - mod
  cur = head
  if (mod === 0){
    return haed
  }
  // 连成一个环
  pre.next = head
  while(mod--) {
    pre = cur
    cur = cur.next
  }
  // 切开
  pre.next = null
  return cur
};
// head = [1,2,3,4,5]
// console.log(rotateRight(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 4))
console.log(rotateRight(new ListNode(1, null), 10))