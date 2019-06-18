<template>
	<div id="app" class="app">
		<div class="containerAppTareas text-light">

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
	
		<div class="row m0">
			<div class="col s6 card blue-grey darken-1">
				<div class=" card-title  white-text">
					<h3>hola soy el titulo </h3>
				</div>
				<div class=" card-content white-text bg-white">
				
				<form  class="text-dark input-field row"
				v-on:submit.prevent="addLink" >
					<div class="col s4">
						<input  
						v-model="newLink.title"
						class=" linkform  white-text validate" 
						type="text"  
						name="form">
						<label class=" " for="form ">titulo</label>
					</div>
					
					<div class="col s4">
						<input  
						v-model="newLink.autor"
						class=" linkform  white-text validate" 
						type="text"  
						name="form">
						<label class=" " for="form ">autor</label>
					</div>

					<div class="col s4">
						<input  
						v-model="newLink.link"
						class=" linkform  white-text validate" 
						type="text"  
						name="form">
						<label class=" " for="form ">link</label>
					</div>
					<div class="col s12" >
						<input type="submit" value="enviar datos" class=" btn waves-effect white-text">
					</div>
				</form>

				</div>
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
import firebase from 'firebase'

// firebase
let config = {
	apiKey: "AIzaSyCqjXldtc6piD7OJ4033blH-neCMIWm2NU",
	authDomain: "appherramientas-512e2.firebaseapp.com",
	databaseURL: "https://appherramientas-512e2.firebaseio.com",
	projectId: "appherramientas-512e2",
	storageBucket: "appherramientas-512e2.appspot.com",
	messagingSenderId: "61001497921",
	appId: "1:61001497921:web:db7b5bf010e72cfc"
};

let app = firebase.initializeApp(config);
let db = app.database();
// referencia a la collecion de datos esta coleccion sera links
let linksref = db.ref('links');

// FIN firebase

export default {
	// componentes 
	components:{
		titulo,
		newTarea,
		listaTareas,
		contadorTareas,
		tareasTerminadas,
	},

	// pidiendole a vue que traiga los datos de fire base 
	firebase: {
		links : linksref
	},
	methods: {
		addLink: function (){
			console.log(this.newLink.title)
			
		}
	},

	data() {
		return {
			// firebase data
			newLink:{
				title:'',
				autor:'',
				link: '',
			},
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

<style>

</style>
