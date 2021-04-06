/**
 * 
 * @param {number[]} nums 
 * @returns {number[]}
 */
function bubleSort(nums) {
  const l = nums.length
  for (let i = 0; i < l - 1 ; i++) {
    for (let j = 0; j < l - i; j++) {
      if (nums[j] > nums[j+1]) excha(nums, j, j+1)
    }
  }
  return nums
}

function excha(arr,i,j){
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}

a = [2, 1, 6, 4, 3, 0, -1, -3]
bubleSort(a)
console.log(a)