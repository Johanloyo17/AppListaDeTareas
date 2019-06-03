<template>
    <div>
        <h2 class="display-4 my-3 esto">{{titulo}}</h2>
        <div class=" my-2 font-weight-bolder">
            <span>Tareas por realizar:</span><span class="rounded bg-info my-0 mx-2 px-2">{{contadorTareas}}</span>
		</div>
    </div>
</template>




<script>
import {bus} from './main'
export default {
    props:{
        titulo:{
            //validaciones de las propiedades
            default: 'tareas',
            type: String,
        },
        // contadorTareas:{}
    },

    data() {
        return {
            contadorTareas:0
        }
    },
    created() {
        bus.$on('actualizarContador' ,(numTareas)=> {
            this.contadorTareas = numTareas;
        })
    },
}
</script>



