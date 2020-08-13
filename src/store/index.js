import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import getters from './getters'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [ persistedState() ], // vuex持久化 默认使用localStorage来固化数据
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user
  },
  getters
})
