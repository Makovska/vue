<template>

	<label>{{lessonInfo.title}}: 

		<select v-model="selectedItem" @change="onSelect(lessonInfo.id, selectedItem)" >

			<option v-for="item in itemsList" :key="item.id" :value="item.id">
				{{item.name}}
			</option>

		</select>

	</label>

</template>

<script>
	export default {
		name: 'SelectFilter',

		props: {
			lessonInfo: {
				type: Object,
				required: true, 
			},
			itemsList: {
				type: Array,
				required: true, 
			}
		},

		data() {
			return {
				selectedItem: null
			}
		},

		methods: {
			onSelect(lessonId, teacherId) {
				const selectedTeacher = {[lessonId]: lessonId+'-'+teacherId}
				this.$emit('select', selectedTeacher)
			}
		},
	}
</script>