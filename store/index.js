import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			scrollTop: 0,
			address: [
				'Mocatta House',
				'Trafalgar Place',
				'Brighton',
				'BN1 4DU'
			],
			links: [
				{ name: 'home', path: '/' },
				{ name: 'our work', path: '/work' },
				{ name: 'our team', path: '/team' },
				{ name: 'contact', path: '/contact' }
			]
		},
		mutations: {
			SET_SCROLL_TOP (state, px) {
				state.scrollTop = px
			}
		}
	})
}

export default createStore
