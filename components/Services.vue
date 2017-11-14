<template>
	<div id="services-div">
		<div class="bg-white pt-6">
			<div class="container text-center">
				<section-header :header="lang[1]" sub="SEE OUR SERVICES" cn="服务" />
			</div>
			<img class="w-100 d-none d-lg-block" src="~/assets/img/intro.gif">
			<img class="w-100 d-lg-none" src="~/assets/img/intro-mobile.gif">
			<!-- START Services breakdown -->
			<div v-for="(s,index) in services" :class="(index%2===0?'':'bg-light')">
				<div class="container">
					<div class="row py-6">
						<div v-if="index%2!==0" class="col-lg-5 d-none d-lg-block my-auto"><img class='w-100' :src="s.img"></div>
						<div class="col-lg-7 d-flex mb-5 mb-lg-0">
							<div class="mr-2"><img width="40" :src="s.icon"></div>
							<div>
								<h3 class="text-uppercase">{{lang[s.header]}}</h3>
								<div class="mb-3"><h5 v-for="t in s.text" class="mb-0 normalLH">{{lang[t]}}</h5></div>
								<h5 class="normalLH mb-0" v-for="k in s.keywords">- {{lang[k]}}</h5>
							</div>
						</div>
						<div :class="'col-lg-5 my-auto'+(index%2!==0?' d-lg-none':'')"><img class='w-100' :src="s.img"></div>
					</div>
				</div>
			</div>
			<!-- END Services breakdown -->
		</div>
		<div id="service-img-container">
			<div class="container-fluid">
				<div class="row transparent-row">
					<div class="col-12 my-auto text-center text-white">
						<transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOut">
							<div v-show="isShowServiceImg">
								<h2>LET'S WORK WITH OUR AWARD WINNING TEAM</h2>
								<button @click="$router.push('/team')" class="btn btn-jmax font-weight-bold m-auto d-block" type="button">{{lang[29]}}</button>
							</div>
						</transition>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import util from '~/assets/util'
import SectionHeader from './generic/SectionHeader'
export default {
	components: {SectionHeader},
	methods: {...util},
	computed: {
		isShowServiceImg () { return util.animateIsShow('service-img-container', this.$store) },
		lang () { return this.$store.state.lang }
	},
	data () {
		return {
			services: [
				{
					img: '/img/service/video.png',
					icon: '/img/service/video-small.png',
					header: 2,
					text: [3],
					keywords: [4, 5, 6, 7, 8, 9]
				},
				{
					img: '/img/service/chinese-market.png',
					icon: '/img/service/chinese-market-small.png',
					header: 10,
					text: [11],
					keywords: [12, 13, 14]
				},
				{
					img: '/img/service/branding.png',
					icon: '/img/service/branding-small.png',
					header: 15,
					text: [16],
					keywords: [17, 18, 19, 20, 21]
				}
			]
		}
	}
}
</script>

<style scoped>
</style>
