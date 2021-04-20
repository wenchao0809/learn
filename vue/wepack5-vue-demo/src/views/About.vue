<template>
  <div class="about">about {{ fool.x }}</div>
  <div>{{ a[2] }}</div>
</template>

<script lang="ts">
  import { defineComponent, reactive, watchEffect, ref } from 'vue'
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
        return 'x' in fool
      })
      setTimeout(() => {
        a[2] = 100
        a.unshift(1)
        fool.x = 2
      }, 10000)
      const arr = ref([])

      watchEffect(() => {
        // console.log('Array: ', arr.value)
        console.log(fool.x)
        fool.x = 10
      })

      arr.value.push('test') // doesn't log

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
