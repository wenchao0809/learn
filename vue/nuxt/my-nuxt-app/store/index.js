export const state = () => ({
  counter: 0,
  test: '',
  cookie: {}
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  changeTest(state, data) {
    state.test = data
  },
  changeCookie(state, data) {
    state.cookie = data
  }
}