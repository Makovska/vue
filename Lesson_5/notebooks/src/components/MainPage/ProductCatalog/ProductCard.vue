<template>
	<div class="card">
		<a class="card__picture" :href="product.link">
			<img :src="product.imgSrc" alt="">
		</a>
		<div class="card__info">
			<a class="card__title" :href="product.link">{{product.title}}</a>
			<div class="price-container">
				<div class="price">
					<p  class="price__discount">Ваша економія: <span>{{product.discount}} ₴</span></p>
					<p  class="price__old-price">{{product.oldPrice}} ₴</p>
					<p  class="price__new-price">{{product.price}} ₴</p>
				</div>
				<green-button class="card__btn" @click="addToCart"/>
			</div>
		</div>

	</div>
</template>

<script>
import GreenButton from '../../GeneralComponents/GreenButton.vue'
	export default {
  components: { GreenButton },
		name: 'ProductCard',
		props: {
			product: {
				type: Object,
				default: ()=>({})
			},
		},
		methods: {
			addToCart() {
				this.$emit('addToCart', this.product)
			}
		},
	}
</script>

<style lang="css" scoped>
p{
	margin: 0;
}
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