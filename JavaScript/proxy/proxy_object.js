const x = {
  x: 1,
  test: {
    z: 2,
    nest: {
      y: 3
    }
  }
}

const proxy = new Proxy(x, {
  set(target, key, value) {
    debugger
    return Reflect.set(target, key, value)
  }
})

proxy.test.z = 4