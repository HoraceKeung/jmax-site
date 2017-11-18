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
				<carousel-3d border="0" controlsVisible="true">
					<slide v-for="(t,index) in testimonial" :index="index">
						<div class="bg-light h-100 border border-light pointer d-flex p-3">
							<div class="m-auto text-center">
								<p><i class="fa fa-quote-left" aria-hidden="true"></i> {{t.text}} <i class="fa fa-quote-right" aria-hidden="true"></i></p>
								<i>{{t.name}}</i>
							</div>
						</div>
					</slide>
				</carousel-3d>
			</div>
		</div>
		<div id="get-in-touch-div">
			<div class="container-fluid">
				<div class="row transparent-row">
					<div class="col-12 my-auto text-center text-white">
						<transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOut">
							<div v-show="isShowGetInTouch">
								<h2>{{lang[44]}}</h2>
								<button @click="$router.push('/contact')" class="btn btn-jmax font-weight-bold m-auto d-block text-uppercase" type="button">{{lang[37]}}</button>
							</div>
						</transition>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SectionHeader from './generic/SectionHeader'
import util from '~/assets/util'
export default {
	components: {SectionHeader},
	methods: {...util},
	computed: {
		isShowGetInTouch () { return util.animateIsShow('get-in-touch-div', this.$store) },
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
				'maximum'
			],
			testimonial: [
				{
					name: 'Client A',
					text: 'I am happy and I like to talk a lot, like really a lot.'
				},
				{
					name: 'Client B',
					text: 'I am sad.'
				},
				{
					name: 'Client C',
					text: 'I am angry.'
				},
				{
					name: 'Client D',
					text: 'I am bored.'
				},
				{
					name: 'Client E',
					text: 'I am hungry.'
				}
			]
		}
	}
}
</script>

<style scoped>
</style>
