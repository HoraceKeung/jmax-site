var currentScrollTo = null

const util = {
	scrollTo (id, offset = 150, oldTop) {
		const scroll = function () {
			const rect = document.getElementById(id).getBoundingClientRect()
			if (((rect.top - offset) > 1 || (rect.top - offset) < -1) && oldTop !== rect.top) {
				window.scrollBy(0, ((rect.top - offset) > 0 ? 1 : -1) * (Math.abs(rect.top - offset) / 10 < 1 ? 1 : Math.abs(rect.top - offset) / 10))
				window.requestAnimationFrame(util.scrollTo.bind(util, id, offset, rect.top))
			} else {
				currentScrollTo = null
			}
		}
		if (!currentScrollTo) {
			currentScrollTo = id
			scroll()
		} else if (currentScrollTo === id) {
			scroll()
		}
	},
	animateIsShow (id, store, offset = 150) {
		if (typeof document === 'undefined') {
			return false
		} else if (store.state.scrollTop > 0) {
			var rect = document.getElementById(id).getBoundingClientRect()
			return rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset
		}
	},
	setLang (store, l) {
		const arr = require('../static/languages/' + l + '.json')
		store.commit('SET_LANG', arr)
		window.scrollTo(0, 0)
	}
}

export default util
