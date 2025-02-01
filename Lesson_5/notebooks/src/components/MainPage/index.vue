<template>
	<div class="main-page-container">

		<product-catalog :products-list="productsList" 
		@addToCart="addToCart"/>

		<shopping-cart v-if="productsInCartList.length" :products-in-cartList="productsInCartList" 
		@delete="onDelete"/>
		
	</div>
</template>

<script>
import ProductCatalog from './ProductCatalog'
import ShoppingCart from './ShoppingCart'
	export default {
  components: { ProductCatalog, ShoppingCart },
		name: 'MainPage',
		props: {
			productsList: {
				type: Array,
				default: ()=>[]
			},
		},
		data() {
			return {
				productsInCartList: []
			}
		},

		methods: {
			addToCart(product) {
				let currentProduct = this.productsInCartList.find(pr=> pr.id === product.id)
				if(!currentProduct) this.productsInCartList.push({quantity: 1, ...product})
				else currentProduct.quantity+=1
			},
			onDelete(product){
				this.productsInCartList = this.productsInCartList.filter(pr=> pr.id !== product.id)
			},
		},
	}
</script>

<style lang="css" scoped>
.main-page-container{
	max-width: 600px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 20px;
}
</style>