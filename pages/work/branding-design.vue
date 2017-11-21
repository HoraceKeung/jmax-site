<template>
	<section>
		<specific-work :title="$options.workTitle" :showTitle="false" :showImgGrid="false" :body="body" :img="img" />
	</section>
</template>

<script>
import SpecificWork from '~/components/generic/SpecificWork'
export default {
	components: {SpecificWork},
	workTitle: 'branding-design', // workTitle is required for each work
	data () {
		return {
<<<<<<< HEAD
			text: ['Hyacinth Capital commissioned company-wide branding for their new capital investments business. They requested a colourful, corporate and professional feel, answered with a sharp logo, custom typography and a colour scheme of varying shades of royal purple and contrasting green. The project extended to a full set of branded stationery, such as business cards, complement slips and letterheads.'],
			vid: ['17l-EhGB6Hs'],
			img: 6
=======
			body: [
				{type: 'img', value: '1'},
				{type: 'img', value: '2'},
				{type: 'img', value: '3'}
			],
			img: 3
>>>>>>> c97534294c9971037e8c5e674c9ed2e744929023
		}
	}
}
</script>
