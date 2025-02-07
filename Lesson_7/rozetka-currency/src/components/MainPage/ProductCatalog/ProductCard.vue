<template>
	<div class="card">
		<a class="card__picture" :href="product.link">
			<img :src="product.imgSrc" alt="">
		</a>
		<div class="card__info">
			<a class="card__title" :href="product.link">{{product.title}}</a>
			<div class="price-container">
				<div class="price">
					<p  class="price__discount">Ваша економія: <span>{{product.discount.toFixed(2)}} {{currencySymbol}}</span></p>
					<p  class="price__old-price">{{product.oldPrice.toFixed(2)}} {{currencySymbol}}</p>
					<p  class="price__new-price">{{product.price.toFixed(2)}} {{currencySymbol}}</p>
				</div>
				<button class="green-btn" @click="addToCart(product.id)">Купити</button>
			</div>
		</div>

	</div>
</template>

<script>
import { mapActions } from "vuex";
	export default {
		name: 'ProductCard',
		props: {
			product: {
				type: Object,
				default: ()=>({})
			},
			currencySymbol: {
				type: String,
				default: ''
			},
		},
		methods: {
			...mapActions(['addToCart'])
		},
	}
</script>

<style lang="css" scoped>
.card{
	display: flex;
	gap: 15px;
	padding: 10px;
}
.card__picture{
	flex: 0 0 35%;
	padding-bottom: 30%;
	position: relative;
	align-self: center;
	}
	.card__picture img{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	object-fit: contain;
		}
	.card__info{
		width: 100%;
	}
.card__title{
	color: #3e77aa;
	font-size: 20px;
	text-decoration: none;
}
.card__title:hover{
	color: #f84147;
}
.price-container{
	display: flex;
	gap: 5px;
	justify-content: space-between;
	align-items: flex-end;
}
.price{
	display: flex;
	flex-direction: column;
	gap: 5px;
}
.price__discount{
	font-size: 12px;
	margin: 10px 0;
	}
	.price__discount span{
	color: #f84147;
	font-size: 14px;
		}
.price__old-price{
	color: #797878;
	text-decoration: line-through;
	font-size: 14px;
	}
.price__new-price{
	color: #f84147;
	font-size: 30px;
	}
</style>