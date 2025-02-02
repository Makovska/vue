<template>
	<div class="products-list">

		<div class="cards cards--main-section">
			<product-card v-for="product in productsList" :key="product.id" :product="product" />
		</div>
		
	</div>
</template>

<script>
import ProductCard from './ProductCard.vue'
	export default {
		name: 'ProductsList',
		components: { ProductCard },
		props: {
			productsList: {
				type: Array,
				required: true
			}
		},
	}
</script>

<style lang="css" scoped>
.products-list{
	text-align: left;
	display: flex;
	flex-direction: column;
	gap: 20px;
}
h2{
	font-size: 36px;
	line-height: 42px;
}
.cards {
	display: flex;
	flex-wrap: wrap;
}
.cards--main-section{
	border-top: 1px solid #e9e9e9;
	border-left: 1px solid #e9e9e9;
}
.cards div{
	flex: 0 1 20%;
	border-bottom: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
	box-sizing: border-box;
}
.items{
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
}
</style>