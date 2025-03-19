<template>
  <div class="card">
    <div class="picture">
      <img :src="dataItem.img ?? defaultImage" :alt="dataItem.title" />
    </div>

    <h3>{{ dataItem.title }}</h3>

    <div class="card__info">
      <slot>
        <p>{{ dataItem.price }} грн.</p>
      </slot>
    </div>

    <button class="red-btn">Купити</button>
  </div>
</template>

<script>
export default {
  name: 'CardItem',

  data() {
    return {
      defaultImage: '/images/placeholder_image.webp',
    }
  },

  props: {
    dataItem: {
      type: Object,
      required: true,
    },
  },
}
</script>
