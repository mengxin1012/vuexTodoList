import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$men=this
  },
  store,
  render: h => h(App),
}).$mount('#app')