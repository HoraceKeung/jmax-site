<template>
	<div>
		<iframe
			height="400"
			frameborder="0" style="border:0"
			:src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyA4zujbsG3Uu44j2qGVTYlKFURNL2uX82U&q='+address.join(',').split(' ').join('+')" allowfullscreen>
		</iframe>
		<div class="container py-4">
			<div class="row">
				<div class="col-md-6 mb-3 mb-md-0">
					<strong class="d-inline mr-3">Address:</strong>
					<p class="mb-0 d-inline">{{address.join(', ')}}</p>
				</div>
				<div class="col-md-6 mb-3 mb-md-0">
					<strong class="d-inline mr-3">Email:</strong>
					<a href="mailto:mikechen@jmaxmedia.co.uk" class="mb-0 d-inline">mikechen@jmaxmedia.co.uk</a>
				</div>
				<!-- <div class="col-md-6 mb-3">
					<strong class="d-inline mr-3">Tel:</strong>
					<p class="mb-0 d-inline">(+44)7903 919 510</p>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			address: [
				'Mocatta House',
				'Trafalgar Place',
				'Brighton',
				'BN1 4DU'
			]
		}
	}
}
</script>

<style scoped>
iframe {
	width: 100%;
}
</style>
