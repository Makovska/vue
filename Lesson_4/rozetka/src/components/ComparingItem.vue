<template>
	<div class="item">
		<a class="card__link" href="#" :title="product.name">
			<img class="item__img" :src="product.img[0]" :alt="product.name">
		</a>

	</div>
</template>

<script>
	export default {
		name:'ComparingItem',
		props: {
			product: {
				type: Object,
				required: true
			}
		},
	}
</script>

<style lang="css" scoped>
.item{
	position: relative;
	width: 80px;
	padding-bottom: 8%;
	overflow: hidden;
}
.item__img{
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
	top: 0;
	max-width: 100%;
	max-height: 100%;
	object-fit: cover;
}
</style>