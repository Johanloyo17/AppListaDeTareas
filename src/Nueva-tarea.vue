<template>
    <div class="row nuevaTarea">
        <div class="input-tareas input-field">
            <input 
                v-model="nuevaTarea" 
                type="text"
                @keyup.enter="guardarTarea"
                id="icon_prefix"  
                class="validate"
            >

            <label for="icon_prefix">First Name</label>
        </div>
        <span class="saveBoton input-group-btn">
            <button @click="guardarTarea" class="btn-flat waves-effect waves-green">Agregar</button>
        </span>
    </div>
</template>
<script>
import {bus} from "./main"
export default {
    props:['tareas'] , 
    data() {
        return {
            nuevaTarea:'',
        }
    },
    methods: {
        guardarTarea(){
            var newText = this.nuevaTarea.trim();
            if (newText) {
                this.tareas.push({
                        texto: newText,
                        terminada:false,
                })
                // this.$emit("sumarContador",1)
                bus.$emit('actualizarContador', this.tareas.length )
                
            };
                this.nuevaTarea = ''
        }
    },
    created() {
        bus.$emit('actualizarContador', this.tareas.length );
        
    },
}
</script>