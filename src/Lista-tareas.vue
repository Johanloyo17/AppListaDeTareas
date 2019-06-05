<template>
    <div>
        <!-- <div class="list-info list-info-top  ">
            <span>Tareas por realizar:</span>
            <span class="rounded bg-info my-0 mx-2 px-2">{{contadorTareas}}</span>
		</div> -->
        <ul class="tareaList list-group">
            <li 
            v-for="(tarea, indice) of tareas" 
            class="tareaList-tarea tarea-div list-group-item d-flex"
            :class="{terminada : tarea.terminada} ">
                <span >
                    {{tarea.texto}}
                </span>

                <div class=" ml-auto ">
                    <!-- boton listo -->
                    <button class="btn-floating waves-effect waves-light btn-success "
                            @click="tarea.terminada = !tarea.terminada"
                        >Listo
                    </button>
                    
                    <!-- boton eliminar tarea -->
                    <button 
                            class="btn-floating btn-danger waves-effect waves-light "
                            @click="deleteTarea(indice)"
                        >X
                    </button>
                </div>
            </li>
        </ul>


    </div>
</template>



<script>
    import {bus} from './main'
    export default {
    
        props:['tareas',],
        data() {
            return {
                
            }
        },
        methods: {
            deleteTarea(indice){
                //borra un elemento, el que viene del indice
                this.tareas.splice(indice,1);
                // datos para los contadores
                bus.$emit('actualizarContador', this.tareas.length ); 
                bus.$emit('terminoTarea', 1)
            }
        },

        beforeMount(){
            bus.$emit('actualizarContador', this.tareas.length ); 
            // emite el evento justo antes de montar el componentes
        },

        mounted() {
            console.log("me cago en las tetas de la virgen montado ");
        },

        beforeUpdate: function () {
            console.log('Empieza un nuevo renderizado de component');
        },

        updated: function () {
            console.log('ya se renderizo updated');
        },
    }

</script>

<style>
    .terminada {
        color: #808080 !important;
    }
    .terminada span {
        text-decoration: line-through !important;
    }
</style>
