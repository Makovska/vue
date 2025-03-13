<template>

	<div class="container">
		<section>

			<h2>Schedule</h2>

			<table>

				<tr>
					<th>Lesson</th>
					<th>Teacher</th>
				</tr>

				<tr v-for="item in scheduleValue" :key="item[0]">
					<td>{{item[0].title}}</td>
					<td>{{item[1].name}}</td>
				</tr>
				
			</table>

		</section>
	</div>

</template>

<script>
import { mapGetters } from "vuex";
	export default {
		name: 'ScheduleView',

		props: {
			scheduleData: {
				type: Array,
				required: true,
			},
		},

		computed: {
			...mapGetters('lessons', ['getLessonById']),
			...mapGetters('teachers', ['getTeacherById']),
			scheduleValue() {
				return this.scheduleData.map(id=> {
					let el = id.split('-')
					el[0] = this.getLessonById(el[0]);
					el[1] = this.getTeacherById(el[1])
					return el
					})
			}
		},
	}
</script>