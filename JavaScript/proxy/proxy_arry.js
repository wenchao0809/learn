const x = [3, 1, 2]

const proxy = new Proxy(x, {
  get(target, key) {
    debugger
    return Reflect.get(target, key)
  },
  set(target, key, value) {
    return Reflect.set(target, key, value)
  }
})

proxy.includes(1)