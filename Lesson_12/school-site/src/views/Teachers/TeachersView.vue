<template>

	<div class="container">
		<section>

			<h2>Our teachers</h2>

			<ol>
				<li v-for="teacher in teachers" :key="teacher.id">{{teacher.name}}</li>
			</ol>

		</section>
	</div>

</template>

<script>
import { mapGetters } from "vuex";
	export default {
		name: 'TeachersView',

		computed: {
			...mapGetters('teachers', ['teachers'])
		},
	}
</script>