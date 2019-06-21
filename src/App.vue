<template>
	<div id="app" class="app ">
		<div class="app_tareas containerAppTareas text-light">

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
					
					v-on:restarContador="contadorTareas--" 
					v-on:numTareas="cantidadTareas = $event">
					<!-- lista tareas -->
				</lista-tareas>
			</div>
			
		</div>
		
		<app-link></app-link>

		
	</div>


</template>

<script>
// app tareas
import titulo from './title'
import newTarea from './Nueva-tarea'
import contadorTareas from './comp-vue/contador-tareas'
import listaTareas from './Lista-tareas'
import tareasTerminadas from './comp-vue/tareas-terminadas'
// app links
import AppLink from'./app-links/app-link'


export default {
	// componentes 
	components:{
		titulo,
		newTarea,
		listaTareas,
		contadorTareas,
		tareasTerminadas,
		AppLink,
	},

	// pidiendole a vue que traiga los datos de fire base 
	//diciendole a vue que links se referencia en linksref asi lo tendremos disponible para usarlo en la vista
	
	methods: {
		
	},
	data() {
		return {
			// firebase data
			
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
	
}
</script>


