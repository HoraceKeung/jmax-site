<template>
	<div class="py-5">
		<div class="container text-center">
			<section-header :header="lang[66]" sub="FEEL FREE TO GET IN TOUCH" cn="联系我们" />
			<div class="row my-4">
				<div class="col-md-2 col-lg-3"></div>
				<div class="col-md-8 col-lg-6">
					<form class="text-left">
						<div class="form-row">
							<div class="form-group col-md-6">
								<label for="inputName" class="col-form-label">Name</label>
								<input type="text" :class="'form-control'+(touched&&nameErr!==''?' is-invalid':'')" id="inputName" @input="input('name', $event.target.value.trim())">
								<div class="invalid-feedback text-capitalize">{{nameErr}}</div>
							</div>
							<div class="form-group col-md-6">
								<label for="inputEmail" class="col-form-label">Email</label>
								<input type="email" :class="'form-control'+(touched&&emailErr!==''?' is-invalid':'')" id="inputEmail" @input="input('email', $event.target.value.trim())">
								<div class="invalid-feedback text-capitalize">{{emailErr}}</div>
							</div>
						</div>
						<label for="inputComment" class="col-form-label">Comment</label>
						<textarea rows="4" :class="'form-control'+(touched&&commentErr!==''?' is-invalid':'')" id="inputComment" @input="input('comment', $event.target.value.trim())"></textarea>
						<div class="invalid-feedback text-capitalize">{{commentErr}}</div>
						<button :disabled="canSend===false&&touched" @click="sendContact" type="button" class="btn btn-block btn-jmax-solid d-block mx-auto mt-3">
							<div id="white-spinner"><scale-loader :size="5" :loading="isLoading" color="#ffffff"></scale-loader></div>
							<div id="black-spinner"><scale-loader :loading="isLoading" color="#000000"></scale-loader></div>
							<h4 class="mb-0">{{isLoading?'':'SEND'}}</h4>
						</button>
					</form>
					<transition-group enter-active-class="animated fadeInUp" leave-active-class="animated fadeOut">
						<div class="message text-success" key="success" v-show="showingMessage==='success'"><h4 class="mb-0 mt-3">Thank you for getting in touch!</h4></div>
						<div class="message text-danger" key="error" v-show="showingMessage==='error'"><h4 class="mb-0 mt-3">Something went wrong!</h4></div>
					</transition-group>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import SectionHeader from './generic/SectionHeader'
export default {
	components: {SectionHeader, ScaleLoader},
	data () {
		return {
			name: '',
			nameErr: 'name required',
			email: '',
			emailErr: 'email required',
			comment: '',
			commentErr: 'comment required',
			touched: false, // show invalid feedback only when form is touched
			showingMessage: null, // for success or error message
			isLoading: false // show spinner if loading
		}
	},
	computed: {
		canSend () {
			return this.nameErr === '' && this.emailErr === '' && this.commentErr === ''
		}
	},
	methods: {
		input (key, value) {
			this[key] = value
			if (key === 'email') {
				this[key + 'Err'] = value === '' ? key + ' required' : (!/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) ? 'invalid email' : ''
			} else {
				this[key + 'Err'] = value === '' ? key + ' required' : ''
			}
		},
		sendContact () {
			this.touched = true
			const self = this
			if (this.canSend) {
				this.isLoading = true
				fetch('https://formspree.io/chenjiangquan123@gmail.com', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						Name: this.name,
						Email: this.email,
						Comment: this.comment
					})
				}).then(function (r) {
					self.isLoading = false
					if (r.status >= 200 && r.status < 300) {
						document.getElementById('inputComment').value = ''
						self.touched = false
						self.commentErr = 'comment required'
						self.showingMessage = 'success'
						setTimeout(function () { self.showingMessage = null }, 5000)
					} else {
						self.showingMessage = 'error'
						setTimeout(function () { self.showingMessage = null }, 5000)
					}
				})
			}
		}
	}
}
</script>

<style scoped>
.message {
	position: absolute;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
}
.btn-jmax-solid {
	height: 64px;
}
#black-spinner {
	display: none;
}
.btn-jmax-solid:hover #black-spinner {
	display: block;
}
.btn-jmax-solid:hover #white-spinner {
	display: none;
}
</style>
