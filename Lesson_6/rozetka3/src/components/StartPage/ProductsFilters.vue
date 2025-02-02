<template>
	<div class="filter-container">

		<div class="filter-section sellers" :class="addGreenBorderSellers">
			<h6>Продавці</h6>
				<div v-for="(seller, ind) in sellerFiltersList" :key="seller+ind" class="checkbox">
					<input v-model="sellerFilterData" type="checkbox" :value="seller" :id="seller+ind" >
					<label :for="seller+ind">{{seller}}</label>
				</div>
		</div>

		<div class="filter-section producers"  :class="addGreenBorderProducers">
			<h6>Виробники</h6>
			<div v-for="(producer, ind) in producerFiltersList" :key="producer+ind" class="checkbox">
				<input v-model="producerFilterData" type="checkbox" :value="producer"  :id="producer+ind">
				<label  :for="producer+ind">{{producer}}</label>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'ProductsFilters',

		props: {
			sellersCheckedModifiers: {
				default: ()=>({})
			},
			producersCheckedModifiers: {
				default: ()=>({})
			},

			sellerFiltersList: {
				type: Array,
				default: ()=>[]
			},
			producerFiltersList: {
				type: Array,
				default: ()=>[]
			},

			sellersChecked: {
				type: Array,
				default: ()=>[]
			},
			producersChecked: {
				type: Array,
				default: ()=>[]
			},
		},

		data() {
			return {
				sellerFilterData: this.sellersChecked,
				producerFilterData: this.producersChecked,
			}
		},

		computed: {
			addGreenBorderSellers() {
				let currentClass 
				if(this.sellersCheckedModifiers.check && !this.sellersChecked.length) currentClass = 'green-border'
				return currentClass
			},
			addGreenBorderProducers() {
				let currentClass 
				if(this.producersCheckedModifiers.check && !this.producersChecked.length) currentClass = 'green-border'
				return currentClass
			}
		},

		watch: {
			sellersChecked: {
				handler(newValue) {this.sellerFilterData = newValue},
				deep: true
			},
			sellerFilterData: {
				handler(newValue) {
        this.$emit('update:sellersChecked', newValue)},
				deep: true,
      },

			producersChecked: {
				handler(newValue) {this.producerFilterData = newValue},
				deep: true
			},
			producerFilterData: {
				handler(newValue) {
        this.$emit('update:producersChecked', newValue)},
				deep: true,
      },
		}
	}
</script>

<style lang="css" scoped>
h6{
	color: #3e77aa;
}
.filter-container{
	display: flex;
	flex-direction: column;
	gap: 30px;
}
.filter-section{
	display: flex;
	flex-direction: column;
	gap: 10px;
	border: 2px solid #e9e9e9;
	border-radius: 4px;
	padding: 10px;
	overflow: hidden;
}
.checkbox{
	display: flex;
	flex-wrap: nowrap;
}
input{
	opacity: 0;
}
label{
	display: flex;
	align-items: center;
	gap: 10px;
	margin-left: -20px;
}
label::before{
	content: '';
	width: 20px;
	height: 20px;
	border: 2px solid #e9e9e9;
	border-radius: 4px;
	overflow: hidden;
}
input[type="checkbox"]:checked + label::before{
	background: url("@/assets/filter_accept.svg") no-repeat center ;
	border-color: #00a046;
}
.green-border{
	border: 2px solid #00a046;
}
</style>