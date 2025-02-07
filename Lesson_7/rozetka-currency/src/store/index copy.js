import { createStore } from 'vuex'
import { productsList, currencyList } from '../constants/data'

export default createStore({
    state() {
        return {
            productsList,
            currencyList,
            productsInCartList: [],
            currentCurrency: {
                title: 'UAH',
                symbol: '₴',
                exchangeRate: 1,
            },
        }
    },
    getters: {
        productsList({ productsList, currentCurrency }) {
            return productsList.map((product) => ({
                ...product,
                discount: product.discount / currentCurrency.exchangeRate,
                price: product.price / currentCurrency.exchangeRate,
                oldPrice: product.oldPrice / currentCurrency.exchangeRate,
            }))
        },
        currencyList({ currencyList }) {
            return currencyList
        },
        productsInCartList({ productsInCartList, currentCurrency }) {
            return productsInCartList.map((product) => ({
                ...product,
                discount: product.discount / currentCurrency.exchangeRate,
                price: product.price / currentCurrency.exchangeRate,
                oldPrice: product.oldPrice / currentCurrency.exchangeRate,
            }))
        },
        currentCurrency({ currentCurrency }) {
            return currentCurrency
        },
    },
    mutations: {
        addToCart(state, id) {
            let currentProduct = state.productsInCartList.find((pr) => pr.id === id)
            if (currentProduct) currentProduct.quantity += 1
            else {
                let newProductInCart = state.productsList.find((pr) => pr.id === id)
                state.productsInCartList.push({ ...newProductInCart, quantity: 1 })
            }
        },
        decrement({ productsInCartList }, id) {
            productsInCartList.find((product) => product.id === id).quantity--
        },
        increment({ productsInCartList }, id) {
            productsInCartList.find((product) => product.id === id).quantity++
        },
        delete(state, id) {
            state.productsInCartList = state.productsInCartList.filter((product) => product.id !== id)
        },
        chooseCurrency(state, currency) {
            state.currentCurrency = { ...currency }
        },
    },
    actions: {
        addToCart({ commit }, product) {
            commit('addToCart', product)
        },
        onDecrement({ commit }, id) {
            commit('decrement', id)
        },
        onIncrement({ commit }, id) {
            commit('increment', id)
        },
        onDelete({ commit }, id) {
            commit('delete', id)
        },
        chooseCurrency({ commit }, currency) {
            commit('chooseCurrency', currency)
        },
    },
})
