function excha(arr,i,j){
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}

/**
 * 
 * @param {number[]} arr
 * @returns {number[]} 
 */
function shellSort(arr){
  const n = arr.length
  let h = 1
  while (h < Math.floor(n / 3)) h = 3 * h + 1
  while (h >= 1) {
    // h有续
    for (let i = h; i < n; i++) {
      for (let j = i; j >= h && arr[j] < a[j - h]; j -= h) {
        excha(arr, j, j -h)
      }
    }
    h = Math.floor(h / 3)
  }  
  return arr
}

a = [2, 1, 6, 4, 3]
shellSort(a)
console.log(a)