<template>
  <header class="header">
    <div class="container">
      <h2 class="header__title dancing-font" href="#">Granny's SHOP</h2>

      <div>
        <nav class="menu">
          <router-link :to="{ name: 'home' }" class="menu__item">Головна</router-link> |
          <router-link :to="{ name: 'products' }" class="menu__item">Товари</router-link> |
          <router-link :to="{ name: 'delivery' }" class="menu__item">Постачальники</router-link> |
          <router-link :to="{ name: 'contacts' }" class="menu__item">Контакти</router-link> |
          <router-link :to="{ name: 'rules' }" class="menu__item">Правила купівлі</router-link>
        </nav>

        <nav class="menu submenu">
          <router-link :to="{ name: 'selector' }" class="menu__item">Фільтр</router-link> |
          <router-link :to="{ name: 'editor' }" class="menu__item">Додати товар</router-link>
        </nav>
      </div>
    </div>
  </header>

  <main class="main">
    <div class="container">
      <slot> </slot>
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer__info">
        <slot name="footerLeft">
          <p>Рейтинг магазину: 54449</p>
        </slot>
        <slot name="footerRight">
          <p>Статус: <span class="red-text">відкрито</span></p>
        </slot>
      </div>
      <hr />
      <p class="footer__copyright">
        Completed in
        <sup>©</sup>
        <time>2025</time>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainLayout',
}
</script>

<style lang="scss" scoped>
.submenu {
  font-size: 14px;
  margin-top: 10px;
}
</style>
