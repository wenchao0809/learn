<template>
  <div class="about">about {{ fool.x }}</div>
  <div>{{ a[0] }}</div>
  <p v-for="n in a" :key="n.a">{{ n.a }}</p>
</template>

<script lang="ts">
  import { defineComponent, reactive, watchEffect, ref, watch } from 'vue'
  export default defineComponent({
    name: 'About',
    components: {},
    setup() {
      const a = reactive([{ a: 1 }, { a: 2 }])
      watch(
        () => a[0].a,
        (value) => {
          console.log(value)
        }
      )

      const fool = reactive({ x: 1 })

      // setTimeout(() => {
      //   delete fool.x
      // }, 10000);
      watchEffect(() => {
        return 'x' in fool
      })
      setTimeout(() => {
        a[0].a = 100
        // a.unshift(1)
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
