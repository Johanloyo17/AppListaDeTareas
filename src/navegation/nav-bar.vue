<template>
    <div>
        <nav class="nav-cont">
			<div class="nave nav-wrapper">
                <a href="#" class="brand-logo">
                </a>
                <div class="nave-logo">
                    <img src="../assets/saveNotes-logo.svg" alt="">
                </div>
                <ul id="nav-mobile" class="nave-menu right hide-on-med-and-down">
                    <li  @click="showAuth = !showAuth , componentId = 'signUp' " ><a >Sing up</a></li>
                    <li @click="showAuth = !showAuth , componentId = 'signIn' "><a>Sing in</a></li>
                    <!-- esta etiqueta evita que se destruya el componente cuando se cierre -->
                <transition name="slide-down">
                    <component class="singIn-cont" v-if="showAuth" :is="componentId"></component>
                </transition>
                    <!-- <sign-in></sign-in> -->
                </ul>
			</div>
		</nav>
    </div>
</template>

<script>

import formDiv from './dataForm/form-div'
import signIn from './dataForm/sign-in'
import signUp from './dataForm/sign-up'

export default {
    components:{
        formDiv: formDiv,
        signUp: signUp,
        signIn: signIn,
    },
    data() {
        return {
            showAuth : false,
            componentId: ""
        }
    },
    
}
</script>
<style>

</style>

