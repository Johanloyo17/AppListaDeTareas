<template>
	
	<div id="app" class="">
		<nav-bar></nav-bar>
		
		<!-- app container -->
		<div class="app">
			
			<app-tareas></app-tareas>
			<app-link></app-link>
		</div>

		
	</div>


</template>

<script>
import appTareas from './app-tareas/app-tareas'
// app links
import AppLink from'./app-links/app-link'
// nav bar
import navBar from './navegation/nav-bar'


export default {
	// componentes 
	components:{
		appTareas,
		AppLink,
		navBar,
	},
	methods: {
		
	},
	data() {
		return {
			
		}
	},
	
}
</script>


