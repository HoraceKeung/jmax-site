<template>
	<div id="clients-div">
		<div class="bg-white py-6">
			<div class="container text-center">
				<section-header :header="lang[36]" sub="SEE OUR CLIENTS" cn="合作伙伴" />
				<div class="row no-gutters border border-light border-top-0 border-left-0 border-right-0 mb-5">
					<div class="col-6 col-md-3 mb-3" v-for="c in clients">
						<img class="w-100" :src="'/img/client/'+c+'_logo.jpg'" >
					</div>
				</div>
				<!-- START Testimonial -->
				<carousel-3d border="1" width="550" autoplay="true" autoplayTimeout="5000" animationSpeed="2000" :controlsVisible="true">
					<slide v-for="(t,index) in testimonial" :index="index" :key="index">
						<div class="bg-light h-100 border border-light pointer d-flex p-3">
							<div class="m-auto text-center">
								<p><i class="fa fa-quote-left" aria-hidden="true"></i> {{t.text}} <i class="fa fa-quote-right" aria-hidden="true"></i></p>
								<i>{{t.name}}</i>
							</div>
						</div>
					</slide>
				</carousel-3d>
				<!-- END Testimonial -->
			</div>
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
		lang () { return this.$store.state.lang }
	},
	data () {
		return {
			clients: [
				'bb88',
				'cbbf',
				'fantomeline',
				'fs',
				'lse',
				'zige',
				'art',
				'maximum',
				'',
				'lout'
			],
			testimonial: [
				{name: '- Zige', text: 'Excellent work as always. very creative and effective.'},
				{name: '- Maximum', text: 'JMAX is absolutely one of the best produciton company I know. Without a doubt. They are not only creative, they does research, spends time in understanding and editing where needed.. Just hire them and you’ll agree!'},
				{name: '- Hyacinth Capital', text: 'Thanks James! Perfect logo, very cooperative and good expertise on the subject in a nice design. Next job is already on its way!'}
			]
		}
	}
}
</script>

<style scoped>

</style>
