export default {
    namespaced: true,
    state: {
        filtersList: {
            driverName: null,
            experienceMin: null,
            experienceMax: null,
        },
    },
    getters: {
        filtersList: ({ filtersList }) => filtersList,
    },
    mutations: {
        setFilters(state, filtersValue) {
            state.filtersList = {
                ...state.filtersList,
                ...filtersValue,
            }
        },
    },
    actions: {
        setFilters({ commit }, filtersValue) {
            commit('setFilters', filtersValue)
        },
    },
}
