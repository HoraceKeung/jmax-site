<template>
	<nav :class="'navbar fixed-top navbar-expand-lg navbar-dark'+(isShowLogo?'':' py-4')" style="background-color: #000;">
		<div class="container">
			<router-link v-if="isShowLogo" to="/"><img class="pointer menu-logo" src="~/assets/img/logo.png" alt="JMaxMedia"></router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div :class="'collapse navbar-collapse'+(isShowLogo?'':' pt-3 pt-lg-0')" id="menu">
				<ul :class="'navbar-nav '+(isShowLogo?'ml-auto':'m-auto')">
					<li :class="'nav-item'+(isShowLogo?' mr-2':' mx-lg-3')" v-for="l in links">
						<router-link :to="l.path">
							<span class="text-white nav-link font-weight-bold text-uppercase pointer">{{l.name}}</span>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data () {
		return {
			links: [
				{ name: 'home', path: '/' },
				{ name: 'our work', path: '/work' },
				{ name: 'our team', path: '/team' },
				{ name: 'contact', path: '/contact' }
			]
		}
	},
	computed: {
		isShowLogo () {
			return this.$store.state.scrollTop > 0
		}
	}
}
</script>

<style scoped>
.navbar {
	min-height: 5.5rem;
}
.menu-logo {
	width: 300px;
}
@media screen and (max-width: 400px) {
	.menu-logo {
		width: 250px;
	}
}
.nav-link {
	transition: opacity 0.3s ease;
	-webkit-transition: opacity 0.3s ease;
}
.nav-link:hover {
	opacity: 0.7;
}
.navbar-toggler {
	border: 2px solid #fff;
	border-radius: 0px;
	cursor: pointer;
	padding: 0px;
}
.navbar-toggler-icon {
	background-image: url(~/assets/img/menu.png);
}
</style>
