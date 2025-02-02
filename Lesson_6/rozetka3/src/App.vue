<template>
  <start-page :products-list="productsList"/>
</template>

<script>
import StartPage from "./components/StartPage";
import { productsList } from "./constants/data_products";

export default {
	name: "App",
	components: {
  StartPage
  },
	data() {
		return {
			productsList
		}
	},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
p, h6{
	margin: 0;
}
</style>
