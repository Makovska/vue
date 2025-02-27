<template>
	<header class="header">
			<div class="container">

					<h2 class="header__title" href="#">Автопарк</h2>

					<nav class="menu">
						<router-link :to="{name: 'home'}" class="menu__item">Головна</router-link> |
						<router-link :to="{name: 'drivers'}" class="menu__item">Водії</router-link> |
						<router-link :to="{name: 'buses'}" class="menu__item">Автобуси</router-link> |
						<router-link :to="{name: 'assignment'}" class="menu__item">Призначення</router-link> |
						<router-link :to="{name: 'contacts'}" class="menu__item">Контакти</router-link>
					</nav>

			</div>
		</header>
</template>

<script>
	export default {
		name: 'HeaderComponent'
	}
</script>