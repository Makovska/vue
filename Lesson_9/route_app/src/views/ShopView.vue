<template>
	<div class="container section">

		<router-link class="category" 
		v-for="category in categories" :key="category.id" 
		:to="{
			name: 'productsList', 
			params:{categoryId: category.id
			}
			}">

			<div class="picture">
				<img :src="category.img" :alt="category.title">
			</div>

			<h3 class="title">{{category.title}}</h3>

		</router-link>
		
	</div>
</template>

<script>
import { mapGetters } from "vuex";

	export default {
		name: 'ProductCatalog',

		computed: {
			...mapGetters(['categories'])
		},

	}
</script>

<style lang="css" scoped>
.container{
	display: flex;
	gap: 10px;
	}
	.category{
		flex: 0 0 15%;
		text-decoration: none;
		padding-right: 10px;
		border-right: 1px solid #e9e9e9;
	}
	.title{
		text-align: center;
		font-size: 18px;
		color: #3e77aa;
		cursor: pointer;
	}
	.title:hover{
			color: #f84147;
			text-decoration: underline;
		}
	.picture{
		position: relative;
		padding-bottom: 100%;
		overflow: hidden;
		margin-bottom: 8px;
	}
	.picture img{
		position: absolute;
		object-fit: contain;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>