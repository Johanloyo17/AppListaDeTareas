<template>
    <div>
        <form-div>
            
            <div class="auth-title" slot="titulo">
                <span>Registrar</span>
            </div>
            
            <div class="names-cont" slot="nombres"> 
                <div class="input-field" >
                    <input id="nombre" type="text" class="validate appInput">
                    <label for="nombre">Nombre</label>
                </div>
                <div class="input-field"  >
                    <input id="apellido" type="text" class="validate appInput">
                    <label for="apellido">Apellido</label>
                </div>
            </div>

            <div class="input-field" slot="email">
                <input id="email" type="email" class="validate appInput">
                <label for="email">Email</label>
                <span class="helper-text" data-error="Erorr" data-success="Ok">introduce tu correo electronico</span>
            </div>
            <div class="input-field" slot="password">
                <input id="password" type="password" class="validate appInput">
                <label for="password">Contraseña</label>
            </div>
            
            <div class='row' slot="boton">
                <div class=' botonApp col s12 btn waves-effect'>{{ boton }}</div>
            </div>
        </form-div>
        

    </div>
</template>



<script>

import formDiv from'./form-div.vue'
export default {
    components:{
        formDiv: formDiv,
    },
    data() {
        return {
            boton:"Registrar"
        }
    },
}
</script>
