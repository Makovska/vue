import { drivers } from '../../constants/drivers'

export default {
    namespaced: true,
    state: {
        driversList: [],
    },
    getters: {
        driversList: (state, getters, rootState, rootGetters) => {
            return state.driversList.filter((driver) => {
                let filters = rootGetters['filters/filtersList']
                return (
                    (!filters.driverName ||
                        driver.name
                            .toLowerCase()
                            .includes(rootGetters['filters/filtersList'].driverName.toLowerCase())) &&
                    (!filters.experienceMin || driver.experience >= filters.experienceMin) &&
                    (!filters.experienceMax || driver.experience <= filters.experienceMax)
                )
            })
        },
    },
    mutations: {
        loadDriversData(state, driversData) {
            state.driversList = driversData
        },
        driverAddNew(state, driverValue) {
            state.driversList.push(driverValue)
        },
        driverEdit(state, driverValue) {
            let currentDriverIndex = state.driversList.findIndex((driver) => driver.id == driverValue.id)
            state.driversList[currentDriverIndex] = { ...driverValue }
        },
        driverDelete(state, driverId) {
            state.driversList = state.driversList.filter((driver) => driver.id != driverId)
        },
    },
    actions: {
        loadDriversData({ commit }) {
            commit('loadDriversData', drivers)
        },
        driverAddNew({ commit }, driverValue) {
            commit('driverAddNew', {
                id: new Date().getTime(),
                ...driverValue,
            })
        },
        driverEdit({ commit }, driverValue) {
            commit('driverEdit', driverValue)
        },
        driverDelete({ commit }, driverId) {
            commit('driverDelete', driverId)
        },
    },
}
