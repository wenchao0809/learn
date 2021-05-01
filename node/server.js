const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req)
  res.end('hello!!')
})
server.on('listening', () => {
  console.log('listening')
})
server.listen(3000)