const Koa = require('koa')
const { promises: fsPromise }  = require('fs')
const path = require('path')
const contentDisposition = require('content-disposition')

const app = new Koa()

app.use(async(ctx) => {
  // 测试inline图片
 if (ctx.url.includes('AerialTamul_ZH-CN3164679201_1920x1080.jpg')) {
  ctx.body =  await fsPromise.readFile(path.resolve(__dirname, '.', 'AerialTamul_ZH-CN3164679201_1920x1080.jpg'))
  // content-disposition 控制浏览器如何显示 如果是inline浏览器尝试打开文件直接显示， 如果是attachment浏览器会强制下载文件
  // 注意如果设置了inline也要设置正确的content-type才能正确显示
  ctx.set('content-disposition', contentDisposition('AerialTamul_ZH-CN3164679201_1920x1080.jpg', { type: 'inline' }))
  // ctx.type = path.extname('AerialTamul_ZH-CN3164679201_1920x1080.jpg')
 }
 // 测试filename*
 if ((decodeURIComponent(ctx.url)).includes('03月21日CZ6751的乘机凭证.pdf')) {
  ctx.body =  await fsPromise.readFile(path.resolve(__dirname, '.', '03月21日CZ6751的乘机凭证.pdf'))
  // content-disposition 控制浏览器如何显示 如果是inline浏览器尝试打开文件直接显示， 如果是attachment浏览器会强制下载文件
  // 注意如果设置了inline也要设置正确的content-type才能正确显示
  ctx.set('content-disposition', contentDisposition('03月21日CZ6751的乘机凭证.pdf', { type: 'inline' }))
  // ctx.type = path.extname('AerialTamul_ZH-CN3164679201_1920x1080.jpg')
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
})
app.listen(3000)