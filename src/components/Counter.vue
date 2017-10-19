<template>
  <div>
    Counter State = {{count}}
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
export default {
  name: 'Counter',
  computed: mapState([
    'count'
  ]),
  methods: {
    increment: function () {
      this.$store.dispatch('INCREMENT')
    },
    decrement: function () {
      this.$store.dispatch('DECREMENT')
    }
  }
}
</script>

<style scoped>
</style>
