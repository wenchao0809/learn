<template>
  <div class="demo">
    <h1>demo {{ testReactiveObject.x }}</h1>
    <img src="@/assets/images/feiji.png" />
    <TestComponent />
  </div>
</template>

<script lang="ts">
  import { defineComponent, watchEffect, computed, reactive } from 'vue'
  import { useStore } from 'vuex'
  import TestComponent from 'components/test.vue'

  export default defineComponent({
    name: 'Demo',
    components: {
      TestComponent
    },
    props: {
      test: String
    },
    setup() {
      let a = new Promise((resolve) => {
        resolve(1)
      })
      a.then((res) => console.log(res))
      const store = useStore()
      const id = computed(() => store.state.project.id)
      console.log(store.state.project)
      setTimeout(() => {
        store.commit('CHANGE_PROJECT', { id: 1 })
        testReactiveObject = reactive({ x: 2 })
      }, 3000)
      let testReactiveObject = reactive({ x: 1 })
      watchEffect(
        () => {
          console.log('watch effect id --->>>', id.value)
        },
        { onTrack(e) {}, onTrigger(e) {} }
      )
      return {
        id,
        store,
        testReactiveObject
      }
    }
  })
</script>

<style lang="css" scoped>
  .demo {
    color: red;
  }
</style>
