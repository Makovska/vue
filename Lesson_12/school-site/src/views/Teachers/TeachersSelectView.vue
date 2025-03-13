<template>

	<div class="container">
		<section>

			<h2>Choose teachers:</h2>

			<select-filter v-for="lesson in lessonsList" :key="lesson.id" :lessonInfo="lesson" :items-list="teachers" @select="onChoose"/>

			<button class="red-btn" :disabled="!isDataValid" @click="getSchedule">Start studying</button>

		</section>
	</div>

</template>

<script>
import SelectFilter from "../../components/FiltersItems/SelectFilter.vue";
import { mapGetters } from "vuex";
	export default {
		name: 'TeachersSelectView',
		components: { SelectFilter },

		props: {
			idLessons: {
				type: Array,
				required: true
			},
		},

		data() {
			return {
				scheduleList: {}
			}
		},

		computed: {
			...mapGetters('lessons', ['getLessonsById']),
			...mapGetters('teachers', ['teachers']),
			lessonsList(){
				return this.getLessonsById(this.idLessons)
			},			
			isDataValid(){
				return this.idLessons.every(id=> Object.keys(this.scheduleList).includes(id))
			},
		},

		methods: {
			onChoose(selectedTeacher) {
				this.scheduleList = {...this.scheduleList, ...selectedTeacher};
			},
			getSchedule(){
				const scheduleData = Object.values(this.scheduleList)
				this.$router.push({
					name: 'schedule',
					params: {scheduleData},
				});
			}
		},
	}
</script>