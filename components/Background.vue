<template>
	<div>
		<div v-for="(b, index) in bg" class="background" :id="'b'+index" :style="'background-image:url('+b.img+');z-index:-'+(index+1)+';height:calc(100vh - '+cover(b.eater)+'px);'"></div>
	</div>
</template>

<script>
export default {
	methods: {
		cover (id) {
			if (id && typeof document !== 'undefined' && this.$store.state.scrollTop > 0) {
				const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
				const top = document.getElementById(id).getBoundingClientRect().top
				if (h > top) {
					return h - top
				}
				return 0
			}
			return 0
		}
	},
	data () {
		return {
			bg: [
				{
					img: '/img/bg/guodu.jpg',
					eater: 'services-div'
				},
				{
					img: '/img/bg/guoduu.jpg',
					eater: 'clients-div'
				},
				{
					img: '/img/bg/guodu2.jpg',
					eater: 'footer'
				}
			]
		}
	}
}
</script>

<style scoped>
.background {
	background-size: auto;
	background-repeat: no-repeat;
	background-position: center;
	width: 100%;
	position: fixed;
	top: 0px;
}
</style>
