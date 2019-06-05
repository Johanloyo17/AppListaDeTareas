<template>
	<div id="app" class="app">
		<div class="containerAppTareas">

			<titulo :titulo="encabezado">
				<!-- title component -->
			</titulo>
			
			<div class="panelTareas">
				<new-tarea :tareas="tareas" v-on:sumarContador="contadorTareas++">
					<!-- ingresar tareas. input,boton "guardar t" -->
				</new-tarea>
				<div class="cont-contadores">
					<contador-tareas>
						<!-- contador de tareas -->
					</contador-tareas>
					<tareas-terminadas>
						<!-- tcontador de tareasTerminadas -->
					</tareas-terminadas>
				</div>
				<lista-tareas 
					:tareas="tareas" 
					:contarTareas="contarTareas" 
					v-on:restarContador="contadorTareas--" 
					v-on:numTareas="cantidadTareas = $event">
					<!-- lista tareas -->
				</lista-tareas>
			</div>
			
		</div>
		
	</div>


</template>

<script>
import titulo from './title'
import newTarea from './Nueva-tarea'
import contadorTareas from './comp-vue/contador-tareas'
import listaTareas from './Lista-tareas'
import tareasTerminadas from './comp-vue/tareas-terminadas'

export default {
	// componentes 
	components:{
		titulo,
		newTarea,
		listaTareas,
		contadorTareas,
		tareasTerminadas,
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
			
		}
	},
	methods :{
		//contando tareas
		// contarTareas(){
		// 	var numTareas = this.tareas.length
		// 	console.log(numTareas+" mierda")
		// }
	}
}
</script>

<style>

</style>
