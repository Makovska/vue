import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PaymentsView from '../views/PaymentsView.vue';
import ContactsView from '../views/ContactsView.vue';
import ShopView from '../views/ShopView.vue'
import ProductsListView from '../views/ProductsListView.vue'
import ProductCardEdit from '../views/ProductCardEdit.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/payments',
        name: 'payments',
        component: PaymentsView,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsView,
    },
    {
        path: '/shop',
        name: 'shop',
        component: ShopView,
    },
    {
        path: '/shop/:categoryId',
        name: 'productsList',
        component: ProductsListView,
    },
    {
        path: '/shop/edit-product/:productId?',
        name: 'editProduct',
        component: ProductCardEdit,
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
