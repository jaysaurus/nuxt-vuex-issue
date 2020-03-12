let _state = {
  bar: 'bar',
  foobar: 'foobar'
}

export default {
  state: () => (_state),
  getters: {
    bar: (s) => s.bar,
    foobar: (s) => s.foobar
  },
  mutations: {
    setBar (s, v) { s.bar = v },
    setFoobar (s, v) { s.foobar = v }
  },
  actions: {
    nuxtServerInit ({ commit }) {
      commit('foo/setFoobar', 'foo/foobar: UPDATED VIA SERVER INIT')
    },

    setBar ({ commit }, v) {
      commit('setBar', v)
    },

    setFoobar ({ commit }, v) {
      return new Promise((resolve, reject) => {
        try {
          setTimeout(function () { 
            resolve(commit('setFoobar', v))
          }, 500)
        } catch (e) {
          reject('failed')
        }
      })
    }
  }
}