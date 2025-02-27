<template>
	<main>
		<div class="container">
			<section>
				<h3>Додати автобус:</h3>
	
				<label>Номер
					<input type="text" 
					v-model.trim="busRegisterNumber">
				</label>
				<label>Кількість місць
					<input type="number" min="1" 
					v-model.number="bus.seatsNumber">
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
		name: 'BusAddNew',
		data() {
			return {
				bus: {
					registerNumber: null,
					seatsNumber: null
				}
			}
		},
		
		computed: {
			...mapGetters('buses', ['busesList']),
			busId(){
				return this.$route.params.busId
			},
			busRegisterNumber:{
				get(){
					return this.bus.registerNumber
				},
				set(newValue){
					this.bus.registerNumber = newValue.toUpperCase()
				}
			},
			saveBtnTitle(){
				return this.busId? 'Зберегти зміни': 'Додати'
			},
		},

		methods: {
			...mapActions('buses', ['busAddNew', 'busEdit']),
			onSave(){
				if(this.busId) this.busEdit(this.bus)
				else this.busAddNew(this.bus)

				this.$router.push({name: 'buses'})
			},
			onCancel(){
				this.$router.push({name: 'buses'})
			}
		},

		created () {
		if(this.busId) this.bus = {...this.busesList.find(bus=>bus.id == this.busId)}
	},
	}
</script>