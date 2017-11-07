<template>
	<div class="text-center mb-5">
		<h1>{{header}}</h1>
		<h4 class="font-weight-bold mb-0">{{sub}} | {{cn}}</h4>
	</div>
</template>

<script>
export default {
	props: ['header', 'sub', 'cn']
}
</script>

<style scoped>
</style>
