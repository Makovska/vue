import { createStore } from 'vuex'
import auth from './modules/auth'
import lessons from './modules/lessons'
import teachers from './modules/teachers'

export default createStore({
    modules: {
        auth,
        lessons,
        teachers,
    },
})
