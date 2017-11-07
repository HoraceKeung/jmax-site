import Vuex from 'vuex'

const createStore = () => {
	return new Vuex.Store({
		state: {
			scrollTop: 0
		},
		mutations: {
			SET_SCROLL_TOP (state, px) {
				state.scrollTop = px
			}
		}
	})
}

export default createStore
