<template>
	<div id="app" class="container jumbotron">
		<!-- title component -->
		<titulo :titulo="encabezado"></titulo>
		<span class="bg-dark text-light p-1 m-2">{{contadorTareas}}</span>
		<!-- ingresar tareas -->
		<new-tarea :tareas="tareas"></new-tarea>
		<!-- lista tareas -->
		<lista-tareas :tareas="tareas"></lista-tareas>
		
	</div>


</template>

<script>
import newTarea from './Nueva-tarea'
import titulo from './title'
import listaTareas from './Lista-tareas'
export default {
	// componentes 
	components:{
		titulo,
		newTarea,
		listaTareas,
	},
	data() {
		return {
			contadorTareas:3 ,
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
