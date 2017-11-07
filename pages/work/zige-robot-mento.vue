<template>
	<section>
		<specific-work :title="$options.workPreview.title" :text="text" :vid="vid" :img="img" />
	</section>
</template>

<script>
import SpecificWork from '~/components/generic/SpecificWork'
export default {
	components: {SpecificWork},
	workPreview: {// workPreview is required for each work
		title: 'zige-robot-mento',
		thumbnail: '/img/work/mento.jpg'
	},
	data () {
		return {
			text: ['Shenzhen-based robot maker Zige sent its newest creation Mento – an artificially intelligent robot for children aged 4-12 - to the London Fashion Week (15th - 19th September 2017) and China-Britain AI Summit (22nd September 2017). JMAX MEDIA worked in partnership with Shenzhen to create a promotional video about the Robot’s time at these events, as well as its educational uses in the classroom through its leading artificial intelligence capabilities.'],
			vid: 'DP0F8BnmpKg',
			img: [
				'/img/work/robot/robot1.jpg',
				'/img/work/robot/robot2.jpg',
				'/img/work/robot/robot3.jpg',
				'/img/work/robot/robot4.jpg',
				'/img/work/robot/robot5.jpg',
				'/img/work/robot/robot6.jpg'
			]
		}
	}
}
</script>
