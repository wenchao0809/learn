function solve( s ,  t ) {
  // write code here
  let rs = [...s].reverse(), rt = [...t].reverse(), rl = rs.length, tl = rt.length
  let r = [], curry = 0, i = 0, j = 0
  while(i < rl || j < tl) {
      if (i < rl) curry += Number(rs[i++])
      if (j < tl) curry += Number(rt[j++])
      r.push(curry % 10)
      curry = Math.floor(curry / 10)
  }
  if (curry) {
      r.push(curry)
  }
  return r.reverse().join('')
}

console.log(solve('1', '1'))