<template>
    <div>
        <nav>
			<div class="nav-wrapper">
			<a href="#" class="brand-logo">
                <!-- <img 
                src="../asets/saveNotes-logo-01" alt=""> -->
            </a>
			<ul id="nav-mobile" class="right hide-on-med-and-down">
				<li  @click="showRegister = !showRegister"><a >Sing up</a></li>
				<li @click="showAuth = !showAuth"><a>Sing in</a></li>
                <!-- esta etiqueta evita que se destruya el componente cuando se cierre -->
                <keep-alive>
                    <ingresa :showAuth="showAuth"></ingresa>
                </keep-alive>
                
                
                
                <!-- <transition name="slide-down">
                    <div 
                        class="singIn-cont" 
                        v-if="showRegister"
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
                            </div>
                            
                        </form>
                    </div>
                </transition> -->
			</ul>
			</div>
		</nav>
    </div>
</template>

<script>

import ingresa from './ingresa'
export default {
    components:{
        ingresa,
    },
    data() {
        return {
            showAuth : true,
            showRegister : true,
        }
    },
    
}
</script>
<style>

</style>

