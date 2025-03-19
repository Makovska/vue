import { createStore } from 'vuex'
import products from './modules/products'
import delivery from './modules/delivery'
import gallery from './modules/gallery'

export default createStore({
  namespaced: true,
  modules: {
    products,
    delivery,
    gallery,
  },
})
