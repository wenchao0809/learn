/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function(matrix, target) {
//   const m = matrix.length
//   if (m === 0) return false
//   const n = matrix[0].length
//   if (n === 0) return false
//   let i = 0
//   for (; i < m; i++) {
//     if (matrix[i][0] === target) return true
//     if (matrix[i][0] > target) {
//       break
//     }
//   }
//   i = i >  i : i - 1
//   for (let j = 0; j < n; j++) {
//     if (matrix[i][j] === target) return true
//   }
//   return false
// };

// console.log(searchMatrix([[2]], 3))

var searchMatrix2 = function(matrix, target) {
  const rowIndex = binarySearchFirstColumn(matrix, target);
  if (rowIndex < 0) {
      return false;
  }
  return binarySearchRow(matrix[rowIndex], target);
};

const binarySearchFirstColumn = (matrix, target) => {
  let low = -1, high = matrix.length - 1;
  while (low < high) {
      const mid = Math.floor((high - low + 1) / 2) + low;
      if (matrix[mid][0] <= target) {
          low = mid;
      } else {
          high = mid - 1;
      }
  }
  return low;
}

const binarySearchRow = (row, target) => {
  let low = 0, high = row.length - 1;
  while (low <= high) {
      const mid = Math.floor((high - low) / 2) + low;
      if (row[mid] == target) {
          return true;
      } else if (row[mid] > target) {
          high = mid - 1;
      } else {
          low = mid + 1;
      }
  }
  return false;
}
