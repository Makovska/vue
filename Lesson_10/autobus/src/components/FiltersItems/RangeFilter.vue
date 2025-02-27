<template>
	<label>{{title}} від
					<input type="number" min="0" :max="maxValue" 
					v-model.number.lazy="minValue">
				</label>
				<label>до
					<input type="number" :min="minValue" 
					v-model.number.lazy="maxValue">
				</label>
</template>

<script>
	export default {
		name: 'RangeFilter',

		props: {
			min: {
				type: Number,
				default: null,
			},
			max: {
				type: Number,
				default: null,
			},
			title: {
				type: String,
				required: true, 
			},
		},

		computed: {
			minValue: {
				get(){
					return this.min
				},
				set(newValue) {
					this.$emit('update:min', newValue)
				}
			},
			maxValue: {
				get(){
					return this.max
				},
				set(newValue) {
					this.$emit('update:max', newValue)
				}
			}
		},
	}
</script>