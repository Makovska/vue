<template>
  <router-view/>
</template>

// <script>
// import { RouterLink, RouterView } from 'vue-router'
// </script>

<style lang="scss">
@forward '@/assets/styles';
#app{
	min-height: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
}
</style>
