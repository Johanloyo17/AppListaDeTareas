<template>
    <div class="tareasTerminadas btn-flat waves-effect waves-green">
        <div class="   list-info list-info-buttom ">
            <span class=" text-darken-2">Tareas finalizadas: {{tareasTerminadas}}</span>
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
        bus.$on('terminoTarea',(numero) =>{
            this.tareasTerminadas = this.tareasTerminadas + numero
        })
    },
}
</script>