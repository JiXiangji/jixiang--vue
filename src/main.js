import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"//从核心包中引入
Vue.prototype.$axios=axios
Vue.config.productionTip = false

new Vue({
  router,
  render: a => a(App)
}).$mount('#app')
