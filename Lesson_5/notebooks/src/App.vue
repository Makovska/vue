<template>
	<main-page :products-list="productsList"/>
</template>

<script>
import { notebooksList } from "./constants/3_data_notebooks";
import MainPage from "./components/MainPage";

export default {
	components: { MainPage },
  name: 'App',
	computed: {
		productsList() {
			return notebooksList
		}
	},
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
p{
	margin: 0;
}
</style>
