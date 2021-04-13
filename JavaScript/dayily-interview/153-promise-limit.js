export function promiseLimit(funcArray, limit = 5) {
  return new Promise((resolve) => {
    let i = limit
    const result = []
    const executing = []
    executing.concat(funcArray.slice(0, i).map(func => execFunc(func)))
    function execFunc(func) {
      const p = func()
      result.push(p)
      return p.then(() => executing.splice(executing.indexOf(p), 1))
    }
    Promise.race(executing).finally(() => {
      executing.push(execFunc(funcArray[i++]))
      if (i >= length) resolve(result)
    })
  })
}
