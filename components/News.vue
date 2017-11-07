<!-- This file is OLD, so old, please don't touch nor use it in any way or form else it will get messy! -->
<template>
	<div id="news-div">
		<div class="bg-light">
			<div class="container text-center">
				<div class="row">
					<div class="col-md-1"></div>
					<div class="col-md-2" v-for="t in tabs">
						<h3 :class="'mb-5 pointer'+(currentTab!==t.header?' o-50':'')" @click="setCurrentTab(t.header)">{{t.header}}</h3>
					</div>
				</div>
				<div class="row pb-5">
					<div v-for="c in currentTabCards" class="col-md-6 col-lg-3">
						<div class="card mb-3">
							<div class="card-img-top">
								<img :src="c.img">
								<div class="aligner">
									<div class="jmax-box o-50">
										<p>READ MORE</p>
									</div>
								</div>
							</div>
							<div class="card-body news-card-body">
								<h4>{{c.title}}</h4>
								<p>{{c.text}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		setCurrentTab (header) {
			this.currentTab = header
		}
	},
	computed: {
		currentTabCards () {
			return this.tabs.find(x => {
				return x.header === this.currentTab
			}).cards
		}
	},
	data () {
		return {
			currentTab: 'NEWS',
			tabs: [
				{
					header: 'NEWS',
					cards: [
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'BAFTAS 2016',
							text: 'Sunday night saw the world turn its gaze to London for the 69th British Academy Film Awards aka the...'
						},
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'BAFTAs this weekend...',
							text: 'This Sunday the film world turns its gaze to London and the British Academy Film Awards which recently have emerged as...'
						},
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'SAG Awards',
							text: 'Saturday night’s Screen Actors Guild Awards provided a counterbalance to the much-protested lack of ethnic diversity of the Oscar...'
						},
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'UK Creative Industries',
							text: 'The UK’s creative industries are now worth a record £84.1 billion to the UK economy according to figures released...'
						}
					]
				},
				{
					header: 'PROJECTS',
					cards: [
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'Giantland',
							text: 'A beautiful coming of age story produced by BB88 alongside BAFTA nominated Director and Co-Writer Yousaf Ali. Khan'
						},
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'Speed Machine',
							text: 'A 90 minute feature film documentary that investigates the use of drugs in Nazi Germany and by the Allies during the 1930s and 1940s.'
						},
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'NextUp Comedy',
							text: 'The first streaming subscription video on demand (VOD) platform to specialise in full length Standup Comedy.'
						},
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'Bloody Burrito',
							text: 'An Multi-platform Entertainment package – ‘Bloody Burrito’ which will contain an independent comedy horror film and a mobile gaming / social platform.'
						}
					]
				},
				{
					header: 'FILM',
					cards: [
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'Its nearly Berlinale time!',
							text: 'This week has been a busy one for the film industry including the Goldfinch Team as they make final preparations for Berlinale which starts on Thursday...'
						},
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'BAFTAS 2016',
							text: 'Sunday night saw the world turn its gaze to London for the 69th British Academy Film Awards aka the...'
						},
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'BAFTAs this weekend...',
							text: 'This Sunday the film world turns its gaze to London and the British Academy Film Awards which recently have emerged as...'
						},
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'UK Box Office hits record',
							text: 'Boosted by blockbusters Spectre and Star Wars: The Force Awakens, box office in UK & Ireland recorded its highest-grossing year ever...'
						}
					]
				},
				{
					header: 'PRESS',
					cards: [
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'Golden Globes Winners',
							text: 'The 73rd Golden Globe Awards were held last night in Beverly Hills, California to honour the best talent in film and television. One...'
						},
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'Global Box Office',
							text: 'Global Box Office hits historic high in 2015: Cinemas across the globe racked up a record $38bn sales revenue in 2015 for the first time in history due to massive...'
						},
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'BAFTA Breakthrough 2015',
							text: 'This week saw the British Academy of Film and Television Arts (BAFTA) announcing the 18 talented newcomers selected by...'
						},
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'Building Jerusalem Update',
							text: 'With the Rugby World Cup starting this weekend & its world premiere in central London two weeks ago, Goldfinch LIII – Building...'
						}
					]
				},
				{
					header: 'EVENTS',
					cards: [
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'BIFA Awards Nominations',
							text: 'THis is test THis is testTHis is testTHis is testTHis is testTHis is test THis is test THis is testTHis is testTHis is testTHis is test'
						},
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'Venice Film Festival',
							text: 'The scrap for the prestigious premieres & awards-friendly titles between Toronto (TIFF) and Venice Film Festivals has become a highlight of...'
						},
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'Asia Event',
							text: 'Last week saw our second article in The Chinese Weekly paper this time by our MD Kirsty Bell entitled ‘Having...'
						},
						{
							img: 'https://via.placeholder.com/350x350',
							title: 'Toronto Film Festival',
							text: 'As the spotlight turns to Toronto for its annual film festival (TIFF) and with Kirsty & Phil in attendance,...'
						}
					]
				}
			]
		}
	}
}
</script>

<style scoped>
.card-img-top {
	position: relative;
}
.card-img-top img {
	width: 100%;
}
.news-card-body {
	overflow: hidden;
	height: 140px;
}
.news-card-body:before {
	border-bottom: 20px solid #fff;
	border-left: 30px solid transparent;
	border-right: 30px solid transparent;
	content: "";
	height: 0;
	position: absolute;
	width: 0;
	left: calc(50% - 30px);
	bottom: 130px;
}
@media screen and (min-width: 768px) {
	.news-card-body {
		height: 180px;
	}
	.news-card-body:before {
		bottom: 170px;
	}
}
@media screen and (min-width: 992px) {
	.news-card-body {
		height: 240px;
	}
	.news-card-body:before {
		bottom: 230px;
	}
}
.news-card-body p {
	border-top: 1px solid #000;
	padding-top: 1rem;
}
</style>
