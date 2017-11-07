<template>
	<section>
		<div class="container text-center pt-5">
			<section-header header="OUR TEAM" sub="MEET THE TEAM WHO BUILT THE DREAM" cn="关于我们" />
			<div class="row mb-5">
				<div class="col-lg-2"></div>
				<div class="col-lg-8">
					<p class="text-justify" v-for="d in teamDesc">{{d}}</p>
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
	data () {
		return {
			currentHover: null,
			teamDesc: [
				'We have a brilliant team with great passion and creativity, most of whom are very experienced in post-production. And we love working with brands to create brand communication films that resonate and engage. We are versatile, adaptable, understanding and care about you and what you’re trying to achieve.',
				'On top of this, our highly talented team know how to get the most out of your budget. We are a full service video production company, with a complete in-house team. This means we are fast, reliable and always looking for ways to create the most efficient workflow and maximise the effectiveness of your whole project.'
			],
			teamMember: [
				{
					name: 'MIKE CHEN',
					role: ['UNKNOWN ROLE'],
					img: '/img/team/Mike.jpg',
					imgHover: '/img/team/tang.gif',
					desc: 'Have a dry sense of humor. Quote: Dream big, shine bright.'
				},
				{
					name: 'MICHELLE YANG',
					role: ['UNKNOWN ROLE'],
					img: '/img/team/Michelle.jpg',
					imgHover: '/img/team/tang.gif',
					desc: 'The one and only “Internet celebrity” in our company, always dress well.'
				},
				{
					name: 'JAMES BLAY',
					role: ['UNKNOWN ROLE'],
					img: '/img/team/James.jpg',
					imgHover: '/img/team/tang.gif',
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
