function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let count = 0, gi = 0, si = 0
  while(gi < g.length && si < s.length) {
    if(s[si] >= g[gi]) {
      ++count
      ++si
      ++gi
    } else {
      ++si
    }
  }
  return count
};

// console.log(findContentChildren([1,2,3], [1,2]))
console.log(findContentChildren([10,9,8,7], [5,6,7,8]))