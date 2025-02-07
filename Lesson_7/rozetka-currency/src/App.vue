<template>
<div>
	<main-header />
	<main-page />
</div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import MainPage from './components/MainPage';

export default {
  name: "App",
  components: {
    MainHeader, MainPage
  },
};
</script>

<style lang="scss">
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.green-btn{
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
green-btn:hover{
	background-color: #00bc52;
}
p{
	margin: 0;
}
</style>
