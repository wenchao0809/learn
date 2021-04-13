// function intersection(...args) {
//   if (args.length === 1) return args[0]
//   if (args.length == 2) return [...new Set(args[0].filter(item => args[1].indexOf(item) !== -1))]
//   const mid = Math.floor(args.length / 2)
//   const left = intersection.apply(null, args.slice(0, mid))
//   const right = intersection.apply(null, args.slice(mid))
//   return intersection.apply(null, [left, right])
// }

// console.log(intersection([1, 1, 1, 1, 1, 2, 9, 3], [43, 1, 3, 8, 2], [3, 3, 3, , 1, 2, 4, 1, 2]))

function intersection2(...args) {
  let caches = args.map(() => [])
  let length = args[0].length
  let argLength = args.length
  let othLength = argLength
  let array = args[0]
  const seen = caches[0]
  let result = []
  let index = -1
  outer:
  while(++index < length) {
    const value = array[index]
    if (!(seen.includes(value) || result.includes(value))) {
      othLength = argLength
      while(--othLength > 0) {
        if (!args[othLength].includes(value)) {
          continue outer
        }
      }
      if (seen) {
        seen.push(value)
      }
      result.push(value)
    }
  }
  return result
}

console.log(intersection2([1, 1, 1, 1, 1, 2, 9, 3], [43, 1, 3, 8, 2, 9], [3, 3, 3, , 1, 9, 2, 4, 1, 2]))
