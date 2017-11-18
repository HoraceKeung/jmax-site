<template>
	<div :id="id">
		<div class="container-fluid">
			<div class="row transparent-row">
				<div class="col-12 my-auto text-center text-white">
					<transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOut">
						<div v-if="isParallaxInView"><slot /></div>
					</transition>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import scrollMonitor from 'scrollmonitor'
export default {
	props: ['id'],
	mounted () {
		this.$nextTick(() => {
			this.parallaxWatcher = scrollMonitor.create(document.getElementById(this.id), -300)
			this.parallaxWatcher.enterViewport(() => { this.isParallaxInView = true })
			this.parallaxWatcher.exitViewport(() => { this.isParallaxInView = false })
		})
	},
	data () {
		return {
			isParallaxInView: false,
			parallaxWatcher: null
		}
	}
}
</script>

<style scoped>
.transparent-row {
	height: 600px;
	background: linear-gradient(transparent, black 99%); /* Standard syntax */
}
</style>
