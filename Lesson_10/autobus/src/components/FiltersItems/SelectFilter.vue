<template>
	<label>{{title}}: 
		<select v-model="selectedItem">
			<option v-for="item in itemsList" :key="item.id" :value="item.id">{{item.itemValue}}</option>
		</select>
	</label>
</template>

<script>
	export default {
		name: 'SelectFilter',

		props: {
			modelValue: {
        type: Number
      },
			title: {
				type: String,
				required: true, 
			},
			itemsList: {
				type: Array,
				required: true, 
			}
		},

		computed: {
			selectedItem: {
				get(){
					return this.modelValue
				},
				set(newValue){
					this.$emit('update:modelValue', newValue)
				}
			}
		},
	}
</script>