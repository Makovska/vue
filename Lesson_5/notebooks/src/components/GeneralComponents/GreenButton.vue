<template>
	<button>{{buttonTitle}}</button>
</template>

<script>
	export default {
		name:'GreenButton',
		props: {
			buttonTitle: {
				type: String,
				default: 'Купити'
			},
		},
	}
</script>

<style lang="css" scoped>
button{
	color: #fff;
	background-color: #00a046;
	font-size: 12px;
	border: none;
	border-radius: 8px;
	box-sizing: border-box;
	display: inline-block;
	margin: 0;
	outline: none;
	padding: 10px 16px;
	transition: 0.2s;
	cursor: pointer;
}
button:hover{
	background-color: #00bc52;
}
</style>