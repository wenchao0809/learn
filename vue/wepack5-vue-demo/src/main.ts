import { createApp } from 'vue'
import { initAntd } from '@/utils/init-ant'
import App from './App1'
import router from './router'
import store from './store'
// import 'core-js/modules/es.symbol.js'
// import '@babel/polyfill'
const app = createApp(App)
initAntd(app)
app.use(store).use(router).mount('#app')
console.log(App.setup?.({}, {}))
