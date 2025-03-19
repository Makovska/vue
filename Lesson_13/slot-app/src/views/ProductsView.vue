<template>
  <main-layout>

		<router-view name="selector" />

    <div class="cards">
      <h3>Оберіть продукти</h3>

      <div class="cards__wrapper">
        <card-item v-for="product in products" :key="product.id" :dataItem="product" />
      </div>
    </div>

		<router-view name="editor" />

  </main-layout>
</template>

<script>
import CardItem from '../components/CardItem.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'ProductsView',
  components: {
    CardItem,
  },
  computed: {
    ...mapGetters('products', ['products']),
  },
}
</script>
