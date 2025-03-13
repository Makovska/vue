<template>
	<header class="header">
			<div class="container">

					<h2 class="header__title dancing-font" href="#">School</h2>

					<nav class="menu">
						<router-link :to="{name: 'home'}" class="menu__item">Home</router-link> |
						<router-link :to="{name: 'lessons'}" class="menu__item">Lessons</router-link> |
						<router-link :to="{name: 'teachers'}" class="menu__item">Teachers</router-link>
					</nav>

					<div class="menu">

						<button v-if="!login" :to="{name: 'login'}" class="menu__item" @click="onLogin">
							Login
						</button>

						<div v-else>
							<span class="menu__user-name dancing-font">{{login}}</span>
							<button :to="{name: 'login'}" class="menu__item" @click="outLogin">
								Logout
							</button>
						</div>

					</div>

			</div>
		</header>
</template>

<script>
	import { mapGetters } from "vuex";
	import { mapActions } from "vuex";
	export default {
		name: 'HeaderComponent',
		computed: {
			...mapGetters('auth', ['login']),
		},
		methods: {
			...mapActions('auth', ['removeLogin']),
			onLogin(){
				this.$router.push({
							name: 'login',
				});
			},
			outLogin(){
				this.removeLogin()
				this.$router.push({
							name: 'login',
				});
			}
		}
	}
</script>