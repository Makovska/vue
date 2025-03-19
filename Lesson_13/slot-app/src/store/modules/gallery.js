export default {
  namespaced: true,
  state: {
    galleryList: [
      { id: '1', img: '/images/gallery/winter.png' },
      { id: '2', img: '/images/gallery/spring.png' },
      { id: '3', img: '/images/gallery/summer.png' },
      { id: '4', img: '/images/gallery/autumn.png' },
    ],
  },
  getters: {
    galleryList: ({ galleryList }) => galleryList,
  },
  mutations: {},
  actions: {},
}
