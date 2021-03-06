import 'isomorphic-fetch'

import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

import router from '@/router'
import Layout from '@/Layout'

import audioStore from '@/Audio/store'
import sharedStore from '@/Shared/store'
import playlistsStore from '@/Tracks/store'

Vue.use(Vuex)
Vue.use(Vuetify, {
  theme: {
    black: '#202123',
    grey: '#2A2E33',
    teal: '#00D6F6'
  }
})

Vue.filter('toMB', value => (value / (1000 * 1000)).toFixed(2))

Vue.config.productionTip = true

new Vue({
  router,
  store: new Vuex.Store({
    modules: {
      audio: audioStore,
      playlists: playlistsStore,
      shared: sharedStore
    }
  }),
  render: h => h(Layout)
}).$mount('#app')
