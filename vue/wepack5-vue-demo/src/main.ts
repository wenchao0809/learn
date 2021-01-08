import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import 'core-js/modules/es.symbol.js'
// import '@babel/polyfill'
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
