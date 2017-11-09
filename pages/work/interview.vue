<template>
	<section>
		<specific-work :title="$options.workTitle" :text="text" :vid="vid" :img="img" />
	</section>
</template>

<script>
import SpecificWork from '~/components/generic/SpecificWork'
export default {
	components: {SpecificWork},
	workTitle: 'interview', // workTitle is required for each work
	data () {
		return {
			text: ['JMAX MEDIA produces its own interview series with celebrities from any walk of life, notable people in the community and leading academics in their chosen fields. Recent episodes include interviews with the Law Lieutenant of the University of Sussex and the panel of the Chinese desk at PWC, with more to follow in the near future. Check back soon or follow us on YouTube (link) for regular updates.'],
			vid: ['kMyXqAFhF5A'],
			img: 1
		}
	}
}
</script>
