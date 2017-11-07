<template>
	<section>
		<div class="container text-center py-5">
			<section-header header="OUR WORK" sub="WHAT WE DID" cn="作品" />
			<div class="row">
				<div class="col-lg-2"></div>
				<div class="col-lg-8">
					<p class="text-justify" v-for="d in workDesc">{{d}}</p>
				</div>
			</div>
		</div>
		<div class="container-fluid px-0">
			<div class="row no-gutters">
				<div class="col-sm-6 col-md-4 col-xl-3" v-for="w in works">
					<img class="w-100" :src="w.thumbnail" :alt="w.title">
					<div class="overlay text-center pointer" @click="$router.push('/work/'+w.title)">
						<div class="px-3">
							<h3 class="text-uppercase">{{w.title.split('-').join(' ')}}</h3>
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
				if (comp.default.workPreview) {
					arr.push(comp.default.workPreview)
				}
				return arr
			}, [])
		}
	},
	data () {
		return {
			workDesc: [
				'JMAX MEDIA is a creative video production company founded in 2016, based in China and the UK. We specialize in developing an initial concept, through storyboarding, filming, editing and post- production to delivery with a digital marketing support package. We have been working in close collaboration with certain fantastic British companies and Chinese companies involved in DITS, distribution, production, post-production, visual effects, international sales and film investment. This relationship differentiates JMAX MEDIA from its competitors, providing a steady stream of projects but also the ability to provide an array of services through these companies that other editing companies could not.We have been making a lot of high-quality advertisements, music video and films.'
			]
		}
	}
}
</script>
