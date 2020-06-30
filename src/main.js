import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import AlertCmp from './components/Shared/Alert'

Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBtLmmrw-kZCrhDckOrMcDb1S9z8_Jk_R4',
      authDomain: 'vue-meetup-f9789.firebaseio.com',
      databaseURL: 'https://vue-meetup-f9789.firebaseio.com/',
      projectId: 'vue-meetup-f9789',
    })

    this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')
