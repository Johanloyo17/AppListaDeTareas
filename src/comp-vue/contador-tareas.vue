<template>
    <div class="contadorTareas hoverable btn-flat waves-effect waves-green botonApp ">
        <div class="list-info list-info-top  ">
            <span>Tareas por realizar:</span>
            <span class="rounded ">{{contadorTareas}}</span>
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
