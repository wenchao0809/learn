const Koa = require('koa')
const { promises: fsPromise }  = require('fs')
const path = require('path')
const contentDisposition = require('content-disposition')
const compress = require('koa-compress')

const app = new Koa()

app.use(async(ctx, next) => {
  await next()
  // ctx.length = Buffer.byteLength(ctx.body)
})
app.use(compress({
  threshold: 2048,
  gzip: {
    flush: require('zlib').constants.Z_SYNC_FLUSH
  },
  deflate: {
    flush: require('zlib').constants.Z_SYNC_FLUSH,
  },
  br: false // disable brotli
}))

app.use(async(ctx) => {
  // 测试inline图片
 if (ctx.url.includes('AerialTamul_ZH-CN3164679201_1920x1080.jpg')) {
  ctx.body =  await fsPromise.readFile(path.resolve(__dirname, '.', 'AerialTamul_ZH-CN3164679201_1920x1080.jpg'))
  // content-disposition 控制浏览器如何显示 如果是inline浏览器尝试打开文件直接显示， 如果是attachment浏览器会强制下载文件
  // 注意如果设置了inline也要设置正确的content-type才能正确显示
  ctx.set('content-disposition', contentDisposition('AerialTamul_ZH-CN3164679201_1920x1080.jpg', { type: 'inline' }))
  ctx.type = path.extname('AerialTamul_ZH-CN3164679201_1920x1080.jpg')
 }
 // 测试filename*
 if ((decodeURIComponent(ctx.url)).includes('progit_v2.1.52.pdf')) {
  // ctx.compress = true
  ctx.body =  await fsPromise.readFile(path.resolve(__dirname, '.', 'progit_v2.1.52.pdf'))
  // content-disposition 控制浏览器如何显示 如果是inline浏览器尝试打开文件直接显示， 如果是attachment浏览器会强制下载文件
  // 注意如果设置了inline也要设置正确的content-type才能正确显示
  ctx.set('content-disposition', contentDisposition('progit_v2.1.52.gz'))
  ctx.type = path.extname('progit_v2.1.52.pdf')
 }
  // 测试inline zip
 if (ctx.url.includes('diceng.zip')) {
  ctx.body =  await fsPromise.readFile(path.resolve(__dirname, '.', 'diceng.zip'))
  // content-disposition 控制浏览器如何显示 如果是inline浏览器尝试打开文件直接显示， 如果是attachment浏览器会强制下载文件
  // 注意如果设置了inline也要设置正确的content-type才能正确显示
  ctx.set('content-disposition', contentDisposition('diceng.zip', { type: 'inline' }))
  ctx.type = path.extname('diceng.zip')
 }
 // 测试koa redirect
 if (ctx.url.startsWith('/redirect')) {
   ctx.status = 307
   ctx.redirect('/test/redirect')
 }
  // 测试koa redirect back
  if (ctx.url.startsWith('/redirect/back')) {
    ctx.status = 307
    ctx.redirect('back')
  }
  // 测试koa redirect
  if (ctx.url.startsWith('/test/redirect')) {
   ctx.body = 'redirect'
  }
  if (ctx.url.startsWith('/headers')) {
   
    // ctx.res.write('123') 也会调用res.flushHeaders()方法
    ctx.type = 'json'
    console.log('header sent', ctx.headerSent)
    ctx.flushHeaders()
    console.log('header sent', ctx.headerSent)
    console.log('res header has content-type?',  ctx.has('content-type'))
  }
  // test error
  if (ctx.url.startsWith('/error')) {
    // ctx.throw('test error')
    ctx.assert(false, 400)
  }
})


app.listen(3001)