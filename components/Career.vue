<template>
	<div class="bg-dark py-6">
		<div class="container text-white">
			<h3 class="text-uppercase text-center">{{lang[52]}}</h3>
			<h5 class="mb-4 text-center">{{lang[53]}}</h5>
			<div class="row mb-4">
				<div v-for="j in jobs" class="col-md-6">
					<h4>{{lang[j.role]}}</h4>
					<p>{{lang[j.desc]}}</p>
				</div>
			</div>
			<h3 class="mb-0 text-center">{{lang[58]}}</h3>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			jobs: [
				{role: 54, desc: 55},
				{role: 56, desc: 57}
			]
		}
	}
}
</script>

<style scoped>
</style>
