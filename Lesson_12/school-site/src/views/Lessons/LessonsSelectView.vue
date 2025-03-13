<template>

	<div class="container">
		<section>

			<h2>Choose lessons:</h2>

			<checkbox-filter :items-list="lessons" btnTitle="Choose teachers" @choose='chooseTeachers'/>
			
		</section>
	</div>

</template>

<script>
	import CheckboxFilter from "../../components/FiltersItems/CheckboxFilter.vue";
	import { mapGetters } from "vuex";
	export default {
  components: { CheckboxFilter },
		name: 'LessonsSelectView',

		computed: {
			...mapGetters('lessons', ['lessons'])
		},

		methods: {
			chooseTeachers(idLessons) {
				this.$router.push({
							name: 'teachersSelect',
							params: {idLessons},
				});
			}
		},
	}
</script>