<template>
  <div>
    <h2 class="header"> {{titleText}} = {{count}} </h2>
    <div>
      <button class="button" @click="increment">Increment</button>
      <button class="button" @click="decrement">Decrement</button>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import {DECREMENT, INCREMENT, SET_INITIAL_COUNT} from '../store/store'

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
  .button {
    font-size: 24px;
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin: 0 20px;
  }

  .button:first-child {
    background-color: #43a88b;
  }

  .button:last-child {
        background-color: #c14157;
  }

  .header {
    font-size: 32px;
    color: #3d3d3d;
    font-weight: normal;
    margin-bottom: 40px;
  }

</style>
