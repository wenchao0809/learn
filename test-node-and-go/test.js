const TOTAL = 1000000000

function sum() {
  let sum = 0
  for (let i  = 0; i < TOTAL; i++) {
    sum += i    
  }
  return sum
}
const start = Date.now()
console.log(sum())
console.log(sum())
console.log(sum())
console.log(sum())
const end = Date.now()

console.log((end - start) / 1000)