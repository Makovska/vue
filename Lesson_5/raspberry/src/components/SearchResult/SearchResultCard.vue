<template>
	<div class="card">
		<div class="card__picture">
			<img class="card__img" :src="product.imgSrc" :alt="product.description">
		</div>
		<div class="card__shop">
			<img class="card__shop-logo" :src="product.logo" :alt="product.description">
			<p class="card__shop-title">{{product.companyTitle}}</p>
			</div>
		<p class="card__product-description">{{product.description}}</p>
	</div>
</template>

<script>
	export default {
		name:'SearchResultCard',
		props: {
			product: {
				type: Object,
				default: ()=>({})
			},
		},
	}
</script>

<style lang="css" scoped>
p{
	margin: 0;
}
.card{
	padding: 10px;
}
.card__picture{
	width: 100%;
	padding-bottom: 90%;
	position: relative;
	border-radius: 20px;
	overflow: hidden;
}
.card__img{
	position: absolute;
	top: 0;
	left: 0;
	object-fit: cover;
	width: 100%;
	height: 100%;
}
.card__shop{
	display: flex;
	gap: 5px;
	align-items: center;
	margin-top: 5px;
	font-size: 12px;
}
.card__product-description{
	justify-self: flex-start;
	font-size: 14px;
}
</style>