// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
import Materialize from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

Vue.config.productionTip = false

// Vue.use(Vuetify)
Vue.use(Materialize)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
