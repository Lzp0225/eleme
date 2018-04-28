// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import mint from 'mint-ui'
import axios from 'axios'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import 'mint-ui/lib/style.css'
import './assets/css/style.css'

Vue.use(mint)
Vue.component('icon', Icon)
Vue.prototype.$http = axios


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render : h => h(App)
}).$mount("#app")
