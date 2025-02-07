<template>
	<div class="main-page-container">

		<product-catalog />

		<shopping-cart v-if="productsInCartList.length" />
		
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCatalog from './ProductCatalog'
import ShoppingCart from './ShoppingCart'
	export default {
  components: { ProductCatalog, ShoppingCart },
		name: 'MainPage',
		computed: {
			...mapGetters(['productsInCartList', 'currencySymbol'])}
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