<template>
	<footer class="footer" id="footer">
		<div class="container py-4">
			<div class="row">
				<div class="col-8"><small>© {{currentYear}} JMAX MEDIA All rights reserved</small></div>
				<div class="col-4">
					<div class="text-right">
						<a class="ml-2" v-for="s in social" :href="s.href" target="_blank"><i :class="'fa fa-2x '+s.icon" aria-hidden="true"></i></a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	computed: {
		currentYear () {
			const d = new Date()
			return d.getFullYear()
		}
	},
	data () {
		return {
			social: [
				{
					icon: 'fa-instagram',
					href: 'https://www.instagram.com/jmaxmediauk/'
				},
				{
					icon: 'fa-youtube-square',
					href: 'https://www.youtube.com/channel/UCljekXZi3O6CbGGrvqw5Gag/videos'
				}
			]
		}
	}
}
</script>

<style scoped>
.footer {
	background-color: #000;
	color: #fff;
}
</style>
