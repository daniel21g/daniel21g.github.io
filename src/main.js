import Vue from 'vue'
import App from './App.vue' 
import axios from 'axios'

import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/font-awesome/css/font-awesome.min.css'
import './assets/vendor/devicons/css/devicons.min.css'
import './assets/vendor/simple-line-icons/css/simple-line-icons.css'
import './assets/css/resume.min.css'

//import './assets/vendor/jquery/jquery.min'
//import jQuery from 'jquery'
//window.jQuery=JQuery$
//window.jQuery=jQuery$
//import './assets/vendor/bootstrap/js/bootstrap.bundle'
//import './assets/vendor/jquery-easing/jquery.easing.min'
//import './assets/js/resume.min'
//import './assets/vendor/jquery/jquery.min'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
