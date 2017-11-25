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
						<div v-else-if="b.type==='img'" class="pointer hover60">
							<img v-img:workImg class="w-100" :src="'/img/work/'+title+'/'+b.value+'.jpg'">
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- START Img grid -->
		<div class="container-fluid px-0" v-if="showImgGrid">
			<div class="row no-gutters">
				<div v-for="i in imgs" class="col-md-4 pointer hover60">
					<img v-img:workImg class="w-100" :src="'/img/work/'+title+'/'+i+'.jpg'" onerror="this.parentNode.parentNode.removeChild(this.parentNode)">
				</div>
			</div>
		</div>
		<!-- END Img grid -->
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		showTitle: {type: Boolean, default: true},
		body: Array, // Array of object, each object has type of vid/text/img and value
		specificImgs: Array,
		showImgGrid: {type: Boolean, default: true}
	},
	computed: {
		imgs () {
			if (typeof this.specificImgs === 'undefined') {
				const context = require.context('~/static/img/work', true, /\.jpg$/)
				return parseInt(context.keys().map(k => context(k)).reduce((arr, comp) => {
					arr.push(comp.split('/').slice(-1)[0].split('.')[0])
					return arr
				}, []).filter(x => x !== 't').sort().slice(-1)[0])
			} else {
				return this.specificImgs
			}
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
</style>
