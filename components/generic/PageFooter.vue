<template>
	<footer class="footer" id="footer">
		<div class="container pt-5 pb-3">
			<div class="row mb-4">
				<div class="col-md-3 mb-3 mb-md-0">
					<h4 class="font-weight-bold">LINKS</h4>
					<router-link :to="l.path" v-for="l in links" :key="l.path" class="text-capitalize d-block hover60 mb-1">{{l.name}}</router-link>
				</div>
				<div class="col-md-3 mb-3 mb-md-0">
					<h4 class="font-weight-bold">FOLLOW US</h4>
					<a v-for="s in social" :href="s.href" target="_blank" class="mr-2"><i :class="'hover60 fa fa-2x '+s.icon" aria-hidden="true"></i></a>
				</div>
				<div class="col-md-3 mb-3 mb-md-0">
					<h4 class="font-weight-bold">ADDRESS</h4>
					<p v-for="a in address" class="mb-1">{{a}}</p>
				</div>
				<div class="col-md-3">
					<h4 class="font-weight-bold">GET IN TOUCH</h4>
					<p><strong>Email: </strong><a href="mailto:jmaxmedia@jmaxmedia.co.uk" class="mb-0 d-inline">jmaxmedia@jmaxmedia.co.uk</a></p>
					<p><strong>Phone: </strong><a class="mb-0 d-inline">07903 919510</a></p>
				</div>
			</div>
			<div class="d-flex">
				<div><small>© {{currentYear}} JMAX MEDIA All rights reserved</small></div>
				<div class="ml-auto d-block">
					<small v-for="(l,index) in langNames" class="pointer hover60 text-capitalize" @click="setLang($store, l)">{{l+((index < langNames.length-1)?' | ':'')}}</small>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import util from '~/assets/util'
export default {
	computed: {
		currentYear () {
			const d = new Date()
			return d.getFullYear()
		},
		address () { return this.$store.state.address },
		links () { return this.$store.state.links },
		langNames () { return this.$store.state.langNames }
	},
	data () {
		return {
			social: [
				{
					icon: 'fa-instagram',
					href: 'https://www.instagram.com/jmaxmediauk/'
				},
				{
					icon: 'fa-youtube-square',
					href: 'https://www.youtube.com/channel/UCljekXZi3O6CbGGrvqw5Gag/videos'
				},
				{
					icon: 'fa-weibo',
					href: 'https://www.weibo.com/6379340233/profile?topnav=1&wvr=6&is_all=1'
				},
				{
					icon: 'fa-weixin',
					href: ''
				},
				{
					icon: 'fa-facebook',
					href: ''
				}
			]
		}
	},
	methods: {...util}
}
</script>

<style scoped>
.footer {
	background-color: #000;
	color: #fff;
}
</style>
