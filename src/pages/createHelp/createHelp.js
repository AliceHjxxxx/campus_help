import Vue from 'vue'
import createHelp from './createHelp.vue'
import axios from 'axios'

Vue.prototype.$axios = axios.create({
  baseURL: 'http://localhost:8888/'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(createHelp),
}).$mount('#createHelp')
