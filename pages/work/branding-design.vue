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
			text: [''],
			vid: ['17l-EhGB6Hs'],
			img: 3
		}
	}
}
</script>
