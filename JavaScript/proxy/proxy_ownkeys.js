class A {
  x = 1
  a() {}
}

class B extends A {
  y = 2
  b() {}
}

let a = new A()
let b = new B()

b.a()
console.log(b.hasOwnProperty('a'))
/**
 * Object.getOwnPropertyNames(proxy) 可以拦截 for in getOwnPropertyNames Object.keys()  Object.getOwnPropertySymbols(proxy)
 * 虽然可以拦截 for in 但是此时 要注意的是 Reflect.ownKeys(target)只会返回自由属性， 不会返回原型链继承的属性
 * 
 */

let proxy = new Proxy(a, {
  ownKeys(target) {
    console.log('proxy ownkeys target', target)
    return Reflect.ownKeys(target)
  }
 })

 let proxyb = new Proxy(b, {
  ownKeys(target) {
    console.log('proxy ownkeys target', target)
    return Reflect.ownKeys(target)
  }
 })




 for(let k in proxy) {
   console.log(proxy[k])
 }

 for(let k in proxyb) {
  console.log(proxyb[k])
}

//  console.log('object keys', Object.keys(proxyb))

//  console.log('getOwnPropertyNames keys', Object.getOwnPropertyNames(proxyb))
//  console.log(Object.getOwnPropertyNames(b))
//  console.log(b.hasOwnProperty('a'))
//  console.log('get')