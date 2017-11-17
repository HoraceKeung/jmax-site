<template>
	<div id="clients-div">
		<div class="bg-white py-6">
			<div class="container text-center">
				<section-header :header="lang[36]" sub="SEE OUR CLIENTS" cn="合作伙伴" />
				<div class="row no-gutters">
					<div class="col-6 col-md-3 mb-3" v-for="c in clients">
						<img class="w-100" :src="'/img/client/'+c+'_logo.jpg'" >
					</div>
				</div>
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
			]
		}
	}
}
</script>

<style scoped>
</style>
