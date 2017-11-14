<template>
	<section>
		<specific-work :title="$options.workTitle" :text="text" :vid="vid" :img="img" />
	</section>
</template>

<script>
import SpecificWork from '~/components/generic/SpecificWork'
export default {
	components: {SpecificWork},
	workTitle: 'christmas-ad', // workTitle is required for each work
	data () {
		return {
			text: ['111'],
			vid: ['IeAyxWFo6rs'],
			img: 3
		}
	}
}
</script>
