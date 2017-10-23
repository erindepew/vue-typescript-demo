import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router'
import { createStore } from './store'

Vue.config.productionTip = false
Vue.use(Vuex)

const vm = new Vue({
  el: '#app',
  router,
  store: createStore(),
  render: h => h(App)
})
