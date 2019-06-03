<template>
    <div class="input-group">
        <input 
            placeholder="Escribe una nueva tarea"
            v-model="nuevaTarea" 
            type="text"
            class="form-control"
            @keyup.enter="guardarTarea"
            
        >
        <span class="input-group-btn">
            <button @click="guardarTarea" class="btn btn-primary">Agregar</button>
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
        bus.$emit('actualizarContador', this.tareas.length )
    },
}
</script>