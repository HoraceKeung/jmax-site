<template>
	<div style="height: 400px;">
		<iframe class="w-100"	height="400" frameborder="0" style="border:0" :src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyA4zujbsG3Uu44j2qGVTYlKFURNL2uX82U&q='+address.join(',').split(' ').join('+')" allowfullscreen></iframe>
	</div>
</template>

<script>
export default {
	computed: {
		address () { return this.$store.state.address }
	}
}
</script>

<style scoped>
</style>
