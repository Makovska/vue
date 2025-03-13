<template>

	<div class="container">
		<section>

			<div>
        User name
        <input v-model="userName" type="text" />
			</div>

			<div>
					Password
					<input v-model="userPassword" type="password" />
			</div>

			<button class="red-btn" :disabled="!isDataValid" @click="onLogin">Login</button>

		</section>
	</div>

</template>

<script>
	import { mapActions } from "vuex";
	export default {
		name:'LoginPage',

		data() {
			return {
				userName: null,
				userPassword: null
			}
		},

		computed: {
			isDataValid() {
				return this.userName && this.userPassword
			}
		},

		methods: {
			...mapActions('auth', ['setLogin']),
			onLogin() {
				this.setLogin(this.userName)
				if (this.$route.query.redirect)
                this.$router.push({
                    path: this.$route.query.redirect,
                })
            else this.$router.push({ name: 'home' })
			}
		},
	}
</script>