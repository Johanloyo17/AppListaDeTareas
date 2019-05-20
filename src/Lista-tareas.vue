<template>
    <ul class="list-group">
                <li 
                        v-for="(tarea, indice) of tareas" 
                        class="list-group-item d-flex"
                        :class="{terminada : tarea.terminada} ">
                    <span>
                        {{tarea.texto}}
                    </span>
                    <div class="ml-auto">
                        <button class="btn btn-sm btn-success "
                                @click="tarea.terminada = !tarea.terminada"
                            >Listo
                        </button>
                        <button 
                            class="btn btn-sm btn-danger"
                            @click="deleteTarea(indice)"
                            >X
                        </button>
                    </div>
                </li>
        </ul>
</template>



<script>
export default {
    
    props:['tareas'],

    methods: {
        deleteTarea(indice){
            //borra un elemento, el que vienedel indice
            //borra 1 elemento
            this.tareas.splice(indice,1)
        }
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
