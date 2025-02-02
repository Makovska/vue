<template>
	<div class="start-page">
		<products-filters class="product-filter"
		v-model:sellersChecked.check="sellerFiltersChecked" 
		v-model:producersChecked.check="producerFiltersChecked"
		:seller-filters-list="sellerFiltersList"
		:producer-filters-list="producerFiltersList"/>
		
		<products-list :products-list="filteredProductsList" class="product-catalog"/>
	</div>
</template>

<script>
import ProductsFilters from './ProductsFilters.vue'
import ProductsList from './ProductsList'
	export default {
		name:'StartPage',
		components: { ProductsList, ProductsFilters },
		props: {
			productsList: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				sellerFiltersChecked: [],
				producerFiltersChecked: [],
			}
		},

		computed: {
			filteredProductsList() {
				let filteredList = this.productsList
				if(this.sellerFiltersChecked.length) filteredList = filteredList.filter(product => this.sellerFiltersChecked.includes(product.seller))
				if(this.producerFiltersChecked.length) filteredList = filteredList.filter(product => this.producerFiltersChecked.includes(product.producer))
				return filteredList
			},
			sellerFiltersList() {
				return Array.from(new Set(this.productsList.map((product) => product.seller)))
			},
			producerFiltersList() {
				return Array.from(new Set(this.productsList.map((product) => product.producer)))
			}
		},

	}
</script>

<style lang="css" scoped>
.start-page{
	margin: 0 auto;
	max-width: 1280px;
	display: flex;
	gap: 15px;
	justify-content: flex-start;
	padding: 15px;
}
.product-filter{
	flex: 0 0 10%;
}
.product-catalog{
	flex: 0 0 90%;
}
</style>