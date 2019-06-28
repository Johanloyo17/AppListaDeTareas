<template>
    <div>
        <form-div>
            <div class="auth-title" slot="titulo">
                <span>Ingresa</span>
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

            <div class="forgot-text" slot="forgot-text">
                <span class="">Olvide mi Contraseña</span>
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
            boton:"ingresar"
        }
    },
}
</script>