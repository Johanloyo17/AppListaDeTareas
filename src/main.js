import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'

import 'jquery' 
import './stylus/app.styl';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

// fire base con vue
import { rtdbPlugin } from 'vuefire'
Vue.use(rtdbPlugin)

//vue resourse para trabajar con llamados htttp
Vue.use(vueResource);

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
// FIN bus datos events N tareas

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

