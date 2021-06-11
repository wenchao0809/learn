// 扩展原始类型
interface String {
  a: string;
}

let a:string
// 报错 不能修改已经存在的类型
// type String = {}

type Test = {
  a: () => string;
}



// 联合类型
type stringandnumber = string | number;

let s: stringandnumber
s = '1'
s = 2
// 报错
// s = true

// 元组

type tuple = [string, number]
let t: tuple = ['1', 1]

// 使用typeof 获取实例类型赋值
type c = typeof t
let d: c = t
 console.log(11111)