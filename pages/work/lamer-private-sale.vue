<template>
	<section>
		<specific-work :title="$options.workTitle"  :showImgGrid="false" :body="body" />
	</section>
</template>

<script>
import SpecificWork from '~/components/generic/SpecificWork'
export default {
	components: {SpecificWork},
	workTitle: 'lamer-private-sale', // workTitle is required for each work
	data () {
		return {
			body: [
				{type: 'vid', value: ''},
				{type: 'text', value: ''},
				{type: 'img', value: '2'},
				{type: 'img', value: '3'}
			]
		}
	}
}
</script>
