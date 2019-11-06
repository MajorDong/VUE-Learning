import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

//创建状态仓库
var store = new Vuex.Store({
  state:{
    num: 79
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
