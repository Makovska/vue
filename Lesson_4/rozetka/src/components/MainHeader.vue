<template>
	<div class="header">
		<div class="header__container">
			<img class="header__title" src="https://content.rozetka.com.ua/mb_logo/image_site_light_theme/original/345645615.svg" alt="Logo">
			<button class="card__compare"><img src="../assets/compare.svg" alt="Compare" width="24" height="24"></button>
			<button class="card__basket"><img src="../assets/basket.svg" alt="Basket" width="24" height="24"></button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MainHeader'
	}
</script>

<style lang="css" scoped>
.header{
	background: #221f1f;
	color: #ffffff;
}
.header__container{
	display: flex;
	gap: 10px;
	margin: 0 auto;
	max-width: 1280px;
	padding: 10px 0;
}
.header__title{
	flex: 0 1 20%;
	margin: 0 auto 0 0;
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
	background-color: transparent
}
button:hover{
	background-color:#ffffffab
}
</style>