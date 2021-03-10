import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'

export default defineComponent({
  setup(prop) {
    return () => {
      return <Button type="primary"></Button>
    }
  }
})