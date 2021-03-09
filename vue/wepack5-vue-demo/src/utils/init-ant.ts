import { App } from 'vue'
import { Button } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export function initAntd(app: App) {
  app.use(Button)
}
