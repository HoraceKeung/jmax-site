<template>
	<section>
		<div class="container text-center pt-5">
			<section-header :header="lang[29]" sub="MEET THE TEAM WHO BUILT THE DREAM" cn="关于我们" />
			<div class="row mb-5">
				<div class="col-lg-2"></div>
				<div class="col-lg-8">
					<p v-for="d in teamDesc">{{lang[d]}}</p>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-6 col-md-3 mb-5" v-for="(m, index) in teamMember">
					<img v-show="currentHover!==index" class="w-100 mb-3" @mouseover="currentHover=index" :src="m.img" :alt="m.name">
					<img v-show="currentHover===index" class="w-100 mb-3" @mouseleave="currentHover=null" :src="m.imgHover" :alt="m.name">
					<h4 class="font-weight-bold">{{m.name}}</h4>
					<!-- <p class="mb-0" v-for="r in m.role">{{r}}</p> -->
					<p class="my-2">{{m.desc}}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import SectionHeader from '~/components/generic/SectionHeader'
export default {
	components: {SectionHeader},
	computed: {
		lang () { return this.$store.state.lang }
	},
	data () {
		return {
			currentHover: null,
			teamDesc: [30, 31, 32],
			teamMember: [
				{
					name: 'MIKE CHEN',
					role: ['UNKNOWN ROLE'],
					img: '/img/team/Mike.jpg',
					imgHover: '/img/team/mike.gif',
					desc: 'Have a dry sense of humor. Quote: Dream big, shine bright.'
				},
				{
					name: 'MICHELLE YANG',
					role: ['UNKNOWN ROLE'],
					img: '/img/team/Michelle.jpg',
					imgHover: '/img/team/michelle.gif',
					desc: 'The one and only “Internet celebrity” in our company, always dress well.'
				},
				{
					name: 'JAMES BLAY',
					role: ['UNKNOWN ROLE'],
					img: '/img/team/James.jpg',
					imgHover: '/img/team/james.gif',
					desc: 'Like a stick of rock, bite one down and you’ll still read Brighton.'
				},
				{
					name: 'HAOHAN TANG',
					role: ['UNKNOWN ROLE'],
					img: '/img/team/Tang.jpg',
					imgHover: '/img/team/tang.gif',
					desc: 'Stay young, stay positive.'
				}
			]
		}
	}
}
</script>
