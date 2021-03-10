import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'
import styled from 'vue3-styled-components'

export default defineComponent({
  setup() {
    return () => {
      const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
      `;
      return (
        <div class="app">
         <div class="app">
            webpack5-vue3.03
            <router-view />
          </div>
        </div>
      )
    }
  }
})