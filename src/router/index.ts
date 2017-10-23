import Vue from 'vue'
import VueRouter from 'vue-router'
import Counter from '../components/Counter.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Counter',
      props: [],
      component: Counter
    }
  ]
})
