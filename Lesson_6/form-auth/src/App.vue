<template>
<form-authorization
		v-model:name.empty="userName"
		v-model:age.adult="userAge" />
</template>

<script>
import FormAuthorization from './components/FormAuthorization.vue';

export default {
  name: "App",
	components: { FormAuthorization },

	data() {
		return {
			userName: null,
			userAge: null
		}
	},
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
