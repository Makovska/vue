export default {
  namespaced: true,
  state: {
    products: [
      {
        id: '1',
        title: 'Макарони',
        img: '/images/products/testoviny.webp',
        price: 48,
      },
      {
        id: '2',
        title: 'Ковбаса',
        img: '/images/products/sausage.jpg',
        price: 320,
      },
      {
        id: '3',
        title: 'Хліб',
        img: '/images/products/bread.webp',
        price: 25,
      },
      {
        id: '4',
        title: 'Сир',
        img: '/images/products/cheese.png',
        price: 298,
      },
    ],
  },
  getters: {
    products: ({ products }) => products,
  },
  mutations: {},
  actions: {},
}
