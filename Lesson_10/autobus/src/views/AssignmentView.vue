<template>
	<main>
		<div class="container">
			<section>
				<h3>Призначення:</h3>
				
				<table>
					<tr>
						<th>Шофер</th>
						<th>Номер автобуса</th>
						<th></th>
					</tr>
					<tr v-for="assignment in assignmentsList" :key="assignment.id">
						<td>{{assignment.driver.name}}</td>
						<td>{{assignment.bus.registerNumber}}</td>
						<td>
							<button class="icon-btn" @click="onDeleteAssignment(assignment.id)">
							<img src="@/assets/delete.svg"/>
							</button>
							</td>
					</tr>
				</table>
	
				<h4>Нове призначення:</h4>

				<select-filter title="Шофер" :items-list="driversAvailable" v-model="driverId"/>
				<select-filter title="Автобус" :items-list="busesAvailable" v-model="busId"/>
	
				<button class="red-btn" @click="onAddAssignment">Додати</button>
			</section>
		</div>
	</main>
</template>

<script>
		import SelectFilter from "../components/FiltersItems/SelectFilter.vue";
		import { mapGetters } from "vuex";
		import { mapActions } from "vuex";
	export default {
		name: 'AssignmentView',
		components: {
			SelectFilter,
		},

		data() {
			return {
				driverId: null,
				busId: null,
			}
		},

		computed: {
			...mapGetters('assignments', ['driversAvailable', 'busesAvailable', 'assignmentsList']),
			isSelected(){
				return this.driverId&&this.busId
			}
		},

		methods: {
			...mapActions('assignments', ['addAssignment', 'deleteAssignment']),
			onAddAssignment() {
				if(this.isSelected) this.addAssignment({driverId: this.driverId, busId: this.busId})
				this.driverId = null
				this.busId = null
			},
			onDeleteAssignment(assignmentId) {
				this.deleteAssignment({assignmentId})
			}
		},
	}
</script>