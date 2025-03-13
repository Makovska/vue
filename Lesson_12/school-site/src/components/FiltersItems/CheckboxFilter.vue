<template>

		<div v-for="item in itemsList" :key="item.id" class="checkbox">

			<input v-model="idList" :value="item.id" :id="item.id" type="checkbox" >
			<label :for="item.id">{{item.title}}</label>

		</div>

		<button class="red-btn" :disabled="!isDataValid" @click="onChoose">{{btnTitle}}</button>

</template>

<script>
	export default {
		name: 'CheckboxFilter',

		props: {
			itemsList: {
				type: Array,
				default: ()=>[],
			},
			btnTitle: {
				type: String,
				required: true, 
			},
		},

		data() {
			return {
				idList: []
			}
		},

		computed: {
			isDataValid(){
				return !!this.idList.length
			}
		},

		methods: {
			onChoose() {
				this.$emit('choose', this.idList)
			}
		},
		
	}
</script>