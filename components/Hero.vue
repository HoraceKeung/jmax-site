<template>
	<div id="hero">
		<div class="container">
			<div class="row vh-100">
				<div class="col-12 my-auto">
					<img class="img-fluid d-block d-md-none" src="~/assets/img/newlogo-mobile.png" alt="JMaxMedia">
					<img class="img-fluid d-none d-md-block" src="~/assets/img/newlogo.png" alt="JMaxMedia">
					<h4 class="normalLH text-white hero-text mx-2">{{lang[0]}}</h4>
					<button @click="$router.push('/work')" class="btn btn-jmax font-weight-bold mx-md-2 d-block mx-auto text-uppercase mb-5 pl-4 pr-4" type="button">{{lang[22]}}</button>
				</div>
			</div>
		</div>
		<transition name="fade">
			<div v-if="isShowShadow" class="hero-shadow"></div>
		</transition>
	</div>
</template>

<script>
import util from '~/assets/util'
import BackTube from 'back-tube'
export default {
	computed: {
		isShowShadow () { return this.$store.state.scrollTop === 0 }
	},
	methods: {...util},
	data () {
		return {
			bt: null
		}
	},
	mounted () {
		this.$nextTick(() => {
			const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
			if (width > 767) {
				this.bt = new BackTube(document.querySelector('#hero'), {
					videoId: 'T8g3e8hRHBs'
				})
			}
		})
	}
}
</script>

<style scoped>
@media screen and (min-width: 767px) {
	.hero-text {
		width: 65%;
	}
}
#hero {
	min-height: 100vh;
}
.hero-shadow {
	z-index: 1;
	height: 88px;
	width: 100%;
	background-color: #000;
	position: absolute;
	bottom: 0px;
	left: 0px;
}
.fade-enter-active, .fade-leave-active {
	transition: opacity 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0
}
</style>
