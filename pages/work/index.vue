<template>
	<section>
		<div class="container text-center py-5">
			<section-header header="OUR WORK" sub="WHAT WE DID" cn="作品" />
			<div class="row">
				<div class="col-lg-2"></div>
				<div class="col-lg-8">
					<p v-for="d in workDesc">{{d}}</p>
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
		}
	},
	data () {
		return {
			workDesc: [
				'JMAX MEDIA is a full service video production and graphic design company based in the UK and China. We specialise in creating original branding solutions that resonate and engage with an international audience.',
				'We can design or reimagine your brand, from a logo and colour scheme to company stationary and social media presence, in collaboration with our video production and promotion services.',
				'For every video we develop an initial concept, through storyboarding, filming, editing and post-production to delivery with a digital marketing support package.',
				'We take our time to get to know you, your brand and what you hope to achieve. Whether you’re just starting out or are a household name, we can tailor our services to suit your specification and budget.',
				'There is no better promotion than by word of mouth. We work with you to fully understand your target market, and use unique strategies to boost your company’s presence on social media and beyond.',
				'We look forward to working with you soon.'
			]
		}
	}
}
</script>
