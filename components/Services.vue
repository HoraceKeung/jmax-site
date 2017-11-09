<template>
	<div id="services-div">
		<div class="bg-white pt-6">
			<div class="container text-center">
				<section-header header="SERVICES" sub="SEE OUR SERVICES" cn="服务" />
			</div>
			<img class="w-100" src="~/assets/img/intro.gif">
			<!-- START Services breakdown -->
			<div v-for="(s,index) in services" :class="(index%2===0?'':'bg-light')">
				<div class="container">
					<div class="row py-6">
						<div v-if="index%2!==0" class="col-lg-5 d-none d-lg-block my-auto"><img class='w-100' :src="s.img"></div>
						<div class="col-lg-7 d-flex mb-5 mb-lg-0">
							<div class="mr-2"><img width="40" :src="s.icon"></div>
							<div>
								<h3 class="text-uppercase">{{s.header}}</h3>
								<div class="mb-3"><h5 v-for="t in s.text" class="mb-0 normalLH">{{t}}</h5></div>
								<h5 class="normalLH mb-0" v-for="k in s.keywords">- {{k}}</h5>
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
								<button @click="$router.push('/team')" class="btn btn-jmax font-weight-bold m-auto d-block" type="button">OUR TEAM</button>
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
		isShowServiceImg () {
			return util.animateIsShow('service-img-container', this.$store)
		}
	},
	data () {
		return {
			services: [
				{
					img: '/img/service/video.png',
					icon: '/img/service/video-small.png',
					header: 'Video production & Photography',
					text: [
						'We specialize in developing an initial concept, through storyboarding, filming, editing and post-production to delivery with a digital marketing support package.'
					],
					keywords: ['Film', 'Animation', 'Aerial Footage', 'Commercial', 'Personal', 'Corporate Video']
				},
				{
					img: '/img/service/chinese-market.png',
					icon: '/img/service/chinese-market-small.png',
					header: 'Chinese Market entry Strategy',
					text: [
						'The challenge of China market entry has become an increasingly important one of Western companies of all shapes and sizes. Are you still struggling to get into the Chinese market? We provide efficient solutions to eliminate the cultural barrier and language difficulty.'
					],
					keywords: ['Cultural Adaptation', 'Social Media Management', 'Government Policies and Regulations']
				},
				{
					img: '/img/service/branding.png',
					icon: '/img/service/branding-small.png',
					header: 'Branding',
					text: [
						'One of the best ways to give your business an edge is to give it a consistent look, from your business cards to your website to your advertising materials. We can build your brand from scratch or give your existing brand a facelift. Effective social media success takes effective planning and creative thinking to drive customers to know you.'
					],
					keywords: ['Graphic Design', 'Online Marketing Strategy', 'Advertising', 'Web Design', 'Marketing Campaign']
				}
			]
		}
	}
}
</script>

<style scoped>
</style>
