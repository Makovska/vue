<template>
	<div class="start-page">
		<main-header/>
		<products-catalog :productsList="productsList" class="product-catalog"/>
	</div>
</template>

<script>
import MainHeader from './MainHeader.vue'
import ProductsCatalog from './ProductsCatalog.vue'
	export default {
  components: { MainHeader, ProductsCatalog },
		name:'StartPage',
		props: {
			productsList: {
				type: Array,
				required: true
			}
		},
	}
</script>

<style lang="css" scoped>
.product-catalog{
	margin: 10px auto;
}
</style>