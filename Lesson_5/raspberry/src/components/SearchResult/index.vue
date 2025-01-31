<template>
	<div class="search-result">
		<search-result-card v-for="product in productsList" :key="product.id" :product="product" class="result-card"/>
	</div>
</template>

<script>
import SearchResultCard from './SearchResultCard.vue'
	export default {
  components: { SearchResultCard },
		name: 'SearchResult',
		props: {
			productsList: {
				type: Array,
				default: ()=>[]
			},
		},
	}
</script>

<style lang="css" scoped>
.search-result{
	max-width: 600px;
	margin: 0 auto;
	display: flex;
	background: rgb(43, 42, 42);
	color: rgb(173, 173, 173);
}
.result-card{
	flex: 1 1 33%;
}
</style>