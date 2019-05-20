<template>
    <div>
        <h2 class="display-4 my-3">{{titulo}}</h2>
    </div>
</template>




<script>
export default {
    props:{
        titulo:{
            //validaciones de las propiedades
            default: 'tareas',
            type: String,
        }
    },

    data() {
        return {
            
        }
    },
}
</script>
