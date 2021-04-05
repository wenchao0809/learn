let a = [1, 2]

p = new Proxy(a, {
  get(target, key, r) {
    debugger
    console.log('get')
    return Reflect.get(target, key, r)
  },
  set(target, key, v, r) {
    debugger
    Reflect.set(target, key, v, r)
  }
})

p.length = 4
console.log(p.length)
console.log(p[1])