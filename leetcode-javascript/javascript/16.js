/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
 const l = nums.length
 nums.sort((a, b) => a - b)
 let sum, close = Number.MAX_SAFE_INTEGER
 function update(cur) {
   if (Math.abs(cur - target) < close) {
     close = Math.abs(cur - target)
     sum = cur
   }
 }
 for (let i = 0; i < l; i++) {
   // 相邻元素不能相等 相等会重复
   if (i > 0 && nums[i] === nums[i - 1]) continue
   // 每次重置k
   let j = i + 1, k = l - 1
   while (j < k) {
     // 相邻元素相等跳过
     if (j > i + 1 && nums[j] === nums[j - 1]) {
       j++
       continue
     }
     const cur = nums[i] + nums[j] + nums[k]
     update(cur)

     if (cur === target) {
       return target
     } else if (cur > target) {
       k--
     } else {
       j++
     }
   }
 }
 return sum
};

// console.log(threeSumClosest([-1,2,1,-4], 1))
// console.log(threeSumClosest([1,1,1,0], -100))
console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82))