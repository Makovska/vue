<template>
	<div class="message">
		<p class="message__text">{{message.text}}</p>
		<div  class="like-wrapper">
			<button @click="onLike" class="message__like">&#128077;</button>
			<p class="message__likes-count">{{message.likes}}</p>
			<button @click="onDislike" class="message__dislike">&#128078;</button>
		</div>
	</div>
</template>

<script>
	export default {
		name:'MessagesView',
		props: {
			message: {
				type: Object,
				required: true
			},
		},
			methods: {
				onLike() {
					this.$emit('like', { id: this.message.id, num: 1 })
				},
				onDislike() {
					this.$emit('dislike', { id: this.message.id, num: -1 })
				}
			},
	}
</script>

<style lang="css" scoped>
.message__text{
	background: rgba(128, 128, 128, 0.2);
	border: 1px solid rgba(128, 128, 128, 0.5);
	border-radius: 3px 10px 10px 10px;
	margin: 15px 0 0;
	padding: 5px;
	overflow: hidden;
}
.like-wrapper{
	display: flex;
	gap: 3px;
	align-items: center;
	margin: -5px 0 0 auto;
	text-align: center;
	justify-content: flex-end;
}
.message__likes-count{
	margin: 0;
	min-width: 30px;
	font-size: 14px;
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
</style>