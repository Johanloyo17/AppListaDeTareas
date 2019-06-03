import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './stylus/app.styl'

export var bus = new Vue();


new Vue({
  el: '#app',
  render: h => h(App)
})
