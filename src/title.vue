<template>
    <div>
        <span class="titulo white-text center-align ">{{titulo}}
            
        </span>
    <!-- <div class="list-info list-info-top  ">
            <span>Tareas por realizar:</span>
            <span class="rounded bg-info my-0 mx-2 px-2">{{contadorTareas}}</span>
		</div> -->
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

    },

    data() {
        return {
        
        }
    },
    // created() {
    //     bus.$on('actualizarContador' ,(numTareas)=> {
    //         this.contadorTareas = numTareas;
    //     })
    // },
}
</script>



