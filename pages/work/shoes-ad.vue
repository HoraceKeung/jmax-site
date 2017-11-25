<template>
	<section>
		<specific-work :title="$options.workTitle" :showTitle="false" :body="body" />
	</section>
</template>

<script>
import SpecificWork from '~/components/generic/SpecificWork'
export default {
	components: {SpecificWork},
	workTitle: 'shoes-ad', // workTitle is required for each work
	data () {
		return {
			body: [
				{type: 'vid', value: '2UR-cXaQv4Y'},
				{type: 'text', value: 'JMAX MEDIA produced, shot and edited a 30-second advert for Staples - a fictional online marketplace for second-hand shoes - to showcase the video advertising services available. The advert was designed with a fun, cute and charming aesthetic to appeal to the target market and wider audience alike.'},
				{type: 'vid', value: 'ou-iC5tYKos'}
			]
		}
	}
}
</script>
