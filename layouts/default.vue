<template>
	<div class="d-flex flex-column">
		<menu-bar />
		<div :class="'flex-grow'+($route.path==='/'?'':' mt-generic')"><nuxt/></div>
		<page-footer />
	</div>
</template>

<script>
import MenuBar from '~/components/generic/MenuBar'
import PageFooter from '~/components/generic/PageFooter'
export default {
	components: {MenuBar, PageFooter},
	methods: {
		handleScroll: function () {
			var supportPageOffset = window.pageXOffset !== undefined
			var isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat')
			var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
			this.$store.commit('SET_SCROLL_TOP', y)
		}
	},
	mounted: function () {
		this.$nextTick(() => {
			window.addEventListener('scroll', this.handleScroll)
			this.handleScroll()
		})
	},
	destroyed: function () {
		window.removeEventListener('scroll', this.handleScroll)
	}
}
</script>
