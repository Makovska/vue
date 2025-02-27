<template>
	<main>
		<div class="container">
			<section>
				<h3>Наші автобуси:</h3>
				
				<table>
					<tr>
						<th>Номер</th>
						<th>Кількість місць</th>
						<th></th>
						<th></th>
					</tr>
					<tr v-for="bus in busesList" :key="bus.id">
						<td>{{bus.registerNumber}}</td>
						<td>{{bus.seatsNumber}}</td>
						<td>
							<button class="icon-btn" @click="onEdit(bus.id)">
								<img src="@/assets/edit.svg"/>
							</button>
						</td>
						<td>
							<button class="icon-btn" @click="onDelete(bus.id)">
								<img src="@/assets/delete.svg"/>
							</button>
						</td>
					</tr>
				</table>
	
				<button class="red-btn" @click="onAdd">Додати автобус</button>
			</section>
		</div>
	</main>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
	export default {
		name: 'BusesView',
		
		computed: {
			...mapGetters('buses', ['busesList'])
		},

		methods: {
			...mapActions('buses', ['busDelete']),
			...mapActions('assignments', ['deleteAssignment']),
			onEdit(busId) {
				this.$router.push({
					name: 'busAddNew',
					params: {busId}
				})
			},
			onDelete(busId) {
				this.busDelete(busId)
				this.deleteAssignment({busId})
			},
			onAdd() {
				this.$router.push({
					name: 'busAddNew'
				})
			}
		},
	}
</script>