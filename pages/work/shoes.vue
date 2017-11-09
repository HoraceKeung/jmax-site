<template>
	<section>
		<specific-work :title="$options.workTitle" :showTitle="false" :text="text" :vid="vid" :img="img" />
	</section>
</template>

<script>
import SpecificWork from '~/components/generic/SpecificWork'
export default {
	components: {SpecificWork},
	workTitle: 'shoes', // workTitle is required for each work
	data () {
		return {
			text: ['JMAX MEDIA produced, shot and edited a 30-second advert for Staples - a fictional online marketplace for second-hand shoes - to showcase the video advertising services available. The advert was designed with a fun, cute and charming aesthetic to appeal to the target market and wider audience alike.'],
			vid: ['2UR-cXaQv4Y', 'ou-iC5tYKos'],
			img: 3
		}
	}
}
</script>
