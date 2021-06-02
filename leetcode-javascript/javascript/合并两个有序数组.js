function merge( A, m, B, n ) {
  // write code here
  let i = 0, j = 0
  while(i < m && j < n) {
      while (A[i] < B[j]) ++i
      if (i === 0) {
          A.unshift(B[j])
          i = 1
      } else {
          A.splice(i, 0, B[j])
      }
      ++j
  }
  if (j < n) {
     A.push.call(A, B.slice(j))
  }
}

console.log(merge([1], 1, [2], 1))