<template>
    <div class="row nuevaTarea">
        <div class="input-tareas input-field">
            <input 
                v-model="nuevaTarea" 
                type="text"
                @keyup.enter="guardarTarea"
                id="icon_prefix"  
                class="validate text-light"
            >
            <label for="icon_prefix">Agrega una tarea</label>
            <span class="saveBoton input-group-btn">
                <button @click="guardarTarea" class="btn-flat waves-effect waves-green text-lighten-5">Agregar</button>
            </span>
        </div>
    </div>
</template>
<script>
import {bus} from "../main"
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
                bus.actualizarContador(this.tareas.length)
                this.nuevaTarea = '';
                //enviado datos a firebase
                this.$http.post('tareas.json',{
                    texto: newText,
                    terminada: false
                }).then(r=> {
                    return r.json()
                }).then(rjason=> {
                    console.log(rjason)
                })
                //FIN enviado datos a firebase
            };
        }
    },
    created(){
        console.log("creado esta vaia")
    },
    computed:{
        // tareasComp (){
        //     return this.$http.get('tareas.json')
        //     .then(respuesta =>{
        //         return  respuesta.json();
        //     })
        //     .then(respuestaJson => {
        //         //siclo for por cada id llenar el array local tareas con el contenido de los id 
        //         for(let id in respuestaJson){
        //             this.tareas.push(respuestaJson[id]);
        //         }
        //     })
        // }
    },
    
    
    beforeCreate() {
        //llamado http a la api firebase al arreglo tareas retorna una promesa
        this.$http.get('tareas.json')
            .then(respuesta =>{
                return  respuesta.json();
            })
            .then(respuestaJson => {
                //siclo for por cada id llenar el array local tareas con el contenido de los id 
                for(let id in respuestaJson){
                    this.tareas.push(respuestaJson[id]);
                }
            })
    },
}
</script>