<template>
	<div class="container">
		<product-card v-for="product in productsList" :key="product.id" :product="product" :currency-symbol="currentCurrency.symbol" class="card" />
	</div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import { mapGetters } from "vuex";
	export default {
  components: { ProductCard },
		name: 'ProductCatalog',
		computed: {
			...mapGetters(['productsList', 'currentCurrency'])
		},
	}
</script>

<style lang="css" scoped>
.container{
	display: flex;
	flex-direction: column;
	gap: 10px;
	}
</style>