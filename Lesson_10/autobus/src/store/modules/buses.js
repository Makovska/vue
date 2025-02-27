import { buses } from '../../constants/buses'

export default {
    namespaced: true,
    state: {
        busesList: [],
    },
    getters: {
        busesList: ({ busesList }) => busesList,
    },
    mutations: {
        loadBusesData(state, busesData) {
            state.busesList = busesData
        },
        busAddNew(state, busValue) {
            state.busesList.push(busValue)
        },
        busEdit(state, busValue) {
            let currentBusIndex = state.busesList.findIndex((bus) => bus.id == busValue.id)
            state.busesList[currentBusIndex] = { ...busValue }
        },
        busDelete(state, busId) {
            state.busesList = state.busesList.filter((bus) => bus.id != busId)
        },
    },
    actions: {
        loadBusesData({ commit }) {
            commit('loadBusesData', buses)
			},
			busAddNew({ commit }, busValue) {
            commit('busAddNew', {
                id: new Date().getTime(),
                ...busValue,
            })
        },
        busEdit({ commit }, busValue) {
            commit('busEdit', busValue)
        },
        busDelete({ commit }, busId) {
            commit('busDelete', busId)
        },
    },
}
