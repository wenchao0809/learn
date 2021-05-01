/**
 * 验证结论
 * super作为函数调用时，代表父类的构造函数
 * super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
 * 在 JavaScript高级编程第四版中有说super 只能在派生类构造函数和静态方法中使用。
 */
class Super {
  x = 1
  static testArray = [1]
  constructor() {
    debugger
  }
  static log(msg) {
    console.log('message', msg)
  }
  test(msg) {
    console.log('test message', msg)
  }
}

class Sub extends Super {
  y = 2
  static testArray = [3, 1]
  constructor() {
    super()
  }
  static testSuperOnClass() {
    super.log('test super on class')
  }
  testSuperOnInstance() {
    console.log(super.x)
    // super()
    super.test('test suepr on instance')
  }
}

class SubB extends Super {
  constructor() {
    super()
  }
}


Sub.testSuperOnClass()
console.log('sub test Array', Sub.testArray)
Sub.testArray.push(2)
console.log('sub test Array', Sub.testArray)

console.log('super test Array', SubB.testArray)
// const superInstance = new Super()
const sub = new Sub()
sub.testSuperOnInstance()
/**
 * ES6的继承链有三条
 * 一个是静态属性的继承也就是以父类自身为原型创建子类
 * 二是原型继承也就是Sub.prototype = Object.create(Super.prototype)
 * 另外还有一条隐藏的继承链是通过super()实现实例属性的继承的
 * 所以得出结论ES6的继承只不过是之前组合继承的语法糖
 */
 console.log(Super instanceof Function)
 console.log(Super.__proto__ === Function.prototype)
console.log(Sub.__proto__ === Super) // true
console.log(Sub.constructor.prototype === Sub.__proto__) // false 由此可见Sub.__proto__是在创建后修改的
console.log(sub.__proto__ === Sub.prototype)
// 也就是Sub.prototype = Object.create(Super.prototype)
console.log(Sub.prototype.__proto__ === Super.prototype)
console.log('sub has own property x?', sub.hasOwnProperty('x'))
// 方法存在于原型上
console.log(sub.hasOwnProperty('testSuperOnInstance'))

/**
 * ES5寄生组合式继承实现
 */

function Super() {
  this.x = 1
}

Super.testArray = [1]

Super.log =  function(msg) {
  console.log('message', msg)
}

Super.prototype.test = function(msg) {
  console.log('test message', msg)
}

function Sub() {
  // 盗用构造函数继承实例属性
  Super.apply(this)
  this.y = 2
}

// 继承静态属性
Sub.__proto__ = Super

Sub.testSuperOnClass = function() {
  super.log('test super on class')
}

// 原型继承实现方法的继承
var p = Object.create(Super.prototype)
p.constructor = Sub
p.testSuperOnInstance = function() {
  console.log(super.x)
  // super()
  super.test('test suepr on instance')
}
Sub.prototype = p
