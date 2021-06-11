function singleNumber(nums: number[]): number {
  const l = nums.length
  nums = nums.sort((a, b) => a - b)
  let cur = nums[0], count = 1
  for (let i = 1; i < l; i++) {
    if (cur !== nums[i]) {
      if (count > 1)  {
        cur = nums[i]
        count = 1
        continue
      } else {
        break
      }
    }
    count++
  }
  return cur 
};