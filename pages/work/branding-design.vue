<template>
	<section>
		<specific-work :title="$options.workTitle" :showTitle="false" :text="text" :vid="vid" :img="img" />
	</section>
</template>

<script>
import SpecificWork from '~/components/generic/SpecificWork'
export default {
	components: {SpecificWork},
	workTitle: 'branding-design', // workTitle is required for each work
	data () {
		return {
			text: ['Hyacinth Capital commissioned company-wide branding for their new capital investments business. They requested a colourful, corporate and professional feel, answered with a sharp logo, custom typography and a colour scheme of varying shades of royal purple and contrasting green. The project extended to a full set of branded stationery, such as business cards, complement slips and letterheads.'],
			vid: ['17l-EhGB6Hs'],
			img: 6
		}
	}
}
</script>
