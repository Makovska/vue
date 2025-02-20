<template>
	<div class="card">

		<a class="card__link" href="#">
			<span class="card__picture">
				<img class="card__img card__img--load" :src="product.img[0]" :alt="product.name">
				<img class="card__img card__img--hover" :src="product.img[1]" :alt="product.name">
			</span>
			<span class="card__title">{{product.name}}</span>
		</a>

		<button class="card__wishlist"><img src="@/assets/heart.svg" alt="Wishlist" width="24" height="24"></button>

		<button class="card__compare"><img src="@/assets/compare.svg" alt="Compare" width="24" height="24"></button>

		<p class="card__available" :class="{'card__available--not': !isProductAvailable}">{{product.availability}}</p>

		<div class="card__price">
			<p class="card__price-old">{{product.priceOld}} ₴</p>
			<div class="card__buy">
				<p class="card__price-new">{{product.priceNew}} ₴</p>
				<button v-if="isProductAvailable" class="card__basket"><img src="@/assets/basket.svg" alt="Basket" width="24" height="24"></button>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'ProductCard',
		props: {
			product: {
				type: Object,
				default: ()=>({})
			},
	},
	computed: {
			isProductAvailable() {
				return this.product.availability !== "Немає в наявності"
			}
		},
	}
</script>

<style lang="css" scoped>
p{
	margin: 0;
}
.card{
	position: relative;
	padding: 16px;
	text-align: left;
	display: flex;
	flex-direction: column;
}
.card__link{
	display: flex;
	flex-direction: column;
	text-decoration: none;
	margin-bottom: 4px;
	color: #221f1f;
	flex: 1 1 100%;
}
.card__picture{
	position: relative;
	width: 100%;
	padding-top: 66%;
	padding-bottom: 66%;
	overflow: hidden;
	margin-bottom: 8px;
}
.card__img{
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
	top: 0;
	max-width: 100%;
	max-height: 100%;
	object-fit: cover;
}
.card__img--load{
	opacity: 1;
	transition: 0.1s;
}
.card__img--hover{
	opacity: 0;
	transition: 0.1s;
}
.card__picture:hover .card__img--load{
	opacity: 0;
}
.card__picture:hover .card__img--hover{
	opacity: 1;
}
.card-title{
	display: block;
	height: 36px;
	margin-bottom: 8px;
	overflow: hidden;
	font-size: 14px;
	line-height: 20px;
}
.card__available{
	margin: 8px 0;
	font-size: 12px;
	color: #00a046;
}
.card__available--not{
	color: #797878;
}
.card__price-old{
	color: #797878;
	text-decoration: line-through;
	font-size: 14px;
	margin-bottom: 4px;
}
.card__buy{
	display: flex;
	justify-content: space-between;
	gap: 10px;
}
.card__price-new{
	color: #f84147;
	font-size: 24px;
}
button{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 32px;
	height: 32px;
	padding: 0;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}
.card__basket{
	background-color: #fff;	
}
.card__wishlist,
.card__compare{
	position: absolute;
	top: 0;
	right: 0;
	background-color: #ffffffb3;
	margin-bottom: 4px;	
}
.card__basket:hover{
	background-color:#f4faf6
}
.card__wishlist:hover,
.card__compare:hover{
	background-color:#ffffff
}
.card__compare{
	top: 36px;
	right: 0;
}
</style>