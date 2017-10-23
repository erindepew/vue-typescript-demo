<template>
  <div>
    {{titleText}} = {{count}}
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import {INCREMENT, DECREMENT, SET_INITIAL_COUNT} from '../store/store'

export default {
  name: 'Counter',
  computed: mapState([
    'count'
  ]),
  props: {
    initialCount: {
      required: false,
      default: 0,
      type: Number
    }
  },
  data: function () {
    return {
      titleText: 'Counter State'
    }
  },
  methods: {
    increment: function ():void {
      INCREMENT(this.$store)
    },
    decrement: function ():void {
      DECREMENT(this.$store)
    }
  },
  mounted ():void {
    SET_INITIAL_COUNT(this.$store, this.initialCount)
  }
}
</script>

<style scoped>
</style>
