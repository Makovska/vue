import { createStore } from 'vuex'
import drivers from './modules/drivers'
import buses from './modules/buses'
import filters from './modules/filters'
import assignments from './modules/assignments'

export default createStore({
    modules: {
        drivers,
        buses,
        filters,
        assignments,
    },
})
