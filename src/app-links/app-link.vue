<template>
    
        <div class="app_liks  m0">
			<div class="card">
				<div class=" card-title center-align">
					<h4>Agrega un link</h4>
				</div>

				<div class=" card-content white-text bg-white">
					<form  class="text-dark input-field row"
					v-on:submit.prevent="addLink" >
						<div class="col s4  input-field">
							<input  
							v-model="newLink.title"
							class=" linkform validate" 
							type="text"  
							name="form">
							<label class=" " for="form ">titulo</label>
						</div>
						
						<div class="col s4  input-field">
							<input  
							v-model="newLink.autor"
							class=" linkform validate" 
							type="text"  
							name="form">
							<label class=" " for="form ">autor</label>
						</div>
						
						<div class="col s4  input-field">
							<input  
							v-model="newLink.link"
							class=" linkform validate" 
							type="text"  
							name="form">
							<label class=" " for="form ">link</label>
						</div>
						<div class="col s12" >
							<input type="submit" value="enviar datos" class=" btn waves-effect white-text">
						</div>
					</form>
					<div class=" collection lista">
						<div class="lista-head collection-item ">
							<span>Url</span>
							<span>Autor</span>
							<span>Accion</span>
						</div>
						<div class="collection-item lista-datos"
							v-for="link   in links"
						>
							<span> <a :href="link.link" target="_blank">{{link.title}}</a> </span>
							<span> {{link.autor}} </span>
							<div class="acciones ">
								<button class=" btn-floating  waves-effect waves-light red" @click="deleteLink(link)">X</button>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
</template>


<script>
import firebase from 'firebase'
import config from '../configDB'

//inicializando la firebase
let app = firebase.initializeApp(config);
//creando una variable para para tener acceso a esa base de datos 
let db = app.database();
//creando una clollecion de datos dentro de la base de datos 
// referencia a la collecion de datos esta coleccion sera links
let linksref = db.ref('links');

// FIN firebase

export default {
    data() {
        return {

            // firebase data
			links:[],
            newLink:{
                title:'',
                autor:'',
                link: '',
            },
        }
    },
    firebase: {
		links : linksref
    },
    methods: {
		addLink: function (){
			console.log(this.newLink)
			linksref.push(this.newLink)
			this.newLink.title = '';
			this.newLink.autor = '';
			this.newLink.link = '';
		},
		// deleteLink(link){
		// 	linksref.child(link['.key']).remove();
		// 	console.log("intentando borarr")
		// }
		deleteLink (link) {
			console.log("intentando borarr")
			linksref.child(link['.key']).remove();
		}

	},
}
</script>