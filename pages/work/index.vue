<template>
	<section>
		<div class="container text-center py-5">
			<section-header :header="lang[22]" sub="WHAT WE DID" cn="作品" />
			<div class="row">
				<div class="col-lg-2"></div>
				<div class="col-lg-8">
					<p v-for="d in workDesc">{{lang[d]}}</p>
				</div>
			</div>
		</div>
		<div class="container-fluid px-0">
			<div class="row no-gutters">
				<div class="col-sm-6 col-md-4 col-xl-3" v-for="w in works">
					<img class="w-100" :src="'/img/work/'+w+'/t.jpg'" :alt="w">
					<div class="overlay text-center pointer" @click="$router.push('/work/'+w)">
						<div class="px-3">
							<h3 class="text-uppercase">{{w.split('-').join(' ')}}</h3>
							<button class="btn btn-jmax font-weight-bold" type="button">{{lang[45]}}</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import SectionHeader from '~/components/generic/SectionHeader'
export default {
	components: {SectionHeader},
	computed: {
		works () {
			const context = require.context('.', false, /\.vue$/)
			return context.keys().map(k => context(k)).reduce((arr, comp) => {
				if (comp.default.workTitle) {
					arr.push(comp.default.workTitle)
				}
				return arr
			}, [])
		},
		lang () { return this.$store.state.lang }
	},
	data () {
		return {
			workDesc: [23, 24, 25, 26, 27, 28]
		}
	}
}
</script>
