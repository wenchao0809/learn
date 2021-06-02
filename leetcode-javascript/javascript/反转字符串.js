function solve( str ) {
  // write code here
  let i = 0, j = str.length - 1
  str = [...str]
   while(i < j) {
       swap(str, i++, j--)
  }
  return str.join('')
}
function swap(a, i, j) {
  [a[i], a[j]] = [a[j], a[i]]
}

console.log(solve('123'))