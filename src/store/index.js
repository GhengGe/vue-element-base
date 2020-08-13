import Vue from 'vue'
import Vuex from 'vuex'
import { IS_COLLAPSE, TAGS_LIST } from './mutation-types'
// 引入vuex 数据持久化插件
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false,
    tagsList: []// 打开的标签页个数,
  },
  mutations: {
    [IS_COLLAPSE] (state) {
      state.isCollapse = !state.isCollapse
    },
    [TAGS_LIST] (state, tags) {
      state.tagsList = tags
    }
  },
  actions: {},
  getters: {},
  plugins: [createPersistedState({
    reducer (val) {
      return {
      }
    }
  })]
})
