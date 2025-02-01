<template>
	<div class="cart-item">
		
		<a class="cart-item__link" :href="productInCart.link">
			<span class="cart-item__picture">
				<img class="cart-item__img" :src="productInCart.imgSrc" alt="">
			</span>
				<span class="cart-item__title">{{productInCart.title}}</span>
		</a>
		
		<div class="cart-item__counter">
			<button class="cart-item__btn" :class="{'cart-item__btn--disabled': isMinQuantity}" :disabled="isMinQuantity" @click="onDecrement">-</button>
			<input v-model="quantityValue" class="cart-item__quantity" type="number" min=1>
			<button class="cart-item__btn" @click="onIncrement">+</button>
		
			<div class="cart-item__price">
				<p  class="price__old-price">{{productInCart.oldPrice * quantityValue}} ₴</p>
				<p  class="price__new-price">{{productInCart.price * quantityValue}} ₴</p>
			</div>
		</div>

		<div class="cart-item__delete" @click="onDelete">&#10060;</div>

	</div>
</template>

<script>
	export default {
		name: 'CartItem',
		props: {
			productInCart: {
				type: Object,
				default: ()=>({})
			},
			modelValue: {
				type: Number,
			},
		},

		methods: {
			onDecrement(){
				this.quantityValue--
			},
			onIncrement(){
				this.quantityValue++
			},
			onDelete(){
				this.$emit('delete', this.productInCart)
			}
		},

		computed: {
			isMinQuantity() {
				return this.productInCart.quantity === 1
			},
			quantityValue: {
					get() {
						return this.modelValue
					},
					set(newVal) {
						if(newVal<=0) newVal = 1
						this.$emit('update:modelValue', newVal)
					},
				},
		},

	}
</script>

<style lang="css" scoped>
.cart-item__delete{
	position: absolute;
	font-size: 12px;
	top: 0;
	right: 0;
	cursor: pointer;
}
.cart-item{
	color: #221f1f;
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: space-between;
	position: relative;
}
.cart-item:not(:first-child){
	border-top: 1px solid #e9e9e9;
	padding-top: 10px;
}
.cart-item__link{
	display: flex;
	justify-content: flex-start;
	gap: 10px;
	text-decoration: none;
}
.cart-item__picture{
	flex: 0 0 25%;
	padding-bottom: 10%;
	position: relative;
}
.cart-item__img{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	object-fit: contain;
}
.cart-item__title{
	color: #3e77aa;
	font-size: 14px;
}
.cart-item__title:hover{
	color: #f84147;
}
.cart-item__counter{
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
}
.cart-item__quantity{
		text-align: center;
		width: 56px;
		height: 40px;
		margin: 0 4px;
		background-color: #fff;
    box-sizing: border-box;
    padding-left: 12px;
    padding-right: 12px;
		font-size: 14px;
		border: 1px solid #d2d2d2;
    border-radius: 8px;
	}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.cart-item__btn{
	background-color: #ffffffe6;
	color: #3e77aa;
	font-size: 40px;
	line-height: 1;
	border: none;
	margin: 0;
	outline: none;
	cursor: pointer;
		}
.cart-item__btn--disabled{
	color: #d2d2d2;
	cursor: default;
}
.price__old-price{
	color: #797878;
	text-decoration: line-through;
	font-size: 12px;
}
.price__new-price{
	color: #f84147;
	font-size: 18px;
}
</style>