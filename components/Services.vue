<template>
	<div id="services-div">
		<div class="bg-white pt-6">
			<div class="container text-center">
				<section-header :header="lang[1]" sub="SEE OUR SERVICES" cn="服务" />
			</div>
			<img class="w-100 d-none d-lg-block" src="~/assets/img/intro.gif">
			<img class="w-100 d-lg-none" src="~/assets/img/intro-mobile.gif">

					<div class="bg-dark py-6">
						<div class="container text-center text-white">
							<h3 class="text-uppercase">{{lang[50]}}</h3>
							<p class="mb-0">{{lang[51]}}</p>
						</div>
					</div>

			<!-- START Services breakdown -->
			<div v-for="(s,index) in services" :id="s.id" :class="index%2!==0?'bg-even-service':''">
				<div class="container">
					<div class="row py-6">
						<div :class="'col-lg-5 my-auto d-none'+(index%2!==0?' d-lg-block':'')">
							<transition enter-active-class="animated fadeInUp">
								<img v-if="s.inView" class='w-100 animated-img' :src="s.img">
							</transition>
						</div>
						<div class="col-lg-7 d-flex mb-5 mb-lg-0">
							<div class="mr-2"><img width="40" :src="s.icon"></div>
							<div>
								<h3 class="text-uppercase">{{lang[s.header]}}</h3>
								<div class="mb-3"><h5 v-for="t in s.text" class="mb-0 normalLH">{{lang[t]}}</h5></div>
								<h5 class="normalLH mb-0" v-for="k in s.keywords">- {{lang[k]}}</h5>
							</div>
						</div>
						<div :class="'col-lg-5 my-auto'+(index%2!==0?' d-lg-none':'')">
							<transition enter-active-class="animated fadeInUp">
								<img v-if="s.inView" class='w-100 animated-img' :src="s.img">
							</transition>
						</div>
					</div>
				</div>
			</div>
			<!-- END Services breakdown -->
		</div>
		<parallax-window id="service-parallax">
			<h2>{{lang[43]}}</h2>
			<button @click="$router.push('/team')" class="btn btn-jmax font-weight-bold m-auto d-block text-uppercase pl-3 pr-3" type="button">{{lang[29]}}</button>
		</parallax-window>
	</div>
</template>

<script>
import scrollMonitor from 'scrollmonitor'
import SectionHeader from './generic/SectionHeader'
import ParallaxWindow from './generic/ParallaxWindow'
export default {
	components: {SectionHeader, ParallaxWindow},
	mounted () {
		this.$nextTick(() => {
			this.services.forEach(s => {
				s.watcher = scrollMonitor.create(document.getElementById(s.id), -300)
				s.watcher.enterViewport(() => { s.inView = true })
			})
		})
	},
	computed: {
		lang () { return this.$store.state.lang }
	},
	data () {
		return {
			services: [
				{
					id: 's-v',
					img: '/img/service/video.png',
					icon: '/img/service/video-small.png',
					header: 2,
					text: [3],
					keywords: [4, 5, 6, 7, 8, 9],
					inView: false
				},
				{
					id: 's-cm',
					img: '/img/service/chinese-market.png',
					icon: '/img/service/chinese-market-small.png',
					header: 10,
					text: [11],
					keywords: [12, 13, 14, 48, 49],
					inView: false
				},
				{
					id: 's-b',
					img: '/img/service/branding.png',
					icon: '/img/service/branding-small.png',
					header: 15,
					text: [16],
					keywords: [17, 18, 19, 20, 21],
					inView: false
				}
			]
		}
	}
}
</script>

<style scoped>
.animated-img {
	-webkit-animation-duration: 1.75s;
	-moz-animation-duration: 1.75s;
	-ms-transition-animation-duration: 1.75s;
}
.bg-even-service {
	background-color: #fcfcfc;
}
</style>
