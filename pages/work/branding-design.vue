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
			body: [
				{type: 'vid', value: 'a_zp1yaaXjM'},
				{type: 'vid', value: 'TFxQg6ydQcw'},
				{type: 'text', value: 'Hyacinth Capital commissioned company-wide branding for their new capital investments business. They requested a colourful, corporate and professional feel, answered with a sharp logo, custom typography and a colour scheme of varying shades of royal purple and contrasting green. The project extended to a full set of branded stationery, such as business cards, complement slips and letterheads.'},
				{type: 'img', value: '2'},
				{type: 'img', value: '3'},
				{type: 'img', value: '4'},
				{type: 'img', value: '5'}
			],
			img: 5
		}
	}
}
</script>
