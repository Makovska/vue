<template>
	
			<div class="filters">
				<p>Фільтри:</p>

				<search-text-filter title="ПІБ" 
				v-model.trim.lazy="selectedValue.driverName"/>

				<range-filter title="Стаж" 
				v-model:min="selectedValue.experienceMin" 
				v-model:max="selectedValue.experienceMax" />

			</div>
</template>

<script>
import SearchTextFilter from "./FiltersItems/SearchTextFilter.vue";
import RangeFilter from "./FiltersItems/RangeFilter.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
	export default {
		name: 'DriversFiltersComponent',

	components: {
		SearchTextFilter,
		RangeFilter
	},

		computed: {
			...mapGetters('filters', ['filtersList']),
			selectedValue: {
				get() {
					return this.filtersList
				},
				set(newValue){
					console.log(newValue)
					this.setFilters(newValue)
				}
			},
		},

		methods: {
			...mapActions('filters', ['setFilters']),
		},

	}
</script>

<style lang="scss" scoped>

</style>