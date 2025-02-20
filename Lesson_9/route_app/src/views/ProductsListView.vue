<template>
	<div class="products-list section">
			
		<div class="btn-wrap btn-wrap--left">
			<button class="green-btn" @click="toHomePage">Home</button>
			<button class="green-btn" @click="addNewProduct">Add new product</button>
		</div>

		<div class="cards cards--main-section">
			<div v-for="product in productsList" :key="product.id" class="card-wrap">
				<product-card :product="product" class="card"/>
				<div class="btn-wrap">
					<button @click="onEditProductCard(product.id)" class="green-btn green-btn--inverse">Edit</button>
					<button @click="onDeleteProduct(product.id)" class="green-btn green-btn--inverse">Delete</button>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import ProductCard from '../components/ProductCard.vue';
	import { mapGetters, mapActions } from "vuex";

	export default {
		components: { ProductCard },
		name: 'ProductsListView',

		computed: {
			...mapGetters(['productsInCategory']),
			categoryId() {
				return this.$route.params.categoryId
			},
			productsList(){
				return this.productsInCategory(this.categoryId)
			}
		},

		methods: {
			...mapActions(['deleteProduct']),
			toHomePage(){
				this.$router.push({name: 'home'})
			},
			addNewProduct(){
				this.$router.push({
					name: 'editProduct'
				})
			},
			onEditProductCard(productId){
				this.$router.push({
					name: 'editProduct',
					params: {productId}
				})
			},
			onDeleteProduct(productId){
				this.deleteProduct(productId)
			}
		},

	}
</script>

<style lang="css" scoped>
.btn-wrap{
padding: 0 16px 16px 16px;
display: flex;
gap: 10px;
justify-content: space-between;
}
.btn-wrap--left{
	justify-content: flex-start;
}
.green-btn{
	align-self: flex-start;
}
.green-btn--inverse{
	padding: 5px 10px;
	color: #00a046;
	background: #ffffff;
	align-self: center;
	flex: 0 0 30%;
}
.green-btn--inverse:hover{
	color: #ffffff;
	background: #00bc52;
}
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
.card-wrap{
	flex: 0 1 20%;
	border-bottom: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	}
.card{
	flex: 1 1 100%;
}
</style>