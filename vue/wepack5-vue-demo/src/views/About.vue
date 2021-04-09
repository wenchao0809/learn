<template>
  <div class="about">about {{ fool.x }}</div>
  <div>{{ a[2] }}</div>
</template>

<script lang="ts">
  import { defineComponent, reactive, watchEffect  } from 'vue'
  export default defineComponent({
    name: 'About',
    components: {},
    setup() {
      const fool = reactive({ x: 1 })
      const a = reactive([1, 2, 3])
      // setTimeout(() => {
      //   delete fool.x
      // }, 10000);
      watchEffect(() => {
        debugger
        return 'x' in fool
      }) 
      setTimeout(() => {
        a[2] = 100
        a.unshift(1)
        fool.x = 2
      }, 10000);
      return {
        fool,
        a
      }
    }
  })
</script>

<style lang="scss">
  .about {
    color: aqua;
  }
</style>
