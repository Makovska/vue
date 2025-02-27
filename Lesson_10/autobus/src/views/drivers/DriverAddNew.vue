<template>
	<main>
		<div class="container">
			<section>
				<h3>Додати водія:</h3>
	
				<label>ПІБ
					<input type="text" 
					v-model.trim="driverName">
				</label>
				<label>Стаж
					<input type="number" min="1" 
					v-model.number="driver.experience">
				</label>
				
				<button class="red-btn" @click="onSave">{{saveBtnTitle}}</button>
				<button class="red-btn" @click="onCancel">Скасувати</button>
			</section>
		</div>
	</main>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
	export default {
		name: 'DriverAddNew',

		data() {
			return {
				driver: {
					name: null,
					experience: null
				}
			}
		},
		
		computed: {
			...mapGetters('drivers', ['driversList']),
			driverId(){
				return this.$route.params.driverId
			},
			driverName:{
				get(){
					return this.driver.name
				},
				set(newValue){
					let nameToArray = newValue.replace(/\s+/g, ' ').split(' ')
					let surname = nameToArray[0]? `${nameToArray[0][0].toUpperCase()}${nameToArray[0].slice(1)}`: ''
					let initials = nameToArray[1]? ` ${nameToArray[1].toUpperCase()}`:''
					this.driver.name = `${surname}${initials}`
				}
			},
			saveBtnTitle(){
				return this.driverId? 'Зберегти зміни': 'Додати'
			},
		},

		methods: {
			...mapActions('drivers', ['driverAddNew', 'driverEdit']),
			onSave(){
				if(this.driverId) this.driverEdit(this.driver)
				else this.driverAddNew(this.driver)

				this.$router.push({name: 'drivers'})
			},
			onCancel(){
				this.$router.push({name: 'drivers'})
			}
		},

		created () {
		if(this.driverId) this.driver = {...this.driversList.find(driver=>driver.id == this.driverId)}
	},
	}
</script>