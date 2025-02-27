export default {
    namespaced: true,
    state: {
        assignmentsList: [],
    },
    getters: {
        drivers: (state, getters, rootState, rootGetters) => rootGetters['drivers/driversList'],
        buses: (state, getters, rootState, rootGetters) => rootGetters['buses/busesList'],

        assignmentsList: (state, getters) => {
            return state.assignmentsList.map((assignment) => ({
                ...assignment,
                driver: getters.drivers.find((driver) => driver.id === assignment.driverId),
                bus: getters.buses.find((bus) => bus.id === assignment.busId),
            }))
        },

        driversAvailable: (state, getters) => {
            const availableList = getters.drivers.filter(
                (driver) => !state.assignmentsList.some((assignment) => assignment.driverId === driver.id)
            )
            return availableList.map((driver) => ({
                id: driver.id,
                itemValue: driver.name,
            }))
        },

        busesAvailable: (state, getters) => {
            const availableList = getters.buses.filter(
                (bus) => !state.assignmentsList.some((assignment) => assignment.busId === bus.id)
            )
            return availableList.map((bus) => ({
                id: bus.id,
                itemValue: bus.registerNumber,
            }))
        },
    },
    mutations: {
        addAssignment(state, assignmentValue) {
            state.assignmentsList.push({
                id: new Date().getTime(),
                ...assignmentValue,
            })
        },

        deleteAssignment(state, dataToDelete) {
            state.assignmentsList = state.assignmentsList.filter(
                (assignment) =>
                    (!dataToDelete.assignmentId || assignment.id !== dataToDelete.assignmentId) &&
                    (!dataToDelete.driverId || assignment.driverId !== dataToDelete.driverId) &&
                    (!dataToDelete.busId || assignment.busId !== dataToDelete.busId)
            )
        },
    },

    actions: {
        addAssignment({ commit }, assignmentValue) {
            commit('addAssignment', assignmentValue)
        },
        deleteAssignment({ commit }, dataToDelete) {
            commit('deleteAssignment', dataToDelete)
        },
    },
}
