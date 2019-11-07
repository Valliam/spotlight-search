import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import wantTosearch from './modules/wantToSearch'
import getters from './getters'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(Vuex)
Vue.use(mavonEditor)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission,
  },
  getters
})

export default store
