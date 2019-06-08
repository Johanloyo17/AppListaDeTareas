import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './stylus/app.styl';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch() // This will kick of the initial replacement of i to svg tags and configure a MutationObserver

// bus datos events N tareas
export var bus = new Vue({
  methods:{
    actualizarContador(numTareas){
      this.$emit('actualizarContador' , numTareas)
    },
    terminoTarea(cantidad){
      this.$emit('terminoTarea', cantidad )
    }
  }
});
// font awesome vue

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
