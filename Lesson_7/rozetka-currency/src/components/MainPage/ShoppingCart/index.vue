<template>
	<div class="cart-container">

		<cart-item v-for="productInCart in productsInCartList" :key="productInCart.id" :product-in-cart="productInCart" :currency-symbol="currentCurrency.symbol"
		/>

		<div class="total-value">
			<span class="sum">{{totalValue.toFixed(2)}} {{currentCurrency.symbol}}</span>
			<button class="green-btn">Оформити замовлення</button>
		</div>

	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartItem from './CartItem.vue'
	export default {
  components: { CartItem },
		name: 'ShoppingCart',
		computed: {
			...mapGetters(['productsInCartList', 'currentCurrency']),
			
			totalValue() {
				return this.productsInCartList.reduce((total, product)=> total + product.price * product.quantity, 0) 
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