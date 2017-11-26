// Load vue modules
import Vue from 'vue'
import Carousel3d from 'vue-carousel-3d'
import VueImg from 'v-img'
Vue.use(Carousel3d)
Vue.use(VueImg)
Vue.mixin({
	computed: {
		lang () { return this.$store.state.lang }
	}
})

// Load bootstrap js
require('bootstrap')
