<template>
    <div class="contadorTareas hoverable btn-flat waves-effect waves-green text-light">
        <div class="list-info list-info-top  ">
            <span>Tareas por realizar:</span>
            <span class="rounded bg-info my-0 mx-2 px-2">{{contadorTareas}}</span>
		</div>
    </div>
</template>



<script>
import {bus} from '../main'
export default {
    data() {
        return {
            contadorTareas: 0
        }
    },
    
    created() {
        bus.$on('actualizarContador' ,(numTareas)=> {
            this.contadorTareas = numTareas;
        })
        
    },
}
</script>
