<template>
  <main-layout>
    <section>
      <h2>Вітаємо!</h2>
      <p>Сподіваємося, ви будете чемними і обов'язково щось купите.</p>
    </section>

    <template #footerRight>
      <div class="right-part">
        <span>Власник: Баба Галя</span>
        <img src="/images/baba.jpg" alt="Baba" width="50" />
      </div>
    </template>
  </main-layout>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style lang="scss" scoped>
.right-part {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
