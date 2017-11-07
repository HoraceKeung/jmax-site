<template>
	<div>
		<div class="work-hero d-flex" :style="'background-image: url('+img[0]+')'">
			<h1 v-if="showTitle" class="m-auto d-block text-uppercase text-white">{{title.split('-').join(' ')}}</h1>
		</div>
		<div class="container pt-5">
			<div class="row mb-5">
				<div class="col-lg-2"></div>
				<div class="col-lg-8">
					<div class="video-wrapper">
						<iframe :src="'https://www.youtube.com/embed/'+vid+'?rel=0'" frameborder="0" allowfullscreen></iframe>
					</div>
				</div>
			</div>
			<div class="row mb-5">
				<div class="col-lg-2"></div>
				<div class="col-lg-8">
					<p v-for="(t,index) in text" :class="'text-justify'+(index===text.length-1?' mb-0':'')">{{t}}</p>
				</div>
			</div>
		</div>
		<div class="container-fluid px-0">
			<!-- START images -->
			<div class="row no-gutters">
				<div v-for="i in img" @click="viewingImg=i" class="col-md-4 pointer hover60">
					<img class="w-100" :src="i">
				</div>
			</div>
			<!-- END images -->
		</div>
		<div class="img-viewer" v-if="viewingImg">
			<i class="fa fa-3x fa-times text-white m-3 pointer hover60 fixed-top text-right" aria-hidden="true" @click="viewingImg=null"></i>
			<img class="w-100 m-auto d-block" :src="viewingImg">
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		showTitle: {type: Boolean, default: true},
		text: String,
		vid: String,
		img: Array
	},
	data () {
		return {
			viewingImg: null
		}
	}
}
</script>

<style scoped>
.work-hero {
	height: 25rem;
	background-size: cover;
	background-position: center;
}
.img-viewer {
	background-color: rgba(0, 0, 0, 0.8);
	height: 100vh;
	width: 100%;
	position: fixed;
	top: 0px;
	z-index: 1031;
	display: flex;
}
</style>
