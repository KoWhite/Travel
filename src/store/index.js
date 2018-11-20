import vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import mutations from './mutations'

Vue.use(vuex)

export default new vuex.Store({
    state,
    mutations,
})