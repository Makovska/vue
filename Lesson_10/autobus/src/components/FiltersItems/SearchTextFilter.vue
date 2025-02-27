<template>
	<label>{{title}}
		<input type="text" 
		v-model.trim.lazy="searchingText">
	</label>
</template>

<script>
	export default {
		name:'SearchTextFilter',

		props: {
			modelValue: {
        type: String,
        default: null,
      },
			title: {
				type: String,
				required: true, 
			},
		},

		computed: {
			searchingText:{
				get(){
          return this.modelValue
        },
        set(newVal){
          this.$emit('update:modelValue', newVal)
        }
			}
		},
	}
</script>