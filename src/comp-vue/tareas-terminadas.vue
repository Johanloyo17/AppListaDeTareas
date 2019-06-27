<template>
    <div class="tareasTerminadas btn-flat waves-effect waves-green botonApp">
        <div class="   list-info list-info-buttom ">
            <span class=" ">Tareas finalizadas: {{tareasTerminadas}}</span>
        </div>
    </div>
</template>

<script>
import {bus} from '../main'
export default {
    data() {
        return {
            tareasTerminadas: 0,
        }
    },
    created() {

        bus.$on('terminoTarea',(cantidad) =>{
            this.tareasTerminadas = this.tareasTerminadas + cantidad
        })
    },
}
</script>