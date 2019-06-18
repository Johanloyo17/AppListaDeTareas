import Vue from 'vue'
import App from './App.vue'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './stylus/app.styl';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
// fire base con vue
// import vuefire from 'vuefire'
import { rtdbPlugin } from 'vuefire'

Vue.use(rtdbPlugin)


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

// llamado fire base


Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

