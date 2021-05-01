// setTimeout(() => console.log('settimeout 1'), 0)
// setTimeout(() => console.log('settimeout 2'), 0)
// Promise.resolve().then(() => console.log('promise then'))
setTimeout(()=>{
  Promise.resolve().then(function() {
      console.log('promise1')
  })
  console.log('timer1')
}, 0)
// setTimeout(()=>{
//   console.log('timer2')
//   Promise.resolve().then(function() {
//       console.log('promise2')
//   })
// }, 0)
console.log('sync')
setImmediate(() => {
  console.log('set-immediate')
  setTimeout(() => console.log('time3'), 0)
  Promise.resolve().then(() => {
    console.log('promise 2')
  })
})