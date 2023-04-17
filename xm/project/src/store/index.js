import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import users from './modules/users'  //导入用户模块

const modules = {
  users                              //注册模块
}
export default new Vuex.Store({
  modules
})
