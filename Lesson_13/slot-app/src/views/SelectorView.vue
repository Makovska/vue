<template>
  <div class="selector">
    <h3>Категорія товарів</h3>
    <div>
      <input type="checkbox" id="prod1" />
      <label for="prod1">Ковбаси</label>
    </div>
    <div>
      <input type="checkbox" id="prod2" />
      <label for="prod2">Сири</label>
    </div>
		<div>
      <input type="checkbox" id="prod3" />
      <label for="prod3">Бакалія</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectorView',
}
</script>

<style lang="scss" scoped>
.selector {
  margin-bottom: 30px;
}
</style>
