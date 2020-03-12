export default {
  state: () => ({
    foobar: 'foobar'
  }),
  getters: {
    foobar: (s) => s.foobar
  },
  mutations: {
    setFoobar (s, v) { s.foobar = v }
  },
  actions: {
    setFoobar ({ commit }, v) {
      commit('setFoobar', v)
    }
  }
}