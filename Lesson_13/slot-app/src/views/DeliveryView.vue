<template>
  <main-layout>
		
    <div class="cards">
      <h3>Оберіть постачальника</h3>

      <div class="cards__wrapper">
        <card-item v-for="delivery in deliveryList" :key="delivery.id" :dataItem="delivery">
          <p v-for="(feature, i) in delivery.features" :key="i">{{ feature }}</p>
        </card-item>
      </div>
    </div>

    <template #footerLeft>
      <p>Найбільш популярний: <span class="red-text">Економ</span></p>
    </template>

  </main-layout>
</template>

<script>
import CardItem from '../components/CardItem.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'DeliveryView',
  components: {
    CardItem,
  },
  computed: {
    ...mapGetters('delivery', ['deliveryList']),
  },
}
</script>
