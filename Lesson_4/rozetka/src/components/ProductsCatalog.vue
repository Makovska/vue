<template>
	<div class="products-catalog">
		<div class="all-products">
			<h2>Мобільні телефони</h2>
			<div class="cards cards--main-section">
				<product-card v-for="product in productsList" :key="product.id" :product="product" @view="addToViewedList" @compare="addToComparingList"/>
			</div>
		</div>

		<div v-if="viewedList.length" class="viewed-products">
			<h3>Останні переглянуті товари</h3>
			<div class="cards">
				<product-card v-for="product in viewedList" :key="product.id" :product="product" @view="addToViewedList" @compare="addToComparingList"/>
			</div>
		</div>

		<div v-if="comparingList.length" class="comparing-products">
			<h3>Списки порівнянь</h3>
			<p>Кількість товарів {{comparingList.length}}</p>
			<div class="items">
				<comparing-item v-for="product in comparingList" :key="product.id" :product="product"/>
			</div>
		</div>

	</div>
</template>

<script>
import ComparingItem from './ComparingItem.vue'
import ProductCard from './ProductCard.vue'
	export default {
  components: { ProductCard, ComparingItem },
		name: 'ProductsCatalog',
		props: {
			productsList: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				viewedList: [],
				comparingList: []
			}
		},
		methods: {
			addToViewedList(product) {
				let indexProductInViewedList = this.viewedList.findIndex(prEl=> prEl.id===product.id)
				if(indexProductInViewedList>=0) this.viewedList.splice(indexProductInViewedList, 1)
				this.viewedList = [product, ...this.viewedList]
				
				if(this.viewedList.length>5)this.viewedList.pop()
				console.log(this.viewedList);
			},
			addToComparingList(product){
				let productInComparingList = this.comparingList.some(prEl=> prEl.id===product.id)
				if(!productInComparingList) this.comparingList.push(product)
				
				console.log(this.comparingList);
			}
		},
	}
</script>

<style lang="css" scoped>
.products-catalog{
	max-width: 1280px;
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
    ProductCard