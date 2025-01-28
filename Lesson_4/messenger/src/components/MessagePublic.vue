<template>
	<div>
		<div class="board">
			<div v-if="messagesList.length" class="board__messages">
				<messages-view v-for="message in messagesList" :key="message.id" :message="message" @like="changeLikes" @dislike="changeLikes"/>
			</div>
		</div>
		<message-input @sendMessage="sendMessage" class="board__input"/>

	</div>
</template>

<script>
import MessageInput from './MessageInput.vue'
import MessagesView from './MessagesView.vue'
	export default {
		components: { MessageInput, MessagesView },
		name:'MessagePublic',

		data() {
			return {
				messagesList: []
			}
		},

		methods: {
			sendMessage(newMessage) {
				this.messagesList.push(
					{
						id: new Date().getTime(),
						text: newMessage,
						likes: 0,
					}
				)
				newMessage = null
			},
			changeLikes({id, num}){
				let currentMessage = this.messagesList.find(m=> m.id === id)
				currentMessage.likes+=num
			},
		},
	}
</script>

<style lang="css" scoped>
.board__messages{
	margin: 0 0 10px;
}
</style>