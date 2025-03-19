import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'products',
      component: () => import(/* webpackChunkName: "ProductsView" */ '../views/ProductsView.vue'),
      children: [
        {
          path: 'selector',
          name: 'selector',
          components: {
            selector: () =>
              import(/* webpackChunkName: "SelectorView" */ '../views/SelectorView.vue'),
          },
        },
        {
          path: 'editor',
          name: 'editor',
          components: {
            editor: () => import(/* webpackChunkName: "EditorView" */ '../views/EditorView.vue'),
          },
        },
      ],
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: () => import(/* webpackChunkName: "DeliveryView" */ '../views/DeliveryView.vue'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import(/* webpackChunkName: "ContactsView" */ '../views/ContactsView.vue'),
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import(/* webpackChunkName: "RulesView" */ '../views/RulesView.vue'),
    },
  ],
})

export default router
