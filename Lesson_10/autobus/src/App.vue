<template>

		<header-component />

		<router-view />

		<footer-component />
		
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import { mapActions } from "vuex";
export default {
	components: {
		HeaderComponent,
		FooterComponent,
	},

	methods: {
		...mapActions('drivers',['loadDriversData']),
		...mapActions('buses', ['loadBusesData'])
	},

	created(){
		this.loadDriversData();
		this.loadBusesData();
	}
}
</script>

<style lang="scss">
@import './assets/styles';
#app{
	min-height: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
}
</style>
