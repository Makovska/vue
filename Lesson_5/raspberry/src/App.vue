<template>
	<search-result :products-list="productsList" />
</template>

<script>
import SearchResult from './components/SearchResult'
import { raspberryList } from './constants/2_data_raspberry';

export default {
	components: { SearchResult },
  name: 'App',
	computed: {
		productsList() {
			return raspberryList 
		}
	},
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
