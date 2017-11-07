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
		title: 'interview',
		thumbnail: '/img/work/interview.jpg'
	},
	data () {
		return {
			text: ['JMAX MEDIA produces its own interview series with celebrities from any walk of life, notable people in the community and leading academics in their chosen fields. Recent episodes include interviews with the Law Lieutenant of the University of Sussex and the panel of the Chinese desk at PWC, with more to follow in the near future. Check back soon or follow us on YouTube (link) for regular updates.'],
			vid: 'LuB3MSiSRn0',
			img: [
				'/img/work/interview.jpg'
			]
		}
	}
}
</script>
