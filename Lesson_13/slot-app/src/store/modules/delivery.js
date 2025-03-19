export default {
  namespaced: true,
  state: {
    deliveryList: [
      {
        id: '1',
        title: 'Політ',
        img: '/images/delivery/fly.png',
        features: ['✈️', '🚗'],
      },
      {
        id: '2',
        title: 'Надійність',
        img: '/images/delivery/trustiness.png',
        features: ['🚗'],
      },
      {
        id: '3',
        title: 'Швидка',
        img: '/images/delivery/fast.png',
        features: ['✈️', '🚗'],
      },
      {
        id: '4',
        title: 'Економ',
        img: '/images/delivery/econom.png',
        features: ['🚗', '🛴'],
      },
    ],
  },
  getters: {
    deliveryList: ({ deliveryList }) => deliveryList,
  },
  mutations: {},
  actions: {},
}
