<template>
    
    <div>

        
        <div class="app_tareas containerAppTareas text-light">
				<titulo :titulo="encabezado">
					<!-- title component -->
				</titulo>
				
				<div class="panelTareas">
					<new-tarea :tareas="tareas" v-on:sumarContador="contadorTareas++">
						<!-- ingresar tareas. input,boton "guardar t" -->
					</new-tarea>
					<div class="cont-contadores">
						
						<!-- contador de tareas -->
						<contador-tareas>
						</contador-tareas>
						
						<!-- tcontador de tareasTerminadas -->
						<tareas-terminadas>
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


    </div>
</template>


<script>
import titulo from './title'
import newTarea from './Nueva-tarea'
import contadorTareas from './comp-vue/contador-tareas'
import listaTareas from './Lista-tareas'
import tareasTerminadas from './comp-vue/tareas-terminadas'
export default {
    components:{
        titulo,
        newTarea,
        contadorTareas,
        listaTareas,
        tareasTerminadas,
    },
    data() {
        return {
            encabezado:'Lista de tareas',
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