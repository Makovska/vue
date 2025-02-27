<template>
	<main>
		<div class="container">
			<section>
				<h3>Наші водії:</h3>
	
				<drivers-filters-component />
	
				<table>
	
					<tr>
						<th>ПІБ</th>
						<th>Стаж</th>
						<th></th>
						<th></th>
					</tr>
	
					<tr v-for="driver in driversList" :key="driver.id">
						<td>{{driver.name}}</td>
						<td>{{driver.experience}}</td>
						<td>
							<button class="icon-btn" @click="onEdit(driver.id)">
								<img src="@/assets/edit.svg"/>
							</button>
						</td>
						<td>
							<button class="icon-btn" @click="onDelete(driver.id)">
								<img src="@/assets/delete.svg"/>
							</button>
						</td>
					</tr>
	
				</table>
	
				<button class="red-btn" @click="onAdd">Додати водія</button>
			</section>
		</div>
	</main>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import DriversFiltersComponent from "../../components/DriversFiltersComponent.vue";
	export default {
		name: 'DriversView',
		components: {
			DriversFiltersComponent,
		},
		
		computed: {
			...mapGetters('drivers', ['driversList']),
		},

		methods: {
			...mapActions('drivers', ['driverDelete']),
			...mapActions('assignments', ['deleteAssignment']),
			onEdit(driverId) {
				this.$router.push({
					name: 'driverAddNew',
					params: {driverId}
				})
			},
			onDelete(driverId) {
				this.driverDelete(driverId)
				this.deleteAssignment({driverId})
			},
			onAdd() {
				this.$router.push({
					name: 'driverAddNew'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.filters{
	align-self: flex-end;
	display: flex;
	gap: 20px;
	align-items: center;
}
</style>