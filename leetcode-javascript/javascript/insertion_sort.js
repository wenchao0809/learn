/**
 * 
 * 从第一个元素开始，该元素可以认为已经被排序；
取出下一个元素，在已经排序的元素序列中从后向前扫描；
如果该元素（已排序）大于新元素，将该元素移到下一位置；
重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
将新元素插入到该位置后；
重复步骤2~5。
 */

/**
 * 
 * @param {number[]} nums 
 * @returns {number[]}
 */
function insertionSort(nums) {
  const l = nums.length
  for (let i = 1; i < l; i++) {
    for (let j = i; j > 0 && nums[j] < nums[j - 1]; j--)
      excha(nums, j, j - 1)
    // while(j >= 0) {
    //   if (nums[j] > value) {
    //     excha(nums,j, j+1)
    //     j--
    //   } else {
    //     nums[j + 1] = value
    //     break
    //   }
    // }
  }
  return nums
}

function excha(arr,i,j){
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}

let a = [2, 1, 6, 4, 3, 0, -1, -3]
insertionSort(a)
console.log(a)