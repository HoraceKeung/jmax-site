<template>
	<section>
		<specific-work :title="$options.workPreview.title" :text="text" :vid="vid" :img="img" />
	</section>
</template>

<script>
import SpecificWork from '~/components/generic/SpecificWork'
export default {
	components: {SpecificWork},
	workPreview: {// workPreview is required for each work
		title: 'trailer',
		thumbnail: '/img/work/trailer.jpg'
	},
	data () {
		return {
			text: ['It is the last heat of summer. Ten years old Ryan spends his time fighting aliens and befriending wild animals on the Giantlands, a forgotten industrial wasteland behind his estate. He dreams of the dad he never knew returning. So when he discovers a bearded man, injured and hiding in one of the shipping containers stored there, it is a dream come true. Or is it?'],
			vid: 'LuB3MSiSRn0',
			img: [
				'https://via.placeholder.com/1600x900',
				'https://via.placeholder.com/1600x900'
			]
		}
	}
}
</script>
