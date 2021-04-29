// arguments.callee
const x = function z() {
  if (arguments[0] > 10) {
    return arguments.callee(--arguments[0]) 
  } else {
    return arguments[0]
  }
}

//
const inlineF = (function f(num) {
  return num > 10 ? f(--num) : num
})
// console.log(x(20)

console.log(inlineF(20))

