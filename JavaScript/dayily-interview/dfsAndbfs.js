/**
 * 
 * @typedef {Object} NodeType
 * @property {string}  value
 * @property {NodeType[]} children
 */

/**
 * 
 * @param {NodeType} node 
 * @returns 
 */
function dfsRecur(node) {
  let res = []
  res.push(node.value)
  if (node.children) {
    for (let item of node.children) {
      const children =  dfsRecur(item)
      Array.prototype.push.apply(res, children)
    }
  }
  return res
}

/**
 * 
 * @param {NodeType} node 
 * @returns 
 */
function dfs(node) {
  let stack = []
  stack.push(node)
  let res = []
  while(stack.length > 0) {
    const cur = stack.pop()
    const children = cur.children
    res.push(cur.value)
    if (children) {
      Array.prototype.push.apply(stack, children.slice(1).reverse())
      Array.prototype.push.apply(stack, children.slice(0, 1))
    }
  }
  return res
}


const tree = {
  value: 1,
  children: [
    {
      value: 3,
      children: [
        {
          value: 7
        }
      ]
    },
    {
      value: 2,
    },
    {
      value: 4,
      children: [
        {
          value: 5
        }
      ]
    }
  ]
}

console.log(dfs(tree))
console.log(dfsRecur(tree))
/**
 * 
 * @param {NodeType} node
 * @returns {Array<any>}
 */
function bfs(node) {
  const queue = []
  queue.push(node)
  const res = []
  while(queue.length > 0) {
    const cur = queue.shift()
    const children = cur.children
    res.push(cur.value)
    if (children) {
      Array.prototype.push.apply(queue, children)
    }
  }
  return res
}

console.log(bfs(tree))