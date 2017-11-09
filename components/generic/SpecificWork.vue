<template>
	<div>
		<div class="work-hero d-flex" :style="'background-image: url(/img/work/'+title+'/1.jpg)'">
			<h1 v-if="showTitle" class="m-auto d-block text-uppercase text-white">{{title.split('-').join(' ')}}</h1>
		</div>
		<div class="container pt-5">
			<div class="row mb-5">
				<div class="col-lg-2"></div>
				<div class="col-lg-8">
					<div v-for="(v,index) in vid" :class="'video-wrapper'+(index===vid.length-1?'':' mb-3')">
						<iframe :src="'https://www.youtube.com/embed/'+v+'?rel=0'" frameborder="0" allowfullscreen></iframe>
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
					<img class="w-100" :src="'/img/work/'+title+'/'+i+'.jpg'">
				</div>
			</div>
			<!-- END images -->
		</div>
		<div class="img-viewer" v-if="viewingImg">
			<div class="d-flex fixed-top h-100">
				<i v-if="viewingImg>1" @click="viewingImg--" class="fa fa-3x fa-chevron-left text-white pointer hover60 my-auto ml-3" aria-hidden="true"></i>
				<i v-if="viewingImg<img" @click="viewingImg++" class="fa fa-3x fa-chevron-right text-white pointer hover60 my-auto ml-auto mr-3" aria-hidden="true"></i>
			</div>
			<i class="fa fa-3x fa-times text-white m-3 pointer hover60 fixed-top text-right" aria-hidden="true" @click="viewingImg=null"></i>
			<img class="w-100 m-auto d-block" :src="'/img/work/'+title+'/'+viewingImg+'.jpg'">
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		showTitle: {type: Boolean, default: true},
		text: Array,
		vid: Array,
		img: Number
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
