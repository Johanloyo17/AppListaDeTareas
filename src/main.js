import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './stylus/app.styl';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

export var bus = new Vue();


new Vue({
  el: '#app',
  render: h => h(App)
})
