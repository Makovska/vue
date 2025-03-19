<template>
  <header class="header">
    <div class="container">
      <h2 class="header__title dancing-font" href="#">Granny's SHOP</h2>

      <nav class="menu">
        <router-link :to="{ name: 'home' }" class="menu__item">На головну</router-link> |
      </nav>
    </div>
  </header>

  <main class="main">
    <div class="container">
      <section>
        <slot> </slot>
      </section>

      <div class="gallery">
        <h3 class="red-text">Галерея</h3>
        <div class="gallery__wrapper">
          <div v-for="image in galleryList" :key="image.id" class="picture">
            <img :src="image.img" alt="Picture" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'InfoLayout',

  computed: {
    ...mapGetters('gallery', ['galleryList']),
  },
}
</script>

<style lang="scss" scoped>
.gallery {
  margin-top: 50px;
  &__wrapper {
    display: flex;
    gap: 1%;
    flex-wrap: wrap;
  }
  .picture {
    flex: 1 1 24%;
    padding-bottom: 15%;
  }
}
</style>
