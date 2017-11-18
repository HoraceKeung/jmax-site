<template>
	<section>
		<specific-work :title="$options.workTitle" :body="body" :img="img" />
	</section>
</template>

<script>
import SpecificWork from '~/components/generic/SpecificWork'
export default {
	components: {SpecificWork},
	workTitle: 'christmas-ad', // workTitle is required for each work
	data () {
		return {
			body: [
				{type: 'vid', value: 'yBDOuBFPQeE'},
				{type: 'vid', value: 'IeAyxWFo6rs'},
				{type: 'vid', value: '17l-EhGB6Hs'}
			],
			img: 3
		}
	}
}
</script>
