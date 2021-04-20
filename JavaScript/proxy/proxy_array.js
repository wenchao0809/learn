const x = [1, 2, 3, 4, 5, 6]

let proxy = new Proxy(x, { set(target, key, value) {
  return Reflect.set(target, key, value)
} })

// proxy.unshift('121')

x.length = 2