<template>
	<div id="clients-div">
		<div class="bg-white pt-6">
			<div class="container text-center">
				<section-header :header="lang[36]" sub="SEE OUR CLIENTS" cn="合作伙伴" />
				<div class="row no-gutters mb-5">
					<div class="col-6 col-md-3 mb-3" v-for="c in clients">
						<img class="w-100" :src="'/img/client/'+c+'.jpg'" >
					</div>
				</div>
			</div>
			<div class="bg-dark py-6">
				<div class="container text-white">
					<h3 class="text-uppercase">{{lang[46]}}</h3>
					<p class="mb-0">{{lang[47]}}</p>
				</div>
			</div>
			<!-- START Testimonial -->
			<div class="bg-black-alt py-5">
				<carousel-3d border="1" width="620" :autoplay="true" :autoplayTimeout="5000" :animationSpeed="2000">
					<slide v-for="(t,index) in testimonial" :index="index" :key="index">
						<div class="bg-white h-100 border border-light pointer d-flex p-3">
							<div class="m-auto text-center">
								<p><i class="fa fa-quote-left" aria-hidden="true"></i> {{t.text}} <i class="fa fa-quote-right" aria-hidden="true"></i></p>
								<p class="font-weight-bold">- {{t.name}}</p>
							</div>
						</div>
					</slide>
				</carousel-3d>
			</div>
			<!-- END Testimonial -->
		</div>
		<parallax-window id="client-parallax">
			<h2>{{lang[44]}}</h2>
			<button @click="$router.push('/contact')" class="btn btn-jmax font-weight-bold m-auto d-block text-uppercase" type="button">{{lang[37]}}</button>
		</parallax-window>
	</div>
</template>

<script>
import SectionHeader from './generic/SectionHeader'
import ParallaxWindow from './generic/ParallaxWindow'
export default {
	components: {SectionHeader, ParallaxWindow},
	computed: {
		lang () { return this.$store.state.lang },
		clients () {
			const context = require.context('~/static/img/client', false, /\.jpg$/)
			return context.keys().map(k => context(k)).reduce((arr, comp) => {
				arr.push(comp.split('/').slice(-1)[0].split('.')[0])
				return arr
			}, [])
		}
	},
	data () {
		return {
			testimonial: [
				{name: 'Zige', text: 'Excellent work as always. very creative and effective.'},
				{name: 'Maximum', text: 'JMAX is absolutely one of the best produciton company I know. Without a doubt. They are not only creative, they does research, spends time in understanding and editing where needed.. Just hire them and you’ll agree!'},
				{name: 'Hyacinth Capital', text: 'Thanks James! Perfect logo, very cooperative and good expertise on the subject in a nice design. Next job is already on its way!'}
			]
		}
	}
}
</script>

<style scoped>
</style>
