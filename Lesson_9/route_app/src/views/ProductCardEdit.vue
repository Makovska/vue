<template>
	<div class="edit-card section">
		<h2>Дані про товар</h2>

		<label>Категорія товару: 
			<select v-model="productData.category">
				<option value="mobile-phones">Mobile phones</option>
				<option value="notebooks">Notebooks</option>
				<option value="electric-kettles">Electric kettles</option>
				<option value="champagne-and-wine">Champagne and sparkling wine</option>
			</select>
		</label>

		<label>Назва товару: 
			<input type="text" v-model="productData.name">
		</label>

		<label>Зображення: 
			<input type="text" v-model="productData.img">
		</label>

		<label>Нова ціна: 
			<input type="number" v-model="productData.priceNew">
		</label>

		<label>Попередня ціна: 
			<input type="number" v-model="productData.priceOld">
		</label>
		
		<label>Наявність: 
			<select v-model="productData.availability">
				<option value="Pre-order">Pre-order</option>
				<option value="Available">Available</option>
				<option value="Not available">Not available</option>
			</select>
		</label>

		<div class="btn-wrap">
			<button @click="onSave(productData.category)" class="green-btn">{{saveButtonTitle}}</button>
			<button v-if="productId" @click="onSaveAsNew(productData.category)" class="green-btn">Save as new product</button>
		</div>

	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
	export default {
		name: 'ProductCardEdit',
			data() {
				return {
					productData: {
						category: null,
						name: null,
						img: '',
						priceNew: null,
						priceOld: null,
						availability: null,
			}
		}
	},

	computed: {
		...mapGetters(['getProductById']),
		productId() {
				return this.$route.params.productId
			},
		saveButtonTitle(){
			return this.productId? 'Save': 'Add'
		}
	},

	methods: {
		...mapActions(['saveEditProduct', 'addNewProduct']),
		onSave(categoryId) {
			if(this.productId) this.saveEditProduct(this.productData)
			else this.addNewProduct(this.productData)
			this.$router.push({
				name: 'productsList',
				params: {categoryId}
				})
		},

		onSaveAsNew(categoryId) {
			this.addNewProduct(this.productData)
			this.$router.push({
				name: 'productsList',
				params: {categoryId}
				})
		},
	},

	created () {
		if(this.productId) this.productData = {...this.getProductById(this.productId)}
	},
	}
</script>

<style lang="css" scoped>
.edit-card{
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.green-btn{
	align-self: flex-start;
}
.btn-wrap{
padding: 0 16px 16px 16px;
display: flex;
gap: 10px;
}
</style>