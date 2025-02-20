<template>
	<main-header/>
  <router-view />
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import { mapActions } from "vuex";
	export default {
  components: { MainHeader },

	methods: {
			...mapActions(['loadCategoriesData', 'loadProductsData'])
		},

		created () {
			this.loadCategoriesData();
			this.loadProductsData();
		},
	}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.green-btn{
	color: #fff;
	background-color: #00a046;
	font-size: 12px;
	border: 1px solid #00a046;
	border-radius: 8px;
	box-sizing: border-box;
	display: inline-block;
	margin: 0;
	outline: none;
	padding: 10px 16px;
	transition: 0.2s;
	cursor: pointer;
}
.green-btn:hover{
	background-color: #00bc52;
}
p{
	margin: 0;
}
.section{
	
	margin: 20px auto;
	max-width: 1280px;
}
</style>
