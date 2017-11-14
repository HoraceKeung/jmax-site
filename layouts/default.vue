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

<style>
@import 'font.css';
.mt-generic {
	margin-top: 5.5rem;
}
/* START sticky footer */
.flex-grow {
	flex: 1;
}
.flex-column {
	flex-direction: column;
	min-height: 100vh;
}
/* END sticky footer */
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
	font-family: futura;
	color: #000;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
h4 {
	/*line-height: 1.5;*/
}
h1 {
	font-size: 3rem;
	font-weight: bold;
}
h2 {
	font-size: 2rem;
	font-weight: bold;
}
h3 {
	font-size: 1.75rem;
	font-weight: bold;
}
h4 {
	font-size: 1.3rem;
}
@media screen and (max-width: 400px) {
	h1 {
		font-size: 2.25rem;
	}
	h2 {
		font-size: 1.5rem;
	}
	h3 {
		font-size: 1.3rem;
	}
	h4 {
		font-size: 1.1rem;
	}
}
.normalLH {
	line-height: 1.5;
}
a, a:visited, a:hover, a:active {
  color: inherit;
	text-decoration: none;
}
button:disabled {
	cursor: no-drop;
}
.jmax-box {
	box-shadow: 0px 0px 10px #000;
	border: 3px solid #000;
	background: #fff;
}
.btn, .pointer {
	cursor: pointer;
}
.btn-jmax {
	background-color: transparent;
	border: 2px solid #fff;
	color: #fff;
	border-radius: 0px;
}
.btn-jmax:hover {
	background-color: #fff;
	border-color: #000;
	color: #000;
}
.btn-jmax-solid {
	background-color: #000;
	border: 2px solid #000;
	color: #fff;
	border-radius: 0px;
}
.btn-jmax-solid:hover {
	background-color: #fff;
	color: #000;
}
.section-header {
	padding: 0.75rem;
	display: inline-block;
	position: relative;
	bottom: 2rem;
}
.section-header h2 {
	margin-bottom: 0px;
}
.section-subHeader {
	margin-top: -1rem;
}
.overlay {
	top: 0rem;
	left: 0rem;
	position: absolute;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	opacity: 0;
	color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: opacity .15s ease-in-out;
}
.overlay:hover{
	opacity: 1;
}
.o-0 {
	opacity: 0;
}
.o-50 {
	opacity: 0.5;
}
.hover60 {
	transition: opacity .15s ease-in-out;
}
.hover60:hover {
	opacity: 0.6;
}
.transparent-row {
	height: 500px;
	background-color: rgba(0, 0, 0, 0.2);
}
.vh-100 {
	height: 100vh;
}
.border {
	border-color: #000 !important;
}
.video-wrapper {
	position: relative;
	padding-bottom: 56.25%;
}
.video-wrapper>iframe {
	position: absolute;
	height: 100%;
	width: 100%;
	left: 0px;
}
.py-6 {
	padding-top: 6rem !important;
	padding-bottom: 6rem !important;
}
.pt-6 {
	padding-top: 6rem !important;
}
.backtube-cover {
	background-color: rgba(0, 0, 0, 0.2) !important;
}
</style>
