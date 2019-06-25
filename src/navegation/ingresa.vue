<template>
    <div>
        <transition name="slide-down">
                    <div 
                        class="singIn-cont" 
                        v-if="showAuth"
                        >
                        
                        <div class="auth-title">
                            <span>Ingresa</span>
                        </div>
                        <form >
                            <div class="inputs-container">
                                <div class="input-field">
                                    <input id="email" type="email" class="validate appInput">
                                    <label for="email">Email</label>
                                    <span class="helper-text" data-error="Erorr" data-success="Ok">introduce tu correo electronico</span>
                                </div>
                                <div class="input-field">
                                    <input id="password" type="password" class="validate appInput">
                                    <label for="password">Contraseña</label>
                                </div>
                                <div class="forgot-text">
                                    <span class="">Olvide mi Contraseña</span>
                                </div>
                            </div>
                            <div class='row'>
                                <div  class=' botonApp col s12 btn waves-effect'>Login</div>
                            </div>
                        </form>
                    </div>
                </transition>
    </div>
</template>

<script>
export default {
    props:[
        'showAuth'
    ],

    destroyed() {
        console.log("se destuyo todo, todo, todillo")
    },
}
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-down-enter-active {
    transition: all .3s ease;
}
.slide-down-leave-active {
    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-down-enter, .slide-down-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-20px);
    opacity: 0;
}
</style>
