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
				{type: 'img', value: '1'},
				{type: 'img', value: '2'},
				{type: 'img', value: '3'}
			],
			img: 3
		}
	}
}
</script>
