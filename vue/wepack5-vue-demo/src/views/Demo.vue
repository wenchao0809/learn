<template>
<div class="demo">
  <h1>demo {{id}}</h1>
  <img src="@/assets/images/feiji.png" />
  <TestComponent></TestComponent>
</div>  
</template>

<script lang="ts">
import { defineComponent, watchEffect, computed } from "vue";
import { useStore } from 'vuex';
import TestComponent from 'components/test.vue'

export default defineComponent({
  name: "Demo",
  components: {
    TestComponent
  },
  setup() {
    let a = new Promise((resolve) => {  resolve(1) })
    a.then((res) => console.log(res))
    const store = useStore()
    const id = computed(() => store.state.project.id)
    console.log(store.state.project)
    setTimeout(() => {
      store.commit('CHANGE_PROJECT', { id: 1 })
    }, 3000)
    watchEffect(() => {
      console.log('watch effect id --->>>', id.value)
    }, { onTrack(e) {  }, onTrigger(e) {  } })
    return {
      id
    }
  }
});
</script>

<style lang="css" scoped>
.demo {
  color: red;
}
</style>