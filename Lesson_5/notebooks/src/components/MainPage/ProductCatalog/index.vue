<template>
	<div class="container">
		<product-card v-for="product in productsList" :key="product.id" :product="product" class="card" @addToCart="$emit('addToCart', $event)"/>
	</div>
</template>

<script>
import ProductCard from './ProductCard.vue'
	export default {
  components: { ProductCard },
		name: 'ProductCatalog',
		props: {
			productsList: {
				type: Array,
				default: ()=>[]
			},
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