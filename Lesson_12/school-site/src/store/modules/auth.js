export default {
    namespaced: true,
    state: {
        login: JSON.parse(localStorage.getItem('userName')) ?? null,
    },
    getters: {
        login: ({ login }) => login,
    },
    mutations: {
        login(state) {
            state.login = JSON.parse(localStorage.getItem('userName')) ?? null
        },
    },
    actions: {
        setLogin({ commit }, userName) {
            localStorage.setItem('userName', JSON.stringify(userName))
            commit('login')
        },
        removeLogin({ commit }) {
            localStorage.removeItem('userName')
            commit('login')
        },
    },
}
