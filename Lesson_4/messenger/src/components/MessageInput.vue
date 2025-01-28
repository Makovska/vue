<template>
	<div class="input-container">
		<input v-model.trim.lazy="newMessage" type="text" placeholder="Message">
		<button @click="sendMessage">Send</button>

	</div>
</template>

<script>
	export default {
		name: 'MessageItem',
		data() {
			return {
				newMessage: null
			}
		},
		methods: {
			sendMessage() {
				this.$emit('sendMessage', this.newMessage)
				this.newMessage = null
			}
		},
	}
</script>

<style lang="css" scoped>
.input-container{
	display: flex;
	gap: 5px;
}
input{
	flex: 1 1 100%;
	padding: 5px;
}
</style>