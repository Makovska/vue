<template>
	<div>
		<div>
			<label for="name">User name</label>
			<input v-model="userNameValue" id="name" type="text" :class="userNameClass">
		</div>
		<div>
			<label for="age">User age</label>
			<input v-model="userAgeValue" id="age" type="number" :class="userAgeClass">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'FormAuthorization',
		props: {
			name: {type: String},
			nameModifiers: {
				type: Object,
				default: ()=>({})},

			age: {type: Number},
			ageModifiers: {
				type: Object,
				default: ()=>({})},
		},

		computed: {
			userNameValue: {
				get(){
					return this.name
				},
				set(newValue){
					this.$emit('update:name', newValue)
					
				}
			},
			userAgeValue: {
				get(){
					return this.age
				},
				set(newValue){
					this.$emit('update:age', newValue)
					
				}
			},

			userNameClass() {
				let currentColorClass
				if(this.nameModifiers.empty && !this.name) currentColorClass = 'red-bg'
				return currentColorClass
			},
			userAgeClass() {
				let currentColorClass
				if(this.ageModifiers.adult && this.age !== null && (this.age >= 18)) currentColorClass = 'green-bg'
				else if(this.ageModifiers.adult && this.age !== null && (this.age < 18)) currentColorClass = 'red-bg'
				return currentColorClass
			}
		},
	}
</script>

<style lang="css" scoped>
.red-bg{
	background: red;
}
.green-bg{
	background: green;
}
.white-bg{
	background: white;
}
</style>