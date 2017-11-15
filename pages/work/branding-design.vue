<template>
	<section>
		<specific-work :title="$options.workTitle" :text="text" :vid="vid" :img="img" />
	</section>
</template>

<script>
import SpecificWork from '~/components/generic/SpecificWork'
export default {
	components: {SpecificWork},
	workTitle: 'branding-design', // workTitle is required for each work
	data () {
		return {
			text: [''],
			vid: ['yBDOuBFPQeE', 'IeAyxWFo6rs', '17l-EhGB6Hs'],
			img: 0
		}
	}
}
</script>
