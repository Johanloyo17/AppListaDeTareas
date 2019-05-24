<template>
	<div id="app" class="container jumbotron">
		<!-- title component -->
		<titulo :titulo="encabezado"></titulo>
		<div class="d-flex">
			<span class="bg-dark text-light p-1 m-2">{{contadorTareas}}</span>
			<!-- 
				
			 -->
		</div>

		<!-- ingresar tareas -->
		<new-tarea :tareas="tareas" v-on:sumarContador="contadorTareas++"></new-tarea>
		<!-- lista tareas -->
		<lista-tareas :tareas="tareas" v-on:restarContador="contadorTareas--" v-on:numTareas="cantidadTareas = $event"></lista-tareas>
		
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
			],
			contadorTareas:3 ,
			
		}
	},
}
</script>

<style>

</style>
