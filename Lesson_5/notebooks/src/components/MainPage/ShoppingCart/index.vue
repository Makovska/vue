<template>
	<div class="cart-container">

		<cart-item v-for="productInCart in productsInCartList" :key="productInCart.id" :product-in-cart="productInCart" 
		v-model="productInCart.quantity"
		@delete="$emit('delete', $event)"
		/>

		<div class="total-value">
			<span class="sum">{{totalValue}} ₴</span>
			<green-button :button-title="'Оформити замовлення'" class="btn"/>
		</div>

	</div>
</template>

<script>
import GreenButton from '../../GeneralComponents/GreenButton.vue'
import CartItem from './CartItem.vue'
	export default {
  components: { GreenButton, CartItem },
		name: 'ShoppingCart',
		props: {
			productsInCartList: {
				type: Array,
				default: ()=> []
			}
		},
		computed: {
			totalValue() {
				return this.productsInCartList.reduce((total, product)=> total + product.price * product.quantity,0) 
			}
		},
	}
</script>

<style lang="css" scoped>
.total-value{
	padding: 24px;
	display: flex;
	align-items: center;
	gap: 10px;
	background-color: #00a0461a;
	border: 1px solid #00a046;
	border-radius: 4px;
	align-self: flex-end;
	font-size: 20px;
}
.cart-container{
	margin-top: 24px;
	border: 1px solid #e9e9e9;
	border-radius: 8px;
	padding: 24px;
	display: flex;
	flex-direction: column;
	gap: 20px;
}
</style>