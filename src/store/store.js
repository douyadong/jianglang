import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: {},
    token: null,
    title: '',
    userDefaultActive: ''
  },
  getters:{
    breadListState() {
      return JSON.parse(sessionStorage.getItem('breadListStorage')) || [];
    }
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      localStorage.token = data
      state.token = data
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token')
      state.token = null
    },
    [types.TITLE]: (state, data) => {
      state.title = data
    },
    [types.BREADLISTMUTATION]:(getters,data) => {
      getters.breadListState=data;
      sessionStorage.setItem('breadListStorage',data);
    }
  }
})
