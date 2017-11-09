<template>
	<section>
		<specific-work :title="$options.workTitle" :text="text" :vid="vid" :img="img" />
	</section>
</template>

<script>
import SpecificWork from '~/components/generic/SpecificWork'
export default {
	components: {SpecificWork},
	workTitle: 'zige-robot-mento', // workTitle is required for each work
	data () {
		return {
			text: ['Shenzhen-based robot maker Zige sent its newest creation Mento – an artificially intelligent robot for children aged 4-12 - to the London Fashion Week (15th - 19th September 2017) and China-Britain AI Summit (22nd September 2017). JMAX MEDIA worked in partnership with Shenzhen to create a promotional video about the Robot’s time at these events, as well as its educational uses in the classroom through its leading artificial intelligence capabilities.'],
			vid: ['DP0F8BnmpKg'],
			img: 9
		}
	}
}
</script>
