<template>
	<section>
		<specific-work :title="$options.workTitle" :showTitle="false" :showImgGrid="false" :body="body" />
	</section>
</template>

<script>
import SpecificWork from '~/components/generic/SpecificWork'
export default {
	components: {SpecificWork},
	workTitle: 'lout-promotions', // workTitle is required for each work
	data () {
		return {
			body: [
				{type: 'img', value: '3'},
				{type: 'text', value: 'Lout Promotions are a Brighton based concert promoter and event producer. They promote hundreds of Gigs in Brighton every year with artists from all over the world as well as produce The Great Escape Festival every May, which is Europes leading new music festival. JMAX MEDIA provides promotional artwork for some of these gigs, for both print and web.'},
				{type: 'img', value: '1'},
				{type: 'img', value: '2'},
				{type: 'img', value: '4'}
			]
		}
	}
}
</script>
