<template>
	<div id="app" class="container jumbotron">
		<!-- title component -->
		<titulo :titulo="encabezado"
				
		></titulo>
		

		<!-- ingresar tareas. input,boton "guardar t" -->
		<new-tarea :tareas="tareas" v-on:sumarContador="contadorTareas++"></new-tarea>
		<!-- lista tareas -->
		<lista-tareas :tareas="tareas" :contarTareas="contarTareas" v-on:restarContador="contadorTareas--" v-on:numTareas="cantidadTareas = $event"></lista-tareas>
		
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
			// contadorTareas: 3 ,
		}
	},
	methods :{
		contarTareas(){
			var numTareas = this.tareas.length
			console.log(numTareas+" mierda")
		}
	}
}
</script>

<style>

</style>
