<template>
    <div>
        <div>
            <slot name="titulo"></slot>
            
                    <slot name="password" ></slot>
                    <slot name="email" ></slot>
                    <slot></slot>
                    <slot></slot>
                    <slot></slot>
                    <slot name="forgot-text" ></slot>
                
                <slot name="boton"></slot>
        </div>
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            showAuth: true
        }
    },
    methods:{
    
    },
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
