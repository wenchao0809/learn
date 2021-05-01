const connect = require('connect')

const app = connect()

app.use('/api', (req, res, next) => {
  console.log('/api')
  next()
})

app.use('/api/test', (req, res, next) => {
  console.log('/api/test')
  next()
})

app.listen(3000)