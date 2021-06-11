const c = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
]
function tenTo36(n: number) {
  if(n === 0) return '0'
  let s = ''
  while(n > 0) {
    s += c[n % 36]
    n = Math.floor(n / 36)
  }
  return [...s].reverse().join('')
}

console.log(tenTo36(121414))
console.log(tenTo36(36))

