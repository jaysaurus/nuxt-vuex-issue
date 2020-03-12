<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        {{ bar }}
      </h1>
      <h2 class="subtitle">
        {{ foobar }}
      </h2>
      <h2 class="subtitle">
        {{ localFoobar }}
      </h2>
      <div class="links">
        <button @click="updateLocalFoobar">
          update local foobar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Logo from '~/components/Logo.vue'
export default {
  async asyncData ({ store }) {
    return { localFoobar: store.getters.foobar }
  },
  computed: {
    ...mapGetters(['bar']),
    ...mapGetters('foo', ['foobar'])
  },
  components: {
    Logo
  },
  methods: {
    ...mapActions(['setBar', 'setFoobar']),
    async updateLocalFoobar () {
      await this.setFoobar('localFoobar: UPDATED VIA ASYNC_DATA')
      this.localFoobar = this.$store.state.foobar
    }
  },
  created () {
    this.setBar('bar: UPDATED VIA CREATED()')
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
