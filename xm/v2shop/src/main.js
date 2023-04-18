import Vue from 'vue'
import App from './App.vue'
import './utils/request'
import './utils/element'
import store from './store'             //-----------------引入部分
import router from './router'           //--引入路由实例
Vue.config.productionTip = false
// import "tailwindcss/tailwind.css"

new Vue({
  store,                                //-----------------注册部分
  router,                               //--注册路由实例
  render: h => h(App),
}).$mount('#app')
