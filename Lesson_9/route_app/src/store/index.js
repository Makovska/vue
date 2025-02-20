import { createStore } from 'vuex'
import { productsList } from '../constants/products'
import { categoriesList } from '../constants/categoriesList'

export default createStore({
    state: {
        categoriesList: [],
        productsList: [],
    },
    getters: {
        categories: (state) => state.categoriesList,
        productsInCategory: (state) => (categoryId) =>
            state.productsList.filter((product) => product.category == categoryId),
        getProductById: (state) => (productId) => state.productsList.find((product) => product.id == productId),
    },
    mutations: {
        loadCategoriesData(state, categoriesData) {
            state.categoriesList = categoriesData
        },
        loadProductsData(state, productsData) {
            state.productsList = productsData
        },
        deleteProduct(state, productId) {
            state.productsList = state.productsList.filter((product) => product.id != productId)
        },
        saveEditProduct(state, productData) {
            let productInd = state.productsList.findIndex((product) => product.id === productData.id)
            state.productsList[productInd] = { ...productData }
        },
        addNewProduct(state, productData) {
            state.productsList.push(productData)
        },
    },
    actions: {
        loadCategoriesData({ commit }) {
            commit('loadCategoriesData', categoriesList)
        },
        loadProductsData({ commit }) {
            commit('loadProductsData', productsList)
        },
        deleteProduct({ commit }, productId) {
            commit('deleteProduct', productId)
        },
        saveEditProduct({ commit }, productData) {
            commit('saveEditProduct', productData)
        },
        addNewProduct({ commit }, productData) {
            commit('addNewProduct', {
                ...productData,
                ...{ id: new Date().getTime() },
            })
        },
    },
})
