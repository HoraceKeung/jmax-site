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
				{type: 'text', value: 'JMAX MEDIA produced a range of short viral adverts for fictional shoe company Staplers, to advertise discounts in the build-up to Christmas. The adverts used a range of animation styles and festive characters to appeal to different audiences.'},
				{type: 'vid', value: 'IeAyxWFo6rs'},
				{type: 'vid', value: '17l-EhGB6Hs'}
			],
			img: 3
		}
	}
}
</script>
