/**
 * 
 * @param {number[]} a 
 * @returns {number[]}
 */
 function flat(a) {
  let r = []
  // dfs
  for (let item of a) {
    Array.isArray(item) ? r.push(...flat(item)) : r.push(item)
  }
  return r
}

console.log(flat([1, 2, [3, 4, [5, 6]]]))