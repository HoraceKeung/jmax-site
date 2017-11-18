<template>
	<div>
		<div class="work-hero d-flex" :style="'background-image: url(/img/work/'+title+'/1.jpg)'">
			<h1 v-if="showTitle" class="m-auto d-block text-uppercase text-white">{{title.split('-').join(' ')}}</h1>
		</div>
		<div class="container pt-5">
			<div class="row mb-5">
				<div class="col-lg-2"></div>
				<div class="col-lg-8">
					<div v-for="(b,index) in body" :class="index<body.length-1?'mb-5':''">
						<div v-if="b.type==='vid'" class="video-wrapper">
							<iframe :src="'https://www.youtube.com/embed/'+b.value+'?rel=0'" frameborder="0" allowfullscreen></iframe>
						</div>
						<div v-else-if="b.type==='text'">
							<p class="text-justify mb-0">{{b.value}}</p>
						</div>
						<div v-else-if="b.type==='img'" @click="viewingImg=b.value" class="pointer hover60">
							<img class="w-100" :src="'/img/work/'+title+'/'+b.value+'.jpg'">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- START Img grid -->
		<div class="container-fluid px-0" v-if="showImgGrid">
			<div class="row no-gutters">
				<div v-for="i in img" @click="viewingImg=i" class="col-md-4 pointer hover60">
					<img class="w-100" :src="'/img/work/'+title+'/'+i+'.jpg'">
				</div>
			</div>
		</div>
		<!-- END Img grid -->
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
		body: Array, // Array of object, each object has type of vid/text/img and value
		img: Number,
		showImgGrid: {type: Boolean, default: true}
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
