<template>
	<message-public class="public-container"/>
</template>

<script>
import MessagePublic from './components/MessagePublic.vue'
	export default {
		components: {MessagePublic},
		name: 'App',
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.public-container{
	max-width: 500px;
	margin: 0 auto;
}
</style>
