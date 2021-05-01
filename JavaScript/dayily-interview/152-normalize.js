/**
 * 字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
 * 示例一: 'abc' --> {value: 'abc'}
 * 示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}
 * 递归版本
 * @param {string} str 
 */
function normalizeRecur(str) {
  const matchRe = /^\[.*\]$/
  const valueRe = /^\[([^\[\]]*)/
  let root = {}
  if (matchRe.test(str)) {
    root.value = str.match(valueRe)[1]
    root.children = normalize(str.slice(1 + root.value.length, str.length - 1))
  } else if (str.length > 0) {
    root.value = str
  } else {
    root = undefined
  }
  return root
}
/**
 * @param {string} str 
 */
function normalize(str) {
  const stack = []
  const  startRe = /^\[/
  const endRe = /^\]/
  const valueRe = /^\[([^\[\]]*)/
  let root
  let parent
  while(str) {
    if(startRe.test(str)) {
      let valueMatch = str.match(valueRe)
      let cur = {}
      root = root || cur
      if (parent) parent.children = cur
      cur.value = valueMatch[1]
      stack.push(cur)``
      parent = cur
      str = str.slice(valueMatch[0].length)
    } else if (endRe.test(str)) {
      str = str.slice(1)
      stack.pop()
    }
  }
  return root
}
console.log(normalize('[a[b[jj[jfdj]]]]'))