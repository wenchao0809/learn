/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const factors = [2, 3, 5]
  const heap = new MiniHeap([1])
  const seen = new Map([[1, true]])
  let i = 0
  let mini
  while (i < n) {
    mini = heap.shift()
    ++i
    for (let f of factors) {
      const num = f * mini
      if (!seen.get(num)) {
        heap.insert(num)
        seen.set(num, true)
      }
    }
  }
  return mini
};

class MiniHeap {
  heap = []
  /**
   * 
   * @param {Number[]} nums 
   */
  constructor(nums) {
    if (nums.length > 0) {
      for (let i = 0; i < nums.length; i++) {
        this.insert(nums[i])
      }
    }
  }
  /**
   * 
   * @param {num} num 
   */
  insert(num) {
    const heap = this.heap
    heap.push(num)
    let n = this.heap.length - 1
    if (n >= 1) {
      while(n > 0) {
        const mid = Math.ceil(n / 2) - 1
        if (heap[n] < heap[mid]) {
          this.swap(mid, n)
          n = mid
        } else {
          break
        }
      }
    }
  }
  shift() {
    const heap = this.heap
    const mini = heap[0]
    heap[0] = heap[heap.length - 1]
    // 调整角度
    heap.length = heap.length - 1
    if (heap.length >= 2) {
      let n = 0
      while(true) {
        const right = 2 * (n + 1)
        const left = right - 1
        const compare = heap[left] !== undefined && heap[right]!== undefined && heap[left] >= heap[right] ? right  : left
        if (compare  <= heap.length - 1) {
          if (heap[n] > heap[compare]) {
            this.swap(n, compare)
            n = compare
          } else {
            break
          }
        } else {
          break
        }
      }
    }
    return mini
  }
  swap(i, j) {
    const heap = this.heap
    const temp = heap[i]
    heap[i] = heap[j]
    heap[j] = temp
  }
}

const heap = new MiniHeap([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
console.log(heap.heap)
console.log(heap.shift())
console.log(heap.shift())
console.log(heap.shift())
console.log(heap.insert(0))
console.log(heap.insert(2))
console.log(heap.insert(1))

// console.log(heap.heap)

console.log(nthUglyNumber(1))

console.log(nthUglyNumber(8))