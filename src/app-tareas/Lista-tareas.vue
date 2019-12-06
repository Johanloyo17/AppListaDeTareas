<template>
    <div>
        <!-- <div class="list-info list-info-top  ">
            <span>Tareas por realizar:</span>
            <span class="rounded bg-info my-0 mx-2 px-2">{{contadorTareas}}</span>
		</div> -->
        
        <ul class="tareaList collection  ">
            <li 
            v-for="(tarea, indice) of tareas" 
            class="tareaList-tarea collection-item avatar hoverable d-flex"
            :class="{terminada : tarea.terminada} ">
                <div class=" botonApp circle"></div>
                <span class="title">
                    {{tarea.texto}}
                </span>

                <div class="buttonsTarea ml-auto ">
                    <!-- boton listo -->
                    <button class="btn-floating waves-effect waves-light  botonApp"
                            @click="tarea.terminada = !tarea.terminada"
                        >Listo
                    </button>
                    
                    <!-- boton eliminar tarea -->
                    <button 
                            class="btn-floating  waves-effect  botonApp-red "
                            @click="deleteTarea(indice)"
                        >X
                    </button>
                </div>
            </li>
        </ul>

    </div>
</template>



<script>
    import {bus} from '../main'
    export default {
    
        props:['tareas',],
        data() {
            return {
                
            }
        },
        methods: {
            deleteTarea(indice){
                //borra un elemento, el que viene del indice
                this.tareas.splice(indice, 1);
                // datos para los contadores/ enviando a bus
                bus.actualizarContador(this.tareas.length); 
                bus.terminoTarea(1);
            }
        },

        beforeMount(){
            bus.actualizarContador(this.tareas.length); 
            // emite el evento justo antes de montar el componentes
        },
        updated(){
            bus.actualizarContador(this.tareas.length); 
        }


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
