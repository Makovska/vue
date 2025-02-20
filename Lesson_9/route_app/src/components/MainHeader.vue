<template>
	<div class="header">
		<div class="header__container">
			<img class="header__title" src="https://content.rozetka.com.ua/mb_logo/image_site_light_theme/original/512372992.svg" alt="Logo">

			<nav>
				<router-link to="/" class="menu-item">Головна</router-link> |
				<router-link to="/shop" class="menu-item">Магазин</router-link> |
				<router-link to="/payments" class="menu-item">Правила оплати</router-link> |
				<router-link to="/contacts" class="menu-item">Контакти</router-link>
			</nav>

			<button class="header__compare"><img src="@/assets/compare.svg" alt="Compare" width="24" height="24"></button>
			<button class="header__basket"><img src="@/assets/basket.svg" alt="Basket" width="24" height="24"></button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MainHeader',
		
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
.header__currency{
	color: #a6a5a5;
	font-size: 20px;
	display: flex;
	gap: 10px;
	padding: 0 25px;
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
	background-color:#ffffff67
}
.header__currency-container{
	position: relative;
}
.header__choose-currency{
	position: absolute;
	top: 0;
	right: 100%;
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 2px 4px #00000040;
	padding: 8px 0;
}
.header__choose-currency button {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 120px;
	font-size: 14px;
	padding-left: 16px;
	padding-right: 16px;
	text-align: left;
	background-color: #ffffffe6;
	border-radius: 0;
}
.header__choose-currency button:hover {
	background-color: #dadada;
}
nav {
	padding: 10px;
	display: flex;
	gap: 20px;
}
.menu-item {
		font-weight: bold;
		color: #fff;
		text-decoration: none;
		text-transform: uppercase;
	}
.menu-item:hover {
	color: #f84147
}
</style>