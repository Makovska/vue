<template>

  <header-component/>

	<main>
		<router-view />
	</main>

	<footer-component/>

</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
		components: {
		HeaderComponent,
		FooterComponent
	},
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