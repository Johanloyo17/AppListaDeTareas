<template>
	<div id="app" class="container jumbotron">
		<!-- title component -->
		<titulo :titulo="encabezado"></titulo>
		<new-tarea :tareas="tareas"></new-tarea>
	</div>


</template>

<script>
import newTarea from './Nueva-tarea'
import titulo from './title'
export default {
	// componentes 
	components:{
		titulo,
		newTarea
	},
	data() {
		return {
			encabezado:'App lista de tareas con Vue.js',
			tareas:[
				{
					texto:'Aprender Vue.js',
					terminada:false,
				},
				{
					texto:'Aprender Agular.js',
					terminada:false,
				},
				{
					texto:'Aprender Node',
					terminada:false,
				},
			]
		}
	},
}
</script>

<style>

</style>
