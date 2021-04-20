const map = new Map()

const proxy = new Proxy(map, {
  get(target, key, receiver) {
    console.log(key)
    return function(args) {
      return Reflect.get(target, key)
    }
  }
})
map.set('key', 1)
console.log(map.get('key'))
// proxy.set('key', 1)
// proxy.get('key')