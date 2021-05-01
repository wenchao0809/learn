function printCallStack() {
  let cur = arguments.callee.caller
  while(cur) {
    let arguments = cur.arguments
    arguments = Array.from(arguments)
    arguments = JSON.stringify(arguments)
    arguments = arguments.substring(1, arguments.length - 1)
    console.log(`${cur.name}(${arguments})`)
    cur = cur.caller
  }
}

function a(a) {
  printCallStack()
}

const d = function () {
  a(1, [1, 2, 3], { b: 1})
}

const z = d

function main() {
  z()
}
main()



