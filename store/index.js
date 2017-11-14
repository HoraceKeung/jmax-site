import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			lang: null,
			currentLangName: null,
			langNames: null,
			scrollTop: 0,
			address: [
				'Mocatta House',
				'Trafalgar Place',
				'Brighton',
				'BN1 4DU'
			],
			links: [
				{ name: 35, path: '/' },
				{ name: 22, path: '/work' },
				{ name: 29, path: '/team' },
				{ name: 34, path: '/contact' }
			]
		},
		mutations: {
			SET_SCROLL_TOP (state, px) {
				state.scrollTop = px
			},
			SET_LANG (state, arr) {
				state.lang = arr
			},
			SET_CURRENT_LANG_NAME (state, name) {
				state.currentLangName = name
			},
			SET_LANG_NAMES (state, names) {
				state.langNames = names
			}
		}
	})
}

export default createStore
